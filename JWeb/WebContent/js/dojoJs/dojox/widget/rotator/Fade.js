/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.widget.rotator.Fade"]){dojo._hasResource["dojox.widget.rotator.Fade"]=true;dojo.provide("dojox.widget.rotator.Fade");dojo.require("dojo.fx");(function(d){function _fade(_1,_2){var n=_1.next.node;d.style(n,{display:"",opacity:0});_1.node=_1.current.node;return d.fx[_2]([d.fadeOut(_1),d.fadeIn(d.mixin(_1,{node:n}))]);};d.mixin(dojox.widget.rotator,{fade:function $DA4S_(_3){return _fade(_3,"chain");},crossFade:function $DA4T_(_4){return _fade(_4,"combine");}});})(dojo);}