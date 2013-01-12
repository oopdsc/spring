/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit._editor.RichText"]){dojo._hasResource["dijit._editor.RichText"]=true;dojo.provide("dijit._editor.RichText");dojo.require("dijit._Widget");dojo.require("dijit._editor.selection");dojo.require("dijit._editor.range");dojo.require("dijit._editor.html");if(!dojo.config["useXDomain"]||dojo.config["allowXdRichTextSave"]){if(dojo._postLoad){(function(){var _1=dojo.doc.createElement("textarea");_1.id=dijit._scopeName+"._editor.RichText.savedContent";dojo.style(_1,{display:"none",position:"absolute",top:"-100px",height:"3px",width:"3px"});dojo.body().appendChild(_1);})();}else{try{dojo.doc.write("<textarea id=\""+dijit._scopeName+"._editor.RichText.savedContent\" "+"style=\"display:none;position:absolute;top:-100px;left:-100px;height:3px;width:3px;overflow:hidden;\"></textarea>");}catch(e){}}}dojo.declare("dijit._editor.RichText",dijit._Widget,{constructor:function $DSl_(_2){this.contentPreFilters=[];this.contentPostFilters=[];this.contentDomPreFilters=[];this.contentDomPostFilters=[];this.editingAreaStyleSheets=[];this.events=[].concat(this.events);this._keyHandlers={};this.contentPreFilters.push(dojo.hitch(this,"_preFixUrlAttributes"));if(dojo.isMoz){this.contentPreFilters.push(this._normalizeFontStyle);this.contentPostFilters.push(this._removeMozBogus);}if(dojo.isWebKit){this.contentPreFilters.push(this._removeWebkitBogus);this.contentPostFilters.push(this._removeWebkitBogus);}if(dojo.isIE){this.contentPostFilters.push(this._normalizeFontStyle);}this.onLoadDeferred=new dojo.Deferred();},inheritWidth:false,focusOnLoad:false,name:"",styleSheets:"",_content:"",height:"300px",minHeight:"1em",isClosed:true,isLoaded:false,_SEPARATOR:"@@**%%__RICHTEXTBOUNDRY__%%**@@",onLoadDeferred:null,isTabIndent:false,disableSpellCheck:false,postCreate:function $DSm_(){if("textarea"==this.domNode.tagName.toLowerCase()){console.warn("RichText should not be used with the TEXTAREA tag.  See dijit._editor.RichText docs.");}dojo.publish(dijit._scopeName+"._editor.RichText::init",[this]);this.open();this.setupDefaultShortcuts();},setupDefaultShortcuts:function $DSn_(){var _3=dojo.hitch(this,function(_4,_5){return function(){return !this.execCommand(_4,_5);};});var _6={b:_3("bold"),i:_3("italic"),u:_3("underline"),a:_3("selectall"),s:function $DSo_(){this.save(true);},m:function $DSp_(){this.isTabIndent=!this.isTabIndent;},"1":_3("formatblock","h1"),"2":_3("formatblock","h2"),"3":_3("formatblock","h3"),"4":_3("formatblock","h4"),"\\":_3("insertunorderedlist")};if(!dojo.isIE){_6.Z=_3("redo");}for(var _7 in _6){this.addKeyHandler(_7,true,false,_6[_7]);}},events:["onKeyPress","onKeyDown","onKeyUp","onClick"],captureEvents:[],_editorCommandsLocalized:false,_localizeEditorCommands:function $DSq_(){if(this._editorCommandsLocalized){return;}this._editorCommandsLocalized=true;var _8=["div","p","pre","h1","h2","h3","h4","h5","h6","ol","ul","address"];var _9="",_a,i=0;while((_a=_8[i++])){if(_a.charAt(1)!="l"){_9+="<"+_a+"><span>content</span></"+_a+"><br/>";}else{_9+="<"+_a+"><li>content</li></"+_a+"><br/>";}}var _b=dojo.doc.createElement("div");dojo.style(_b,{position:"absolute",top:"-2000px"});dojo.doc.body.appendChild(_b);_b.innerHTML=_9;var _c=_b.firstChild;while(_c){dijit._editor.selection.selectElement(_c.firstChild);dojo.withGlobal(this.window,"selectElement",dijit._editor.selection,[_c.firstChild]);var _d=_c.tagName.toLowerCase();this._local2NativeFormatNames[_d]=document.queryCommandValue("formatblock");this._native2LocalFormatNames[this._local2NativeFormatNames[_d]]=_d;_c=_c.nextSibling.nextSibling;}dojo.body().removeChild(_b);},open:function $DSr_(_e){if(!this.onLoadDeferred||this.onLoadDeferred.fired>=0){this.onLoadDeferred=new dojo.Deferred();}if(!this.isClosed){this.close();}dojo.publish(dijit._scopeName+"._editor.RichText::open",[this]);this._content="";if(arguments.length==1&&_e.nodeName){this.domNode=_e;}var dn=this.domNode;var _f;if(dn.nodeName&&dn.nodeName.toLowerCase()=="textarea"){var ta=(this.textarea=dn);this.name=ta.name;_f=ta.value;dn=this.domNode=dojo.doc.createElement("div");dn.setAttribute("widgetId",this.id);ta.removeAttribute("widgetId");dn.cssText=ta.cssText;dn.className+=" "+ta.className;dojo.place(dn,ta,"before");var _10=dojo.hitch(this,function(){dojo.style(ta,{display:"block",position:"absolute",top:"-1000px"});if(dojo.isIE){var s=ta.style;this.__overflow=s.overflow;s.overflow="hidden";}});if(dojo.isIE){setTimeout(_10,10);}else{_10();}if(ta.form){dojo.connect(ta.form,"onsubmit",this,function(){ta.value=this.getValue();});}}else{_f=dijit._editor.getChildrenHtml(dn);dn.innerHTML="";}var _11=dojo.contentBox(dn);this._oldHeight=_11.h;this._oldWidth=_11.w;this.savedContent=_f;if(dn.nodeName&&dn.nodeName=="LI"){dn.innerHTML=" <br>";}this.header=dn.ownerDocument.createElement("div");dn.appendChild(this.header);this.editingArea=dn.ownerDocument.createElement("div");dn.appendChild(this.editingArea);this.footer=dn.ownerDocument.createElement("div");dn.appendChild(this.footer);if(this.name!==""&&(!dojo.config["useXDomain"]||dojo.config["allowXdRichTextSave"])){var _12=dojo.byId(dijit._scopeName+"._editor.RichText.savedContent");if(_12.value!==""){var _13=_12.value.split(this._SEPARATOR),i=0,dat;while((dat=_13[i++])){var _14=dat.split(":");if(_14[0]==this.name){_f=_14[1];_13.splice(i,1);break;}}}dojo.addOnUnload(dojo.hitch(this,"_saveContent"));}this.isClosed=false;var ifr=(this.editorObject=this.iframe=dojo.doc.createElement("iframe"));ifr.id=this.id+"_iframe";this._iframeSrc=this._getIframeDocTxt();ifr.style.border="none";ifr.style.width="100%";if(this._layoutMode){ifr.style.height="100%";}else{if(dojo.isIE>=7){if(this.height){ifr.style.height=this.height;}if(this.minHeight){ifr.style.minHeight=this.minHeight;}}else{ifr.style.height=this.height?this.height:this.minHeight;}}ifr.frameBorder=0;ifr._loadFunc=dojo.hitch(this,function(win){this.window=win;this.document=this.window.document;if(dojo.isIE){this._localizeEditorCommands();}this.onLoad(_f);this.savedContent=this.getValue(true);});var s="javascript:parent."+dijit._scopeName+".byId(\""+this.id+"\")._iframeSrc";ifr.setAttribute("src",s);this.editingArea.appendChild(ifr);if(dojo.isSafari){setTimeout(function(){ifr.setAttribute("src",s);},0);}if(dn.nodeName=="LI"){dn.lastChild.style.marginTop="-1.2em";}dojo.addClass(this.domNode,"RichTextEditable");},_local2NativeFormatNames:{},_native2LocalFormatNames:{},_getIframeDocTxt:function $DSs_(){var _15=dojo.getComputedStyle(this.domNode);var _16="";if(dojo.isIE||(!this.height&&!dojo.isMoz)){_16="<div></div>";}else{if(dojo.isMoz){this._cursorToStart=true;_16="&nbsp;";}}var _17=[_15.fontWeight,_15.fontSize,_15.fontFamily].join(" ");var _18=_15.lineHeight;if(_18.indexOf("px")>=0){_18=parseFloat(_18)/parseFloat(_15.fontSize);}else{if(_18.indexOf("em")>=0){_18=parseFloat(_18);}else{_18="normal";}}var _19="";this.style.replace(/(^|;)(line-|font-?)[^;]+/g,function(_1a){_19+=_1a.replace(/^;/g,"")+";";});var _1b=dojo.query("label[for=\""+this.id+"\"]");return [this.isLeftToRight()?"<html><head>":"<html dir='rtl'><head>",(dojo.isMoz&&_1b.length?"<title>"+_1b[0].innerHTML+"</title>":""),"<meta http-equiv='Content-Type' content='text/html'>","<style>","body,html {","\tbackground:transparent;","\tpadding: 1px 0 0 0;","\tmargin: -1px 0 0 0;",(dojo.isWebKit?"\twidth: 100%;":""),(dojo.isWebKit?"\theight: 100%;":""),"}","body{","\ttop:0px; left:0px; right:0px;","\tfont:",_17,";",((this.height||dojo.isOpera)?"":"position: fixed;"),"\tmin-height:",this.minHeight,";","\tline-height:",_18,"}","p{ margin: 1em 0; }",(this.height?"":"body,html{overflow-y:hidden;/*for IE*/} body > div {overflow-x:auto;/*FF:horizontal scrollbar*/ overflow-y:hidden;/*safari*/ min-height:"+this.minHeight+";/*safari*/}"),"li > ul:-moz-first-node, li > ol:-moz-first-node{ padding-top: 1.2em; } ","li{ min-height:1.2em; }","</style>",this._applyEditingAreaStyleSheets(),"</head><body onload='frameElement._loadFunc(window,document)' style='"+_19+"'>",_16,"</body></html>"].join("");},_applyEditingAreaStyleSheets:function $DSt_(){var _1c=[];if(this.styleSheets){_1c=this.styleSheets.split(";");this.styleSheets="";}_1c=_1c.concat(this.editingAreaStyleSheets);this.editingAreaStyleSheets=[];var _1d="",i=0,url;while((url=_1c[i++])){var _1e=(new dojo._Url(dojo.global.location,url)).toString();this.editingAreaStyleSheets.push(_1e);_1d+="<link rel=\"stylesheet\" type=\"text/css\" href=\""+_1e+"\"/>";}return _1d;},addStyleSheet:function $DSu_(uri){var url=uri.toString();if(url.charAt(0)=="."||(url.charAt(0)!="/"&&!uri.host)){url=(new dojo._Url(dojo.global.location,url)).toString();}if(dojo.indexOf(this.editingAreaStyleSheets,url)>-1){return;}this.editingAreaStyleSheets.push(url);this.onLoadDeferred.addCallback(dojo.hitch(function(){if(this.document.createStyleSheet){this.document.createStyleSheet(url);}else{var _1f=this.document.getElementsByTagName("head")[0];var _20=this.document.createElement("link");_20.rel="stylesheet";_20.type="text/css";_20.href=url;_1f.appendChild(_20);}}));},removeStyleSheet:function $DSv_(uri){var url=uri.toString();if(url.charAt(0)=="."||(url.charAt(0)!="/"&&!uri.host)){url=(new dojo._Url(dojo.global.location,url)).toString();}var _21=dojo.indexOf(this.editingAreaStyleSheets,url);if(_21==-1){return;}delete this.editingAreaStyleSheets[_21];dojo.withGlobal(this.window,"query",dojo,["link:[href=\""+url+"\"]"]).orphan();},disabled:false,_mozSettingProps:{"styleWithCSS":false},_setDisabledAttr:function $DSw_(_22){this.disabled=_22;if(!this.isLoaded){return;}_22=!!_22;if(dojo.isIE||dojo.isWebKit||dojo.isOpera){var _23=dojo.isIE&&(this.isLoaded||!this.focusOnLoad);if(_23){this.editNode.unselectable="on";}this.editNode.contentEditable=!_22;if(_23){var _24=this;setTimeout(function(){_24.editNode.unselectable="off";},0);}}else{try{this.document.designMode=(_22?"off":"on");}catch(e){return;}if(!_22&&this._mozSettingProps){var ps=this._mozSettingProps;for(var n in ps){if(ps.hasOwnProperty(n)){try{this.document.execCommand(n,false,ps[n]);}catch(e2){}}}}}this._disabledOK=true;},onLoad:function $DSx_(_25){if(!this.window.__registeredWindow){this.window.__registeredWindow=true;this._iframeRegHandle=dijit.registerIframe(this.iframe);}if(!dojo.isIE&&(this.height||dojo.isMoz)){this.editNode=this.document.body;}else{this.editNode=this.document.body.firstChild;var _26=this;if(dojo.isIE){var _27=(this.tabStop=dojo.doc.createElement("<div tabIndex=-1>"));this.editingArea.appendChild(_27);this.iframe.onfocus=function $DTp_(){_26.editNode.setActive();};}}this.focusNode=this.editNode;var _28=this.events.concat(this.captureEvents);var ap=this.iframe?this.document:this.editNode;dojo.forEach(_28,function(_29){this.connect(ap,_29.toLowerCase(),_29);},this);if(dojo.isIE){this.connect(this.document,"onmousedown","_onIEMouseDown");this.editNode.style.zoom=1;}if(dojo.isWebKit){this._webkitListener=this.connect(this.document,"onmouseup","onDisplayChanged");}if(dojo.isIE){try{this.document.execCommand("RespectVisibilityInDesign",true,null);}catch(e){}}this.isLoaded=true;this.attr("disabled",this.disabled);this.setValue(_25);if(this.onLoadDeferred){this.onLoadDeferred.callback(true);}this.onDisplayChanged();if(this.focusOnLoad){dojo.addOnLoad(dojo.hitch(this,function(){setTimeout(dojo.hitch(this,"focus"),this.updateInterval);}));}},onKeyDown:function $DSy_(e){if(e.keyCode===dojo.keys.TAB&&this.isTabIndent){dojo.stopEvent(e);if(this.queryCommandEnabled((e.shiftKey?"outdent":"indent"))){this.execCommand((e.shiftKey?"outdent":"indent"));}}if(dojo.isIE){if(e.keyCode==dojo.keys.TAB&&!this.isTabIndent){if(e.shiftKey&&!e.ctrlKey&&!e.altKey){this.iframe.focus();}else{if(!e.shiftKey&&!e.ctrlKey&&!e.altKey){this.tabStop.focus();}}}else{if(e.keyCode===dojo.keys.BACKSPACE&&this.document.selection.type==="Control"){dojo.stopEvent(e);this.execCommand("delete");}else{if((65<=e.keyCode&&e.keyCode<=90)||(e.keyCode>=37&&e.keyCode<=40)){e.charCode=e.keyCode;this.onKeyPress(e);}}}}return true;},onKeyUp:function $DSz_(e){return;},setDisabled:function $DS0_(_2a){dojo.deprecated("dijit.Editor::setDisabled is deprecated","use dijit.Editor::attr(\"disabled\",boolean) instead",2);this.attr("disabled",_2a);},_setValueAttr:function $DS1_(_2b){this.setValue(_2b);},_setDisableSpellCheckAttr:function $DS2_(_2c){if(this.document){dojo.attr(this.document.body,"spellcheck",!_2c);}else{this.onLoadDeferred.addCallback(dojo.hitch(this,function(){dojo.attr(this.document.body,"spellcheck",!_2c);}));}this.disableSpellCheck=_2c;},onKeyPress:function $DS3_(e){var c=(e.keyChar&&e.keyChar.toLowerCase())||e.keyCode,_2d=this._keyHandlers[c],_2e=arguments;if(_2d&&!e.altKey){dojo.some(_2d,function(h){if(!(h.shift^e.shiftKey)&&!(h.ctrl^e.ctrlKey)){if(!h.handler.apply(this,_2e)){e.preventDefault();}return true;}},this);}if(!this._onKeyHitch){this._onKeyHitch=dojo.hitch(this,"onKeyPressed");}setTimeout(this._onKeyHitch,1);return true;},addKeyHandler:function $DS4_(key,_2f,_30,_31){if(!dojo.isArray(this._keyHandlers[key])){this._keyHandlers[key]=[];}this._keyHandlers[key].push({shift:_30||false,ctrl:_2f||false,handler:_31});},onKeyPressed:function $DS5_(){this.onDisplayChanged();},onClick:function $DS6_(e){this.onDisplayChanged(e);},_onIEMouseDown:function $DS7_(e){if(!this._focused&&!this.disabled){this.focus();}},_onBlur:function $DS8_(e){this.inherited(arguments);var _32=this.getValue(true);if(_32!=this.savedContent){this.onChange(_32);this.savedContent=_32;}},_onFocus:function $DS9_(e){if(!this.disabled){if(!this._disabledOK){this.attr("disabled",false);}this.inherited(arguments);}},blur:function $DTA_(){if(!dojo.isIE&&this.window.document.documentElement&&this.window.document.documentElement.focus){this.window.document.documentElement.focus();}else{if(dojo.doc.body.focus){dojo.doc.body.focus();}}},focus:function $DTB_(){if(!dojo.isIE){dijit.focus(this.iframe);if(this._cursorToStart){delete this._cursorToStart;if(this.editNode.childNodes&&this.editNode.childNodes.length===1&&this.editNode.innerHTML==="&nbsp;"){this.placeCursorAtStart();}}}else{if(this.editNode&&this.editNode.focus){this.iframe.fireEvent("onfocus",document.createEventObject());}}},updateInterval:200,_updateTimer:null,onDisplayChanged:function $DTC_(e){if(this._updateTimer){clearTimeout(this._updateTimer);}if(!this._updateHandler){this._updateHandler=dojo.hitch(this,"onNormalizedDisplayChanged");}this._updateTimer=setTimeout(this._updateHandler,this.updateInterval);},onNormalizedDisplayChanged:function $DTD_(){delete this._updateTimer;},onChange:function $DTE_(_33){},_normalizeCommand:function $DTF_(cmd,_34){var _35=cmd.toLowerCase();if(_35=="formatblock"){if(dojo.isSafari&&_34===undefined){_35="heading";}}else{if(_35=="hilitecolor"&&!dojo.isMoz){_35="backcolor";}}return _35;},_qcaCache:{},queryCommandAvailable:function $DTG_(_36){var ca=this._qcaCache[_36];if(ca!==undefined){return ca;}return (this._qcaCache[_36]=this._queryCommandAvailable(_36));},_queryCommandAvailable:function $DTH_(_37){var ie=1;var _38=1<<1;var _39=1<<2;var _3a=1<<3;var _3b=1<<4;function isSupportedBy(_3c){return {ie:Boolean(_3c&ie),mozilla:Boolean(_3c&_38),webkit:Boolean(_3c&_39),webkit420:Boolean(_3c&_3b),opera:Boolean(_3c&_3a)};};var _3d=null;switch(_37.toLowerCase()){case "bold":case "italic":case "underline":case "subscript":case "superscript":case "fontname":case "fontsize":case "forecolor":case "hilitecolor":case "justifycenter":case "justifyfull":case "justifyleft":case "justifyright":case "delete":case "selectall":case "toggledir":_3d=isSupportedBy(_38|ie|_39|_3a);break;case "createlink":case "unlink":case "removeformat":case "inserthorizontalrule":case "insertimage":case "insertorderedlist":case "insertunorderedlist":case "indent":case "outdent":case "formatblock":case "inserthtml":case "undo":case "redo":case "strikethrough":case "tabindent":_3d=isSupportedBy(_38|ie|_3a|_3b);break;case "blockdirltr":case "blockdirrtl":case "dirltr":case "dirrtl":case "inlinedirltr":case "inlinedirrtl":_3d=isSupportedBy(ie);break;case "cut":case "copy":case "paste":_3d=isSupportedBy(ie|_38|_3b);break;case "inserttable":_3d=isSupportedBy(_38|ie);break;case "insertcell":case "insertcol":case "insertrow":case "deletecells":case "deletecols":case "deleterows":case "mergecells":case "splitcell":_3d=isSupportedBy(ie|_38);break;default:return false;}return (dojo.isIE&&_3d.ie)||(dojo.isMoz&&_3d.mozilla)||(dojo.isWebKit&&_3d.webkit)||(dojo.isWebKit>420&&_3d.webkit420)||(dojo.isOpera&&_3d.opera);},execCommand:function $DTI_(_3e,_3f){var _40;this.focus();_3e=this._normalizeCommand(_3e,_3f);if(_3f!==undefined){if(_3e=="heading"){throw new Error("unimplemented");}else{if((_3e=="formatblock")&&dojo.isIE){_3f="<"+_3f+">";}}}var _41="_"+_3e+"Impl";if(this[_41]){_40=this[_41](_3f);}else{_3f=arguments.length>1?_3f:null;if(_3f||_3e!="createlink"){_40=this.document.execCommand(_3e,false,_3f);}}this.onDisplayChanged();return _40;},queryCommandEnabled:function $DTJ_(_42){if(this.disabled||!this._disabledOK){return false;}_42=this._normalizeCommand(_42);if(dojo.isMoz||dojo.isWebKit){if(_42=="unlink"){return this._sCall("hasAncestorElement",["a"]);}else{if(_42=="inserttable"){return true;}}}if(dojo.isWebKit){if(_42=="copy"){_42="cut";}else{if(_42=="paste"){return true;}}}var _43=dojo.isIE?this.document.selection.createRange():this.document;try{return _43.queryCommandEnabled(_42);}catch(e){return false;}},queryCommandState:function $DTK_(_44){if(this.disabled||!this._disabledOK){return false;}_44=this._normalizeCommand(_44);try{return this.document.queryCommandState(_44);}catch(e){return false;}},queryCommandValue:function $DTL_(_45){if(this.disabled||!this._disabledOK){return false;}var r;_45=this._normalizeCommand(_45);if(dojo.isIE&&_45=="formatblock"){r=this._native2LocalFormatNames[this.document.queryCommandValue(_45)];}else{if(dojo.isMoz&&_45==="hilitecolor"){var _46;try{_46=this.document.queryCommandValue("styleWithCSS");}catch(e){_46=false;}this.document.execCommand("styleWithCSS",false,true);r=this.document.queryCommandValue(_45);this.document.execCommand("styleWithCSS",false,_46);}else{r=this.document.queryCommandValue(_45);}}return r;},_sCall:function $DTM_(_47,_48){return dojo.withGlobal(this.window,_47,dijit._editor.selection,_48);},placeCursorAtStart:function $DTN_(){this.focus();var _49=false;if(dojo.isMoz){var _4a=this.editNode.firstChild;while(_4a){if(_4a.nodeType==3){if(_4a.nodeValue.replace(/^\s+|\s+$/g,"").length>0){_49=true;this._sCall("selectElement",[_4a]);break;}}else{if(_4a.nodeType==1){_49=true;var tg=_4a.tagName?_4a.tagName.toLowerCase():"";if(/br|input|img|base|meta|area|basefont|hr|link/.test(tg)){this._sCall("selectElement",[_4a]);}else{this._sCall("selectElementChildren",[_4a]);}break;}}_4a=_4a.nextSibling;}}else{_49=true;this._sCall("selectElementChildren",[this.editNode]);}if(_49){this._sCall("collapse",[true]);}},placeCursorAtEnd:function $DTO_(){this.focus();var _4b=false;if(dojo.isMoz){var _4c=this.editNode.lastChild;while(_4c){if(_4c.nodeType==3){if(_4c.nodeValue.replace(/^\s+|\s+$/g,"").length>0){_4b=true;this._sCall("selectElement",[_4c]);break;}}else{if(_4c.nodeType==1){_4b=true;if(_4c.lastChild){this._sCall("selectElement",[_4c.lastChild]);}else{this._sCall("selectElement",[_4c]);}break;}}_4c=_4c.previousSibling;}}else{_4b=true;this._sCall("selectElementChildren",[this.editNode]);}if(_4b){this._sCall("collapse",[false]);}},getValue:function $DTP_(_4d){if(this.textarea){if(this.isClosed||!this.isLoaded){return this.textarea.value;}}return this._postFilterContent(null,_4d);},_getValueAttr:function $DTQ_(){return this.getValue(true);},setValue:function $DTR_(_4e){if(!this.isLoaded){this.onLoadDeferred.addCallback(dojo.hitch(this,function(){this.setValue(_4e);}));return;}if(this.textarea&&(this.isClosed||!this.isLoaded)){this.textarea.value=_4e;}else{_4e=this._preFilterContent(_4e);var _4f=this.isClosed?this.domNode:this.editNode;if(!_4e&&dojo.isWebKit){this._cursorToStart=true;_4e="&nbsp;";}_4f.innerHTML=_4e;this._preDomFilterContent(_4f);}this.onDisplayChanged();},replaceValue:function $DTS_(_50){if(this.isClosed){this.setValue(_50);}else{if(this.window&&this.window.getSelection&&!dojo.isMoz){this.setValue(_50);}else{if(this.window&&this.window.getSelection){_50=this._preFilterContent(_50);this.execCommand("selectall");if(!_50){this._cursorToStart=true;_50="&nbsp;";}this.execCommand("inserthtml",_50);this._preDomFilterContent(this.editNode);}else{if(this.document&&this.document.selection){this.setValue(_50);}}}}},_preFilterContent:function $DTT_(_51){var ec=_51;dojo.forEach(this.contentPreFilters,function(ef){if(ef){ec=ef(ec);}});return ec;},_preDomFilterContent:function $DTU_(dom){dom=dom||this.editNode;dojo.forEach(this.contentDomPreFilters,function(ef){if(ef&&dojo.isFunction(ef)){ef(dom);}},this);},_postFilterContent:function $DTV_(dom,_52){var ec;if(!dojo.isString(dom)){dom=dom||this.editNode;if(this.contentDomPostFilters.length){if(_52){dom=dojo.clone(dom);}dojo.forEach(this.contentDomPostFilters,function(ef){dom=ef(dom);});}ec=dijit._editor.getChildrenHtml(dom);}else{ec=dom;}if(!dojo.trim(ec.replace(/^\xA0\xA0*/,"").replace(/\xA0\xA0*$/,"")).length){ec="";}dojo.forEach(this.contentPostFilters,function(ef){ec=ef(ec);});return ec;},_saveContent:function $DTW_(e){var _53=dojo.byId(dijit._scopeName+"._editor.RichText.savedContent");if(_53.value){_53.value+=this._SEPARATOR;}_53.value+=this.name+":"+this.getValue(true);},escapeXml:function $DTX_(str,_54){str=str.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");if(!_54){str=str.replace(/'/gm,"&#39;");}return str;},getNodeHtml:function $DTY_(_55){dojo.deprecated("dijit.Editor::getNodeHtml is deprecated","use dijit._editor.getNodeHtml instead",2);return dijit._editor.getNodeHtml(_55);},getNodeChildrenHtml:function $DTZ_(dom){dojo.deprecated("dijit.Editor::getNodeChildrenHtml is deprecated","use dijit._editor.getChildrenHtml instead",2);return dijit._editor.getChildrenHtml(dom);},close:function $DTa_(_56){if(this.isClosed){return false;}if(!arguments.length){_56=true;}this._content=this.getValue();var _57=(this.savedContent!=this._content);if(this.interval){clearInterval(this.interval);}if(this._webkitListener){this.disconnect(this._webkitListener);delete this._webkitListener;}if(dojo.isIE){this.iframe.onfocus=null;}this.iframe._loadFunc=null;if(this._iframeRegHandle){dijit.unregisterIframe(this._iframeRegHandle);delete this._iframeRegHandle;}if(this.textarea){var s=this.textarea.style;s.position="";s.left=s.top="";if(dojo.isIE){s.overflow=this.__overflow;this.__overflow=null;}this.textarea.value=_56?this._content:this.savedContent;dojo.destroy(this.domNode);this.domNode=this.textarea;}else{this.domNode.innerHTML=_56?this._content:this.savedContent;}delete this.iframe;dojo.removeClass(this.domNode,"RichTextEditable");this.isClosed=true;this.isLoaded=false;delete this.editNode;delete this.focusNode;if(this.window&&this.window._frameElement){this.window._frameElement=null;}this.window=null;this.document=null;this.editingArea=null;this.editorObject=null;return _57;},destroy:function $DTb_(){if(!this.isClosed){this.close(false);}this.inherited(arguments);},_removeMozBogus:function $DTc_(_58){return _58.replace(/\stype="_moz"/gi,"").replace(/\s_moz_dirty=""/gi,"").replace(/_moz_resizing="(true|false)"/gi,"");},_removeWebkitBogus:function $DTd_(_59){_59=_59.replace(/\sclass="webkit-block-placeholder"/gi,"");_59=_59.replace(/\sclass="apple-style-span"/gi,"");return _59;},_normalizeFontStyle:function $DTe_(_5a){return _5a.replace(/<(\/)?strong([ \>])/gi,"<$1b$2").replace(/<(\/)?em([ \>])/gi,"<$1i$2");},_preFixUrlAttributes:function $DTf_(_5b){return _5b.replace(/(?:(<a(?=\s).*?\shref=)("|')(.*?)\2)|(?:(<a\s.*?href=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2").replace(/(?:(<img(?=\s).*?\ssrc=)("|')(.*?)\2)|(?:(<img\s.*?src=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2");},_inserthorizontalruleImpl:function $DTg_(_5c){if(dojo.isIE){return this._inserthtmlImpl("<hr>");}return this.document.execCommand("inserthorizontalrule",false,_5c);},_unlinkImpl:function $DTh_(_5d){if((this.queryCommandEnabled("unlink"))&&(dojo.isMoz||dojo.isWebKit)){var a=this._sCall("getAncestorElement",["a"]);this._sCall("selectElement",[a]);return this.document.execCommand("unlink",false,null);}return this.document.execCommand("unlink",false,_5d);},_hilitecolorImpl:function $DTi_(_5e){var _5f;if(dojo.isMoz){this.document.execCommand("styleWithCSS",false,true);_5f=this.document.execCommand("hilitecolor",false,_5e);this.document.execCommand("styleWithCSS",false,false);}else{_5f=this.document.execCommand("hilitecolor",false,_5e);}return _5f;},_backcolorImpl:function $DTj_(_60){if(dojo.isIE){_60=_60?_60:null;}return this.document.execCommand("backcolor",false,_60);},_forecolorImpl:function $DTk_(_61){if(dojo.isIE){_61=_61?_61:null;}return this.document.execCommand("forecolor",false,_61);},_inserthtmlImpl:function $DTl_(_62){_62=this._preFilterContent(_62);var rv=true;if(dojo.isIE){var _63=this.document.selection.createRange();if(this.document.selection.type.toUpperCase()=="CONTROL"){var n=_63.item(0);while(_63.length){_63.remove(_63.item(0));}n.outerHTML=_62;}else{_63.pasteHTML(_62);}_63.select();}else{if(dojo.isMoz&&!_62.length){this._sCall("remove");}else{rv=this.document.execCommand("inserthtml",false,_62);}}return rv;},getHeaderHeight:function $DTm_(){return this._getNodeChildrenHeight(this.header);},getFooterHeight:function $DTn_(){return this._getNodeChildrenHeight(this.footer);},_getNodeChildrenHeight:function $DTo_(_64){var h=0;if(_64&&_64.childNodes){var i;for(i=0;i<_64.childNodes.length;i++){var _65=dojo.position(_64.childNodes[i]);h+=_65.h;}}return h;}});}