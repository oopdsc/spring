/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.editor.plugins.ToolbarLineBreak"]){dojo._hasResource["dojox.editor.plugins.ToolbarLineBreak"]=true;dojo.provide("dojox.editor.plugins.ToolbarLineBreak");dojo.require("dijit._Widget");dojo.require("dijit._Templated");dojo.require("dijit._editor._Plugin");dojo.declare("dojox.editor.plugins._ToolbarLineBreak",[dijit._Widget,dijit._Templated],{templateString:"<span class='dijit dijitReset'><br></span>",postCreate:function $D8r_(){dojo.setSelectable(this.domNode,false);},isFocusable:function $D8s_(){return false;}});dojo.subscribe(dijit._scopeName+".Editor.getPlugin",null,function(o){if(o.plugin){return;}var _1=o.args.name.toLowerCase();if(_1==="||"||_1==="toolbarlinebreak"){o.plugin=new dijit._editor._Plugin({button:new dojox.editor.plugins._ToolbarLineBreak()});}});}