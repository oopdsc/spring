/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.embed.Quicktime"]){dojo._hasResource["dojox.embed.Quicktime"]=true;dojo.provide("dojox.embed.Quicktime");(function(d){var _1,_2={major:0,minor:0,rev:0},_3,_4={width:320,height:240,redirect:null},_5="dojox-embed-quicktime-",_6=0,_7="This content requires the <a href=\"http://www.apple.com/quicktime/download/\" title=\"Download and install QuickTime.\">QuickTime plugin</a>.";function prep(_8){_8=d.mixin(d.clone(_4),_8||{});if(!("path" in _8)&&!_8.testing){console.error("dojox.embed.Quicktime(ctor):: no path reference to a QuickTime movie was provided.");return null;}if(_8.testing){_8.path="";}if(!("id" in _8)){_8.id=_5+_6++;}return _8;};if(d.isIE){_3=(function(){try{var o=new ActiveXObject("QuickTimeCheckObject.QuickTimeCheck.1");if(o!==undefined){var v=o.QuickTimeVersion.toString(16);function p(i){return (v.substring(i,i+1)-0)||0;};_2={major:p(0),minor:p(1),rev:p(2)};return o.IsQuickTimeAvailable(0);}}catch(e){}return false;})();_1=function $D9Y_(_9){if(!_3){return {id:null,markup:_7};}_9=prep(_9);if(!_9){return null;}var s="<object classid=\"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\" "+"codebase=\"http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0\" "+"id=\""+_9.id+"\" "+"width=\""+_9.width+"\" "+"height=\""+_9.height+"\">"+"<param name=\"src\" value=\""+_9.path+"\"/>";for(var p in _9.params||{}){s+="<param name=\""+p+"\" value=\""+_9.params[p]+"\"/>";}s+="</object>";return {id:_9.id,markup:s};};}else{_3=(function(){for(var i=0,p=navigator.plugins,l=p.length;i<l;i++){if(p[i].name.indexOf("QuickTime")>-1){return true;}}return false;})();_1=function $D9Z_(_a){if(!_3){return {id:null,markup:_7};}_a=prep(_a);if(!_a){return null;}var s="<embed type=\"video/quicktime\" src=\""+_a.path+"\" "+"id=\""+_a.id+"\" "+"name=\""+_a.id+"\" "+"pluginspage=\"www.apple.com/quicktime/download\" "+"enablejavascript=\"true\" "+"width=\""+_a.width+"\" "+"height=\""+_a.height+"\"";for(var p in _a.params||{}){s+=" "+p+"=\""+_a.params[p]+"\"";}s+="></embed>";return {id:_a.id,markup:s};};}dojox.embed.Quicktime=function $D9b_(_b,_c){return dojox.embed.Quicktime.place(_b,_c);};d.mixin(dojox.embed.Quicktime,{minSupported:6,available:_3,supported:_3,version:_2,initialized:false,onInitialize:function $D9W_(){dojox.embed.Quicktime.initialized=true;},place:function $D9X_(_d,_e){var o=_1(_d);if(!(_e=d.byId(_e))){_e=d.create("div",{id:o.id+"-container"},d.body());}if(o){_e.innerHTML=o.markup;if(o.id){return d.isIE?d.byId(o.id):document[o.id];}}return null;}});if(!d.isIE){var id="-qt-version-test",o=_1({testing:true,width:4,height:4}),c=10,_f="-1000px",_10="1px";function getVer(){setTimeout(function(){var qt=document[o.id],n=d.byId(id);if(qt){try{var v=qt.GetQuickTimeVersion().split(".");dojox.embed.Quicktime.version={major:parseInt(v[0]||0),minor:parseInt(v[1]||0),rev:parseInt(v[2]||0)};if(dojox.embed.Quicktime.supported=v[0]){dojox.embed.Quicktime.onInitialize();}c=0;}catch(e){if(c--){getVer();}}}if(!c&&n){d.destroy(n);}},20);};if(d._initFired){d.create("div",{innerHTML:o.markup,id:id,style:{top:_f,left:0,width:_10,height:_10,overflow:"hidden",position:"absolute"}},d.body());}else{document.write("<div style=\"top:"+_f+";left:0;width:"+_10+";height:"+_10+";overflow:hidden;position:absolute\" id=\""+id+"\">"+o.markup+"</div>");}getVer();}else{if(d.isIE&&_3){dojox.embed.Quicktime.onInitialize();}}})(dojo);}