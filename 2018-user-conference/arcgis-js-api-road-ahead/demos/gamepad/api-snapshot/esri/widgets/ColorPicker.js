// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/ColorPicker/templates/ColorPicker.html":'\x3cdiv class\x3d"${css.container}"\x3e\n  \x3cdiv class\x3d"${css.header}" data-dojo-attach-point\x3d"dap_header"\x3e\n    \x3cspan class\x3d"${css.swatchPreview} ${css.container}"\x3e\n      \x3cspan class\x3d"${css.swatch} ${css.swatchTransparencyBackground}"\x3e\x3c/span\x3e\n      \x3cspan data-dojo-attach-point\x3d"dap_previewSwatch" class\x3d"${css.swatch}"\x3e\x3c/span\x3e\n    \x3c/span\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"${css.middle}"\x3e\n    \x3cdiv data-dojo-attach-point\x3d"dap_paletteContainer" class\x3d"${css.palette} ${css.container}"\x3e\n      \x3cdiv data-dojo-attach-point\x3d"dap_primaryPalette" class\x3d"${css.palette}"\x3e\x3c/div\x3e\x3c!--\n      --\x3e\x3cdiv data-dojo-attach-point\x3d"dap_secondaryPalette" class\x3d"${css.palette}"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"${css.paletteOptions}"\x3e\n      \x3cinput type\x3d"text" data-dojo-attach-point\x3d"dap_hexInput" class\x3d"${css.hexInput}"/\x3e\n      \x3cinput class\x3d"${css.paletteToggle}" type\x3d"button" data-dojo-attach-point\x3d"dap_paletteToggle" value\x3d"${labels.more}" aria-pressed\x3d"false"/\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"${css.footer}" data-dojo-attach-point\x3d"dap_footer"\x3e\n    \x3cdiv class\x3d"${css.section}" data-dojo-attach-point\x3d"dap_suggestedColorSection"\x3e\n      \x3cdiv class\x3d"${css.label}"\x3e${labels.suggested}\x3c/div\x3e\n      \x3cdiv data-dojo-attach-point\x3d"dap_suggestedColorPalette" class\x3d"${css.suggested} ${css.palette} ${css.swatchRow}"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"${css.section}" data-dojo-attach-point\x3d"dap_recentColorSection"\x3e\n      \x3cdiv class\x3d"${css.label}"\x3e${labels.recent}\x3c/div\x3e\n      \x3cdiv data-dojo-attach-point\x3d"dap_recentColorPalette" class\x3d"${css.recent} ${css.palette} ${css.swatchRow}"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"${css.section}" data-dojo-attach-point\x3d"dap_transparencySection"\x3e\n      \x3cdiv data-dojo-attach-point\x3d"dap_transparencyLabel" class\x3d"${css.label}"\x3e${labels.transparency}\x3c/div\x3e\n      \x3cinput class\x3d"${css.transparencySlider}" type\x3d"range"\n             data-dojo-attach-point\x3d"dap_transparencySlider"\n             min\x3d"0" max\x3d"1"\n             step\x3d"0.01"/\x3e\n      \x3cdiv class\x3d"${css.ticks}" data-dojo-attach-point\x3d"dap_ticks"\x3e\x3c!-- ticks added dynamically --\x3e\x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("../Color ./ColorPicker/HexPalette ./support/colorUtils ./Widgette ../core/lang dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/a11yclick dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on dojo/query dojo/i18n!./ColorPicker/nls/ColorPicker dojo/i18n!../nls/common dojo/text!./ColorPicker/templates/ColorPicker.html dojo/NodeList-dom".split(" "),function(l,n,e,p,q,r,t,u,f,h,k,g,m,v,w,x){var d={root:"esri-color-picker",container:"esri-container",header:"esri-header",footer:"esri-footer",
middle:"esri-middle",swatch:"esri-swatch",swatchRow:"esri-swatch-row",swatchEmpty:"esri-swatch-empty",swatchPreview:"esri-swatch-preview",swatchTransparencyBackground:"esri-swatch-transparency-background",palette:"esri-palette",paletteOptions:"esri-palette-options",paletteToggle:"esri-palette-toggle",label:"esri-label",hexInput:"esri-hex-input",recent:"esri-recent",suggested:"esri-suggested",selected:"esri-selected",disabled:"esri-disabled",section:"esri-section",transparencySlider:"esri-transparency-slider",
ticks:"esri-color-picker-ticks",alt:"esri-alt",hidden:"esri-hidden"};return p.createSubclass([r,t],{declaredClass:"esri.widgets.ColorPicker",templateString:x,labels:v,baseClass:d.root,css:d,constructor:function(a){a=a||{};this._brightsPalette=new n({colors:a.palette});this._pastelsPalette=new n({colors:this._toPastels(this._brightsPalette.colors)});this._activePalette=this._brightsPalette;this._swatches={}},buildRendering:function(){this.inherited(arguments);this._createPalettes();this.required||
(this._noColorSwatchNode=h.create("div",{className:d.swatch+" "+d.swatchEmpty},this.dap_hexInput,"after"));this._addTicks(this.dap_ticks);f.toggle(this.dap_transparencySection,d.hidden,!this.showTransparencySlider);f.toggle(this.dap_recentColorSection,d.hidden,!this.showRecentColors);f.toggle(this.dap_suggestedColorSection,d.hidden,!this.showSuggestedColors)},postCreate:function(){this.inherited(arguments);this._addListeners();this._selectColor()},_activePalette:null,_brightsPalette:null,_pastelsPalette:null,
_swatches:null,_noColorSwatchNode:null,_previousColor:null,color:null,_getColorAttr:function(){var a=this._get("color");return null===a?null:new l(a)},_setColorAttr:function(a,b){a=a||null;b=b||void 0===b;if(!this.required){if(null===a){this._set("color",null);this._previousColor=null;this.dap_transparencySlider.value=0;this._disableTransparencySlider();this._clearSelection();this._updateHexInput(null);this._updatePreviewSwatch(a);f.add(this._noColorSwatchNode,d.selected);b&&this.emit("color-change",
{color:null});return}this._enableTransparencySlider();f.remove(this._noColorSwatchNode,d.selected)}a=e.normalizeColor(a);var c=this._previousColor;if(c){if(e.equal(c,a))return;if(c=this._findColorSwatch(c))f.remove(c,d.selected),k.set(c,"borderColor","")}c=new l(a);this._set("color",c);this._previousColor=a;this.dap_transparencySlider.value=1-c.a;this._updatePreviewSwatch(c);this._checkSelection();this._updateHexInput(c);this.trackColors&&this._addRecentColor(c.toHex());b&&this.emit("color-change",
{color:new l(c)})},colorsPerRow:13,_setColorsPerRowAttr:function(a){this._set("colorsPerRow",0<a?a:13)},_setPaletteAttr:function(a){var b=this._activePalette===this._brightsPalette;this._brightsPalette.colors=a;this._pastelsPalette.colors=this._toPastels(this._brightsPalette.colors);this._activePalette=b?this._brightsPalette:this._pastelsPalette;this._createPalettes();this._togglePalette(!b)},recentColors:[],_getRecentColorsAttr:function(){return this._get("recentColors").map(function(a){return e.normalizeColor(a)})},
_setRecentColorsAttr:function(a){a=a||[];this.showRecentColors&&(a=a.map(function(a){return e.normalizeColor(a).toHex()}));this._set("recentColors",a);0===a.length?this._clearRecentSwatches():this._renderRecentSwatches()},required:!1,showRecentColors:!0,showSuggestedColors:!1,showTransparencySlider:!0,suggestedColors:null,_getSuggestedColorsAttr:function(){return this._get("suggestedColors").map(function(a){return e.normalizeColor(a)})},_setSuggestedColorsAttr:function(a){this.showSuggestedColors&&
(this._clearSuggestedSwatches(),a=a||[],a=a.map(function(a){return e.normalizeColor(a).toHex()}),this._set("suggestedColors",a),0<a.length&&this._renderSuggestedSwatches())},trackColors:!0,addRecentColor:function(a){a&&null!==a&&this._addRecentColor(e.normalizeColor(a).toHex())},saveRecentColors:function(a){localStorage.setItem(a,JSON.stringify(this.get("recentColors")))},loadRecentColors:function(a){this.set("recentColors",JSON.parse(localStorage.getItem(a)))},_addTicks:function(a){var b=document.createDocumentFragment();
[0,50,100].forEach(function(a){h.create("span",{innerHTML:q.substitute({percent:a},w.percent)},b)});a.appendChild(b)},_toPastels:function(a){var b=new l([238,238,238]);return a.map(function(a){return l.blendColors(new l(a),b,.2)})},_createSwatch:function(a){return h.create("span",{className:a.className,style:{backgroundColor:a.hexColor||"transparent"}},a.paletteNode)},_createSwatches:function(a,b){var c;b.colors.forEach(function(b,e){0===e%this.colorsPerRow&&(c=h.create("div",{className:d.swatchRow},
a));e=this._createSwatch({className:d.swatch,hexColor:b,paletteNode:c});this._swatches[b]=e},this)},_selectColor:function(){this.set("color",this.required?this.color||this._activePalette.colors[0]:this.color)},_setColorWithCurrentAlpha:function(a){null!==a&&null!==this.color&&(a=e.normalizeColor(a),a.a=this.color.a);this.set("color",a)},_updatePreviewSwatch:function(a){var b=this.dap_previewSwatch,c;null===a?(f.add(b,d.swatchEmpty),k.set(b,{backgroundColor:"",borderColor:""})):(c=e.getContrastingColor(a),
f.remove(b,d.swatchEmpty),k.set(b,{backgroundColor:a.toCss(!0),borderColor:c.toCss(!0)}))},_showBrights:function(){f.remove(this.dap_paletteContainer,d.alt);this._activePalette=this._brightsPalette},_showPastels:function(){f.add(this.dap_paletteContainer,d.alt);this._activePalette=this._pastelsPalette},_setColorFromSwatch:function(a){a=k.get(a,"backgroundColor");this._setColorWithCurrentAlpha(a)},_checkSelection:function(){var a=this.get("color");this._activePalette.contains(a)?this._highlightColor(a):
this._clearSelection()},_addListeners:function(){var a="."+d.swatch;this.own(g(this.dap_paletteContainer,g.selector(a,"click"),function(a){this._setColorFromSwatch(a.target)}.bind(this)),g(this.dap_recentColorPalette,g.selector(a,"click"),function(a){this._setColorFromSwatch(a.target)}.bind(this)),g(this.dap_suggestedColorPalette,g.selector(a,"click"),function(a){this._setColorFromSwatch(a.target)}.bind(this)));this.required||this.own(g(this._noColorSwatchNode,"click",function(){this.set("color",
null)}.bind(this)));var b=this.dap_hexInput;g(b,"blur",function(){var a=e.normalizeHex(b.value);e.isShorthandHex(a)?this._setColorWithCurrentAlpha(a):this._updateHexInput(this.color)}.bind(this));g(b,"change",function(){var a=e.normalizeHex(b.value);e.isLonghandHex(a)&&this.color.toHex()!==a&&this._setColorWithCurrentAlpha(a)}.bind(this));g(this.dap_transparencySlider,"change, input",function(a){var b=this.get("color");null!==b&&(b=e.normalizeColor(b),b.a=1-a.target.value,this._updatePreviewSwatch(b),
this._updateHexInput(b),this.set("color",b))}.bind(this));g(this.dap_paletteToggle,u,function(a){a="true"===a.target.getAttribute("aria-pressed");this._togglePalette(!a)}.bind(this))},_togglePalette:function(a){this.dap_paletteToggle.setAttribute("aria-pressed",a);a?this._showPastels():this._showBrights();this._checkSelection()},_createPalettes:function(){this._swatches={};h.empty(this.dap_primaryPalette);h.empty(this.dap_secondaryPalette);this._createSwatches(this.dap_primaryPalette,this._brightsPalette);
this._createSwatches(this.dap_secondaryPalette,this._pastelsPalette)},_updateHexInput:function(a){this.dap_hexInput.value=null===a?"":a.toHex()},_addRecentColor:function(a){if(a){var b=this.recentColors,c=b.indexOf(a);-1<c&&b.splice(c,1);b.unshift(a);b.length>this.colorsPerRow&&b.pop();this._renderRecentSwatches()}},_renderRecentSwatches:function(){if(this.recentColors){var a=m("."+d.recent+"."+d.swatch,this.dap_recentColorPalette);this.recentColors.forEach(function(b,c){if(c<this.colorsPerRow){if(c+
1>a.length){var e=this._createSwatch({hexColor:b,className:d.swatch+" "+d.recent,paletteNode:this.dap_recentColorPalette});a.push(e)}k.set(a[c],"backgroundColor",b)}},this)}},_renderSuggestedSwatches:function(){if(this.suggestedColors){var a=m("."+d.suggested+"."+d.swatch,this.dap_recentColorPalette);this.suggestedColors.forEach(function(b,c){if(c<this.colorsPerRow){if(c+1>a.length){var e=this._createSwatch({hexColor:b,className:d.swatch+" "+d.suggested,paletteNode:this.dap_suggestedColorPalette});
a.push(e)}k.set(a[c],"backgroundColor",b)}},this)}},_clearRecentSwatches:function(){h.empty(this.dap_recentColorPalette)},_clearSuggestedSwatches:function(){h.empty(this.dap_suggestedColorPalette)},_clearSelection:function(){m("."+d.selected,this.dap_paletteContainer).removeClass(d.selected)},_highlightColor:function(a){var b=this._findColorSwatch(a);b&&(a=e.normalizeColor(a),a=e.getContrastingColor(a),f.add(b,d.selected),k.set(b,"borderColor",a.toHex()))},_findColorSwatch:function(a){var b=this._activePalette.colors;
a=e.toHex(a);var c;-1<b.indexOf(a)&&(c=this._swatches[a]);return c},_enableTransparencySlider:function(){this.dap_transparencySlider.disabled=!1},_disableTransparencySlider:function(){this.dap_transparencySlider.disabled=!0}})});