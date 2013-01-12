/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo._base.declare"]){dojo._hasResource["dojo._base.declare"]=true;dojo.provide("dojo._base.declare");dojo.require("dojo._base.lang");dojo.require("dojo._base.array");(function(){var d=dojo,_1=d._mixin,op=Object.prototype,_2=op.toString,_3=new Function,_4=0,_5="constructor";function err(_6){throw new Error("declare: "+_6);};function c3mro(_7){var _8=[],_9=[{cls:0,refs:[]}],_a={},_b=1,l=_7.length,i=0,j,_c,_d,_e,_f,rec,_10,_11;for(;i<l;++i){_d=_7[i];if(!_d){err("mixin #"+i+" is null");}_c=_d._meta?_d._meta.bases:[_d];_e=0;for(j=_c.length-1;j>=0;--j){_f=_c[j].prototype;if(!_f.hasOwnProperty("declaredClass")){_f.declaredClass="uniqName_"+(_4++);}_10=_f.declaredClass;if(!_a.hasOwnProperty(_10)){_a[_10]={count:0,refs:[],cls:_c[j]};++_b;}rec=_a[_10];if(_e&&_e!==rec){rec.refs.push(_e);++_e.count;}_e=rec;}++_e.count;_9[0].refs.push(_e);}while(_9.length){_e=_9.pop();_8.push(_e.cls);--_b;while(_11=_e.refs,_11.length==1){_e=_11[0];if(!_e||--_e.count){_e=0;break;}_8.push(_e.cls);--_b;}if(_e){for(i=0,l=_11.length;i<l;++i){_e=_11[i];if(!--_e.count){_9.push(_e);}}}}if(_b){err("can't build consistent linearization");}_d=_7[0];_8[0]=_d?_d._meta&&_d===_8[_8.length-_d._meta.bases.length]?_d._meta.bases.length:1:0;return _8;};function inherited(_12,a,f){var _13,_14,_15,_16,_17,_18,_19,opf,pos,_1a=this._inherited=this._inherited||{};if(typeof _12=="string"){_13=_12;_12=a;a=f;}f=0;_16=_12.callee;_13=_13||_16.nom;if(!_13){err("can't deduce a name to call inherited()");}_17=this.constructor._meta;_15=_17.bases;pos=_1a.p;if(_13!=_5){if(_1a.c!==_16){pos=0;_18=_15[0];_17=_18._meta;if(_17.hidden[_13]!==_16){_14=_17.chains;if(_14&&typeof _14[_13]=="string"){err("calling chained method with inherited: "+_13);}do{_17=_18._meta;_19=_18.prototype;if(_17&&(_19[_13]===_16&&_19.hasOwnProperty(_13)||_17.hidden[_13]===_16)){break;}}while(_18=_15[++pos]);pos=_18?pos:-1;}}_18=_15[++pos];if(_18){_19=_18.prototype;if(_18._meta&&_19.hasOwnProperty(_13)){f=_19[_13];}else{opf=op[_13];do{_19=_18.prototype;f=_19[_13];if(f&&(_18._meta?_19.hasOwnProperty(_13):f!==opf)){break;}}while(_18=_15[++pos]);}}f=_18&&f||op[_13];}else{if(_1a.c!==_16){pos=0;_17=_15[0]._meta;if(_17&&_17.ctor!==_16){_14=_17.chains;if(!_14||_14.constructor!=="manual"){err("calling chained constructor with inherited");}while(_18=_15[++pos]){_17=_18._meta;if(_17&&_17.ctor===_16){break;}}pos=_18?pos:-1;}}while(_18=_15[++pos]){_17=_18._meta;f=_17?_17.ctor:_18;if(f){break;}}f=_18&&f;}_1a.c=f;_1a.p=pos;if(f){return a===true?f:f.apply(this,a||_12);}};function getInherited(_1b,_1c){if(typeof _1b=="string"){return this.inherited(_1b,_1c,true);}return this.inherited(_1b,true);};function isInstanceOf(cls){var _1d=this.constructor._meta.bases;for(var i=0,l=_1d.length;i<l;++i){if(_1d[i]===cls){return true;}}return this instanceof cls;};function safeMixin(_1e,_1f){var _20,t,i=0,l=d._extraNames.length;for(_20 in _1f){t=_1f[_20];if((t!==op[_20]||!(_20 in op))&&_20!=_5){if(_2.call(t)=="[object Function]"){t.nom=_20;}_1e[_20]=t;}}for(;i<l;++i){_20=d._extraNames[i];t=_1f[_20];if((t!==op[_20]||!(_20 in op))&&_20!=_5){if(_2.call(t)=="[object Function]"){t.nom=_20;}_1e[_20]=t;}}return _1e;};function extend(_21){safeMixin(this.prototype,_21);return this;};function chainedConstructor(_22,_23){return function(){var a=arguments,_24=a,a0=a[0],f,i,m,l=_22.length,_25;if(_23&&(a0&&a0.preamble||this.preamble)){_25=new Array(_22.length);_25[0]=a;for(i=0;;){a0=a[0];if(a0){f=a0.preamble;if(f){a=f.apply(this,a)||a;}}f=_22[i].prototype;f=f.hasOwnProperty("preamble")&&f.preamble;if(f){a=f.apply(this,a)||a;}if(++i==l){break;}_25[i]=a;}}for(i=l-1;i>=0;--i){f=_22[i];m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,_25?_25[i]:a);}}f=this.postscript;if(f){f.apply(this,_24);}};};function singleConstructor(_26,_27){return function(){var a=arguments,t=a,a0=a[0],f;if(_27){if(a0){f=a0.preamble;if(f){t=f.apply(this,t)||t;}}f=this.preamble;if(f){f.apply(this,t);}}if(_26){_26.apply(this,a);}f=this.postscript;if(f){f.apply(this,a);}};};function simpleConstructor(_28){return function(){var a=arguments,i=0,f;for(;f=_28[i];++i){m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,a);break;}}f=this.postscript;if(f){f.apply(this,a);}};};function chain(_29,_2a,_2b){return function(){var b,m,f,i=0,_2c=1;if(_2b){i=_2a.length-1;_2c=-1;}for(;b=_2a[i];i+=_2c){m=b._meta;f=(m?m.hidden:b.prototype)[_29];if(f){f.apply(this,arguments);}}};};d.declare=function $DBJ5_(_2d,_2e,_2f){var _30,i,t,_31,_32,_33,_34,_35=1,_36=_2e;if(typeof _2d!="string"){_2f=_2e;_2e=_2d;_2d="";}_2f=_2f||{};if(_2.call(_2e)=="[object Array]"){_33=c3mro(_2e);t=_33[0];_35=_33.length-t;_2e=_33[_35];}else{_33=[0];if(_2e){t=_2e._meta;_33=_33.concat(t?t.bases:_2e);}}if(_2e){for(i=_35-1;;--i){_3.prototype=_2e.prototype;_30=new _3;if(!i){break;}t=_33[i];_1(_30,t._meta?t._meta.hidden:t.prototype);_31=new Function;_31.superclass=_2e;_31.prototype=_30;_2e=_30.constructor=_31;}}else{_30={};}safeMixin(_30,_2f);t=_2f.constructor;if(t!==op.constructor){t.nom=_5;_30.constructor=t;}_3.prototype=0;for(i=_35-1;i;--i){t=_33[i]._meta;if(t&&t.chains){_34=_1(_34||{},t.chains);}}if(_30["-chains-"]){_34=_1(_34||{},_30["-chains-"]);}t=!_34||!_34.hasOwnProperty(_5);_33[0]=_31=(_34&&_34.constructor==="manual")?simpleConstructor(_33):(_33.length==1?singleConstructor(_2f.constructor,t):chainedConstructor(_33,t));_31._meta={bases:_33,hidden:_2f,chains:_34,parents:_36,ctor:_2f.constructor};_31.superclass=_2e&&_2e.prototype;_31.extend=extend;_31.prototype=_30;_30.constructor=_31;_30.getInherited=getInherited;_30.inherited=inherited;_30.isInstanceOf=isInstanceOf;if(_2d){_30.declaredClass=_2d;d.setObject(_2d,_31);}if(_34){for(_32 in _34){if(_30[_32]&&typeof _34[_32]=="string"&&_32!=_5){t=_30[_32]=chain(_32,_33,_34[_32]==="after");t.nom=_32;}}}return _31;};d.safeMixin=safeMixin;})();}