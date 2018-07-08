// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/glMatrix","../../support/projectionUtils"],function(z,k,e,p){Object.defineProperty(k,"__esModule",{value:!0});k.ReprojectionTypes={PER_VERTEX:"perVertex",NO_REPROJECTION:"noReprojection"};var c=new Float64Array(3E3),l=e.vec3d.create();k.reprojectPoints=function(f,m,a,d,k,v){var g=f.data,w=f.offsetIdx;f=f.strideIdx;e.vec3d.set(m,l);l[2]+=a;m=e.mat4d.create();p.computeLinearTransformation(d,l,m,v);a=e.mat4d.create();e.mat4d.inverse(m,a);var x=e.mat4d.create();
e.mat4d.identity(x);var n=[0,0,0],y=g.length/f;p.vectorToVector(l,d,n,k);for(d=0;d<y;d+=1E3){for(var q=Math.min(1E3,y-d),b=0;b<q;b++){var h=w+f*(d+b);c[3*b]=g[h]+n[0];c[3*b+1]=g[h+1]+n[1];c[3*b+2]=g[h+2]+n[2]}p.bufferToBuffer(c,k,0,c,v,0,q);for(b=0;b<q;b++){var h=c[3*b],r=c[3*b+1],t=c[3*b+2],u=w+f*(d+b);g[u]=a[0]*h+a[4]*r+a[8]*t+a[12];g[u+1]=a[1]*h+a[5]*r+a[9]*t+a[13];g[u+2]=a[2]*h+a[6]*r+a[10]*t+a[14]}}return{localTrafo:x,globalTrafo:m}}});