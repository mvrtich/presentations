// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/libs/earcut/earcut ../../../../geometry/Point ../../../../geometry/Polygon ../../../../layers/graphics/dehydratedFeatures ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ../support/edgeUtils ../../lib/glMatrix ../../support/projectionUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Util ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(O,ra,ba,ca,da,ea,fa,ga,y,ha,ia,ja,P,ka,Q,la,ma,na,oa,pa){function qa(e,d,a,b,c,p,k,g,l,n,x,r,f,y){var u=a.length/3,B=0;x+=2*b.count;var h=b.index,G=b.count,q=l,v=x;m.set(f,t);var w=0<r?1:-1,h=3*h,z=q;f=3*z;for(var A=q+G,q=3*A,C=0;C<G;++C)y&&(t[0]=e[h+0],t[1]=e[h+1],t[2]=e[h+2],m.normalize(t)),c[f+0]=e[h+0],c[f+1]=e[h+1],c[f+2]=e[h+2],p[f+0]=d[h+0],p[f+1]=d[h+1],p[f+2]=d[h+2],k[f+0]=-w*t[0],k[f+1]=-w*t[1],k[f+2]=-w*t[2],g[z]=0,c[q+0]=e[h+0]+r*t[0],c[q+1]=e[h+1]+r*t[1],c[q+2]=e[h+2]+r*t[2],
p[q+0]=d[h+0],p[q+1]=d[h+1],p[q+2]=d[h+2],k[q+0]=w*t[0],k[q+1]=w*t[1],k[q+2]=w*t[2],g[A]=r,f+=3,q+=3,h+=3,z+=1,A+=1;h=0;f=3*v;q=3*(v+u);f=3*(v+u);q=3*v;e=R;d=S;0>r&&(e=S,d=R);for(C=0;C<u;++C)n[f+0]=a[h+e[0]],n[f+1]=a[h+e[1]],n[f+2]=a[h+e[2]],n[q+0]=a[h+d[0]]+G,n[q+1]=a[h+d[1]]+G,n[q+2]=a[h+d[2]]+G,f+=3,q+=3,h+=3;l+=2*b.count;x=x+2*u-(2*b.count+2*u);T(c,p,g,k,B,b.pathLengths[0],b.count,l,n,x,r);l+=4*b.pathLengths[0];x+=2*b.pathLengths[0];B+=b.pathLengths[0];for(a=1;a<b.pathLengths.length;++a)T(c,p,
g,k,B,b.pathLengths[a],b.count,l,n,x,r),l+=4*b.pathLengths[a],x+=2*b.pathLengths[a],B+=b.pathLengths[a]}function H(e,d,a,b,c,p,k){b[p]=b[k];k*=3;p*=3;e[p+0]=e[k+0];e[p+1]=e[k+1];e[p+2]=e[k+2];d[p+0]=d[k+0];d[p+1]=d[k+1];d[p+2]=d[k+2];a[p+0]=c[0];a[p+1]=c[1];a[p+2]=c[2]}function T(e,d,a,b,c,p,k,g,l,n,x){var r=c,f=c+1,t=c+k,u=c+k+1,B=g,h=g+1,y=g+2*p;g=g+2*p+1;0>x&&(r=c+k+1,u=c);n*=3;for(var q=0;q<p;++q){q===p-1&&(0<x?(f=c,u=c+k):(f=c,r=c+k));var v=e,w=r,z=f,A=t,C=F,w=3*w,z=3*z,A=3*A;m.set3(v[w++],v[w++],
v[w++],J);m.set3(v[z++],v[z++],v[z++],U);m.set3(v[A++],v[A++],v[A++],V);m.subtract(U,J,W);m.subtract(V,J,X);m.cross(X,W,C);m.normalize(C,C);H(e,d,b,a,F,B,r);H(e,d,b,a,F,h,f);H(e,d,b,a,F,y,t);H(e,d,b,a,F,g,u);l[n++]=B;l[n++]=y;l[n++]=g;l[n++]=B;l[n++]=g;l[n++]=h;r++;f++;t++;u++;B+=2;h+=2;y+=2;g+=2}}var D=oa.VertexAttrConstants,m=P.vec3d,Y=P.mat4d,I=m.create(),t=m.create(),R=[0,2,1],S=[0,1,2],L=new da,Z={verticalDistanceToGround:0,terrainElevation:0};O=function(e){function d(){var a=null!==e&&e.apply(this,
arguments)||this;a._edgeStageObjects=new Set;return a}ba(d,e);d.prototype._prepareResources=function(){if(!this._isPropertyDriven("size")){var a=ia.validateSymbolLayerSize(this._getSymbolSize());if(a){this._logWarning(a);this.reject();return}}var a=this._getStageIdHint(),b=this._getMaterialOpacityAndColor(),c=m.create(b),b=b[3],c={diffuse:c,ambient:c,opacity:b,transparent:1>b||this._isPropertyDriven("opacity"),vertexColors:!0};this._material=new pa(c,a+"_3dlinemat");this._context.stage.add(Q.ModelContentType.MATERIAL,
this._material);this.resolve()};d.prototype.destroy=function(){e.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._material&&this._context.stage.remove(Q.ModelContentType.MATERIAL,this._material.id)};d.prototype.createGraphics3DGraphic=function(a){var b=a.renderingInfo;a=a.graphic;var c=a.geometry;if("polygon"!==c.type&&"extent"!==c.type)return this._logWarning("unsupported geometry type for extrude symbol: "+c.type),null;if(!this._validateGeometry(c))return null;var c="polygon"===
c.type||"extent"===c.type?"rings":"paths",p="graphic"+a.uid,d=this._getVertexOpacityAndColor(b,Float32Array,255),e=this.getGraphicElevationContext(a);return this._createAs3DShape(a,c,b,d,e,p,a.uid)};d.prototype.layerPropertyChanged=function(a,b,c){if("opacity"===a){b=this._getMaterialOpacity();c=1>b||this._isPropertyDriven("opacity");this._material.setParameterValues({opacity:b,transparent:c});if(0<this._edgeStageObjects.size){var p=this._context.stage.view.getEdgeView(),d=this._getLayerOpacity();
this._edgeStageObjects.forEach(function(a){p.updateAllComponentOpacities(a,[d])})}return!0}if("elevationInfo"===a){this._updateElevationContext();for(var e in b){var l=b[e];if(a=c(l))l=this.getGraphicElevationContext(l.graphic),a.needsElevationUpdates=y.needsElevationUpdates3D(l.mode),a.elevationContext.set(l)}return!0}return!1};d.prototype._getExtrusionSize=function(a){a=a.size&&this._isPropertyDriven("size")?y.getSingleSizeDriver(a.size,2):this._getSymbolSize();return a/=this._context.renderCoordsHelper.unitInMeters};
d.prototype._getSymbolSize=function(){return this.symbol.size||1};d.prototype._createAs3DShape=function(a,b,c,p,d,e,l){var k=this,g=a.geometry;"extent"===g.type&&(g=ea.fromExtent(g));a=g[b];var r=[],f=[],t=[],u=m.create(),B=Array(6),h=this._context.renderSpatialReference===ka.SphericalECEFSpatialReference,G=this._getExtrusionSize(c),q=m.create();h||this._context.renderCoordsHelper.worldUpAtPosition(null,q);c=y.getGeometryVertexData3D(a,fa.hasZ(g),g.spatialReference,this._context.renderSpatialReference,
this._context.elevationProvider,this._context.renderCoordsHelper,d);this._logGeometryCreationWarnings(c,a,b,"ExtrudeSymbol3DLayer");if(0<a.length){var v=c.geometryData.polygons,w=c.eleVertexData,z=c.vertexData;b=z.length/3;var A=new Float64Array(18*b),C=new Float64Array(18*b),F=new Float64Array(18*b),H=new Float64Array(6*b),M=0;b=function(a){var b=v[a],c=b.count,d=b.index;if(N._context.clippingExtent&&(y.computeBoundingBox(w,d,c,B),y.boundingBoxClipped(B,N._context.clippingExtent)))return"continue";
var k=new Float64Array(w.buffer,3*d*A.BYTES_PER_ELEMENT,3*c),g=b.holeIndices.map(function(a){return a-d}),k=ca(k,g,3);if(0<k.length){y.chooseOrigin(z,d,c,u);var g=new Uint32Array(6*c+2*k.length),l=6*c,m=new Float64Array(A.buffer,3*M*A.BYTES_PER_ELEMENT,3*l),n=new Float64Array(C.buffer,3*M*C.BYTES_PER_ELEMENT,3*l),x=new Float64Array(F.buffer,3*M*F.BYTES_PER_ELEMENT,3*l),aa=new Float64Array(H.buffer,1*M*H.BYTES_PER_ELEMENT,1*l);qa(z,w,k,b,m,x,n,aa,0,g,0,G,q,h);y.subtractCoordinates(m,0,l,u);M+=6*c;
b=N._createExtrudeGeometry(g,{positions:m,elevation:x,normals:n,heights:aa},p);a=new la(b,e+"path"+a);a.singleUse=!0;r.push(a);f.push([N._material]);a=Y.identity();Y.translate(a,u,a);t.push(a)}};var N=this;for(a=0;a<v.length;++a)b(a);if(0<r.length){l=new na({geometries:r,materials:f,transformations:t,castShadow:!0,metadata:{layerUid:this._context.layer.uid,graphicId:l},idHint:e});var J=function(a){var b=k._context.stage.view.getEdgeView();if(b){b.removeObject(a);k._edgeStageObjects.delete(a);var c=
ja.createMaterial(b,k.symbol,k._getLayerOpacity());c&&(k._edgeStageObjects.add(a),b.addObject(a,[c]))}};J(l);l=new ga(this,l,r,null,null,function(a,b,c,d){var p=d.setAltitude;L.spatialReference=c.spatialReference;for(var e=a.getGeometryRecords(),k=e.length,g="absolute-height"!==b.mode,l=0,h=0;h<k;h++){var f=e[h].geometry,q=e[h].transformation,m=f.getData();E[0]=q[12];E[1]=q[13];E[2]=q[14];f.invalidateBoundingInfo();for(var m=m.getVertexAttr(),f=m[D.POSITION].data,q=m[D.SIZE].data,m=m.mapPos.data,
t=f.length/3,n=0,r=0,v=!1,w=0,x=0;x<t;x++){L.x=m[r];L.y=m[r+1];L.z=m[r+2];K[0]=f[n];K[1]=f[n+1];K[2]=f[n+2];var u=y.computeElevation(c,L,b,d,g?Z:null);g&&(w+=Z.terrainElevation);I[0]=f[n]+E[0];I[1]=f[n+1]+E[1];I[2]=f[n+2]+E[2];p(u+q[n/3],I);f[n]=I[0]-E[0];f[n+1]=I[1]-E[1];f[n+2]=I[2]-E[2];u=.01/d.unitInMeters;if(Math.abs(K[0]-f[n])>u||Math.abs(K[1]-f[n+1])>u||Math.abs(K[2]-f[n+2])>u)v=!0;r+=3;n+=3}v&&a.geometryVertexAttrsUpdated(h);l+=w/t}b=l/k;J(a);return b},d);l.alignedTerrainElevation=c.terrainElevation;
l.needsElevationUpdates=y.needsElevationUpdates3D(d.mode);return l}}return null};d.prototype._createExtrudeGeometry=function(a,b,c){for(var d=a.length,e=new Uint32Array(d),g=0;g<d;g++)e[g]=0;d={};g={};d[D.POSITION]=a;d[D.NORMAL]=a;d[D.COLOR]=e;g[D.POSITION]={size:3,data:b.positions};g[D.NORMAL]={size:3,data:b.normals};g[D.COLOR]={size:4,data:c};g[D.SIZE]={size:1,data:b.heights};b.elevation&&(g.mapPos={size:3,data:b.elevation},d.mapPos=a);return new ma(g,d)};return d}(ha);var F=m.create(),J=m.create(),
U=m.create(),V=m.create(),W=m.create(),X=m.create(),K=m.create(),E=m.create();return O});