/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.grid.enhanced.dnd._DndRowSelector"]){dojo._hasResource["dojox.grid.enhanced.dnd._DndRowSelector"]=true;dojo.provide("dojox.grid.enhanced.dnd._DndRowSelector");dojo.declare("dojox.grid.enhanced.dnd._DndRowSelector",null,{domousedown:function $DATP_(e){this.grid.onMouseDown(e);},domouseup:function $DATQ_(e){this.grid.onMouseUp(e);},dofocus:function $DATR_(e){e.cellNode.style.border="solid 1px";}});}