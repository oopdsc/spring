/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.charting.axis2d.Base"]){dojo._hasResource["dojox.charting.axis2d.Base"]=true;dojo.provide("dojox.charting.axis2d.Base");dojo.require("dojox.charting.Element");dojo.declare("dojox.charting.axis2d.Base",dojox.charting.Element,{constructor:function $Dbd_(_1,_2){this.vertical=_2&&_2.vertical;},clear:function $Dbe_(){return this;},initialized:function $Dbf_(){return false;},calculate:function $Dbg_(_3,_4,_5){return this;},getScaler:function $Dbh_(){return null;},getTicks:function $Dbi_(){return null;},getOffsets:function $Dbj_(){return {l:0,r:0,t:0,b:0};},render:function $Dbk_(_6,_7){return this;}});}