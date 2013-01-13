/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.widget.rotator.Slide"]){dojo._hasResource["dojox.widget.rotator.Slide"]=true;dojo.provide("dojox.widget.rotator.Slide");(function(d){var _1=0,_2=1,UP=2,_3=3;function _slide(_4,_5){var _6=_5.node=_5.next.node,r=_5.rotatorBox,m=_4%2,s=(m?r.w:r.h)*(_4<2?-1:1);d.style(_6,{display:"",zIndex:(d.style(_5.current.node,"zIndex")||1)+1});if(!_5.properties){_5.properties={};}_5.properties[m?"left":"top"]={start:s,end:0};return d.animateProperty(_5);};d.mixin(dojox.widget.rotator,{slideDown:function $DA4a_(_7){return _slide(_1,_7);},slideRight:function $DA4b_(_8){return _slide(_2,_8);},slideUp:function $DA4c_(_9){return _slide(UP,_9);},slideLeft:function $DA4d_(_a){return _slide(_3,_a);}});})(dojo);}