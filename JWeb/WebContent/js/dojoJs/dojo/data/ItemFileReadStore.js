/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.data.ItemFileReadStore"]){dojo._hasResource["dojo.data.ItemFileReadStore"]=true;dojo.provide("dojo.data.ItemFileReadStore");dojo.require("dojo.data.util.filter");dojo.require("dojo.data.util.simpleFetch");dojo.require("dojo.date.stamp");dojo.declare("dojo.data.ItemFileReadStore",null,{constructor:function $DBCf_(_1){this._arrayOfAllItems=[];this._arrayOfTopLevelItems=[];this._loadFinished=false;this._jsonFileUrl=_1.url;this._ccUrl=_1.url;this.url=_1.url;this._jsonData=_1.data;this.data=null;this._datatypeMap=_1.typeMap||{};if(!this._datatypeMap["Date"]){this._datatypeMap["Date"]={type:Date,deserialize:function $DBCg_(_2){return dojo.date.stamp.fromISOString(_2);}};}this._features={"dojo.data.api.Read":true,"dojo.data.api.Identity":true};this._itemsByIdentity=null;this._storeRefPropName="_S";this._itemNumPropName="_0";this._rootItemPropName="_RI";this._reverseRefMap="_RRM";this._loadInProgress=false;this._queuedFetches=[];if(_1.urlPreventCache!==undefined){this.urlPreventCache=_1.urlPreventCache?true:false;}if(_1.hierarchical!==undefined){this.hierarchical=_1.hierarchical?true:false;}if(_1.clearOnClose){this.clearOnClose=true;}if("failOk" in _1){this.failOk=_1.failOk?true:false;}},url:"",_ccUrl:"",data:null,typeMap:null,clearOnClose:false,urlPreventCache:false,failOk:false,hierarchical:true,_assertIsItem:function $DBCh_(_3){if(!this.isItem(_3)){throw new Error("dojo.data.ItemFileReadStore: Invalid item argument.");}},_assertIsAttribute:function $DBCi_(_4){if(typeof _4!=="string"){throw new Error("dojo.data.ItemFileReadStore: Invalid attribute argument.");}},getValue:function $DBCj_(_5,_6,_7){var _8=this.getValues(_5,_6);return (_8.length>0)?_8[0]:_7;},getValues:function $DBCk_(_9,_a){this._assertIsItem(_9);this._assertIsAttribute(_a);return _9[_a]||[];},getAttributes:function $DBCl_(_b){this._assertIsItem(_b);var _c=[];for(var _d in _b){if((_d!==this._storeRefPropName)&&(_d!==this._itemNumPropName)&&(_d!==this._rootItemPropName)&&(_d!==this._reverseRefMap)){_c.push(_d);}}return _c;},hasAttribute:function $DBCm_(_e,_f){this._assertIsItem(_e);this._assertIsAttribute(_f);return (_f in _e);},containsValue:function $DBCn_(_10,_11,_12){var _13=undefined;if(typeof _12==="string"){_13=dojo.data.util.filter.patternToRegExp(_12,false);}return this._containsValue(_10,_11,_12,_13);},_containsValue:function $DBCo_(_14,_15,_16,_17){return dojo.some(this.getValues(_14,_15),function(_18){if(_18!==null&&!dojo.isObject(_18)&&_17){if(_18.toString().match(_17)){return true;}}else{if(_16===_18){return true;}}});},isItem:function $DBCp_(_19){if(_19&&_19[this._storeRefPropName]===this){if(this._arrayOfAllItems[_19[this._itemNumPropName]]===_19){return true;}}return false;},isItemLoaded:function $DBCq_(_1a){return this.isItem(_1a);},loadItem:function $DBCr_(_1b){this._assertIsItem(_1b.item);},getFeatures:function $DBCs_(){return this._features;},getLabel:function $DBCt_(_1c){if(this._labelAttr&&this.isItem(_1c)){return this.getValue(_1c,this._labelAttr);}return undefined;},getLabelAttributes:function $DBCu_(_1d){if(this._labelAttr){return [this._labelAttr];}return null;},_fetchItems:function $DBCv_(_1e,_1f,_20){var _21=this;var _22=function(_23,_24){var _25=[];var i,key;if(_23.query){var _26;var _27=_23.queryOptions?_23.queryOptions.ignoreCase:false;var _28={};for(key in _23.query){_26=_23.query[key];if(typeof _26==="string"){_28[key]=dojo.data.util.filter.patternToRegExp(_26,_27);}else{if(_26 instanceof RegExp){_28[key]=_26;}}}for(i=0;i<_24.length;++i){var _29=true;var _2a=_24[i];if(_2a===null){_29=false;}else{for(key in _23.query){_26=_23.query[key];if(!_21._containsValue(_2a,key,_26,_28[key])){_29=false;}}}if(_29){_25.push(_2a);}}_1f(_25,_23);}else{for(i=0;i<_24.length;++i){var _2b=_24[i];if(_2b!==null){_25.push(_2b);}}_1f(_25,_23);}};if(this._loadFinished){_22(_1e,this._getItemsArray(_1e.queryOptions));}else{if(this._jsonFileUrl!==this._ccUrl){dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");this._ccUrl=this._jsonFileUrl;this.url=this._jsonFileUrl;}else{if(this.url!==this._ccUrl){this._jsonFileUrl=this.url;this._ccUrl=this.url;}}if(this.data!=null&&this._jsonData==null){this._jsonData=this.data;this.data=null;}if(this._jsonFileUrl){if(this._loadInProgress){this._queuedFetches.push({args:_1e,filter:_22});}else{this._loadInProgress=true;var _2c={url:_21._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk};var _2d=dojo.xhrGet(_2c);_2d.addCallback(function(_2e){try{_21._getItemsFromLoadedData(_2e);_21._loadFinished=true;_21._loadInProgress=false;_22(_1e,_21._getItemsArray(_1e.queryOptions));_21._handleQueuedFetches();}catch(e){_21._loadFinished=true;_21._loadInProgress=false;_20(e,_1e);}});_2d.addErrback(function(_2f){_21._loadInProgress=false;_20(_2f,_1e);});var _30=null;if(_1e.abort){_30=_1e.abort;}_1e.abort=function $DBC6_(){var df=_2d;if(df&&df.fired===-1){df.cancel();df=null;}if(_30){_30.call(_1e);}};}}else{if(this._jsonData){try{this._loadFinished=true;this._getItemsFromLoadedData(this._jsonData);this._jsonData=null;_22(_1e,this._getItemsArray(_1e.queryOptions));}catch(e){_20(e,_1e);}}else{_20(new Error("dojo.data.ItemFileReadStore: No JSON source data was provided as either URL or a nested Javascript object."),_1e);}}}},_handleQueuedFetches:function $DBCw_(){if(this._queuedFetches.length>0){for(var i=0;i<this._queuedFetches.length;i++){var _31=this._queuedFetches[i];var _32=_31.args;var _33=_31.filter;if(_33){_33(_32,this._getItemsArray(_32.queryOptions));}else{this.fetchItemByIdentity(_32);}}this._queuedFetches=[];}},_getItemsArray:function $DBCx_(_34){if(_34&&_34.deep){return this._arrayOfAllItems;}return this._arrayOfTopLevelItems;},close:function $DBCy_(_35){if(this.clearOnClose&&this._loadFinished&&!this._loadInProgress){if(((this._jsonFileUrl==""||this._jsonFileUrl==null)&&(this.url==""||this.url==null))&&this.data==null){console.debug("dojo.data.ItemFileReadStore: WARNING!  Data reload "+" information has not been provided."+"  Please set 'url' or 'data' to the appropriate value before"+" the next fetch");}this._arrayOfAllItems=[];this._arrayOfTopLevelItems=[];this._loadFinished=false;this._itemsByIdentity=null;this._loadInProgress=false;this._queuedFetches=[];}},_getItemsFromLoadedData:function $DBCz_(_36){var _37=false;var _38=this;function valueIsAnItem(_39){var _3a=((_39!==null)&&(typeof _39==="object")&&(!dojo.isArray(_39)||_37)&&(!dojo.isFunction(_39))&&(_39.constructor==Object||dojo.isArray(_39))&&(typeof _39._reference==="undefined")&&(typeof _39._type==="undefined")&&(typeof _39._value==="undefined")&&_38.hierarchical);return _3a;};function addItemAndSubItemsToArrayOfAllItems(_3b){_38._arrayOfAllItems.push(_3b);for(var _3c in _3b){var _3d=_3b[_3c];if(_3d){if(dojo.isArray(_3d)){var _3e=_3d;for(var k=0;k<_3e.length;++k){var _3f=_3e[k];if(valueIsAnItem(_3f)){addItemAndSubItemsToArrayOfAllItems(_3f);}}}else{if(valueIsAnItem(_3d)){addItemAndSubItemsToArrayOfAllItems(_3d);}}}}};this._labelAttr=_36.label;var i;var _40;this._arrayOfAllItems=[];this._arrayOfTopLevelItems=_36.items;for(i=0;i<this._arrayOfTopLevelItems.length;++i){_40=this._arrayOfTopLevelItems[i];if(dojo.isArray(_40)){_37=true;}addItemAndSubItemsToArrayOfAllItems(_40);_40[this._rootItemPropName]=true;}var _41={};var key;for(i=0;i<this._arrayOfAllItems.length;++i){_40=this._arrayOfAllItems[i];for(key in _40){if(key!==this._rootItemPropName){var _42=_40[key];if(_42!==null){if(!dojo.isArray(_42)){_40[key]=[_42];}}else{_40[key]=[null];}}_41[key]=key;}}while(_41[this._storeRefPropName]){this._storeRefPropName+="_";}while(_41[this._itemNumPropName]){this._itemNumPropName+="_";}while(_41[this._reverseRefMap]){this._reverseRefMap+="_";}var _43;var _44=_36.identifier;if(_44){this._itemsByIdentity={};this._features["dojo.data.api.Identity"]=_44;for(i=0;i<this._arrayOfAllItems.length;++i){_40=this._arrayOfAllItems[i];_43=_40[_44];var _45=_43[0];if(!this._itemsByIdentity[_45]){this._itemsByIdentity[_45]=_40;}else{if(this._jsonFileUrl){throw new Error("dojo.data.ItemFileReadStore:  The json data as specified by: ["+this._jsonFileUrl+"] is malformed.  Items within the list have identifier: ["+_44+"].  Value collided: ["+_45+"]");}else{if(this._jsonData){throw new Error("dojo.data.ItemFileReadStore:  The json data provided by the creation arguments is malformed.  Items within the list have identifier: ["+_44+"].  Value collided: ["+_45+"]");}}}}}else{this._features["dojo.data.api.Identity"]=Number;}for(i=0;i<this._arrayOfAllItems.length;++i){_40=this._arrayOfAllItems[i];_40[this._storeRefPropName]=this;_40[this._itemNumPropName]=i;}for(i=0;i<this._arrayOfAllItems.length;++i){_40=this._arrayOfAllItems[i];for(key in _40){_43=_40[key];for(var j=0;j<_43.length;++j){_42=_43[j];if(_42!==null&&typeof _42=="object"){if(("_type" in _42)&&("_value" in _42)){var _46=_42._type;var _47=this._datatypeMap[_46];if(!_47){throw new Error("dojo.data.ItemFileReadStore: in the typeMap constructor arg, no object class was specified for the datatype '"+_46+"'");}else{if(dojo.isFunction(_47)){_43[j]=new _47(_42._value);}else{if(dojo.isFunction(_47.deserialize)){_43[j]=_47.deserialize(_42._value);}else{throw new Error("dojo.data.ItemFileReadStore: Value provided in typeMap was neither a constructor, nor a an object with a deserialize function");}}}}if(_42._reference){var _48=_42._reference;if(!dojo.isObject(_48)){_43[j]=this._itemsByIdentity[_48];}else{for(var k=0;k<this._arrayOfAllItems.length;++k){var _49=this._arrayOfAllItems[k];var _4a=true;for(var _4b in _48){if(_49[_4b]!=_48[_4b]){_4a=false;}}if(_4a){_43[j]=_49;}}}if(this.referenceIntegrity){var _4c=_43[j];if(this.isItem(_4c)){this._addReferenceToMap(_4c,_40,key);}}}else{if(this.isItem(_42)){if(this.referenceIntegrity){this._addReferenceToMap(_42,_40,key);}}}}}}}},_addReferenceToMap:function $DBC0_(_4d,_4e,_4f){},getIdentity:function $DBC1_(_50){var _51=this._features["dojo.data.api.Identity"];if(_51===Number){return _50[this._itemNumPropName];}else{var _52=_50[_51];if(_52){return _52[0];}}return null;},fetchItemByIdentity:function $DBC2_(_53){var _54;var _55;if(!this._loadFinished){var _56=this;if(this._jsonFileUrl!==this._ccUrl){dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");this._ccUrl=this._jsonFileUrl;this.url=this._jsonFileUrl;}else{if(this.url!==this._ccUrl){this._jsonFileUrl=this.url;this._ccUrl=this.url;}}if(this.data!=null&&this._jsonData==null){this._jsonData=this.data;this.data=null;}if(this._jsonFileUrl){if(this._loadInProgress){this._queuedFetches.push({args:_53});}else{this._loadInProgress=true;var _57={url:_56._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk};var _58=dojo.xhrGet(_57);_58.addCallback(function(_59){var _5a=_53.scope?_53.scope:dojo.global;try{_56._getItemsFromLoadedData(_59);_56._loadFinished=true;_56._loadInProgress=false;_54=_56._getItemByIdentity(_53.identity);if(_53.onItem){_53.onItem.call(_5a,_54);}_56._handleQueuedFetches();}catch(error){_56._loadInProgress=false;if(_53.onError){_53.onError.call(_5a,error);}}});_58.addErrback(function(_5b){_56._loadInProgress=false;if(_53.onError){var _5c=_53.scope?_53.scope:dojo.global;_53.onError.call(_5c,_5b);}});}}else{if(this._jsonData){_56._getItemsFromLoadedData(_56._jsonData);_56._jsonData=null;_56._loadFinished=true;_54=_56._getItemByIdentity(_53.identity);if(_53.onItem){_55=_53.scope?_53.scope:dojo.global;_53.onItem.call(_55,_54);}}}}else{_54=this._getItemByIdentity(_53.identity);if(_53.onItem){_55=_53.scope?_53.scope:dojo.global;_53.onItem.call(_55,_54);}}},_getItemByIdentity:function $DBC3_(_5d){var _5e=null;if(this._itemsByIdentity){_5e=this._itemsByIdentity[_5d];}else{_5e=this._arrayOfAllItems[_5d];}if(_5e===undefined){_5e=null;}return _5e;},getIdentityAttributes:function $DBC4_(_5f){var _60=this._features["dojo.data.api.Identity"];if(_60===Number){return null;}else{return [_60];}},_forceLoad:function $DBC5_(){var _61=this;if(this._jsonFileUrl!==this._ccUrl){dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");this._ccUrl=this._jsonFileUrl;this.url=this._jsonFileUrl;}else{if(this.url!==this._ccUrl){this._jsonFileUrl=this.url;this._ccUrl=this.url;}}if(this.data!=null&&this._jsonData==null){this._jsonData=this.data;this.data=null;}if(this._jsonFileUrl){var _62={url:this._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk,sync:true};var _63=dojo.xhrGet(_62);_63.addCallback(function(_64){try{if(_61._loadInProgress!==true&&!_61._loadFinished){_61._getItemsFromLoadedData(_64);_61._loadFinished=true;}else{if(_61._loadInProgress){throw new Error("dojo.data.ItemFileReadStore:  Unable to perform a synchronous load, an async load is in progress.");}}}catch(e){console.log(e);throw e;}});_63.addErrback(function(_65){throw _65;});}else{if(this._jsonData){_61._getItemsFromLoadedData(_61._jsonData);_61._jsonData=null;_61._loadFinished=true;}}}});dojo.extend(dojo.data.ItemFileReadStore,dojo.data.util.simpleFetch);}