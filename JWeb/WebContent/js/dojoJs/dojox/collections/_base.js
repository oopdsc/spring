/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.collections._base"]){dojo._hasResource["dojox.collections._base"]=true;dojo.provide("dojox.collections._base");dojox.collections.DictionaryEntry=function $DgW_(k,v){this.key=k;this.value=v;this.valueOf=function $DgM_(){return this.value;};this.toString=function $DgN_(){return String(this.value);};};dojox.collections.Iterator=function $DgX_(_1){var a=_1;var _2=0;this.element=a[_2]||null;this.atEnd=function $DgO_(){return (_2>=a.length);};this.get=function $DgP_(){if(this.atEnd()){return null;}this.element=a[_2++];return this.element;};this.map=function $DgQ_(fn,_3){return dojo.map(a,fn,_3);};this.reset=function $DgR_(){_2=0;this.element=a[_2];};};dojox.collections.DictionaryIterator=function $DgY_(_4){var a=[];var _5={};for(var p in _4){if(!_5[p]){a.push(_4[p]);}}var _6=0;this.element=a[_6]||null;this.atEnd=function $DgS_(){return (_6>=a.length);};this.get=function $DgT_(){if(this.atEnd()){return null;}this.element=a[_6++];return this.element;};this.map=function $DgU_(fn,_7){return dojo.map(a,fn,_7);};this.reset=function $DgV_(){_6=0;this.element=a[_6];};};}