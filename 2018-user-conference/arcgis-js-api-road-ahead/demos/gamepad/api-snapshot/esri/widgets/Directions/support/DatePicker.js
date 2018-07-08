// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../nls/DatePicker dojo/keys ../../../moment ../../../core/accessorSupport/decorators ../../Widget ./DatePickerViewModel ../../support/widget".split(" "),function(x,y,r,g,h,d,m,k,v,n,c){var w=[d.DOWN_ARROW,d.END,d.ENTER,d.HOME,d.LEFT_ARROW,d.PAGE_DOWN,d.PAGE_UP,d.RIGHT_ARROW,d.SPACE,d.UP_ARROW];return function(p){function a(b){b=p.call(this)||this;b._activeDate=null;b._calendarNode=
null;b._closedByUserAction=!1;b._isOpen=!1;b._rootNode=null;b.value=null;b.viewModel=new n;return b}r(a,p);a.prototype.render=function(){var b=this.viewModel.value.format("L"),a=this._isOpen,d=(e={},e["esri-icon-down-arrow"]=!a,e["esri-icon-up-arrow"]=a,e);return c.tsx("div",{afterCreate:c.storeNode,bind:this,class:"esri-date-picker esri-widget","data-node-ref":"_rootNode"},c.tsx("div",{afterUpdate:this._focusSelectedOrClosed,"aria-pressed":a.toString(),bind:this,class:this.classes("esri-widget--button",
"esri-date-picker__calendar-toggle"),onclick:this._toggle,onkeydown:this._toggle,role:"button",tabIndex:0},c.tsx("span",{class:"esri-date-picker__date"},b),c.tsx("span",{"aria-hidden":"true",class:this.classes(d)})),a?this._renderCalendar():null);var e};a.prototype._focusSelectedOrClosed=function(b){this._closedByUserAction&&(this._closedByUserAction=!1,b.focus())};a.prototype._handleDatePickerKeydown=function(b){b.keyCode===d.ESCAPE&&(this._closedByUserAction=!0,this._close(),b.preventDefault(),
b.stopPropagation())};a.prototype._renderCalendar=function(){var b=this._activeDate,a=this.get("viewModel.value");return c.tsx("div",{afterCreate:c.storeNode,bind:this,class:"esri-date-picker__calendar","data-node-ref":"_calendarNode",key:"esri-date-picker__calendar",onkeydown:this._handleDatePickerKeydown},this._renderMonthPicker(b),this._renderDayPicker(b,a),this._renderYearPicker(b))};a.prototype._handleDatePickerBlur=function(b){b=b.relatedTarget;this._calendarNode.contains(b)||this._rootNode.contains(b)||
this._close()};a.prototype._renderMonthPicker=function(b){var a=m.months().map(function(a,e){e=b.month()===e;return c.tsx("option",{selected:e},a)});return c.tsx("div",{class:"esri-date-picker__month-picker"},c.tsx("div",{"aria-label":h.goToPreviousMonth,bind:this,class:"esri-widget--button",onblur:this._handleDatePickerBlur,onclick:this._setPreviousMonth,onkeydown:this._setPreviousMonth,role:"button",tabIndex:0,title:h.goToPreviousMonth},c.tsx("span",{"aria-hidden":"true",class:"esri-icon-left"})),
c.tsx("select",{"aria-live":"assertive",bind:this,class:"esri-date-picker__month-dropdown",id:this.id+"__month-picker",onblur:this._handleDatePickerBlur,onchange:this._setMonth,onkeydown:this._setMonth},a),c.tsx("div",{"aria-label":h.goToNextMonth,bind:this,class:"esri-widget--button",onblur:this._handleDatePickerBlur,onclick:this._setNextMonth,onkeydown:this._setNextMonth,role:"button",tabIndex:0,title:h.goToNextMonth},c.tsx("span",{"aria-hidden":"true",class:"esri-icon-right"})))};a.prototype._renderDayPicker=
function(b,a){var d=this,e=b.clone().day(m.localeData().firstDayOfWeek()),e=this._getWeekLabels(e),q=this._getDayId(b);b=this._renderMonth(b,a);return c.tsx("div",{afterCreate:this._handleDayPickerCreate,"aria-activedescendant":q,"aria-labelledby":this.id+"__month-picker "+this.id+"__selected-year",bind:this,class:"esri-date-picker__day-picker",id:this.id+"__day-picker",onblur:this._handleDatePickerBlur,onkeydown:this._handleDayPickerKeydown,role:"grid",tabIndex:0},c.tsx("div",{class:"esri-date-picker__week-item",
role:"row"},e.map(function(b){return c.tsx("div",{"aria-label":b.name,class:d.classes("esri-date-picker__day-item","esri-date-picker__day-item--header"),role:"columnheader",title:b.name},b.abbr)})),b)};a.prototype._getDayId=function(b){return this.id+"__"+b.format("YYYY-MM-DD")};a.prototype._handleDayPickerCreate=function(b){b.focus()};a.prototype._getWeekLabels=function(b){for(var a=[],c=0;7>c;c++)a.push({name:b.format("dddd"),abbr:b.format("dd")}),b.add(1,"day");return a};a.prototype._handleDayPickerKeydown=
function(b){var a=b.keyCode,c=b.ctrlKey,e=b.shiftKey,f=this._activeDate;if(-1!==w.indexOf(a)){if(a===d.LEFT_ARROW)f.subtract(1,"day");else if(a===d.RIGHT_ARROW)f.add(1,"day");else if(a===d.UP_ARROW)f.subtract(1,"week");else if(a===d.DOWN_ARROW)f.add(1,"week");else if(a===d.PAGE_UP)f.subtract(1,e?"year":"month");else if(a===d.PAGE_DOWN)f.add(1,e?"year":"month");else if(a===d.HOME)f.startOf(c?"year":"month");else if(a===d.END)f.endOf(c?"year":"month");else if(a===d.ENTER||a===d.SPACE)this.viewModel.value=
f.clone(),this._closedByUserAction=!0,this._close();b.preventDefault();b.stopPropagation()}};a.prototype._renderMonth=function(b,a){for(var d=m(),e=m.localeData(),f=b.clone().startOf("month"),g=b.clone().endOf("month"),e=f.clone().subtract(f.weekday()-e.firstDayOfWeek(),"day"),h=[],q=0;6>q;q++){for(var k=[],n=0;7>n;n++){var p=e.date(),u=e.isSame(b,"day"),t=e.isSame(a,"day"),r=this._getDayId(e),t=(l={},l["esri-date-picker__day-item--nearby-month"]=!e.isBetween(f,g,null,"[]"),l["esri-date-picker__day-item--today"]=
e.isSame(d,"day"),l["esri-date-picker__day-item--active"]=u,l["esri-date-picker__day-item--selected"]=t,l);k.push(c.tsx("div",{"aria-label":p.toString(),"aria-selected":u.toString(),bind:this,class:this.classes("esri-date-picker__day-item",t),"data-iso-date":e.toISOString(),id:r,onclick:this._handleSelectedDate,onkeydown:this._handleSelectedDate,role:"gridcell"},p));e.add(1,"day")}h.push(c.tsx("div",{class:"esri-date-picker__week-item",role:"row"},k))}return h;var l};a.prototype._renderYearPicker=
function(b){var a=b.clone();b=a.format("YYYY");var d=a.add(1,"year").format("YYYY"),a=a.subtract(2,"year").format("YYYY");return c.tsx("div",{class:"esri-date-picker__year-picker"},c.tsx("div",{"aria-label":h.goToPreviousYear,bind:this,class:"esri-date-picker__year-picker-item",onblur:this._handleDatePickerBlur,onclick:this._setPreviousYear,onkeydown:this._setPreviousYear,tabIndex:0,title:h.goToPreviousYear},a),c.tsx("div",{class:this.classes("esri-date-picker__year-picker-item","esri-date-picker__year-picker-item--selected"),
id:this.id+"__selected-year"},b),c.tsx("div",{"aria-label":h.goToNextYear,bind:this,class:"esri-date-picker__year-picker-item",onblur:this._handleDatePickerBlur,onclick:this._setNextYear,onkeydown:this._setNextYear,tabIndex:0,title:h.goToNextYear},d))};a.prototype._toggle=function(){this._isOpen?this._close():this._open(this.viewModel.value.clone())};a.prototype._setMonth=function(a){this._activeDate.month(a.target.value)};a.prototype._close=function(){this._activeDate=null;this._isOpen=!1};a.prototype._open=
function(a){this._activeDate=a;this._isOpen=!0};a.prototype._setPreviousMonth=function(){this._activeDate.subtract(1,"month")};a.prototype._setNextMonth=function(){this._activeDate.add(1,"month")};a.prototype._setPreviousYear=function(){this._activeDate.subtract(1,"year")};a.prototype._setNextYear=function(){this._activeDate.add(1,"year")};a.prototype._handleSelectedDate=function(a){this.viewModel.value=m(a.target.getAttribute("data-iso-date"));this._closedByUserAction=!0;this._close()};g([k.aliasOf("viewModel.value")],
a.prototype,"value",void 0);g([k.property({type:n}),c.renderable("viewModel.value")],a.prototype,"viewModel",void 0);g([c.accessibleHandler()],a.prototype,"_toggle",null);g([c.accessibleHandler()],a.prototype,"_setPreviousMonth",null);g([c.accessibleHandler()],a.prototype,"_setNextMonth",null);g([c.accessibleHandler()],a.prototype,"_setPreviousYear",null);g([c.accessibleHandler()],a.prototype,"_setNextYear",null);g([c.accessibleHandler()],a.prototype,"_handleSelectedDate",null);return a=g([k.subclass("esri.widgets.Directions.support.DatePicker")],
a)}(k.declared(v))});