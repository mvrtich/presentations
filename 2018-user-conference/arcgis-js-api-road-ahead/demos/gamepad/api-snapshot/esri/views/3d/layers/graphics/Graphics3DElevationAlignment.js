// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/PooledArray ../../../../core/throttle ../../../../core/accessorSupport/decorators ../../../../geometry/support/aaBoundingRect ../../support/debugFlags".split(" "),function(x,y,r,n,t,p,u,f,d,v){var w=function(){function c(){this.extents=new p(32,d.create);this.tempExtent=d.create()}Object.defineProperty(c.prototype,"count",{get:function(){return this.extents.length},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"area",{get:function(){var a=0;this.extents.forEach(function(b){a+=d.area(b)});return a},enumerable:!0,configurable:!0});c.prototype.clear=function(){this.extents.clear()};c.prototype.add=function(a){this.contains(a)||(this.removeContained(a),d.set(this.extents.pushNew(),a))};c.prototype.forEach=function(a){this.extents.forEach(function(b){return a(b)})};c.prototype.mergeAll=function(){for(;1<this.extents.length;){var a=this.extents.length-
1;d.expand(this.extents.data[a-1],this.extents.data[a]);this.extents.pop()}};c.prototype.mergeTight=function(){for(var a=this.extents,b=this.tempExtent,h=!1;!h;)for(var h=!0,c=0;c<a.length;++c){for(var q=c,e=a.data[q],g=d.area(e),k=!1,m=a.length-1;m>q;--m){var l=a.data[m],f=d.area(l);d.expand(e,l,b);l=g+f;.05>(d.area(b)-l)/l&&(d.set(e,b),g=d.area(e),a.swap(m,a.length-1),a.pop(),k=!0)}if(k){h=!1;break}}};c.prototype.toArray=function(){return this.extents.toArray()};c.prototype.contains=function(a){return this.extents.some(function(b){return d.contains(b,
a)})};c.prototype.removeContained=function(a){for(var b=this.extents.length-1;0<=b;--b)d.contains(a,this.extents.data[b])&&(this.extents.swap(b,this.extents.length-1),this.extents.pop())};return c}();return function(c){function a(){var b=c.call(this)||this;b.dirtyExtents=new w;b.globalDirty=!1;b.elevationDirtyGraphicsQueue=new p;b.elevationDirtyGraphicsSet={};b.elevationUpdateEventHandle=null;b.eventHandles=[];b.updateElevation=!1;b.layerView=null;b.graphicsCore=null;b.markDirtyThrottled=u.throttle(b.markDirty,
100,b);return b}r(a,c);Object.defineProperty(a.prototype,"updating",{get:function(){return 0<this.elevationDirtyGraphicsQueue.length||this.markDirtyThrottled.hasPendingUpdates()},enumerable:!0,configurable:!0});a.prototype.setup=function(b,a,c,d){var h=this;this.layerView=b;this.graphicsCore=c;this.elevationProvider=d;this.queryGraphicUIDsInExtent=a;this.elevationUpdateEventHandle=d.on("elevation-change",function(b){return h.elevationUpdateHandler(b)});this.eventHandles.push(this.layerView.watch("suspended",
function(){return h.suspendedChange()}))};a.prototype.destroy=function(){this.elevationDirtyGraphicsSet=this.elevationDirtyGraphicsQueue=null;this.elevationUpdateEventHandle&&(this.elevationUpdateEventHandle.remove(),this.elevationUpdateEventHandle=null);this.eventHandles.forEach(function(b){return b.remove()});this.eventHandles=null;this.markDirtyThrottled.remove();this.queryGraphicUIDsInExtent=this.graphicsCore=this.layerView=null};a.prototype.clear=function(){this.elevationDirtyGraphicsSet={};
this.elevationDirtyGraphicsQueue.clear();this.notifyChange("updating")};a.prototype.suspendedChange=function(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&this.markAllGraphicsElevationDirty()};a.prototype.needsIdleUpdate=function(){return this.elevationProvider&&0<this.elevationDirtyGraphicsQueue.length};a.prototype.idleUpdate=function(b){if(!b.done()&&0!==this.elevationDirtyGraphicsQueue.length){for(var a=this.layerView.view,c=this.graphicsCore.stageLayer.id,
d=this.graphicsCore.labelsEnabled?a.labeler.labelStageLayerId:null,e=0;0<this.elevationDirtyGraphicsQueue.length;){var g=this.elevationDirtyGraphicsQueue.pop(),k=this.graphicsCore.graphics[g];k&&k.alignWithElevation(this.elevationProvider,a.renderCoordsHelper);delete this.elevationDirtyGraphicsSet[g];e++;if(100<=e&&(a._stage.processDirtyLayer(c),null!=d&&a._stage.processDirtyLayer(d),e=0,b.done()))break}0<e&&(a._stage.processDirtyLayer(c),null!=d&&a._stage.processDirtyLayer(d));a.deconflictor.setDirty();
a.labeler.setDirty();this.notifyChange("updating")}};a.prototype.markAllGraphicsElevationDirty=function(){for(var b in this.graphicsCore.graphics)this.markGraphicElevationDirty(this.graphicsCore.graphics[b].graphic.uid);this.notifyChange("updating")};a.prototype.markGraphicElevationDirty=function(b){this.elevationDirtyGraphicsSet[b]||(this.elevationDirtyGraphicsSet[b]=!0,this.elevationDirtyGraphicsQueue.push(b),1===this.elevationDirtyGraphicsQueue.length&&this.notifyChange("updating"))};a.prototype.elevationUpdateHandler=
function(b){var a=b.extent;this.layerView.suspended?this.updateElevation||(b=this.graphicsCore.computedExtent)&&a[2]>b.xmin&&a[0]<b.xmax&&a[3]>b.ymin&&a[1]<b.ymax&&(this.updateElevation=!0):(-Infinity===a[0]?this.globalDirty=!0:this.dirtyExtents.add(a),this.spatialReference=b.spatialReference,this.markDirtyThrottled(),this.notifyChange("updating"))};a.prototype.markDirty=function(){var a=this;if(this.globalDirty)this.markAllGraphicsElevationDirty();else{if(v.ELEVATION_UPDATE_PROFILE_EXTENT_MERGING){var c=
this.dirtyExtents,d=c.count,f=c.area,e=performance.now();c.mergeTight();var e=performance.now()-e,g=c.count,c=c.area;1<e&&console.log({deltaTime:e,beforeCount:d,beforeArea:f,afterCount:g,afterArea:c})}else this.dirtyExtents.mergeTight();this.dirtyExtents.forEach(function(b){a.queryGraphicUIDsInExtent(b,a.spatialReference,function(b){var c=a.graphicsCore.graphics[b];c&&c.needsElevationUpdates()&&a.markGraphicElevationDirty(b)})})}this.dirtyExtents.clear();this.globalDirty=!1;this.notifyChange("updating")};
n([f.property({readOnly:!0})],a.prototype,"updating",null);return a=n([f.subclass("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],a)}(f.declared(t))});