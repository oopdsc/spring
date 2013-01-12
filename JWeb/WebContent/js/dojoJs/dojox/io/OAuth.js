/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.io.OAuth"]){dojo._hasResource["dojox.io.OAuth"]=true;dojo.provide("dojox.io.OAuth");dojo.require("dojox.encoding.digests.SHA1");dojox.io.OAuth=new (function(){var _1=this.encode=function(s){if(!s){return "";}return encodeURIComponent(s).replace(/\!/g,"%21").replace(/\*/g,"%2A").replace(/\'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29");};var _2=this.decode=function(_3){var a=[],_4=_3.split("&");for(var i=0,l=_4.length;i<l;i++){var _5=_4[i];if(_4[i]==""){continue;}if(_4[i].indexOf("=")>-1){var _6=_4[i].split("=");a.push([decodeURIComponent(_6[0]),decodeURIComponent(_6[1])]);}else{a.push([decodeURIComponent(_4[i]),null]);}}return a;};function parseUrl(_7){var _8=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],_9=/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,_a=_9.exec(_7),_b={},i=_8.length;while(i--){_b[_8[i]]=_a[i]||"";}var p=_b.protocol.toLowerCase(),a=_b.authority.toLowerCase(),b=(p=="http"&&_b.port==80)||(p=="https"&&_b.port==443);if(b){if(a.lastIndexOf(":")>-1){a=a.substring(0,a.lastIndexOf(":"));}}var _c=_b.path||"/";_b.url=p+"://"+a+_c;return _b;};var _d="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";function nonce(_e){var s="",tl=_d.length;for(var i=0;i<_e;i++){s+=_d.charAt(Math.floor(Math.random()*tl));}return s;};function timestamp(){return Math.floor(new Date().valueOf()/1000)-2;};function signature(_f,key,_10){if(_10&&_10!="PLAINTEXT"&&_10!="HMAC-SHA1"){throw new Error("dojox.io.OAuth: the only supported signature encodings are PLAINTEXT and HMAC-SHA1.");}if(_10=="PLAINTEXT"){return key;}else{return dojox.encoding.digests.SHA1._hmac(_f,key);}};function key(_11){return _1(_11.consumer.secret)+"&"+(_11.token&&_11.token.secret?_1(_11.token.secret):"");};function addOAuth(_12,oaa){var o={oauth_consumer_key:oaa.consumer.key,oauth_nonce:nonce(16),oauth_signature_method:oaa.sig_method||"HMAC-SHA1",oauth_timestamp:timestamp(),oauth_version:"1.0"};if(oaa.token){o.oauth_token=oaa.token.key;}_12.content=dojo.mixin(_12.content||{},o);};function convertArgs(_13){var _14=[{}],_15;if(_13.form){if(!_13.content){_13.content={};}var _16=dojo.byId(_13.form);var _17=_16.getAttributeNode("action");_13.url=_13.url||(_17?_17.value:null);_15=dojo.formToObject(_16);delete _13.form;}if(_15){_14.push(_15);}if(_13.content){_14.push(_13.content);}var map=parseUrl(_13.url);if(map.query){var tmp=dojo.queryToObject(map.query);for(var p in tmp){tmp[p]=encodeURIComponent(tmp[p]);}_14.push(tmp);}_13._url=map.url;var a=[];for(var i=0,l=_14.length;i<l;i++){var _18=_14[i];for(var p in _18){if(dojo.isArray(_18[p])){for(var j=0,jl=_18.length;j<jl;j++){a.push([p,_18[j]]);}}else{a.push([p,_18[p]]);}}}_13._parameters=a;return _13;};function baseString(_19,_1a,oaa){addOAuth(_1a,oaa);convertArgs(_1a);var a=_1a._parameters;a.sort(function(a,b){if(a[0]>b[0]){return 1;}if(a[0]<b[0]){return -1;}if(a[1]>b[1]){return 1;}if(a[1]<b[1]){return -1;}return 0;});var s=dojo.map(a,function(_1b){return _1(_1b[0])+"="+_1(_1b[1]||"");}).join("&");var _1c=_19.toUpperCase()+"&"+_1(_1a._url)+"&"+_1(s);return _1c;};function sign(_1d,_1e,oaa){var k=key(oaa),_1f=baseString(_1d,_1e,oaa),s=signature(_1f,k,oaa.sig_method||"HMAC-SHA1");_1e.content["oauth_signature"]=s;return _1e;};this.sign=function $DAie_(_20,_21,oaa){return sign(_20,_21,oaa);};this.xhr=function $DAif_(_22,_23,oaa,_24){sign(_22,_23,oaa);return dojo.xhr(_22,_23,_24);};this.xhrGet=function $DAig_(_25,oaa){return this.xhr("GET",_25,oaa);};this.xhrPost=this.xhrRawPost=function(_26,oaa){return this.xhr("POST",_26,oaa,true);};this.xhrPut=this.xhrRawPut=function(_27,oaa){return this.xhr("PUT",_27,oaa,true);};this.xhrDelete=function $DAih_(_28,oaa){return this.xhr("DELETE",_28,oaa);};})();}