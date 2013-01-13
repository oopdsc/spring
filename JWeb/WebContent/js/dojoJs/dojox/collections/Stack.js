/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.collections.Stack"]){dojo._hasResource["dojox.collections.Stack"]=true;dojo.provide("dojox.collections.Stack");dojo.require("dojox.collections._base");dojox.collections.Stack=function $DgL_(_1){var q=[];if(_1){q=q.concat(_1);}this.count=q.length;this.clear=function $DgB_(){q=[];this.count=q.length;};this.clone=function $DgC_(){return new dojox.collections.Stack(q);};this.contains=function $DgD_(o){for(var i=0;i<q.length;i++){if(q[i]==o){return true;}}return false;};this.copyTo=function $DgE_(_2,i){_2.splice(i,0,q);};this.forEach=function $DgF_(fn,_3){dojo.forEach(q,fn,_3);};this.getIterator=function $DgG_(){return new dojox.collections.Iterator(q);};this.peek=function $DgH_(){return q[(q.length-1)];};this.pop=function $DgI_(){var r=q.pop();this.count=q.length;return r;};this.push=function $DgJ_(o){this.count=q.push(o);};this.toArray=function $DgK_(){return [].concat(q);};};}