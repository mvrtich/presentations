// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/when dojo/_base/lang dojo/errors/CancelError ../../../../Color ../../../../core/Error ../../../../core/screenUtils ../../../../core/sniff ../../../../core/urlUtils ../../../../symbols/support/symbolUtils ./ElevationAligners ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ./SignedDistanceFunctions ../support/FastSymbolUpdates ../../lib/glMatrix ../../support/projectionUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/Texture ../../webgl-engine/materials/HUDMaterial".split(" "),
function(y,ea,H,I,z,J,K,A,m,L,M,N,O,P,Q,l,u,R,n,r,v,S,t,T,B,U,V,C){function w(h){return"cross"===h||"x"===h}function W(h){var d;"primitive:"===h.substring(0,10)&&(h=h.substring(10));switch(h){case p.PRIM_CIRCLE:d=n.computeSignedDistancefieldCicle(128,64);break;case p.PRIM_SQUARE:d=n.computeSignedDistancefieldSquare(128,64,!1);break;case p.PRIM_KITE:d=n.computeSignedDistancefieldSquare(128,64,!0);break;case p.PRIM_CROSS:d=n.computeSignedDistancefieldCrossAndX(128,64,!1);break;case p.PRIM_X:d=n.computeSignedDistancefieldCrossAndX(128,
64,!0)}return new V(d,"sdf_"+h,{mipmap:!1,wrapClamp:!0,width:128,height:128,components:4})}var X=v.vec3d;y=v.vec4d;var D=v.mat4d.identity(),E=[0,0,1],Y=[0,0,0,0],F=[0,0,0],Z=[1,1,1],G="center bottom top left right bottom-left bottom-right top-left top-right".split(" "),aa=[.25,.25,.75,.75],p={PRIM_CIRCLE:"circle",PRIM_SQUARE:"square",PRIM_CROSS:"cross",PRIM_X:"x",PRIM_KITE:"kite"},ba=[64,64];u=function(h){function d(){var a=null!==h&&h.apply(this,arguments)||this;a._elevationOptions={supportsOffsetAdjustment:!0,
supportsOnTheGround:!0};return a}H(d,h);d.prototype._prepareResources=function(){var a=this.symbol,b=Math.round(null!=a.size?m.pt2px(a.size):16);this._size=null;this._symbolTextureRatio=1;this._primitive=null;var e=this._getStageIdHint();if(!this._isPropertyDriven("size")){var c=R.validateSymbolLayerSize(b);if(c){this._logWarning(c);this.reject();return}}this._isPropertyDriven("size")&&64>b&&(b=64);var g=a.resource||{primitive:"circle",href:void 0},c={anchorPos:this._getAnchorPos(a)},f=this.symbolContainer;
if(this._hasVisibleVerticalOffset(f)){var f=f.verticalOffset,d=f.minWorldLength,q=f.maxWorldLength;c.verticalOffset={screenLength:m.pt2px(f.screenLength),minWorldLength:d||0,maxWorldLength:null!=q?q:Infinity}}this._context.screenSizePerspectiveEnabled&&(c.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);g.href?(this._outlineSize=this._getOutlineSize(a,null),c.color=this._getFillColor(a,null),c.outlineColor=this._getOutlineColor(a),c.outlineSize=this._outlineSize,
c.textureIsSignedDistanceField=!1,this._prepareImageResources(b,c,e)):(g=g.primitive||"circle",f="primitive:"+g,this._primitive=g,this._outlineSize=this._getOutlineSize(a,g),c.color=this._getFillColor(a,g),c.outlineColor=this._getOutlineColor(a),c.outlineSize=this._outlineSize,w(g)&&0===c.outlineSize?this.reject():(this.texture=this._context.sharedResources.textures.acquire(f,W),this._textureURI=f,c.textureIsSignedDistanceField=!0,c.distanceFieldBoundingBox=aa,c.textureId=this.texture.id,this._size=
[b,b],this._symbolTextureRatio=2,this._createMaterialsAndAddToStage(c,this._context.stage,e),this.resolve()))};d.prototype._getOutlineSize=function(a,b){var e=0,e=a.outline&&null!=a.outline.size?m.pt2px(a.outline.size):w(b)?1.5:0;return Math.max(e,0)};d.prototype._getOutlineColor=function(a){var b=this._getLayerOpacity();if(a.outline&&null!=a.outline.color){var e=K.toUnitRGB(a.outline.color);return[e[0],e[1],e[2],a.outline.color.a*b]}return[0,0,0,b]};d.prototype._getFillColor=function(a,b){return w(b)?
Y:this._getMaterialOpacityAndColor()};d.prototype._getAnchorPos=function(a){return-1<G.indexOf(a.anchor)?a.anchor:"center"};d.prototype._prepareImageResources=function(a,b,e){var c=this,g=N.getIconHref(this.symbolContainer,this.symbol);!L("esri-canvas-svg-support")&&M.isSVG(g)?(this._logWarning("IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)"),this.reject(new A("SVG Not Supported","IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)"))):(I(this._context.sharedResources.textures.acquire(g,
null,a),function(f){if(!c.isRejected()){var g=f.params,d=g.width/g.height;c._size=a?1<d?[a,Math.round(a/d)]:[Math.round(a*d),a]:[g.width,g.height];b.textureId=f.id;c._createMaterialsAndAddToStage(b,c._context.stage,e);c.resolve()}},function(a){a instanceof J?c.reject():(a="IconSymbol3DLayer failed to load (Request for icon resource failed: "+g+")",c._logWarning(a),c.reject(new A("Request Failed",a)))}),this._textureURI=g)};d.prototype._createMaterialsAndAddToStage=function(a,b,e){this._fastUpdates=
r.initFastSymbolUpdatesState(this._context.renderer,this._supportsShaderVisualVariables(),this._fastVisualVariableConvertOptions());this._fastUpdates.enabled&&z.mixin(a,this._fastUpdates.materialParameters);var c=z.mixin({},a);c.verticalOffset=null;c.screenSizePerspective=null;c.occlusionTest=!1;c.shaderPolygonOffset=0;this._drapedMaterial=new C(c,e+"_iconDraped");b.add(t.ModelContentType.MATERIAL,this._drapedMaterial);a.occlusionTest=!0;this._material=new C(a,e+"_icon");b.add(t.ModelContentType.MATERIAL,
this._material)};d.prototype.destroy=function(){h.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._material&&(this._context.stage.remove(t.ModelContentType.MATERIAL,this._material.id),this._material=null);this._drapedMaterial&&(this._context.stage.remove(t.ModelContentType.MATERIAL,this._drapedMaterial.id),this._drapedMaterial=null);this._textureURI&&(this._context.sharedResources.textures.release(this._textureURI),this._textureURI=null)};d.prototype._getScaleFactor=function(a){if(this._isPropertyDriven("size")&&
a.size){for(var b=0;3>b;b++){var e=a.size[b];e&&"symbolValue"!==e&&"proportional"!==e&&(a.size[b]=m.pt2px(e))}b=this._size[0]>this._size[1]?this._size[0]:this._size[1];if("symbolValue"!==a.size[0]){if(isFinite(+a.size[0]))return+a.size[0]/b;if(isFinite(+a.size[2]))return+a.size[2]/b}}return 1};d.prototype.createGraphics3DGraphic=function(a){var b=a.renderingInfo;a=a.graphic;if(!this._validateGeometry(a.geometry))return null;var e=l.placePointOnGeometry(a.geometry);if(!e)return this._logWarning("unsupported geometry type for icon symbol: "+
a.geometry.type),null;var c="graphic"+a.uid,g=this._getVertexOpacityAndColor(b),f=1;this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size||(f=this._getScaleFactor(b));f*=this._symbolTextureRatio;b=[this._size[0]*f,this._size[1]*f];f=this.getGraphicElevationContext(a);return"on-the-ground"===f.mode?this._createAsOverlay(a,e,g,b,f,c,a.uid):this._createAs3DShape(a,e,g,b,f,c,a.uid)};d.prototype.layerPropertyChanged=function(a,b,e){if("opacity"===a)return b=this._getFillColor(this.symbol,this._primitive),
this._drapedMaterial.setParameterValues({color:b}),this._material.setParameterValues({color:b}),b=this._getOutlineColor(this.symbol),this._drapedMaterial.setParameterValues({outlineColor:b}),this._material.setParameterValues({outlineColor:b}),!0;if("elevationInfo"===a){a=this._elevationContext.mode;this._updateElevationContext();var c=this._elevationContext.mode;if("on-the-ground"===a&&"on-the-ground"===c)return!0;if(a!==c&&("on-the-ground"===a||"on-the-ground"===c))return!1;a=l.needsElevationUpdates2D(c)||
"absolute-height"===c;for(var g in b){var f=b[g];(c=e(f))&&"object3d"===c.type&&(f=this.getGraphicElevationContext(f.graphic),c.needsElevationUpdates=a,c.elevationContext.set(f))}return!0}return!1};d.prototype.applyRendererDiff=function(a,b,e,c){for(var g in a.diff)switch(g){case "visualVariables":if(r.updateFastSymbolUpdatesState(this._fastUpdates,b,this._fastVisualVariableConvertOptions()))this._material.setParameterValues(this._fastUpdates.materialParameters),this._drapedMaterial.setParameterValues(this._fastUpdates.materialParameters);
else return!1;break;default:return!1}return!0};d.prototype.setDrawOrder=function(a,b,e){this.updateSymbolLayerOrder(a,b);this._drapedMaterial&&(this._drapedMaterial.renderPriority=a,e.add(this._drapedMaterial.id))};d.prototype._defaultElevationInfoNoZ=function(){return ca};d.prototype._createAs3DShape=function(a,b,e,c,g,f,d){var q=this,h=this._getFastUpdateAttrValues(a);a=h?function(a){return r.evaluateModelTransform(q._fastUpdates.materialParameters,h,a)}:null;e=B.createPointGeometry(E,null,e,c,
da,null,h);e=[new T(e,f)];f=l.createStageObjectForPoint.call(this,b,e,[[this._material]],null,null,g,f,this._context.layer.uid,d,!0,a);if(null===f)return null;var k=new Q(this,f.object,e,null,null,O.perObjectElevationAligner,g);k.alignedTerrainElevation=f.terrainElevation;k.needsElevationUpdates=l.needsElevationUpdates2D(g.mode)||"absolute-height"===g.mode;k.getScreenSize=this._createScreenSizeGetter(c,a);k.calculateRelativeScreenBounds=function(a){return q._material.calculateRelativeScreenBounds(k.getScreenSize(),
1,a)};l.extendPointGraphicElevationContext(k,b,this._context.elevationProvider);return k};d.prototype._createAsOverlay=function(a,b,e,c,d,f,h){var g=this;this._drapedMaterial.renderPriority=this._symbolLayerOrder;d=X.create();S.pointToVector(b,d,this._context.overlaySR);d[2]=this._getDrapedZ();if((b=this._context.clippingExtent)&&!l.pointInBox2D(d,b))return null;var x=this._getFastUpdateAttrValues(a);a=x?function(a){return r.evaluateModelTransform(g._fastUpdates.materialParameters,x,a)}:null;e=B.createPointGeometry(E,
d,e,c,null,null,x);b=new U(e);b.material=this._drapedMaterial;b.center=d;b.bsRadius=0;b.transformation=D;b.name=f;b.uniqueName=f+"#"+e.id;var k=new P(this,[b],null);k.getScreenSize=this._createScreenSizeGetter(c,a);k.calculateRelativeScreenBounds=function(a){return g._drapedMaterial.calculateRelativeScreenBounds(k.getScreenSize(),1,a)};return k};d.prototype._createScreenSizeGetter=function(a,b){var e=this._outlineSize+2;if(this._fastUpdates.enabled){var c=a[0]/this._symbolTextureRatio,d=a[1]/this._symbolTextureRatio;
return function(a){void 0===a&&(a=Array(2));var f=b(D);a[0]=f[0]*c+e;a[1]=f[5]*d+e;return a}}var f=a[0]/this._symbolTextureRatio+e,h=a[1]/this._symbolTextureRatio+e;return function(a){void 0===a&&(a=Array(2));a[0]=f;a[1]=h;return a}};d.prototype._supportsShaderVisualVariables=function(){return!0};d.prototype._fastVisualVariableConvertOptions=function(){var a=this._size[0]>this._size[1]?this._size[0]:this._size[1],b=[a,a,a],d=m.px2pt(1),a=a*d;return{modelSize:b,symbolSize:[a,a,a],unitInMeters:d,transformation:{anchor:F,
scale:Z,rotation:F}}};d.prototype._hasVisibleVerticalOffset=function(a){return this.symbolContainer&&"point-3d"===this.symbolContainer.type&&this.symbolContainer.hasVisibleVerticalOffset()};d.PRIMITIVE_SIZE=ba;d.VALID_ANCHOR_STRINGS=G;return d}(u);var ca={mode:"relative-to-ground",offset:0},da=y.createFrom(0,0,0,1);return u});