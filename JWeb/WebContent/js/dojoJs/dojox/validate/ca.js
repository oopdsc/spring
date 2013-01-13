/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.validate.ca"]){dojo._hasResource["dojox.validate.ca"]=true;dojo.provide("dojox.validate.ca");dojo.require("dojox.validate._base");dojo.mixin(dojox.validate.ca,{isPhoneNumber:function $DAxs_(_1){return dojox.validate.us.isPhoneNumber(_1);},isProvince:function $DAxt_(_2){var re=new RegExp("^"+dojox.validate.regexp.ca.province()+"$","i");return re.test(_2);},isSocialInsuranceNumber:function $DAxu_(_3){var _4={format:["###-###-###","### ### ###","#########"]};return dojox.validate.isNumberFormat(_3,_4);},isPostalCode:function $DAxv_(_5){var re=new RegExp("^"+dojox.validate.regexp.ca.postalCode()+"$","i");return re.test(_5);}});}