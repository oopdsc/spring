/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.data.util.sorter"]){dojo._hasResource["dojo.data.util.sorter"]=true;dojo.provide("dojo.data.util.sorter");dojo.data.util.sorter.basicComparator=function $DBDY_(a,b){var r=-1;if(a===null){a=undefined;}if(b===null){b=undefined;}if(a==b){r=0;}else{if(a>b||a==null){r=1;}}return r;};dojo.data.util.sorter.createSortFunction=function $DBDZ_(_1,_2){var _3=[];function createSortFunction(_4,_5,_6,s){return function(_7,_8){var a=s.getValue(_7,_4);var b=s.getValue(_8,_4);return _5*_6(a,b);};};var _9;var _a=_2.comparatorMap;var bc=dojo.data.util.sorter.basicComparator;for(var i=0;i<_1.length;i++){_9=_1[i];var _b=_9.attribute;if(_b){var _c=(_9.descending)?-1:1;var _d=bc;if(_a){if(typeof _b!=="string"&&("toString" in _b)){_b=_b.toString();}_d=_a[_b]||bc;}_3.push(createSortFunction(_b,_c,_d,_2));}}return function(_e,_f){var i=0;while(i<_3.length){var ret=_3[i++](_e,_f);if(ret!==0){return ret;}}return 0;};};}