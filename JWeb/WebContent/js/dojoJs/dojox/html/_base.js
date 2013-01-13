/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.html._base"]){dojo._hasResource["dojox.html._base"]=true;dojo.provide("dojox.html._base");dojo.require("dojo.html");(function(){if(dojo.isIE){var _1=/(AlphaImageLoader\([^)]*?src=(['"]))(?![a-z]+:|\/)([^\r\n;}]+?)(\2[^)]*\)\s*[;}]?)/g;}var _2=/(?:(?:@import\s*(['"])(?![a-z]+:|\/)([^\r\n;{]+?)\1)|url\(\s*(['"]?)(?![a-z]+:|\/)([^\r\n;]+?)\3\s*\))([a-z, \s]*[;}]?)/g;var _3=dojox.html._adjustCssPaths=function(_4,_5){if(!_5||!_4){return;}if(_1){_5=_5.replace(_1,function(_6,_7,_8,_9,_a){return _7+(new dojo._Url(_4,"./"+_9).toString())+_a;});}return _5.replace(_2,function(_b,_c,_d,_e,_f,_10){if(_d){return "@import \""+(new dojo._Url(_4,"./"+_d).toString())+"\""+_10;}else{return "url("+(new dojo._Url(_4,"./"+_f).toString())+")"+_10;}});};var _11=/(<[a-z][a-z0-9]*\s[^>]*)(?:(href|src)=(['"]?)([^>]*?)\3|style=(['"]?)([^>]*?)\5)([^>]*>)/gi;var _12=dojox.html._adjustHtmlPaths=function(_13,_14){var url=_13||"./";return _14.replace(_11,function(tag,_15,_16,_17,_18,_19,_1a,end){return _15+(_16?(_16+"="+_17+(new dojo._Url(url,_18).toString())+_17):("style="+_19+_3(url,_1a)+_19))+end;});};var _1b=dojox.html._snarfStyles=function(_1c,_1d,_1e){_1e.attributes=[];return _1d.replace(/(?:<style([^>]*)>([\s\S]*?)<\/style>|<link\s+(?=[^>]*rel=['"]?stylesheet)([^>]*?href=(['"])([^>]*?)\4[^>\/]*)\/?>)/gi,function(_1f,_20,_21,_22,_23,_24){var i,_25=(_20||_22||"").replace(/^\s*([\s\S]*?)\s*$/i,"$1");if(_21){i=_1e.push(_1c?_3(_1c,_21):_21);}else{i=_1e.push("@import \""+_24+"\";");_25=_25.replace(/\s*(?:rel|href)=(['"])?[^\s]*\1\s*/gi,"");}if(_25){_25=_25.split(/\s+/);var _26={},tmp;for(var j=0,e=_25.length;j<e;j++){tmp=_25[j].split("=");_26[tmp[0]]=tmp[1].replace(/^\s*['"]?([\s\S]*?)['"]?\s*$/,"$1");}_1e.attributes[i-1]=_26;}return "";});};var _27=dojox.html._snarfScripts=function(_28,_29){_29.code="";_28=_28.replace(/<[!][-][-](.|\s){5,}?[-][-]>/g,function(_2a){return _2a.replace(/<(\/?)script\b/ig,"&lt;$1Script");});function download(src){if(_29.downloadRemote){src=src.replace(/&([a-z0-9#]+);/g,function(m,_2b){switch(_2b){case "amp":return "&";case "gt":return ">";case "lt":return "<";default:return _2b.charAt(0)=="#"?String.fromCharCode(_2b.substring(1)):"&"+_2b+";";}});dojo.xhrGet({url:src,sync:true,load:function $DAgW_(_2c){_29.code+=_2c+";";},error:_29.errBack});}};return _28.replace(/<script\s*(?![^>]*type=['"]?(?:dojo\/|text\/html\b))(?:[^>]*?(?:src=(['"]?)([^>]*?)\1[^>]*)?)*>([\s\S]*?)<\/script>/gi,function(_2d,_2e,src,_2f){if(src){download(src);}else{_29.code+=_2f;}return "";});};var _30=dojox.html.evalInGlobal=function(_31,_32){_32=_32||dojo.doc.body;var n=_32.ownerDocument.createElement("script");n.type="text/javascript";_32.appendChild(n);n.text=_31;};dojo.declare("dojox.html._ContentSetter",[dojo.html._ContentSetter],{adjustPaths:false,referencePath:".",renderStyles:false,executeScripts:false,scriptHasHooks:false,scriptHookReplacement:null,_renderStyles:function $DAgX_(_33){this._styleNodes=[];var st,att,_34,doc=this.node.ownerDocument;var _35=doc.getElementsByTagName("head")[0];for(var i=0,e=_33.length;i<e;i++){_34=_33[i];att=_33.attributes[i];st=doc.createElement("style");st.setAttribute("type","text/css");for(var x in att){st.setAttribute(x,att[x]);}this._styleNodes.push(st);_35.appendChild(st);if(st.styleSheet){st.styleSheet.cssText=_34;}else{st.appendChild(doc.createTextNode(_34));}}},empty:function $DAgY_(){this.inherited("empty",arguments);this._styles=[];},onBegin:function $DAgZ_(){this.inherited("onBegin",arguments);var _36=this.content,_37=this.node;var _38=this._styles;if(dojo.isString(_36)){if(this.adjustPaths&&this.referencePath){_36=_12(this.referencePath,_36);}if(this.renderStyles||this.cleanContent){_36=_1b(this.referencePath,_36,_38);}if(this.executeScripts){var _39=this;var _3a={downloadRemote:true,errBack:function $DAga_(e){_39._onError.call(_39,"Exec","Error downloading remote script in \""+_39.id+"\"",e);}};_36=_27(_36,_3a);this._code=_3a.code;}}this.content=_36;},onEnd:function $DAgb_(){var _3b=this._code,_3c=this._styles;if(this._styleNodes&&this._styleNodes.length){while(this._styleNodes.length){dojo.destroy(this._styleNodes.pop());}}if(this.renderStyles&&_3c&&_3c.length){this._renderStyles(_3c);}if(this.executeScripts&&_3b){if(this.cleanContent){_3b=_3b.replace(/(<!--|(?:\/\/)?-->|<!\[CDATA\[|\]\]>)/g,"");}if(this.scriptHasHooks){_3b=_3b.replace(/_container_(?!\s*=[^=])/g,this.scriptHookReplacement);}try{_30(_3b,this.node);}catch(e){this._onError("Exec","Error eval script in "+this.id+", "+e.message,e);}}this.inherited("onEnd",arguments);},tearDown:function $DAgc_(){this.inherited(arguments);delete this._styles;if(this._styleNodes&&this._styleNodes.length){while(this._styleNodes.length){dojo.destroy(this._styleNodes.pop());}}delete this._styleNodes;dojo.mixin(this,dojo.getObject(this.declaredClass).prototype);}});dojox.html.set=function $DAgd_(_3d,_3e,_3f){if(!_3f){return dojo.html._setNodeContent(_3d,_3e,true);}else{var op=new dojox.html._ContentSetter(dojo.mixin(_3f,{content:_3e,node:_3d}));return op.set();}};})();}