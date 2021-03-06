/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.InputBase");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.InputBase",{metadata:{library:"sap.m",properties:{"value":{type:"string",group:"Data",defaultValue:null,bindable:"bindable"},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"valueState":{type:"sap.ui.core.ValueState",group:"Appearance",defaultValue:sap.ui.core.ValueState.None},"name":{type:"string",group:"Misc",defaultValue:null},"placeholder":{type:"string",group:"Misc",defaultValue:null},"editable":{type:"boolean",group:"Behavior",defaultValue:true}},events:{"change":{}}}});sap.m.InputBase.M_EVENTS={'change':'change'};jQuery.sap.require("sap.ui.core.EnabledPropagator");jQuery.sap.require("sap.ui.core.IconPool");sap.ui.core.EnabledPropagator.call(sap.m.InputBase.prototype);sap.ui.core.IconPool.insertFontFaceStyle();sap.m.InputBase.prototype._bShowLabelAsPlaceholder=(function(d){if(!d.support.input.placeholder){return true}if(d.browser.msie){return true}if(d.os.android&&d.os.android.version<4.4){return true}}(sap.ui.Device));
sap.m.InputBase.prototype._getPlaceholder=function(){return this.getPlaceholder()};
sap.m.InputBase.prototype._setLabelVisibility=function(){if(!this._bShowLabelAsPlaceholder||!this._$label||!this.isActive()){return}var v=this._getInputValue();this._$label.css("display",v?"none":"inline")};
sap.m.InputBase.prototype._getInputValue=function(v){v=(typeof v=="undefined")?this._$input.val():v.toString();if(this.getMaxLength&&this.getMaxLength()>0){v=v.substring(0,this.getMaxLength())}return v};
sap.m.InputBase.prototype._triggerInputEvent=function(p){p=p||{};var e=new jQuery.Event("input",p);e.originalEvent=p;e.setMark("synthetic",true);jQuery.sap.delayedCall(0,this,function(){this.$("inner").trigger(e)})};
sap.m.InputBase.prototype.init=function(){this._lastValue="";this._changeProxy=jQuery.proxy(this.onChange,this)};
sap.m.InputBase.prototype.onBeforeRendering=function(){this._bRendering=true;if(this._bCheckDomValue&&this.isActive()){this._sDomValue=this._getInputValue()}};
sap.m.InputBase.prototype.onAfterRendering=function(){this._$input=this.$("inner");if(this._bCheckDomValue&&this._sDomValue!==this._getInputValue()){this._$input.val(this._sDomValue)}this._bCheckDomValue=false;if(this._bShowLabelAsPlaceholder){this._$label=this.$("placeholder");this._setLabelVisibility()}this._bRendering=false};
sap.m.InputBase.prototype.exit=function(){this._$input=null;this._$label=null};
sap.m.InputBase.prototype.ontouchstart=function(e){e.setMarked()};
sap.m.InputBase.prototype.onfocusout=function(e){if(this._bRendering){return}this.onChange(e)};
sap.m.InputBase.prototype.onChange=function(e){if(!this.getEditable()||!this.getEnabled()){return}var v=this._getInputValue();if(v!==this._lastValue){this.setValue(v);this._lastValue=v;this.fireChangeEvent(v);return true}};
sap.m.InputBase.prototype.fireChangeEvent=function(v,p){var c=jQuery.extend({value:v,newValue:v},p);this.fireChange(c)};
sap.m.InputBase.prototype.onsapenter=function(e){this.onChange(e)};
sap.m.InputBase.prototype.onsapescape=function(e){var v=this._getInputValue();if(v!==this._lastValue){e.setMarked();e.preventDefault();this.updateDomValue(this._lastValue);this.fireEvent("liveChange",{value:this._lastValue,newValue:this._lastValue})}};
sap.m.InputBase.prototype.oninput=function(e){this._bCheckDomValue=true;this._setLabelVisibility()};
sap.m.InputBase.prototype.onkeydown=function(e){var k=jQuery.sap.KeyCodes;var b=sap.ui.Device.browser;if((b.msie&&b.version<10)&&(e.which===k.DELETE||e.which===k.BACKSPACE)){this._triggerInputEvent()}};
sap.m.InputBase.prototype.oncut=function(e){var b=sap.ui.Device.browser;if(b.msie&&b.version<10){this._triggerInputEvent()}};
sap.m.InputBase.prototype.selectText=function(s,S){jQuery(this.getFocusDomRef()).selectText(s,S);return this};
sap.m.InputBase.isSpecialKey=function(e){var k=jQuery.sap.KeyCodes,K=e.which;return(e.type==="keypress"&&e.ctrlKey)||(K>=16&&K<=20)||(K>=33&&K<=40)||(K>=44&&K<=46)||(K>=112&&K<=123)||(K===k.BACKSPACE)||(K===k.TAB)||(K===k.ENTER)||(K===k.ESCAPE)};
sap.m.InputBase.prototype.setProperty=function(p,v,s){if(p=="value"){this._bCheckDomValue=false}return sap.ui.core.Control.prototype.setProperty.apply(this,arguments)};
sap.m.InputBase.prototype.bindToInputEvent=function(c){if(this._oInputEventDelegate){this.removeEventDelegate(this._oInputEventDelegate)}this._oInputEventDelegate={oninput:c};return this.addEventDelegate(this._oInputEventDelegate)};
sap.m.InputBase.prototype.updateDomValue=function(v){this._bCheckDomValue=true;v=this._getInputValue(v);if(this.isActive()&&(this._getInputValue()!==v)){this._$input.val(v)}this._setLabelVisibility();return this};
sap.m.InputBase.prototype.setValueState=function(v){var o=this.getValueState();v=this.validateProperty("valueState",v);if(v===o){return this}if(!this.isActive()){return this.setProperty("valueState",v)}var $=this.$();this.setProperty("valueState",v,true);if(o!==sap.ui.core.ValueState.None){$.removeClass("sapMInputBaseState sapMInputBase"+o);this._$input.removeClass("sapMInputBaseStateInner sapMInputBase"+o+"Inner")}if(v!==sap.ui.core.ValueState.None){$.addClass("sapMInputBaseState sapMInputBase"+v);this._$input.addClass("sapMInputBaseStateInner sapMInputBase"+v+"Inner")}var t=sap.ui.core.ValueStateSupport.enrichTooltip(this,this.getTooltip_AsString());this.$().attr("title",t||"");return this};
sap.m.InputBase.prototype.setValue=function(v){v=this.validateProperty("value",v);v=this._getInputValue(v);this.updateDomValue(v);if(v!==this.getProperty("value")){this._lastValue=v}this.setProperty("value",v,true);return this};
sap.m.InputBase.prototype.getFocusInfo=function(){var f=sap.ui.core.Control.prototype.getFocusInfo.call(this),F=this.getFocusDomRef();jQuery.extend(f,{cursorPos:0,selectionStart:0,selectionEnd:0});if(F){f.cursorPos=jQuery(F).cursorPos();try{f.selectionStart=F.selectionStart;f.selectionEnd=F.selectionEnd}catch(e){}}return f};
sap.m.InputBase.prototype.applyFocusInfo=function(f){sap.ui.core.Control.prototype.applyFocusInfo.call(this,f);this.$("inner").cursorPos(f.cursorPos);this.selectText(f.selectionStart,f.selectionEnd);return this};
sap.m.InputBase.prototype.getFocusDomRef=function(){return this.getDomRef("inner")};
sap.m.InputBase.prototype.getIdForLabel=function(){return this.getId()+"-inner"};
