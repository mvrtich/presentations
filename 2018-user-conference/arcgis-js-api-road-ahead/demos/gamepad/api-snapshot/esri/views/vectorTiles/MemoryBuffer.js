// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){return function(){function a(a){this._array=[];0>=a&&console.error("strideInBytes must be positive!");this._stride=a}Object.defineProperty(a.prototype,"array",{get:function(){return this._array},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"index",{get:function(){return 4*this._array.length/this._stride},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"itemSize",{get:function(){return this._stride},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"sizeInBytes",{get:function(){return 4*this._array.length},enumerable:!0,configurable:!0});a.prototype.reset=function(){this.array.length=0};a.prototype.toBuffer=function(){return(new Uint32Array(this._array)).buffer};a.i1616to32=function(a,b){return 65535&a|b<<16};a.i8888to32=function(a,b,c,d){return a&255|(b&255)<<8|(c&255)<<16|d<<24};a.i8816to32=function(a,b,c){return a&255|(b&255)<<8|c<<16};return a}()});