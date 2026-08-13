
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
      style={{ backgroundColor: '#660000', margin: 0, minHeight: '100vh', padding: 0 }}
      dangerouslySetInnerHTML={{ __html: "\n<br>\n<br>\n<br>\n<table width=\"779\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\">\n  <tr>\n    <td><img src=\"images/titlepage/title-1.jpg\" width=\"130\" height=\"137\"></td>\n    <td><img src=\"images/titlepage/title-2.jpg\" width=\"128\" height=\"137\"></td>\n    <td><img src=\"images/titlepage/title-3.jpg\" width=\"129\" height=\"137\"></td>\n    <td><img src=\"images/titlepage/title-4.jpg\" width=\"127\" height=\"137\"></td>\n    <td><img src=\"images/titlepage/title-5.jpg\" width=\"129\" height=\"137\"></td>\n    <td><img src=\"images/titlepage/title-6.jpg\" width=\"136\" height=\"137\"></td>\n  </tr>\n  <tr>\n    <td><a href=\"home.htm\" onMouseOver=\"MM_swapImage('Image1','','images/titlepage/mugapu-1.jpg',1)\" onMouseOut=\"MM_swapImgRestore()\"><img src=\"images/titlepage/mugappu.jpg\" name=\"Image1\" width=\"130\" height=\"43\" border=\"0\" id=\"Image1\"></a></td>\n    <td><a href=\"writings.htm\" onMouseOver=\"MM_swapImage('Image2','','images/titlepage/ezhuthu-1.jpg',1)\" onMouseOut=\"MM_swapImgRestore()\"><img src=\"images/titlepage/ezhuthu.jpg\" name=\"Image2\" width=\"128\" height=\"43\" border=\"0\" id=\"Image2\"></a></td>\n    <td><a href=\"speech.htm\" onMouseOver=\"MM_swapImage('Image3','','images/titlepage/pechu-1.jpg',1)\" onMouseOut=\"MM_swapImgRestore()\"><img src=\"images/titlepage/pechu.jpg\" name=\"Image3\" width=\"129\" height=\"43\" border=\"0\" id=\"Image3\"></a></td>\n    <td><a href=\"photos.htm\" onMouseOver=\"MM_swapImage('Image4','','images/titlepage/pugaipadam-1.jpg',1)\" onMouseOut=\"MM_swapImgRestore()\"><img src=\"images/titlepage/pugaipadam.jpg\" name=\"Image4\" width=\"127\" height=\"43\" border=\"0\" id=\"Image4\"></a></td>\n    <td><a href=\"oaviyam.htm\" onMouseOver=\"MM_swapImage('Image5','','images/titlepage/ovium-1.jpg',1)\" onMouseOut=\"MM_swapImgRestore()\"><img src=\"images/titlepage/ovium.jpg\" name=\"Image5\" width=\"129\" height=\"43\" border=\"0\" id=\"Image5\"></a></td>\n    <td><a href=\"contact.htm\" onMouseOver=\"MM_swapImage('Image6','','images/titlepage/thodarpu-1.jpg',1)\" onMouseOut=\"MM_swapImgRestore()\"><img src=\"images/titlepage/thodarpu.jpg\" name=\"Image6\" width=\"136\" height=\"43\" border=\"0\" id=\"Image6\"></a></td>\n  </tr>\n  <tr>\n    <td><a href=\"nandrigal.htm\" target=\"_blank\"><img src=\"images/titlepage/content-1.jpg\" width=\"130\" height=\"278\" border=\"0\"></a></td>\n    <td><a href=\"nandrigal.htm\" target=\"_blank\"><img src=\"images/titlepage/content-2.jpg\" width=\"128\" height=\"278\" border=\"0\"></a></td>\n    <td><img src=\"images/titlepage/content-3.jpg\" width=\"129\" height=\"278\" border=\"0\" usemap=\"#Map\"></td>\n    <td><img src=\"images/titlepage/content-4.jpg\" width=\"127\" height=\"278\" border=\"0\" usemap=\"#Map2\"></td>\n    <td><img src=\"images/titlepage/content-5.jpg\" width=\"129\" height=\"278\" border=\"0\" usemap=\"#Map3\"></td>\n    <td><img src=\"images/titlepage/content-6.jpg\" width=\"136\" height=\"278\" border=\"0\" usemap=\"#Map4\"></td>\n  </tr>\n  <tr> \n    <td><img src=\"images/titlepage/bottom-1.jpg\" width=\"130\" height=\"24\"></td>\n    <td background=\"images/titlepage/bottom-2.jpg\"><div align='center'><a href='http://www.hit-counts.com'><img src='http://www.hit-counts.com/counter.php?t=MTE4NjA1Nw==' border='0' alt='Free Hit Counter'></a>\n    </div></td>\n    <td><a href=\"contact.htm\"><img src=\"images/titlepage/bottom-3.jpg\" width=\"129\" height=\"24\" border=\"0\"></a></td>\n    <td><a href=\"contact.htm\"><img src=\"images/titlepage/bottom-4.jpg\" width=\"127\" height=\"24\" border=\"0\"></a></td>\n    <td><img src=\"images/titlepage/bottom-5.jpg\" width=\"129\" height=\"24\"></td>\n    <td><img src=\"images/titlepage/bottom-6.jpg\" width=\"136\" height=\"24\"></td>\n  </tr>\n</table>\n<map name=\"Map\">\n  <area shape=\"rect\" coords=\"22,94,111,118\" href=\"annavin_kadithangal.htm\">\n  <area shape=\"rect\" coords=\"21,118,112,138\" href=\"annavin_katturaigal.htm\">\n  <area shape=\"rect\" coords=\"20,139,112,162\" href=\"annavin_sirukathaigal.htm\">\n  <area shape=\"rect\" coords=\"20,163,113,184\" href=\"annavin_navalgal.htm\">\n  <area shape=\"rect\" coords=\"19,185,113,207\" href=\"annavin_nadagangal.htm\">\n  <area shape=\"rect\" coords=\"19,207,113,229\" href=\"annavin_kavithaigal.htm\">\n</map>\n<map name=\"Map2\">\n  <area shape=\"rect\" coords=\"12,85,115,105\" href=\"speech_maedai.htm\">\n  <area shape=\"rect\" coords=\"14,108,112,128\" href=\"speech_sattamandram.htm\">\n  <area shape=\"rect\" coords=\"11,132,115,150\" href=\"speech_paralumandram.htm\">\n  <area shape=\"rect\" coords=\"9,151,119,172\" href=\"speech_pallikalluri.htm\">\n  <area shape=\"rect\" coords=\"12,199,115,218\" href=\"speech_paettigal.htm\">\n  <area shape=\"rect\" coords=\"14,174,113,198\" href=\"speech_mandram.htm\">\n  <area shape=\"rect\" coords=\"16,219,111,242\" href=\"speech_vaanoli.htm\">\n</map>\n<map name=\"Map3\">\n  <area shape=\"rect\" coords=\"20,97,110,115\" href=\"annavin_pugaipadangal_1909_19.htm\">\n  <area shape=\"rect\" coords=\"20,121,115,138\" href=\"annavin_pugaipadangal_1920_29.htm\">\n  <area shape=\"rect\" coords=\"20,143,115,160\" href=\"annavin_pugaipadangal_1930_39.htm\">\n  <area shape=\"rect\" coords=\"19,165,116,184\" href=\"annavin_pugaipadangal_1940_49.htm\">\n  <area shape=\"rect\" coords=\"19,190,116,207\" href=\"annavin_pugaipadangal_1950_59.htm\">\n  <area shape=\"rect\" coords=\"20,211,113,230\" href=\"annavin_pugaipadangal_1960_69.htm\">\n</map>\n<map name=\"Map4\">\n  <area shape=\"rect\" coords=\"16,92,116,115\" href=\"annavin_oviyam_kpadam.htm\">\n  <area shape=\"rect\" coords=\"16,118,118,139\" href=\"annavin_oviyam_attai.htm\">\n  <area shape=\"rect\" coords=\"18,140,115,164\" href=\"annavin_oviyam_kaiezhuthu.htm\">\n  <area shape=\"rect\" coords=\"19,164,113,185\" href=\"annavin_oviyam_vilambaram.htm\">\n  <area shape=\"rect\" coords=\"21,187,112,209\" href=\"annavin_oviyam_suvarotti.htm\">\n  <area shape=\"rect\" coords=\"10,209,126,234\" href=\"annavin_oviyam_pathirikai.htm\">\n</map>\n" }} 
    />
  );
}
