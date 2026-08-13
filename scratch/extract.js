const fs = require('fs');
function processFile(inFile, outFile) {
  let content = fs.readFileSync(inFile, 'utf8');
  // extract body content
  let bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : '';
  
  // get bgcolor from body
  let bgcolorMatch = content.match(/<body[^>]*bgcolor=["']?([^"'\s>]+)["']?[^>]*>/i);
  let bgcolor = bgcolorMatch ? bgcolorMatch[1] : '#660000';
  
  let jsComponent = `
'use client';

import { useEffect } from 'react';

export default function LegacyPage() {
  useEffect(() => {
    window.MM_preloadImages = function() {
      var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
        var i,j=d.MM_p.length,a=window.MM_preloadImages.arguments; for(i=0; i<a.length; i++)
        if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
    };

    window.MM_swapImgRestore = function() {
      var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
    };

    window.MM_findObj = function(n, d) {
      var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
        d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
      if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
      for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=window.MM_findObj(n,d.layers[i].document);
      if(!x && d.getElementById) x=d.getElementById(n); return x;
    };

    window.MM_swapImage = function() {
      var i,j=0,x,a=window.MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
       if ((x=window.MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
    };
    
    // trigger preload if needed (we'll just let hover fetch it for simplicity, or we could parse the body)
  }, []);

  return (
    <div 
      style={{ backgroundColor: '${bgcolor}', margin: 0, minHeight: '100vh', padding: 0 }}
      dangerouslySetInnerHTML={{ __html: ${JSON.stringify(bodyContent)} }} 
    />
  );
}
`;
  fs.writeFileSync(outFile, jsComponent);
}

processFile('scratch/home.html', 'app/home/page.jsx');
processFile('scratch/katturaigal.html', 'app/annavin_katturaigal/page.jsx');
