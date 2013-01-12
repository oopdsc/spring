/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit.layout.TabController"]){dojo._hasResource["dijit.layout.TabController"]=true;dojo.provide("dijit.layout.TabController");dojo.require("dijit.layout.StackController");dojo.require("dijit.Menu");dojo.require("dijit.MenuItem");dojo.requireLocalization("dijit","common",null,"ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,ko,nb,nl,pl,pt,pt-pt,ru,sk,sl,sv,th,tr,zh,zh-tw");dojo.declare("dijit.layout.TabController",dijit.layout.StackController,{templateString:"<div wairole='tablist' dojoAttachEvent='onkeypress:onkeypress'></div>",tabPosition:"top",buttonWidget:"dijit.layout._TabButton",_rectifyRtlTabList:function $DKS_(){if(0>=this.tabPosition.indexOf("-h")){return;}if(!this.pane2button){return;}var _1=0;for(var _2 in this.pane2button){var ow=this.pane2button[_2].innerDiv.scrollWidth;_1=Math.max(_1,ow);}for(_2 in this.pane2button){this.pane2button[_2].innerDiv.style.width=_1+"px";}}});dojo.declare("dijit.layout._TabButton",dijit.layout._StackButton,{baseClass:"dijitTab",templateString:dojo.cache("dijit.layout","templates/_TabButton.html","<div waiRole=\"presentation\" dojoAttachPoint=\"titleNode\" dojoAttachEvent='onclick:onClick,onmouseenter:_onMouse,onmouseleave:_onMouse'>\r\n    <div waiRole=\"presentation\" class='dijitTabInnerDiv' dojoAttachPoint='innerDiv'>\r\n        <div waiRole=\"presentation\" class='dijitTabContent' dojoAttachPoint='tabContent,focusNode'>\r\n\t        <img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint='iconNode' waiRole=\"presentation\"/>\r\n\t        <span dojoAttachPoint='containerNode' class='tabLabel'></span>\r\n\t        <span class=\"closeButton\" dojoAttachPoint='closeNode'\r\n\t        \t\tdojoAttachEvent='onclick: onClickCloseButton, onmouseenter: _onCloseButtonEnter, onmouseleave: _onCloseButtonLeave'>\r\n\t        \t<img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint='closeIcon' class='closeImage' waiRole=\"presentation\"/>\r\n\t            <span dojoAttachPoint='closeText' class='closeText'>x</span>\r\n\t        </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n"),scrollOnFocus:false,postMixInProperties:function $DKT_(){if(!this.iconClass){this.iconClass="dijitTabButtonIcon";}},postCreate:function $DKU_(){this.inherited(arguments);dojo.setSelectable(this.containerNode,false);if(this.iconNode.className=="dijitTabButtonIcon"){dojo.style(this.iconNode,"width","1px");}},startup:function $DKV_(){this.inherited(arguments);var n=this.domNode;setTimeout(function(){n.className=n.className;},1);},_setCloseButtonAttr:function $DKW_(_3){this.closeButton=_3;dojo.toggleClass(this.innerDiv,"dijitClosable",_3);this.closeNode.style.display=_3?"":"none";if(_3){var _4=dojo.i18n.getLocalization("dijit","common");if(this.closeNode){dojo.attr(this.closeNode,"title",_4.itemClose);if(dojo.isIE<8){dojo.attr(this.closeIcon,"title",_4.itemClose);}}var _4=dojo.i18n.getLocalization("dijit","common");this._closeMenu=new dijit.Menu({id:this.id+"_Menu",targetNodeIds:[this.domNode]});this._closeMenu.addChild(new dijit.MenuItem({label:_4.itemClose,onClick:dojo.hitch(this,"onClickCloseButton")}));}else{if(this._closeMenu){this._closeMenu.destroyRecursive();delete this._closeMenu;}}},destroy:function $DKX_(){if(this._closeMenu){this._closeMenu.destroyRecursive();delete this._closeMenu;}this.inherited(arguments);},_onCloseButtonEnter:function $DKY_(){dojo.addClass(this.closeNode,"closeButton-hover");},_onCloseButtonLeave:function $DKZ_(){dojo.removeClass(this.closeNode,"closeButton-hover");}});}