/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit.CheckedMenuItem"]){dojo._hasResource["dijit.CheckedMenuItem"]=true;dojo.provide("dijit.CheckedMenuItem");dojo.require("dijit.MenuItem");dojo.declare("dijit.CheckedMenuItem",dijit.MenuItem,{templateString:dojo.cache("dijit","templates/CheckedMenuItem.html","<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" waiRole=\"menuitemcheckbox\" tabIndex=\"-1\"\r\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\r\n\t<td class=\"dijitReset\" waiRole=\"presentation\">\r\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon dijitCheckedMenuItemIcon\" dojoAttachPoint=\"iconNode\">\r\n\t\t<span class=\"dijitCheckedMenuItemIconChar\">&#10003;</span>\r\n\t</td>\r\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode,labelNode\"></td>\r\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\r\n\t<td class=\"dijitReset dijitMenuArrowCell\" waiRole=\"presentation\">\r\n\t</td>\r\n</tr>\r\n"),checked:false,_setCheckedAttr:function $DAW_(_1){dojo.toggleClass(this.domNode,"dijitCheckedMenuItemChecked",_1);dijit.setWaiState(this.domNode,"checked",_1);this.checked=_1;},onChange:function $DAX_(_2){},_onClick:function $DAY_(e){if(!this.disabled){this.attr("checked",!this.checked);this.onChange(this.checked);}this.inherited(arguments);}});}