// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang dojox/gfx/_base ../../Color ../../request ../../core/LRUMap ../../core/promiseUtils ../../core/screenUtils".split(" "),function(n,d,k,l,p,q,r,t,e){function m(a){if(!a)return null;var b,c=a.constructor,f=e.pt2px(a.width);switch(a.type){case "simple-fill":case "picture-fill":case "simple-marker":b=m(a.outline);break;case "simple-line":a.style!==c.STYLE_NULL&&0!==f&&(b={color:a.color,style:u(a.style),width:f,cap:a.cap,join:a.join===c.JOIN_MITER?e.pt2px(a.miterLimit):
a.join});break;default:b=null}return b}Object.defineProperty(d,"__esModule",{value:!0});var v=n.toUrl("../../symbols/patterns/"),w={left:"start",center:"middle",right:"end",justify:"start"},x={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},h=new r(1E3);d.getSVGAlign=function(a){return a=(a=a.horizontalAlignment)&&w[a.toLowerCase()]||"middle"};d.getSVGBaseline=function(a){return(a=a.verticalAlignment)&&x[a.toLowerCase()]||"alphabetic"};d.getSVGBaselineShift=
function(a){return"bottom"===a.verticalAlignment?"super":null};d.getFill=function(a){var b=a.style,c=null;if(a){var f=a.constructor;switch(a.type){case "simple-marker":b!==f.STYLE_CROSS&&b!==f.STYLE_X&&(c=a.color);break;case "simple-fill":b===f.STYLE_SOLID?c=a.color:b!==f.STYLE_NULL&&(c=k.mixin({},l.defaultPattern,{src:v+b+".png",width:8,height:8}));break;case "picture-fill":c=k.mixin({},l.defaultPattern,{src:a.url,width:e.pt2px(a.width)*a.xscale,height:e.pt2px(a.height)*a.yscale,x:e.pt2px(a.xoffset),
y:e.pt2px(a.yoffset)});break;case "text":c=a.color}}return c};d.getPatternUrlWithColor=function(a,b){var c=a+"-"+b;return h.has(c)?t.resolve(h.get(c)):q(a,{responseType:"image",allowImageDataAccess:!0}).then(function(a){a=a.data;var d=a.naturalWidth,f=a.naturalHeight,e=document.createElement("canvas");e.width=d;e.height=f;var g=e.getContext("2d");g.fillStyle=b;g.fillRect(0,0,d,f);g.globalCompositeOperation="destination-in";g.drawImage(a,0,0);a=e.toDataURL();h.set(c,a);return a})};d.getStroke=m;var u=
function(){var a={};return function(b){if(a[b])return a[b];var c=b.replace(/-/g,"");return a[b]=c}}();d.defaultThematicColor=new p([128,128,128])});