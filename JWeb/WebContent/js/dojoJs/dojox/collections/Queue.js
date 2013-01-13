/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.collections.Queue"]){dojo._hasResource["dojox.collections.Queue"]=true;dojo.provide("dojox.collections.Queue");dojo.require("dojox.collections._base");dojox.collections.Queue=function $Dfl_(_1){var q=[];if(_1){q=q.concat(_1);}this.count=q.length;this.clear=function $Dfb_(){q=[];this.count=q.length;};this.clone=function $Dfc_(){return new dojox.collections.Queue(q);};this.contains=function $Dfd_(o){for(var i=0;i<q.length;i++){if(q[i]==o){return true;}}return false;};this.copyTo=function $Dfe_(_2,i){_2.splice(i,0,q);};this.dequeue=function $Dff_(){var r=q.shift();this.count=q.length;return r;};this.enqueue=function $Dfg_(o){this.count=q.push(o);};this.forEach=function $Dfh_(fn,_3){dojo.forEach(q,fn,_3);};this.getIterator=function $Dfi_(){return new dojox.collections.Iterator(q);};this.peek=function $Dfj_(){return q[0];};this.toArray=function $Dfk_(){return [].concat(q);};};}