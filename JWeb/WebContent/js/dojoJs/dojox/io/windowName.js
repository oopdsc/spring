/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.io.windowName"]){dojo._hasResource["dojox.io.windowName"]=true;dojo.provide("dojox.io.windowName");dojox.io.windowName={send:function $DAjA_(_1,_2){_2.url+=(_2.url.match(/\?/)?"&":"?")+"windowname="+(_2.authElement?"auth":true);var _3=_2.authElement;var _4=function(_5){try{var _6=_7.ioArgs.frame.contentWindow.document;_6.write(" ");_6.close();}catch(e){}(_3||dojo.body()).removeChild(_7.ioArgs.outerFrame);return _5;};var _7=dojo._ioSetArgs(_2,_4,_4,_4);if(_2.timeout){setTimeout(function(){if(_7.fired==-1){_7.callback(new Error("Timeout"));}},_2.timeout);}var _8=dojox.io.windowName;if(dojo.body()){_8._send(_7,_1,_3,_2.onAuthLoad);}else{dojo.addOnLoad(function(){_8._send(_7,_1,_3,_2.onAuthLoad);});}return _7;},_send:function $DAjB_(_9,_a,_b,_c){var _d=_9.ioArgs;var _e=dojox.io.windowName._frameNum++;var _f=(dojo.config.dojoBlankHtmlUrl||dojo.config.dojoCallbackUrl||dojo.moduleUrl("dojo","resources/blank.html"))+"#"+_e;var _10=new dojo._Url(window.location,_f);var doc=dojo.doc;var _11=_b||dojo.body();function styleFrame(_12){_12.style.width="100%";_12.style.height="100%";_12.style.border="0px";};if(dojo.isMoz&&![].reduce){var _13=doc.createElement("iframe");styleFrame(_13);if(!_b){_13.style.display="none";}_11.appendChild(_13);var _14=_13.contentWindow;doc=_14.document;doc.write("<html><body margin='0px'><iframe style='width:100%;height:100%;border:0px' name='protectedFrame'></iframe></body></html>");doc.close();var _15=_14[0];_14.__defineGetter__(0,function(){});_14.__defineGetter__("protectedFrame",function(){});doc=_15.document;doc.write("<html><body margin='0px'></body></html>");doc.close();_11=doc.body;}var _16=_d.frame=_16=doc.createElement(dojo.isIE?"<iframe name=\""+_10+"\" onload=\"dojox.io.windowName["+_e+"]()\">":"iframe");styleFrame(_16);_d.outerFrame=_13=_13||_16;if(!_b){_13.style.display="none";}var _17=0;function getData(){var _18=_16.contentWindow.name;if(typeof _18=="string"){if(_18!=_10){_17=2;_9.ioArgs.hash=_16.contentWindow.location.hash;_9.callback(_18);}}};dojox.io.windowName[_e]=_16.onload=function(){try{if(!dojo.isMoz&&_16.contentWindow.location=="about:blank"){return;}}catch(e){}if(!_17){_17=1;if(_b){if(_c){_c();}}else{_16.contentWindow.location=_f;}}try{if(_17<2){getData();}}catch(e){}};_16.name=_10;if(_a.match(/GET/i)){dojo._ioAddQueryToUrl(_d);_16.src=_d.url;_11.appendChild(_16);if(_16.contentWindow){_16.contentWindow.location.replace(_d.url);}}else{if(_a.match(/POST/i)){_11.appendChild(_16);var _19=dojo.doc.createElement("form");dojo.body().appendChild(_19);var _1a=dojo.queryToObject(_d.query);for(var i in _1a){var _1b=_1a[i];_1b=_1b instanceof Array?_1b:[_1b];for(var j=0;j<_1b.length;j++){var _1c=doc.createElement("input");_1c.type="hidden";_1c.name=i;_1c.value=_1b[j];_19.appendChild(_1c);}}_19.method="POST";_19.action=_d.url;_19.target=_10;_19.submit();_19.parentNode.removeChild(_19);}else{throw new Error("Method "+_a+" not supported with the windowName transport");}}if(_16.contentWindow){_16.contentWindow.name=_10;}},_frameNum:0};}