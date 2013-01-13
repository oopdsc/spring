/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.date.relative"]){dojo._hasResource["dojox.date.relative"]=true;dojo.provide("dojox.date.relative");dojo.require("dojo.date");dojo.require("dojo.date.locale");(function(d){var _1=1000*60*60*24;var _2=6*_1;var _3=d.delegate;var _4=d.date.locale;var _5=_4._getGregorianBundle;var _6=_4.format;function _clearTime(_7){_7=dojo.clone(_7);_7.setHours(0);_7.setMinutes(0);_7.setSeconds(0);_7.setMilliseconds(0);return _7;};dojox.date.relative.format=function $Du7_(_8,_9){_9=_9||{};var _a=_clearTime(_9.relativeDate||new Date());var _b=_a.getTime()-_clearTime(_8).getTime();var _c={locale:_9.locale};if(_b===0){return _6(_8,_3(_c,{selector:"time"}));}else{if(_b<=_2&&_b>0&&_9.weekCheck!==false){return _6(_8,_3(_c,{selector:"date",datePattern:"EEE"}))+" "+_6(_8,_3(_c,{selector:"time",formatLength:"short"}));}else{if(_8.getFullYear()==_a.getFullYear()){var _d=_5(dojo.i18n.normalizeLocale(_9.locale));return _6(_8,_3(_c,{selector:"date",datePattern:_d["dateFormatItem-MMMd"]}));}else{return _6(_8,_3(_c,{selector:"date",formatLength:"medium",locale:_9.locale}));}}}};})(dojo);}