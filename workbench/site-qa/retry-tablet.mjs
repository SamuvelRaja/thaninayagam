const fs = await import('node:fs/promises');
const root = '/Users/samuvelraja/dev/Freelance/thaninayagam';
const routes = JSON.parse(await fs.readFile(root+'/workbench/site-qa/routes.json','utf8'));
const task = await taskSpace(20);
const page = task.page('p1');
const results = JSON.parse(await fs.readFile(root+'/workbench/site-qa/final.json','utf8')).results.filter(r=>r.width!==768);
const links = new Set();
for (const width of [768]) {
  await page.cdp('Emulation.setDeviceMetricsOverride',{width,height:width===1440?1000:844,deviceScaleFactor:1,mobile:width<640});
  for (let index=0;index<routes.length;index++) {
    const route=routes[index];
    try {
      await page.goto('http://localhost:3001'+route);
      const state = await page.evaluate(async () => {
        await document.fonts.ready;
        const images=[...document.images];
        images.forEach(image=>image.loading='eager');
        await Promise.all(images.map(image=>image.decode().catch(()=>{})));
        const visible=el=>el.checkVisibility({checkOpacity:true,checkVisibilityCSS:true})&&!el.closest('[hidden]')&&!(innerWidth<1024&&el.closest('.reader-sidebar:not(.open)'));
        const clipped=[];
        for(const el of document.querySelectorAll('h1,h2,h3,.living-button,.brand-name,.cr-body p,.treasure-caption')) {
          if(!visible(el))continue;
          const box=el.getBoundingClientRect();
          if(box.right<=0||box.left>=innerWidth)continue;
          const range=document.createRange();range.selectNodeContents(el);
          const rects=[...range.getClientRects()];
          if(rects.some(r=>r.width>1&&(r.left< -2||r.right>innerWidth+2)))clipped.push({tag:el.tagName,class:el.className,text:el.textContent.trim().slice(0,90),left:Math.round(Math.min(...rects.map(r=>r.left))),right:Math.round(Math.max(...rects.map(r=>r.right)))});
        }
        const anchors=[...document.querySelectorAll('a[href]')].map(el=>el.href).filter(href=>href.startsWith(location.origin));
        const missingAnchors=[...new Set(anchors.filter(href=>{const u=new URL(href);if(u.pathname!==location.pathname||!u.hash)return false;try{return !document.getElementById(decodeURIComponent(u.hash.slice(1)));}catch{return false;}}))];
        return {title:document.title,h1:document.querySelector('h1')?.textContent.trim(),lang:document.documentElement.lang,overflow:document.documentElement.scrollWidth>innerWidth,clipped,brokenImages:images.filter(image=>!image.naturalWidth).map(image=>image.getAttribute('src')),missingAnchors,anchors};
      });
      state.anchors.forEach(href=>links.add(href));delete state.anchors;
      results.push({width,route,...state});
      if(state.overflow||state.clipped.length||state.brokenImages.length||state.missingAnchors.length)console.log({width,route,overflow:state.overflow,clipped:state.clipped.slice(0,4),broken:state.brokenImages,anchors:state.missingAnchors});
    } catch(error) {results.push({width,route,error:String(error)});console.log({width,route,error:String(error)});}
    if((index+1)%15===0)console.log({width,checked:index+1,total:routes.length});
  }
}
const badLinks=[];
for(const href of links){const u=new URL(href);let path;try{path=decodeURIComponent(u.pathname);}catch{continue;}const exact=root+'/out'+path;const indexed=exact.replace(/\/$/,'')+'/index.html';try{await fs.access(path.endsWith('/')?indexed:exact);}catch{try{await fs.access(indexed);}catch{badLinks.push(href);}}}
await fs.writeFile(root+'/workbench/site-qa/final.json',JSON.stringify({results,badLinks},null,2));
console.log({completed:results.length,issues:results.filter(r=>r.error||r.overflow||r.clipped?.length||r.brokenImages?.length||r.missingAnchors?.length).length,badLinks});
