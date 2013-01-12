/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.lang.functional.object"]){dojo._hasResource["dojox.lang.functional.object"]=true;dojo.provide("dojox.lang.functional.object");dojo.require("dojox.lang.functional.lambda");(function(){var d=dojo,df=dojox.lang.functional,_1={};d.mixin(df,{keys:function $DAli_(_2){var t=[];for(var i in _2){if(!(i in _1)){t.push(i);}}return t;},values:function $DAlj_(_3){var t=[];for(var i in _3){if(!(i in _1)){t.push(_3[i]);}}return t;},filterIn:function $DAlk_(_4,f,o){o=o||d.global;f=df.lambda(f);var t={},v,i;for(i in _4){if(!(i in _1)){v=_4[i];if(f.call(o,v,i,_4)){t[i]=v;}}}return t;},forIn:function $DAll_(_5,f,o){o=o||d.global;f=df.lambda(f);for(var i in _5){if(!(i in _1)){f.call(o,_5[i],i,_5);}}return o;},mapIn:function $DAlm_(_6,f,o){o=o||d.global;f=df.lambda(f);var t={},i;for(i in _6){if(!(i in _1)){t[i]=f.call(o,_6[i],i,_6);}}return t;}});})();}