// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../geometry ../../../../Graphic ../../../../core/Accessor ../../../../core/Handles ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../geometry/geometryEngine ../../../../geometry/support/boundsUtils ../../../../geometry/support/coordsUtils ../../../../layers/GraphicsLayer ../../../../symbols/SimpleFillSymbol ../../../../symbols/SimpleLineSymbol ../../../../symbols/SimpleMarkerSymbol ./drawUtils ./GraphicMover".split(" "),
function(L,M,w,f,k,l,x,y,m,g,q,r,u,z,v,A,t,n,B){var C=function(){return function(d,c,a,b){this.graphic=d;this.targetGraphic=c;this.dx=a;this.dy=b;this.type="move-start"}}(),D=function(){return function(d,c,a,b){this.graphic=d;this.targetGraphic=c;this.dx=a;this.dy=b;this.type="move"}}(),E=function(){return function(d,c,a,b){this.graphic=d;this.targetGraphic=c;this.dx=a;this.dy=b;this.type="move-stop"}}(),F=function(){return function(d,c,a){this.graphic=d;this.targetGraphic=c;this.angle=a;this.type=
"rotate-start"}}(),G=function(){return function(d,c,a){this.graphic=d;this.targetGraphic=c;this.angle=a;this.type="rotate"}}(),H=function(){return function(d,c,a){this.graphic=d;this.targetGraphic=c;this.angle=a;this.type="rotate-stop"}}(),I=function(){return function(d,c,a,b){this.graphic=d;this.targetGraphic=c;this.xScale=a;this.yScale=b;this.type="scale-start"}}(),J=function(){return function(d,c,a,b){this.graphic=d;this.targetGraphic=c;this.xScale=a;this.yScale=b;this.type="scale"}}(),K=function(){return function(d,
c,a,b){this.graphic=d;this.targetGraphic=c;this.xScale=a;this.yScale=b;this.type="scale-stop"}}();return function(d){function c(a){a=d.call(this,a)||this;a._centerGraphicSymbol=new t({type:"simple-marker",style:"circle",size:4,color:[255,255,255,1],outline:{color:[0,12,207],width:1}});a._defaultFillSymbol=new v({type:"simple-fill",color:[12,207,255,.075],outline:{join:"round",color:[0,12,207],width:2}});a._dashedFillSymbol=new v({type:"simple-fill",color:[0,0,0,0],outline:{style:"dash",color:[150,
150,150,.5],width:2}});a._defaultGraphicSymbol=new t({type:"simple-marker",style:"square",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}});a._handles=new y;a._initialGeometry=null;a._initialBoxGeometry=null;a._initialRotateGeometry=null;a._mover=null;a._activeHandleGraphic=null;a._rotateGraphicOffset=20;a._rotateGraphicHoverSymbol=new t({type:"simple-marker",style:"circle",size:10,color:[255,255,255,1],outline:{color:[0,12,207],width:1}});a._rotateGraphicSymbol=new t({type:"simple-marker",
style:"circle",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}});a._rotationAngle=0;a._rotateLineGraphic=null;a._rotateLineGraphicSymbol=new A({color:[0,12,207],width:2});a._startBox=null;a._totalDx=0;a._totalDy=0;a._xScale=1;a._yScale=1;a.callbacks={onMoveStart:function(a){},onMove:function(a){},onMoveStop:function(a){},onScaleStart:function(a){},onScale:function(a){},onScaleStop:function(a){},onRotateStart:function(a){},onRotate:function(a){},onRotateStop:function(a){}};a.centerGraphic=
null;a.boxGraphic=null;a.enableMovement=!0;a.enableRotation=!0;a.enableScaling=!0;a.graphic=null;a.handleGraphics=[];a.layer=new z({listMode:"hide"});a.rotateGraphic=null;a.showCenterGraphic=!0;a.uniformScaling=!1;a.view=null;return a}w(c,d);c.prototype.initialize=function(){var a=this;this.graphic&&(this._setUpGraphics(),this._setUpMover(),this._updateGraphics());this._handles.add([m.whenOnce(this,"view.ready",function(){a.view&&a.view.map&&a.view.map.add(a.layer)}),m.pausable(this,"uniformScaling",
function(){a._activeHandleGraphic&&(a._scaleGraphic(a._activeHandleGraphic),a._updateGraphics())}),m.pausable(this,"view.scale",function(){a._updateRotateGraphic();a._updateRotateLineGraphic()}),m.pausable(this,"graphic",function(){a.refresh()})])};c.prototype.destroy=function(){this._reset();this._handles.removeAll();this._handles=null;this.view&&this.view.map&&this.view.map.remove(this.layer);this.layer.destroy();this._set("layer",null)};c.prototype.move=function(a,b){this._mover&&this.graphic&&
(a=n.move(this.graphic.geometry,a,b,this.view),this.graphic.set("geometry",a),this.refresh())};c.prototype.scale=function(a,b){this._mover&&this.graphic&&(a=n.scale(this.graphic.geometry,a,b,this.view),this.graphic.set("geometry",a),this.refresh())};c.prototype.rotate=function(a,b){this._mover&&this.graphic&&(b||(b=new k.Point(this.handleGraphics[1].geometry.x,this.handleGraphics[3].geometry.y,this.view.spatialReference)),a=q.rotate(this.graphic.geometry,a,b),this.graphic.set("geometry",a),this.refresh())};
c.prototype.refresh=function(){this._reset();this.graphic&&(this._setUpGraphics(),this._setUpMover(),this._updateGraphics())};c.prototype._reset=function(){this._initialRotateGeometry=this._initialBoxGeometry=this._initialGeometry=this._activeHandleGraphic=this._startBox=null;this._totalDy=this._totalDx=0;this._yScale=this._xScale=1;this._rotationAngle=0;this.layer&&this.layer.removeMany(this.handleGraphics);this.handleGraphics=[];this.layer&&this.layer.remove(this.boxGraphic);this.boxGraphic=null;
this.layer&&this.layer.remove(this.centerGraphic);this.centerGraphic=null;this.layer&&this.layer.remove(this.rotateGraphic);this.rotateGraphic=null;this.layer&&this.layer.remove(this._rotateLineGraphic);this._rotateLineGraphic=null;this._mover&&this._mover.destroy();this._mover=null};c.prototype._setUpMover=function(){var a=this,b=this.handleGraphics;this.enableMovement&&(b=b.concat(this.boxGraphic));this.enableRotation&&(b=b.concat(this.rotateGraphic));this._mover=new B({view:this.view,graphics:b,
callbacks:{onGraphicMoveStart:function(b){var e=b.graphic,c=a.graphic.geometry;a._activeHandleGraphic=e;a._initialGeometry=c;a._initialBoxGeometry=a.boxGraphic.geometry;a._initialRotateGeometry=a.rotateGraphic.geometry;if(e===a.boxGraphic)a.centerGraphic.visible=!1,a.rotateGraphic.visible=!1,a._rotateLineGraphic.visible=!1,a.handleGraphics.forEach(function(a){a.visible=!1}),c=b.dx,b=b.dy,a._totalDx=0,a._totalDy=0,a.callbacks.onMoveStart(new C(a.graphic,e,c,b));else{b=e.geometry;var h=r.getRingsOrPathsBounds(a.boxGraphic.geometry.rings),
c=h[0],d=h[1],g=h[2],h=h[3];a._startBox={width:Math.abs(g-c),height:Math.abs(h-d),centerX:(g+c)/2,centerY:(h+d)/2,startX:b.x,startY:b.y};a._xScale=1;a._yScale=1;e===a.rotateGraphic?(a.rotateGraphic.visible=!1,a._rotateLineGraphic.visible=!1,a.handleGraphics.forEach(function(a){a.visible=!1}),a.boxGraphic.symbol=a._dashedFillSymbol,a.rotateGraphic.symbol=a._rotateGraphicHoverSymbol,a.callbacks.onRotateStart(new F(a.graphic,e,0))):(a.rotateGraphic.visible=!1,a._rotateLineGraphic.visible=!1,a.handleGraphics.forEach(function(a){a.visible=
!1}),a.callbacks.onScaleStart(new I(a.graphic,e,1,1)))}},onGraphicMove:function(b){var c=b.graphic;if(c===a.boxGraphic){var e=b.dx,h=b.dy;a._totalDx+=e;a._totalDy+=h;b=n.move(a.graphic.geometry,e,h,a.view);a.graphic.set("geometry",b);a.callbacks.onMove(new D(a.graphic,c,e,h))}else c===a.rotateGraphic?(b=new k.Point(a._startBox.startX,a._startBox.startY,a.view.spatialReference),e=new k.Point(a._startBox.centerX,a._startBox.centerY,a.view.spatialReference),h=a._getAngle(e,b,c.geometry),b=q.rotate(a._initialGeometry,
h,e),a.graphic.set("geometry",b),b=q.rotate(a._initialBoxGeometry,h,e),a.boxGraphic.set("geometry",b),b=q.rotate(a._initialRotateGeometry,h,e),a.rotateGraphic.set("geometry",b),a._rotationAngle=h,a.callbacks.onRotate(new G(a.graphic,c,h))):(a._scaleGraphic(c),a._updateBoxGraphic(),a._updateCenterGraphic(),a.callbacks.onScale(new J(a.graphic,c,a._xScale,a._yScale)))},onGraphicMoveStop:function(b){b=b.graphic;b===a.boxGraphic?(a._updateGraphics(),a.showCenterGraphic&&(a.centerGraphic.visible=!0),a.enableRotation&&
(a._rotateLineGraphic.visible=!0,a.rotateGraphic.visible=!0),a.enableScaling&&a.handleGraphics.forEach(function(a){a.visible=!0}),a.callbacks.onMoveStop(new E(a.graphic,b,a._totalDx,a._totalDy))):b===a.rotateGraphic?(a._updateGraphics(),a._rotateLineGraphic.visible=!0,a.rotateGraphic.visible=!0,a.enableScaling&&a.handleGraphics.forEach(function(a){a.visible=!0}),a.rotateGraphic.symbol=a._rotateGraphicSymbol,a.boxGraphic.symbol=a._defaultFillSymbol,a.callbacks.onRotateStop(new H(a.graphic,b,a._rotationAngle))):
(a._updateGraphics(),a.enableRotation&&(a._rotateLineGraphic.visible=!0,a.rotateGraphic.visible=!0),a.handleGraphics.forEach(function(a){a.visible=!0}),a.callbacks.onScaleStop(new K(a.graphic,b,a._xScale,a._yScale)));a._startBox=null;a._activeHandleGraphic=null;a._initialGeometry=null;a._initialBoxGeometry=null;a._initialRotateGeometry=null;a._totalDx=0;a._totalDy=0;a._xScale=1;a._yScale=1},onGraphicPointerOver:function(b){var c=a.view.rotation,e=b.index;b.graphic===a.rotateGraphic&&(a.rotateGraphic.symbol=
a._rotateGraphicHoverSymbol);8>e&&(e=0<=c&&45>c?e%8:45<=c&&90>c?(e+1)%8:90<=c&&135>c?(e+2)%8:135<=c&&180>c?(e+3)%8:180<=c&&225>c?(e+4)%8:225<=c&&270>c?(e+5)%8:270<=c&&315>c?(e+6)%8:(e+7)%8);switch(e){case 0:b="nwse-resize";break;case 1:b="ns-resize";break;case 2:b="nesw-resize";break;case 3:b="ew-resize";break;case 4:b="nwse-resize";break;case 5:b="ns-resize";break;case 6:b="nesw-resize";break;case 7:b="ew-resize";break;case 8:b="pointer";break;case 9:b="pointer";break;default:b="default"}a.view.container.style.cursor=
b},onGraphicPointerOut:function(b){b.graphic===a.rotateGraphic&&(a.rotateGraphic.symbol=a._rotateGraphicSymbol);"default"!==a.view.container.style.cursor&&(a.view.container.style.cursor="default")}}})};c.prototype._getBoxCoordinates=function(a){var b=new k.Point(a.xmin,a.ymax,this.view.spatialReference);a=new k.Point(a.xmax,a.ymin,this.view.spatialReference);var c=(b.x+a.x)/2,d=(b.y+a.y)/2;return[[b.x,b.y],[c,b.y],[a.x,b.y],[a.x,d],[a.x,a.y],[c,a.y],[b.x,a.y],[b.x,d]]};c.prototype._scaleGraphic=function(a){var b=
this.handleGraphics.indexOf(a),c=this._startBox,d=c.centerX,g=c.centerY,h=c.startX,c=c.startY;1!==b&&5!==b||this._updateX(a,d);3!==b&&7!==b||this._updateY(a,g);a=a.geometry;var f=this.view.toScreen(a),k=f.x,f=f.y;if(this.uniformScaling)this._xScale=this._yScale=this._getScaleRatio(d,g,k,f,h,c),this.graphic.set("geometry",n.scale(this._initialGeometry,this._xScale,this._yScale,this.view));else{var f=this._startBox,k=f.width,f=f.height,l=a.x-h,p=c-a.y;if(1===b||5===b)l=0;else if(3===b||7===b)p=0;if(0!==
l||0!==p){a=d+l/2;var m=g+p/2;this._xScale=(k+(h>d?l:-1*l))/k||1;this._yScale=(f+(c<g?p:-1*p))/f||1;if(1===b||5===b)this._xScale=1;else if(3===b||7===b)this._yScale=1;b=n.scale(this._initialGeometry,this._xScale,this._yScale,this.view);this.graphic.set("geometry",n.move(b,(a-d)/this.view.state.resolution,(m-g)/this.view.state.resolution,this.view,!1))}}};c.prototype._setUpGraphics=function(){this.centerGraphic=new l(null,this._centerGraphicSymbol);this.showCenterGraphic&&this.layer.add(this.centerGraphic);
this.boxGraphic=new l(null,this._defaultFillSymbol);this.layer.add(this.boxGraphic);this._rotateLineGraphic=new l(null,this._rotateLineGraphicSymbol);this.enableRotation&&this.layer.add(this._rotateLineGraphic);this.rotateGraphic=new l(null,this._rotateGraphicSymbol);this.enableRotation&&this.layer.add(this.rotateGraphic);for(var a=0;8>a;a++)this.handleGraphics.push(new l(null,this._defaultGraphicSymbol));this.enableScaling&&this.layer.addMany(this.handleGraphics)};c.prototype._updateGraphics=function(){this._updateBoxGraphic();
this._updateHandleGraphics();this._updateCenterGraphic();this._updateRotateGraphic();this._updateRotateLineGraphic()};c.prototype._updateHandleGraphics=function(){var a=this;if(this.graphic&&this.graphic.geometry){var b=u.geometryToCoordinates(this.graphic.geometry),b=r.getRingsOrPathsBounds(b),c=this._getBoxCoordinates({xmin:b[0],ymin:b[1],xmax:b[2],ymax:b[3]});this.handleGraphics.forEach(function(b,e){e=c[e];a._updateXY(b,e[0],e[1])})}};c.prototype._updateBoxGraphic=function(){if(this.graphic&&
this.graphic.geometry){var a=u.geometryToCoordinates(this.graphic.geometry),a=r.getRingsOrPathsBounds(a),a=this._getBoxCoordinates({xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3]});this.boxGraphic.set("geometry",new k.Polygon({rings:a,spatialReference:this.view.spatialReference}))}};c.prototype._updateCenterGraphic=function(){if(this.graphic&&this.graphic.geometry){var a=u.geometryToCoordinates(this.graphic.geometry),a=r.getRingsOrPathsBounds(a);this.centerGraphic.set("geometry",new k.Point((a[2]+a[0])/
2,(a[3]+a[1])/2,this.view.spatialReference))}};c.prototype._updateRotateGraphic=function(){if(this.handleGraphics.length){var a=this.handleGraphics[1].geometry;this.rotateGraphic.set("geometry",new k.Point(a.x,a.y+this.view.state.resolution*this._rotateGraphicOffset,this.view.spatialReference))}};c.prototype._updateRotateLineGraphic=function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var a=this.handleGraphics[1].geometry,b=this.rotateGraphic.geometry;this._rotateLineGraphic.set("geometry",
new k.Polyline({paths:[[a.x,a.y],[b.x,b.y]],spatialReference:this.view.spatialReference}))}};c.prototype._updateXY=function(a,b,c){a.set("geometry",new k.Point(b,c,this.view.spatialReference))};c.prototype._updateX=function(a,b){a.set("geometry",new k.Point(b,a.geometry.y,this.view.spatialReference))};c.prototype._updateY=function(a,b){a.set("geometry",new k.Point(a.geometry.x,b,this.view.spatialReference))};c.prototype._getScaleRatio=function(a,b,c,d,f,g){return Math.sqrt((c-a)*(c-a)+(d-b)*(d-b))/
Math.sqrt((f-a)*(f-a)+(g-b)*(g-b))};c.prototype._getAngle=function(a,b,c){return 180*Math.atan2(a.y-c.y,a.x-c.x)/Math.PI-180*Math.atan2(a.y-b.y,a.x-b.x)/Math.PI};f([g.property()],c.prototype,"callbacks",void 0);f([g.property()],c.prototype,"centerGraphic",void 0);f([g.property()],c.prototype,"boxGraphic",void 0);f([g.property()],c.prototype,"enableMovement",void 0);f([g.property()],c.prototype,"enableRotation",void 0);f([g.property()],c.prototype,"enableScaling",void 0);f([g.property()],c.prototype,
"graphic",void 0);f([g.property()],c.prototype,"handleGraphics",void 0);f([g.property({readOnly:!0})],c.prototype,"layer",void 0);f([g.property()],c.prototype,"rotateGraphic",void 0);f([g.property()],c.prototype,"showCenterGraphic",void 0);f([g.property()],c.prototype,"uniformScaling",void 0);f([g.property()],c.prototype,"view",void 0);return c=f([g.subclass("esri.views.2d.draw.support.Box")],c)}(g.declared(x))});