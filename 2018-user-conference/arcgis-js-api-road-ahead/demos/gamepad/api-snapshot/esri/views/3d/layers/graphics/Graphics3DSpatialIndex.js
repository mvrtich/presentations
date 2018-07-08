// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/PooledArray ../../../../core/accessorSupport/decorators ../../../../core/libs/rbush/PooledRBush".split(" "),function(d,p,k,h,l,m,g,n){d=function(d){function b(a){a=d.call(this)||this;a.index=new n.default(9,[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]);a.spatialReference=null;return a}k(b,d);b.prototype.destroy=function(){this.index.clear();
this.index=null};b.prototype.queryGraphicUIDsInExtent=function(a,b,c){b.equals(this.spatialReference)&&(e.minX=a[0],e.minY=a[1],e.maxX=a[2],e.maxY=a[3],this.index.search(e,function(a){c(a.graphic.uid)}))};b.prototype.add=function(a){!a.addedToSpatialIndex&&a.computeExtent(this.spatialReference)&&(this.index.insert(a),a.addedToSpatialIndex=!0)};b.prototype.addMany=function(a){f.clear();for(var b=0;b<a.length;b++){var c=a[b];!c.addedToSpatialIndex&&c.computeExtent(this.spatialReference)&&(f.push(c),
c.addedToSpatialIndex=!0)}this.index.load(f.data.slice(0,f.length))};b.prototype.remove=function(a){a.addedToSpatialIndex&&(a.addedToSpatialIndex=!1,this.index.remove(a))};b.prototype.removeMany=function(a){for(var b=0;b<a.length;b++)this.remove(a[b])};b.prototype.clear=function(){this.index.clear()};h([g.property({constructOnly:!0})],b.prototype,"spatialReference",void 0);return b=h([g.subclass("esri.views.3d.layers.graphics.Graphics3DSpatialIndex")],b)}(g.declared(l));var f=new m(50),e={minX:0,
minY:0,maxX:0,maxY:0};return d});