/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit._DialogMixin"]){dojo._hasResource["dijit._DialogMixin"]=true;dojo.provide("dijit._DialogMixin");dojo.declare("dijit._DialogMixin",null,{attributeMap:dijit._Widget.prototype.attributeMap,execute:function $DQi_(_1){},onCancel:function $DQj_(){},onExecute:function $DQk_(){},_onSubmit:function $DQl_(){this.onExecute();this.execute(this.attr("value"));},_getFocusItems:function $DQm_(_2){var _3=dijit._getTabNavigable(dojo.byId(_2));this._firstFocusItem=_3.lowest||_3.first||_2;this._lastFocusItem=_3.last||_3.highest||this._firstFocusItem;if(dojo.isMoz&&this._firstFocusItem.tagName.toLowerCase()=="input"&&dojo.getNodeProp(this._firstFocusItem,"type").toLowerCase()=="file"){dojo.attr(_2,"tabIndex","0");this._firstFocusItem=_2;}}});}