/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.widget.rotator.Wipe"]){dojo._hasResource["dojox.widget.rotator.Wipe"]=true;dojo.provide("dojox.widget.rotator.Wipe");(function(d){var _1=2,_2=3,UP=0,_3=1;function _clipArray(_4,w,h,x){var a=[0,w,0,0];if(_4==_2){a=[0,w,h,w];}else{if(_4==UP){a=[h,w,h,0];}else{if(_4==_3){a=[0,0,h,0];}}}if(x!=null){a[_4]=_4==_1||_4==_3?x:(_4%2?w:h)-x;}return a;};function _setClip(n,_5,w,h,x){d.style(n,"clip",_5==null?"auto":"rect("+_clipArray(_5,w,h,x).join("px,")+"px)");};function _wipe(_6,_7){var _8=_7.next.node,w=_7.rotatorBox.w,h=_7.rotatorBox.h;d.style(_8,{display:"",zIndex:(d.style(_7.current.node,"zIndex")||1)+1});_setClip(_8,_6,w,h);return new d.Animation(d.mixin({node:_8,curve:[0,_6%2?w:h],onAnimate:function $DA4e_(x){_setClip(_8,_6,w,h,parseInt(x));}},_7));};d.mixin(dojox.widget.rotator,{wipeDown:function $DA4f_(_9){return _wipe(_1,_9);},wipeRight:function $DA4g_(_a){return _wipe(_2,_a);},wipeUp:function $DA4h_(_b){return _wipe(UP,_b);},wipeLeft:function $DA4i_(_c){return _wipe(_3,_c);}});})(dojo);}