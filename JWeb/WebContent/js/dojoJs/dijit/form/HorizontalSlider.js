/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit.form.HorizontalSlider"]){dojo._hasResource["dijit.form.HorizontalSlider"]=true;dojo.provide("dijit.form.HorizontalSlider");dojo.require("dijit.form._FormWidget");dojo.require("dijit._Container");dojo.require("dojo.dnd.move");dojo.require("dijit.form.Button");dojo.require("dojo.number");dojo.require("dojo._base.fx");dojo.declare("dijit.form.HorizontalSlider",[dijit.form._FormValueWidget,dijit._Container],{templateString:dojo.cache("dijit.form","templates/HorizontalSlider.html","<table class=\"dijit dijitReset dijitSlider\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" rules=\"none\" dojoAttachEvent=\"onkeypress:_onKeyPress,onkeyup:_onKeyUp\"\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\r\n\t\t><td dojoAttachPoint=\"topDecoration\" class=\"dijitReset\" style=\"text-align:center;width:100%;\"></td\r\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH\"\r\n\t\t\t><div class=\"dijitSliderDecrementIconH\" tabIndex=\"-1\" style=\"display:none\" dojoAttachPoint=\"decrementButton\"><span class=\"dijitSliderButtonInner\">-</span></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper dijitSliderLeftBumper\" dojoAttachEvent=\"onmousedown:_onClkDecBumper\"></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><input dojoAttachPoint=\"valueNode\" type=\"hidden\" ${nameAttrSetting}\r\n\t\t\t/><div class=\"dijitReset dijitSliderBarContainerH\" waiRole=\"presentation\" dojoAttachPoint=\"sliderBarContainer\"\r\n\t\t\t\t><div waiRole=\"presentation\" dojoAttachPoint=\"progressBar\" class=\"dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH\" dojoAttachEvent=\"onmousedown:_onBarClick\"\r\n\t\t\t\t\t><div class=\"dijitSliderMoveable dijitSliderMoveableH\"\r\n\t\t\t\t\t\t><div dojoAttachPoint=\"sliderHandle,focusNode\" class=\"dijitSliderImageHandle dijitSliderImageHandleH\" dojoAttachEvent=\"onmousedown:_onHandleClick\" waiRole=\"slider\" valuemin=\"${minimum}\" valuemax=\"${maximum}\"></div\r\n\t\t\t\t\t></div\r\n\t\t\t\t></div\r\n\t\t\t\t><div waiRole=\"presentation\" dojoAttachPoint=\"remainingBar\" class=\"dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH\" dojoAttachEvent=\"onmousedown:_onBarClick\"></div\r\n\t\t\t></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset\"\r\n\t\t\t><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper dijitSliderRightBumper\" dojoAttachEvent=\"onmousedown:_onClkIncBumper\"></div\r\n\t\t></td\r\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH\" style=\"right:0px;\"\r\n\t\t\t><div class=\"dijitSliderIncrementIconH\" tabIndex=\"-1\" style=\"display:none\" dojoAttachPoint=\"incrementButton\"><span class=\"dijitSliderButtonInner\">+</span></div\r\n\t\t></td\r\n\t></tr\r\n\t><tr class=\"dijitReset\"\r\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\r\n\t\t><td dojoAttachPoint=\"containerNode,bottomDecoration\" class=\"dijitReset\" style=\"text-align:center;\"></td\r\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\r\n\t></tr\r\n></table>\r\n"),value:0,showButtons:true,minimum:0,maximum:100,discreteValues:Infinity,pageIncrement:2,clickSelect:true,slideDuration:dijit.defaultDuration,widgetsInTemplate:true,attributeMap:dojo.delegate(dijit.form._FormWidget.prototype.attributeMap,{id:""}),baseClass:"dijitSlider",_mousePixelCoord:"pageX",_pixelCount:"w",_startingPixelCoord:"x",_startingPixelCount:"l",_handleOffsetCoord:"left",_progressPixelSize:"width",_onKeyUp:function $DDs_(e){if(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey){return;}this._setValueAttr(this.value,true);},_onKeyPress:function $DDt_(e){if(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey){return;}switch(e.charOrCode){case dojo.keys.HOME:this._setValueAttr(this.minimum,false);break;case dojo.keys.END:this._setValueAttr(this.maximum,false);break;case ((this._descending||this.isLeftToRight())?dojo.keys.RIGHT_ARROW:dojo.keys.LEFT_ARROW):case (this._descending===false?dojo.keys.DOWN_ARROW:dojo.keys.UP_ARROW):case (this._descending===false?dojo.keys.PAGE_DOWN:dojo.keys.PAGE_UP):this.increment(e);break;case ((this._descending||this.isLeftToRight())?dojo.keys.LEFT_ARROW:dojo.keys.RIGHT_ARROW):case (this._descending===false?dojo.keys.UP_ARROW:dojo.keys.DOWN_ARROW):case (this._descending===false?dojo.keys.PAGE_UP:dojo.keys.PAGE_DOWN):this.decrement(e);break;default:return;}dojo.stopEvent(e);},_onHandleClick:function $DDu_(e){if(this.disabled||this.readOnly){return;}if(!dojo.isIE){dijit.focus(this.sliderHandle);}dojo.stopEvent(e);},_isReversed:function $DDv_(){return !this.isLeftToRight();},_onBarClick:function $DDw_(e){if(this.disabled||this.readOnly||!this.clickSelect){return;}dijit.focus(this.sliderHandle);dojo.stopEvent(e);var _1=dojo.position(this.sliderBarContainer,true);var _2=e[this._mousePixelCoord]-_1[this._startingPixelCoord];this._setPixelValue(this._isReversed()?(_1[this._pixelCount]-_2):_2,_1[this._pixelCount],true);this._movable.onMouseDown(e);},_setPixelValue:function $DDx_(_3,_4,_5){if(this.disabled||this.readOnly){return;}_3=_3<0?0:_4<_3?_4:_3;var _6=this.discreteValues;if(_6<=1||_6==Infinity){_6=_4;}_6--;var _7=_4/_6;var _8=Math.round(_3/_7);this._setValueAttr((this.maximum-this.minimum)*_8/_6+this.minimum,_5);},_setValueAttr:function $DDy_(_9,_a){this.valueNode.value=this.value=_9;dijit.setWaiState(this.focusNode,"valuenow",_9);this.inherited(arguments);var _b=(_9-this.minimum)/(this.maximum-this.minimum);var _c=(this._descending===false)?this.remainingBar:this.progressBar;var _d=(this._descending===false)?this.progressBar:this.remainingBar;if(this._inProgressAnim&&this._inProgressAnim.status!="stopped"){this._inProgressAnim.stop(true);}if(_a&&this.slideDuration>0&&_c.style[this._progressPixelSize]){var _e=this;var _f={};var _10=parseFloat(_c.style[this._progressPixelSize]);var _11=this.slideDuration*(_b-_10/100);if(_11==0){return;}if(_11<0){_11=0-_11;}_f[this._progressPixelSize]={start:_10,end:_b*100,units:"%"};this._inProgressAnim=dojo.animateProperty({node:_c,duration:_11,onAnimate:function $DDz_(v){_d.style[_e._progressPixelSize]=(100-parseFloat(v[_e._progressPixelSize]))+"%";},onEnd:function $DD0_(){delete _e._inProgressAnim;},properties:_f});this._inProgressAnim.play();}else{_c.style[this._progressPixelSize]=(_b*100)+"%";_d.style[this._progressPixelSize]=((1-_b)*100)+"%";}},_bumpValue:function $DD1_(_12,_13){if(this.disabled||this.readOnly){return;}var s=dojo.getComputedStyle(this.sliderBarContainer);var c=dojo._getContentBox(this.sliderBarContainer,s);var _14=this.discreteValues;if(_14<=1||_14==Infinity){_14=c[this._pixelCount];}_14--;var _15=(this.value-this.minimum)*_14/(this.maximum-this.minimum)+_12;if(_15<0){_15=0;}if(_15>_14){_15=_14;}_15=_15*(this.maximum-this.minimum)/_14+this.minimum;this._setValueAttr(_15,_13);},_onClkBumper:function $DD2_(val){if(this.disabled||this.readOnly||!this.clickSelect){return;}this._setValueAttr(val,true);},_onClkIncBumper:function $DD3_(){this._onClkBumper(this._descending===false?this.minimum:this.maximum);},_onClkDecBumper:function $DD4_(){this._onClkBumper(this._descending===false?this.maximum:this.minimum);},decrement:function $DD5_(e){this._bumpValue(e.charOrCode==dojo.keys.PAGE_DOWN?-this.pageIncrement:-1);},increment:function $DD6_(e){this._bumpValue(e.charOrCode==dojo.keys.PAGE_UP?this.pageIncrement:1);},_mouseWheeled:function $DD7_(evt){dojo.stopEvent(evt);var _16=!dojo.isMozilla;var _17=evt[(_16?"wheelDelta":"detail")]*(_16?1:-1);this._bumpValue(_17<0?-1:1,true);},startup:function $DD8_(){dojo.forEach(this.getChildren(),function(_18){if(this[_18.container]!=this.containerNode){this[_18.container].appendChild(_18.domNode);}},this);},_typematicCallback:function $DD9_(_19,_1a,e){if(_19==-1){this._setValueAttr(this.value,true);}else{this[(_1a==(this._descending?this.incrementButton:this.decrementButton))?"decrement":"increment"](e);}},postCreate:function $DEA_(){if(this.showButtons){this.incrementButton.style.display="";this.decrementButton.style.display="";this._connects.push(dijit.typematic.addMouseListener(this.decrementButton,this,"_typematicCallback",25,500));this._connects.push(dijit.typematic.addMouseListener(this.incrementButton,this,"_typematicCallback",25,500));}this.connect(this.domNode,!dojo.isMozilla?"onmousewheel":"DOMMouseScroll","_mouseWheeled");var _1b=dojo.declare(dijit.form._SliderMover,{widget:this});this._movable=new dojo.dnd.Moveable(this.sliderHandle,{mover:_1b});var _1c=dojo.query("label[for=\""+this.id+"\"]");if(_1c.length){_1c[0].id=(this.id+"_label");dijit.setWaiState(this.focusNode,"labelledby",_1c[0].id);}dijit.setWaiState(this.focusNode,"valuemin",this.minimum);dijit.setWaiState(this.focusNode,"valuemax",this.maximum);this.inherited(arguments);this._layoutHackIE7();},destroy:function $DEB_(){this._movable.destroy();if(this._inProgressAnim&&this._inProgressAnim.status!="stopped"){this._inProgressAnim.stop(true);}this._supportingWidgets=dijit.findWidgets(this.domNode);this.inherited(arguments);}});dojo.declare("dijit.form._SliderMover",dojo.dnd.Mover,{onMouseMove:function $DEC_(e){var _1d=this.widget;var _1e=_1d._abspos;if(!_1e){_1e=_1d._abspos=dojo.position(_1d.sliderBarContainer,true);_1d._setPixelValue_=dojo.hitch(_1d,"_setPixelValue");_1d._isReversed_=_1d._isReversed();}var _1f=e[_1d._mousePixelCoord]-_1e[_1d._startingPixelCoord];_1d._setPixelValue_(_1d._isReversed_?(_1e[_1d._pixelCount]-_1f):_1f,_1e[_1d._pixelCount],false);},destroy:function $DED_(e){dojo.dnd.Mover.prototype.destroy.apply(this,arguments);var _20=this.widget;_20._abspos=null;_20._setValueAttr(_20.value,true);}});}