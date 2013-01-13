/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit._editor.plugins.FullScreen"]){dojo._hasResource["dijit._editor.plugins.FullScreen"]=true;dojo.provide("dijit._editor.plugins.FullScreen");dojo.require("dijit._editor._Plugin");dojo.require("dijit.form.Button");dojo.require("dojo.i18n");dojo.requireLocalization("dijit._editor","commands",null,"ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,ko,nb,nl,pl,pt,pt-pt,ru,sk,sl,sv,th,tr,zh,zh-tw");dojo.declare("dijit._editor.plugins.FullScreen",dijit._editor._Plugin,{zIndex:500,_origState:null,_origiFrameState:null,_resizeHandle:null,isFullscreen:false,toggle:function $DRH_(){this.button.attr("checked",!this.button.attr("checked"));},_initButton:function $DRI_(){var _1=dojo.i18n.getLocalization("dijit._editor","commands");this.button=new dijit.form.ToggleButton({label:_1["fullScreen"],showLabel:false,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"FullScreen",tabIndex:"-1",onChange:dojo.hitch(this,"_setFullScreen")});},setEditor:function $DRJ_(_2){this.editor=_2;this._initButton();this.editor.addKeyHandler(dojo.keys.F11,true,true,dojo.hitch(this,function(e){this.toggle();dojo.stopEvent(e);setTimeout(dojo.hitch(this,function(){this.editor.focus();}),250);return true;}));this.connect(this.editor.domNode,"onkeydown","_containFocus");},_containFocus:function $DRK_(e){if(this.isFullscreen){var ed=this.editor;if(!ed.isTabIndent&&ed._fullscreen_oldOnKeyDown&&e.keyCode===dojo.keys.TAB){var f=dijit.getFocus();var _3=this._getAltViewNode();if(f.node==ed.iframe||(_3&&f.node===_3)){setTimeout(dojo.hitch(this,function(){ed.toolbar.focus();}),10);}else{if(_3&&dojo.style(ed.iframe,"display")==="none"){setTimeout(dojo.hitch(this,function(){dijit.focus(_3);}),10);}else{setTimeout(dojo.hitch(this,function(){ed.focus();}),10);}}dojo.stopEvent(e);}else{if(ed._fullscreen_oldOnKeyDown){ed._fullscreen_oldOnKeyDown(e);}}}},_resizeEditor:function $DRL_(){var vp=dijit.getViewport();dojo.marginBox(this.editor.domNode,{w:vp.w,h:vp.h});var _4=this.editor.getHeaderHeight();var _5=this.editor.getFooterHeight();var _6=dojo._getPadBorderExtents(this.editor.domNode);var _7=dojo._getPadBorderExtents(this.editor.iframe.parentNode);var _8=dojo._getMarginExtents(this.editor.iframe.parentNode);var _9=vp.h-(_4+_6.h+_5);dojo.marginBox(this.editor.iframe.parentNode,{h:_9,w:vp.w});dojo.marginBox(this.editor.iframe,{h:_9-(_7.h+_8.h)});},_getAltViewNode:function $DRM_(){},_setFullScreen:function $DRN_(_a){var vp=dijit.getViewport();var ed=this.editor;var _b=dojo.body();var _c=ed.domNode.parentNode;this.isFullscreen=_a;if(_a){while(_c&&_c!==dojo.body()){dojo.addClass(_c,"dijitForceStatic");_c=_c.parentNode;}this._editorResizeHolder=this.editor.resize;ed.resize=function $DRP_(){};ed._fullscreen_oldOnKeyDown=ed.onKeyDown;ed.onKeyDown=dojo.hitch(this,this._containFocus);this._origState={};this._origiFrameState={};var _d=ed.domNode,_e=_d&&_d.style||{};this._origState={width:_e.width||"",height:_e.height||"",top:dojo.style(_d,"top")||"",left:dojo.style(_d,"left")||"",position:dojo.style(_d,"position")||"static",marginBox:dojo.marginBox(ed.domNode)};var _f=ed.iframe,_10=_f&&_f.style||{};var bc=dojo.style(ed.iframe,"backgroundColor");this._origiFrameState={backgroundColor:bc||"transparent",width:_10.width||"auto",height:_10.height||"auto",zIndex:_10.zIndex||""};dojo.style(ed.domNode,{position:"absolute",top:"0px",left:"0px",zIndex:this.zIndex,width:vp.w+"px",height:vp.h+"px"});dojo.style(ed.iframe,{height:"100%",width:"100%",zIndex:this.zIndex,backgroundColor:bc!=="transparent"&&bc!=="rgba(0, 0, 0, 0)"?bc:"white"});dojo.style(ed.iframe.parentNode,{height:"95%",width:"100%"});if(_b.style&&_b.style.overflow){this._oldOverflow=dojo.style(_b,"overflow");}else{this._oldOverflow="";}if(dojo.isIE&&!dojo.isQuirks){if(_b.parentNode&&_b.parentNode.style&&_b.parentNode.style.overflow){this._oldBodyParentOverflow=_b.parentNode.style.overflow;}else{this._oldBodyParentOverflow="scroll";}dojo.style(_b.parentNode,"overflow","hidden");}dojo.style(_b,"overflow","hidden");var _11=function(){var vp=dijit.getViewport();if("_prevW" in this&&"_prevH" in this){if(vp.w===this._prevW&&vp.h===this._prevH){return;}}else{this._prevW=vp.w;this._prevH=vp.h;}if(this._resizer){clearTimeout(this._resizer);delete this._resizer;}this._resizer=setTimeout(dojo.hitch(this,function(){delete this._resizer;this._resizeEditor();}),10);};this._resizeHandle=dojo.connect(window,"onresize",this,_11);this._resizeHandle2=dojo.connect(ed,"resize",dojo.hitch(this,function(){if(this._resizer){clearTimeout(this._resizer);delete this._resizer;}this._resizer=setTimeout(dojo.hitch(this,function(){delete this._resizer;this._resizeEditor();}),10);}));this._resizeEditor();var dn=this.editor.toolbar.domNode;setTimeout(function(){dijit.scrollIntoView(dn);},250);}else{if(this._resizeHandle){dojo.disconnect(this._resizeHandle);this._resizeHandle=null;}if(this._resizeHandle2){dojo.disconnect(this._resizeHandle2);this._resizeHandle2=null;}if(this._rst){clearTimeout(this._rst);this._rst=null;}while(_c&&_c!==dojo.body()){dojo.removeClass(_c,"dijitForceStatic");_c=_c.parentNode;}if(this._editorResizeHolder){this.editor.resize=this._editorResizeHolder;}if(!this._origState&&!this._origiFrameState){return;}if(ed._fullscreen_oldOnKeyDown){ed.onKeyDown=ed._fullscreen_oldOnKeyDown;delete ed._fullscreen_oldOnKeyDown;}var _12=this;setTimeout(function(){var mb=_12._origState.marginBox;var oh=_12._origState.height;if(dojo.isIE&&!dojo.isQuirks){_b.parentNode.style.overflow=_12._oldBodyParentOverflow;delete _12._oldBodyParentOverflow;}dojo.style(_b,"overflow",_12._oldOverflow);delete _12._oldOverflow;dojo.style(ed.domNode,_12._origState);dojo.style(ed.iframe.parentNode,{height:"",width:""});dojo.style(ed.iframe,_12._origiFrameState);delete _12._origState;delete _12._origiFrameState;var _13=dijit.getEnclosingWidget(ed.domNode.parentNode);if(_13&&_13.resize){_13.resize();}else{if(!oh||oh.indexOf("%")<0){setTimeout(dojo.hitch(this,function(){ed.resize({h:mb.h});}),0);}}dijit.scrollIntoView(_12.editor.toolbar.domNode);},100);}},destroy:function $DRO_(){if(this._resizeHandle){dojo.disconnect(this._resizeHandle);this._resizeHandle=null;}if(this._resizeHandle2){dojo.disconnect(this._resizeHandle2);this._resizeHandle2=null;}if(this._resizer){clearTimeout(this._resizer);this._resizer=null;}this.inherited(arguments);}});dojo.subscribe(dijit._scopeName+".Editor.getPlugin",null,function(o){if(o.plugin){return;}var _14=o.args.name.toLowerCase();if(_14==="fullscreen"){o.plugin=new dijit._editor.plugins.FullScreen({zIndex:("zIndex" in o.args)?o.args.zIndex:500});}});}