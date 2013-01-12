/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.behavior"]){dojo._hasResource["dojo.behavior"]=true;dojo.provide("dojo.behavior");dojo.behavior=new function(){function arrIn(_1,_2){if(!_1[_2]){_1[_2]=[];}return _1[_2];};var _3=0;function forIn(_4,_5,_6){var _7={};for(var x in _4){if(typeof _7[x]=="undefined"){if(!_6){_5(_4[x],x);}else{_6.call(_5,_4[x],x);}}}};this._behaviors={};this.add=function $DBBs_(_8){var _9={};forIn(_8,this,function(_a,_b){var _c=arrIn(this._behaviors,_b);if(typeof _c["id"]!="number"){_c.id=_3++;}var _d=[];_c.push(_d);if((dojo.isString(_a))||(dojo.isFunction(_a))){_a={found:_a};}forIn(_a,function(_e,_f){arrIn(_d,_f).push(_e);});});};var _10=function(_11,_12,_13){if(dojo.isString(_12)){if(_13=="found"){dojo.publish(_12,[_11]);}else{dojo.connect(_11,_13,function(){dojo.publish(_12,arguments);});}}else{if(dojo.isFunction(_12)){if(_13=="found"){_12(_11);}else{dojo.connect(_11,_13,_12);}}}};this.apply=function $DBBt_(){forIn(this._behaviors,function(_14,id){dojo.query(id).forEach(function(_15){var _16=0;var bid="_dj_behavior_"+_14.id;if(typeof _15[bid]=="number"){_16=_15[bid];if(_16==(_14.length)){return;}}for(var x=_16,_17;_17=_14[x];x++){forIn(_17,function(_18,_19){if(dojo.isArray(_18)){dojo.forEach(_18,function(_1a){_10(_15,_1a,_19);});}});}_15[bid]=_14.length;});});};};dojo.addOnLoad(dojo.behavior,"apply");}