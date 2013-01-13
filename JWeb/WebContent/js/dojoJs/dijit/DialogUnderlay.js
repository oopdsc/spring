/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit.DialogUnderlay"]){dojo._hasResource["dijit.DialogUnderlay"]=true;dojo.provide("dijit.DialogUnderlay");dojo.require("dijit._Widget");dojo.require("dijit._Templated");dojo.declare("dijit.DialogUnderlay",[dijit._Widget,dijit._Templated],{templateString:"<div class='dijitDialogUnderlayWrapper'><div class='dijitDialogUnderlay' dojoAttachPoint='node'></div></div>",dialogId:"","class":"",attributeMap:{id:"domNode"},_setDialogIdAttr:function $DA3_(id){dojo.attr(this.node,"id",id+"_underlay");},_setClassAttr:function $DA4_(_1){this.node.className="dijitDialogUnderlay "+_1;},postCreate:function $DA5_(){dojo.body().appendChild(this.domNode);},layout:function $DA6_(){var is=this.node.style,os=this.domNode.style;os.display="none";var _2=dijit.getViewport();os.top=_2.t+"px";os.left=_2.l+"px";is.width=_2.w+"px";is.height=_2.h+"px";os.display="block";},show:function $DA7_(){this.domNode.style.display="block";this.layout();this.bgIframe=new dijit.BackgroundIframe(this.domNode);},hide:function $DA8_(){this.bgIframe.destroy();this.domNode.style.display="none";},uninitialize:function $DA9_(){if(this.bgIframe){this.bgIframe.destroy();}this.inherited(arguments);}});}