/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.grid.enhanced.plugins.NestedSorting"]){dojo._hasResource["dojox.grid.enhanced.plugins.NestedSorting"]=true;dojo.provide("dojox.grid.enhanced.plugins.NestedSorting");dojo.declare("dojox.grid.enhanced.plugins.NestedSorting",null,{sortAttrs:[],_unarySortCell:{},_minColWidth:63,_widthDelta:23,_minColWidthUpdated:false,_sortTipMap:{},_overResizeWidth:3,storeItemSelected:"storeItemSelectedAttr",exceptionalSelectedItems:[],_a11yText:{"dojoxGridDescending":"&#9662;","dojoxGridAscending":"&#9652;","dojoxGridAscendingTip":"&#1784;","dojoxGridDescendingTip":"&#1783;","dojoxGridUnsortedTip":"x"},constructor:function $DAUt_(_1){_1.mixin(_1,this);dojo.forEach(_1.views.views,function(_2){dojo.connect(_2,"renderHeader",dojo.hitch(_2,_1._initSelectCols));dojo.connect(_2.header,"domousemove",_2.grid,"_sychronizeResize");});_1.getSortProps=_1._getDsSortAttrs;dojo.connect(_1,"_onFetchComplete",_1,"updateNewRowSelection");if(_1.indirectSelection&&_1.rowSelectCell.toggleAllSelection){dojo.connect(_1.rowSelectCell,"toggleAllSelection",_1,"allSelectionToggled");}dojo.subscribe(_1.rowSelectionChangedTopic,_1,_1._selectionChanged);_1.focus.destroy();_1.focus=new dojox.grid.enhanced.plugins._NestedSortingFocusManager(_1);dojo.connect(_1.views,"render",_1,"initAriaInfo");},setSortIndex:function $DAUu_(_3,_4,e){if(!this.nestedSorting){this.inherited(arguments);}else{if(this.dnd&&!this.dndRowConn){this.dndRowConn=dojo.connect(this.select,"startMoveRows",dojo.hitch(this,this.clearSort));}this.retainLastRowSelection();this.inSorting=true;this._toggleProgressTip(true,e);this._updateSortAttrs(e,_4);this.focus.addSortFocus(e);if(this.canSort()){this.sort();this.edit.info={};this.update();}this._toggleProgressTip(false,e);this.inSorting=false;}},_updateSortAttrs:function $DAUv_(e,_5){var _6=false;var _7=!!e.unarySortChoice;if(_7){var _8=this.getCellSortInfo(e.cell);var _9=(this.sortAttrs.length>0&&_8["sortPos"]!=1)?_8["unarySortAsc"]:this._getNewSortState(_8["unarySortAsc"]);if(_9&&_9!=0){this.sortAttrs=[{attr:e.cell.field,asc:_9,cell:e.cell,cellNode:e.cellNode}];this._unarySortCell={cell:e.cell,node:e.cellNode};}else{this.sortAttrs=[];this._unarySortCell=null;}}else{this.setCellSortInfo(e,_5);}},getCellSortInfo:function $DAUw_(_a){if(!_a){return false;}var _b=null;var _c=this.sortAttrs;dojo.forEach(_c,function(_d,_e,_f){if(_d&&_d["attr"]==_a.field&&_d["cell"]==_a){_b={unarySortAsc:_f[0]?_f[0]["asc"]:undefined,nestedSortAsc:_d["asc"],sortPos:_e+1};}});return _b?_b:{unarySortAsc:_c&&_c[0]?_c[0]["asc"]:undefined,nestedSortAsc:undefined,sortPos:-1};},setCellSortInfo:function $DAUx_(e,_10){var _11=e.cell;var _12=false;var _13=[];var _14=this.sortAttrs;dojo.forEach(_14,dojo.hitch(this,function(_15,_16){if(_15&&_15["attr"]==_11.field){var si=_10?_10:this._getNewSortState(_15["asc"]);if(si==1||si==-1){_15["asc"]=si;}else{if(si==0){_13.push(_16);}else{throw new Exception("Illegal nested sorting status - "+si);}}_12=true;}}));var _17=0;dojo.forEach(_13,function(_18){_14.splice((_18-_17++),1);});if(!_12){var si=_10?_10:1;if(si!=0){_14.push({attr:_11.field,asc:si,cell:e.cell,cellNode:e.cellNode});}}if(_13.length>0){this._unarySortCell={cell:_14[0]["cell"],node:_14[0]["cellNode"]};}},_getDsSortAttrs:function $DAUy_(){var _19=[];var si=null;dojo.forEach(this.sortAttrs,function(_1a){if(_1a&&(_1a["asc"]==1||_1a["asc"]==-1)){_19.push({attribute:_1a["attr"],descending:(_1a["asc"]==-1)});}});return _19.length>0?_19:null;},_getNewSortState:function $DAUz_(si){return si?(si==1?-1:(si==-1?0:1)):1;},sortStateInt2Str:function $DAU0_(si){if(!si){return "Unsorted";}switch(si){case 1:return "Ascending";case -1:return "Descending";default:return "Unsorted";}},clearSort:function $DAU1_(){dojo.query("[id*='Sort']",this.viewsHeaderNode).forEach(function(_1b){dojo.addClass(_1b,"dojoxGridUnsorted");});this.sortAttrs=[];this.focus.clearHeaderFocus();},_getNestedSortHeaderContent:function $DAU2_(_1c){var n=_1c.name||_1c.grid.getCellName(_1c);if(_1c.grid.pluginMgr.isFixedCell(_1c)){return ["<div class=\"dojoxGridCellContent\">",n,"</div>"].join("");}var _1d=_1c.grid.getCellSortInfo(_1c);var _1e=_1c.grid.sortAttrs;var _1f=(_1e&&_1e.length>1&&_1d["sortPos"]>=1);var _20=(_1e&&_1e.length==1&&_1d["sortPos"]==1);var _21=_1c.grid;var ret=["<div class=\"dojoxGridSortRoot\">","<div class=\"dojoxGridSortWrapper\">","<span id=\"selectSortSeparator"+_1c.index+"\" class=\"dojoxGridSortSeparatorOff\"></span>","<span class=\"dojoxGridNestedSortWrapper\" tabindex=\"-1\">","<span id=\""+_1c.view.id+"SortPos"+_1c.index+"\" class=\"dojoxGridSortPos "+(_1f?"":"dojoxGridSortPosOff")+"\">"+(_1f?_1d["sortPos"]:"")+"</span>","<span id=\"nestedSortCol"+_1c.index+"\" class=\"dojoxGridSort dojoxGridNestedSort "+(_1f?("dojoxGrid"+_21.sortStateInt2Str(_1d["nestedSortAsc"])):"dojoxGridUnsorted")+"\">",_21._a11yText["dojoxGrid"+_21.sortStateInt2Str(_1d["nestedSortAsc"])]||".","</span>","</span>","<span id=\"SortSeparator"+_1c.index+"\" class=\"dojoxGridSortSeparatorOff\"></span>","<span class=\"dojoxGridUnarySortWrapper\" tabindex=\"-1\"><span id=\"unarySortCol"+_1c.index+"\" class=\"dojoxGridSort dojoxGridUnarySort "+(_20?("dojoxGrid"+_21.sortStateInt2Str(_1d["unarySortAsc"])):"dojoxGridUnsorted")+"\">",_21._a11yText["dojoxGrid"+_21.sortStateInt2Str(_1d["unarySortAsc"])]||".","</span></span>","</div>","<div tabindex=\"-1\" id=\"selectCol"+_1c.index+"\" class=\"dojoxGridHeaderCellSelectRegion\"><span id=\"caption"+_1c.index+"\">"+n+"<span></div>","</div>"];return ret.join("");},addHoverSortTip:function $DAU3_(e){this._sortTipMap[e.cellIndex]=true;var _22=this.getCellSortInfo(e.cell);if(!_22){return;}var _23=this._getCellElements(e.cellNode);if(!_23){return;}var _24=this.sortAttrs;var _25=!_24||_24.length<1;var _26=(_24&&_24.length==1&&_22["sortPos"]==1);dojo.addClass(_23["selectSortSeparator"],"dojoxGridSortSeparatorOn");if(_25||_26){this._addHoverUnarySortTip(_23,_22,e);}else{this._addHoverNestedSortTip(_23,_22,e);this.updateMinColWidth(_23["nestedSortPos"]);}var _27=_23["selectRegion"];this._fixSelectRegion(_27);if(!dijit.hasWaiRole(_27)){dijit.setWaiState(_27,"label","Column "+(e.cellIndex+1)+" "+e.cell.field);}this._toggleHighlight(e.sourceView,e);this.focus._updateFocusBorder();},_addHoverUnarySortTip:function $DAU4_(_28,_29,e){dojo.addClass(_28["nestedSortWrapper"],"dojoxGridUnsorted");var _2a=this.sortStateInt2Str(this._getNewSortState(_29["unarySortAsc"]));dijit.setWaiState(_28["unarySortWrapper"],"label","Column "+(e.cellIndex+1)+" "+e.cell.field+" - Choose "+_2a.toLowerCase()+" single sort");var _2b="dojoxGrid"+_2a+"Tip";dojo.addClass(_28["unarySortChoice"],_2b);_28["unarySortChoice"].innerHTML=this._a11yText[_2b];this._addTipInfo(_28["unarySortWrapper"],this._composeSortTip(_2a,"singleSort"));},_addHoverNestedSortTip:function $DAU5_(_2c,_2d,e){var _2e=_2c["nestedSortPos"];var _2f=_2c["unarySortWrapper"];var _30=_2c["nestedSortWrapper"];var _31=this.sortAttrs;dojo.removeClass(_30,"dojoxGridUnsorted");var _32=this.sortStateInt2Str(this._getNewSortState(_2d["nestedSortAsc"]));dijit.setWaiState(_30,"label","Column "+(e.cellIndex+1)+" "+e.cell.field+" - Choose "+_32.toLowerCase()+" nested sort");var _33="dojoxGrid"+_32+"Tip";this._addA11yInfo(_2c["nestedSortChoice"],_33);this._addTipInfo(_30,this._composeSortTip(_32,"nestedSort"));_32=this.sortStateInt2Str(_2d["unarySortAsc"]);dijit.setWaiState(_2f,"label","Column "+(e.cellIndex+1)+" "+e.cell.field+" - Choose "+_32.toLowerCase()+" single sort");_33="dojoxGrid"+_32+"Tip";this._addA11yInfo(_2c["unarySortChoice"],_33);this._addTipInfo(_2f,this._composeSortTip(_32,"singleSort"));dojo.addClass(_2c["sortSeparator"],"dojoxGridSortSeparatorOn");dojo.removeClass(_2e,"dojoxGridSortPosOff");if(_2d["sortPos"]<1){_2e.innerHTML=(_31?_31.length:0)+1;if(!this._unarySortInFocus()&&_31&&_31.length==1){var _34=this._getUnaryNode();_34.innerHTML="1";dojo.removeClass(_34,"dojoxGridSortPosOff");dojo.removeClass(_34.parentNode,"dojoxGridUnsorted");this._fixSelectRegion(this._getCellElements(_34)["selectRegion"]);}}},_unarySortInFocus:function $DAU6_(){return this._unarySortCell.cell&&this.focus.headerCellInFocus(this._unarySortCell.cell.index);},_composeSortTip:function $DAU7_(_35,_36){_35=_35.toLowerCase();if(_35=="unsorted"){return this._nls[_35];}else{var tip=dojo.string.substitute(this._nls["sortingState"],[this._nls[_36],this._nls[_35]]);return tip;}},_addTipInfo:function $DAU8_(_37,_38){dojo.attr(_37,"title",_38);dojo.query("span",_37).forEach(function(n){dojo.attr(n,"title",_38);});},_addA11yInfo:function $DAU9_(_39,_3a){dojo.addClass(_39,_3a);_39.innerHTML=this._a11yText[_3a];},removeHoverSortTip:function $DAVA_(e){if(!this._sortTipMap[e.cellIndex]){return;}var _3b=this.getCellSortInfo(e.cell);if(!_3b){return;}var _3c=this._getCellElements(e.cellNode);if(!_3c){return;}var _3d=_3c.nestedSortChoice;var _3e=_3c.unarySortChoice;var _3f=_3c.unarySortWrapper;var _40=_3c.nestedSortWrapper;this._toggleHighlight(e.sourceView,e,true);function _removeTipClass(_41){dojo.forEach(_41,function(_42){var _43=dojo.trim((" "+_42["className"]+" ").replace(/\sdojoxGrid\w+Tip\s/g," "));if(_42["className"]!=_43){_42["className"]=_43;}});};_removeTipClass([_3d,_3e]);_3e.innerHTML=this._a11yText["dojoxGrid"+this.sortStateInt2Str(_3b["unarySortAsc"])]||".";_3d.innerHTML=this._a11yText["dojoxGrid"+this.sortStateInt2Str(_3b["nestedSortAsc"])]||".";dojo.removeClass(_3c["selectSortSeparator"],"dojoxGridSortSeparatorOn");dojo.removeClass(_3c["sortSeparator"],"dojoxGridSortSeparatorOn");if(_3b["sortPos"]==1&&this.focus.isNavHeader()&&!this.focus.headerCellInFocus(e.cellIndex)){dojo.removeClass(_3c["nestedSortWrapper"],"dojoxGridUnsorted");}var _44=this.sortAttrs;if(!isNaN(_3b["sortPos"])&&_3b["sortPos"]<1){_3c["nestedSortPos"].innerHTML="";dojo.addClass(_40,"dojoxGridUnsorted");if(!this.focus._focusBorderBox&&_44&&_44.length==1){var _45=this._getUnaryNode();_45.innerHTML="";dojo.addClass(_45,"dojoxGridSortPosOff");this._fixSelectRegion(this._getCellElements(_45)["selectRegion"]);}}this._fixSelectRegion(_3c["selectRegion"]);dijit.removeWaiState(_40,"label");dijit.removeWaiState(_3f,"label");if(_3b["sortPos"]>=0){var _46=(_44.length==1);var _47=_46?_3f:_40;this._setSortRegionWaiState(_46,e.cellIndex,e.cell.field,_3b["sortPos"],_47);}this.focus._updateFocusBorder();this._sortTipMap[e.cellIndex]=false;},_getUnaryNode:function $DAVB_(){for(var i=0;i<this.views.views.length;i++){var n=dojo.byId(this.views.views[i].id+"SortPos"+this._unarySortCell.cell.index);if(n){return n;}}},_fixSelectRegion:function $DAVC_(_48){var _49=_48.previousSibling;var _4a=dojo.contentBox(_48.parentNode);var _4b=dojo.marginBox(_48);var _4c=dojo.marginBox(_49);if(dojo.isIE&&!dojo._isBodyLtr()){var w=0;dojo.forEach(_49.childNodes,function(_4d){w+=dojo.marginBox(_4d).w;});_4c.w=w;_4c.l=(_4c.t=0);dojo.marginBox(_49,_4c);}if(_4b.w!=(_4a.w-_4c.w)){_4b.w=_4a.w-_4c.w;if(!dojo.isWebKit){dojo.marginBox(_48,_4b);}else{_4b.h=dojo.contentBox(_4a).h;dojo.style(_48,"width",(_4b.w-4)+"px");}}},updateMinColWidth:function $DAVD_(_4e){if(this._minColWidthUpdated){return;}var _4f=_4e.innerHTML;_4e.innerHTML=dojo.query(".dojoxGridSortWrapper",this.viewsHeaderNode).length;var _50=_4e.parentNode.parentNode;this._minColWidth=dojo.marginBox(_50).w+this._widthDelta;_4e.innerHTML=_4f;this._minColWidthUpdated=true;},getMinColWidth:function $DAVE_(){return this._minColWidth;},_initSelectCols:function $DAVF_(){var _51=dojo.query(".dojoxGridHeaderCellSelectRegion",this.headerContentNode);var _52=dojo.query(".dojoxGridUnarySortWrapper",this.headerContentNode);var _53=dojo.query(".dojoxGridNestedSortWrapper",this.headerContentNode);_51.concat(_52).concat(_53).forEach(function(_54){dojo.connect(_54,"onmousemove",dojo.hitch(this.grid,this.grid._toggleHighlight,this));dojo.connect(_54,"onmouseout",dojo.hitch(this.grid,this.grid._removeActiveState));},this);this.grid._fixHeaderCellStyle(_51,this);if(dojo.isIE&&!dojo._isBodyLtr()){this.grid._fixAllSelectRegion();}},_fixHeaderCellStyle:function $DAVG_(_55,_56){dojo.forEach(_55,dojo.hitch(this,function(_57){var _58=dojo.marginBox(_57),_59=this._getCellElements(_57),_5a=_59.sortWrapper;_5a.style.height=_58.h+"px";_5a.style.lineHeight=_58.h+"px";var _5b=_59["selectSortSeparator"],_5c=_59["sortSeparator"];_5c.style.height=_5b.style.height=_58.h*3/5+"px";_5c.style.marginTop=_5b.style.marginTop=_58.h*1/5+"px";_56.header.overResizeWidth=this._overResizeWidth;}));},_fixAllSelectRegion:function $DAVH_(){var _5d=dojo.query(".dojoxGridHeaderCellSelectRegion",this.viewsHeaderNode);dojo.forEach(_5d,dojo.hitch(this,function(_5e){this._fixSelectRegion(_5e);}));},_toggleHighlight:function $DAVI_(_5f,e,_60){if(!e.target||!e.type||!e.type.match(/mouse|contextmenu/)){return;}var _61=this._getCellElements(e.target);if(!_61){return;}var _62=_61["selectRegion"];var _63=_61["nestedSortWrapper"];var _64=_61["unarySortWrapper"];dojo.removeClass(_62,"dojoxGridSelectRegionHover");dojo.removeClass(_63,"dojoxGridSortHover");dojo.removeClass(_64,"dojoxGridSortHover");if(!_60&&!_5f.grid._inResize(_5f)){var _65=this._getSortEventInfo(e);if(_65.selectChoice){dojo.addClass(_62,"dojoxGridSelectRegionHover");}else{if(_65.nestedSortChoice){dojo.addClass(_63,"dojoxGridSortHover");}else{if(_65.unarySortChoice){dojo.addClass(_64,"dojoxGridSortHover");}}}}},_removeActiveState:function $DAVJ_(e){if(!e.target||!e.type||!e.type.match(/mouse|contextmenu/)){return;}var _66=this._getChoiceRegion(e.target,this._getSortEventInfo(e));_66&&dojo.removeClass(_66,this.headerCellActiveClass);},_toggleProgressTip:function $DAVK_(on,e){var _67=[this.domNode,e?e.cellNode:null];setTimeout(function(){dojo.forEach(_67,function(_68){if(_68){if(on&&!dojo.hasClass(_68,"dojoxGridSortInProgress")){dojo.addClass(_68,"dojoxGridSortInProgress");}else{if(!on&&dojo.hasClass(_68,"dojoxGridSortInProgress")){dojo.removeClass(_68,"dojoxGridSortInProgress");}}}});},0.1);},_getSortEventInfo:function $DAVL_(e){var _69=function(_6a,css){return dojo.hasClass(_6a,css)||(_6a.parentNode&&dojo.hasClass(_6a.parentNode,css));};return {selectChoice:_69(e.target,"dojoxGridHeaderCellSelectRegion"),unarySortChoice:_69(e.target,"dojoxGridUnarySortWrapper"),nestedSortChoice:_69(e.target,"dojoxGridNestedSortWrapper")};},ignoreEvent:function $DAVM_(e){return !(e.nestedSortChoice||e.unarySortChoice||e.selectChoice);},doheaderclick:function $DAVN_(e){if(this.nestedSorting){if(e.selectChoice){this.onHeaderCellSelectClick(e);}else{if((e.unarySortChoice||e.nestedSortChoice)&&!this._inResize(e.sourceView)){this.onHeaderCellSortClick(e);}}return;}this.inherited(arguments);},onHeaderCellSelectClick:function $DAVO_(e){},onHeaderCellSortClick:function $DAVP_(e){this.setSortIndex(e.cell.index,null,e);},_sychronizeResize:function $DAVQ_(e){if(!e.cell||e.cell.isRowSelector||this.focus.headerCellInFocus(e.cellIndex)){return;}if(!this._inResize(e.sourceView)){this.addHoverSortTip(e);}else{var idx=e.cellIndex;if(!this._sortTipMap[e.cellIndex]){e.cellIndex=this._sortTipMap[idx+1]?(idx+1):(this._sortTipMap[idx-1]?(idx-1):idx);e.cellNode=e.cellNode.parentNode.childNodes[e.cellIndex];}this.removeHoverSortTip(e);}},_getCellElements:function $DAVR_(_6b){try{while(_6b&&_6b.nodeName.toLowerCase()!="th"){_6b=_6b.parentNode;}if(!_6b){return null;}var ns=dojo.query(".dojoxGridSortRoot",_6b);if(ns.length!=1){return null;}var n=ns[0];return {"selectSortSeparator":dojo.query("[id^='selectSortSeparator']",n)[0],"nestedSortPos":dojo.query(".dojoxGridSortPos",n)[0],"nestedSortChoice":dojo.query("[id^='nestedSortCol']",n)[0],"sortSeparator":dojo.query("[id^='SortSeparator']",n)[0],"unarySortChoice":dojo.query("[id^='unarySortCol']",n)[0],"selectRegion":dojo.query(".dojoxGridHeaderCellSelectRegion",n)[0],"sortWrapper":dojo.query(".dojoxGridSortWrapper",n)[0],"unarySortWrapper":dojo.query(".dojoxGridUnarySortWrapper",n)[0],"nestedSortWrapper":dojo.query(".dojoxGridNestedSortWrapper",n)[0],"sortRoot":n,"headCellNode":_6b};}catch(e){console.debug("NestedSorting._getCellElemets() error:"+e);}return null;},_getChoiceRegion:function $DAVS_(_6c,_6d){var _6e,_6f=this._getCellElements(_6c);if(!_6f){return;}_6d.unarySortChoice&&(_6e=_6f["unarySortWrapper"]);_6d.nestedSortChoice&&(_6e=_6f["nestedSortWrapper"]);_6d.selectChoice&&(_6e=_6f["selectRegion"]);return _6e;},_inResize:function $DAVT_(_70){return _70.header.moverDiv||dojo.hasClass(_70.headerNode,"dojoxGridColResize")||dojo.hasClass(_70.headerNode,"dojoxGridColNoResize");},retainLastRowSelection:function $DAVU_(){dojo.forEach(this._by_idx,function(o,idx){if(!o||!o.item){return;}var _71=!!this.selection.isSelected(idx);o.item[this.storeItemSelected]=[_71];if(this.indirectSelection&&this.rowSelectCell.toggleAllTrigerred&&_71!=this.toggleAllValue){this.exceptionalSelectedItems.push(o.item);}},this);this.selection.clear();dojo.publish(this.sortRowSelectionChangedTopic,[this]);},updateNewRowSelection:function $DAVV_(_72,req){dojo.forEach(_72,function(_73,idx){if(this.indirectSelection&&this.rowSelectCell.toggleAllTrigerred){if(dojo.indexOf(this.exceptionalSelectedItems,_73)<0){_73[this.storeItemSelected]=[this.toggleAllValue];}}_73[this.storeItemSelected]&&_73[this.storeItemSelected][0]&&this.selection.addToSelection(req.start+idx);},this);dojo.publish(this.sortRowSelectionChangedTopic,[this]);if(dojo.isMoz&&this._by_idx.length==0){this.update();}},allSelectionToggled:function $DAVW_(_74){this.exceptionalSelectedItems=[];this.toggleAllValue=this.rowSelectCell.defaultValue;},_selectionChanged:function $DAVX_(obj){obj==this.select&&(this.toggleAllValue=false);},getStoreSelectedValue:function $DAVY_(_75){var _76=this._by_idx[_75];return _76&&_76.item&&!!(_76.item[this.storeItemSelected]&&_76.item[this.storeItemSelected][0]);},initAriaInfo:function $DAVZ_(){var _77=this.sortAttrs;dojo.forEach(_77,dojo.hitch(this,function(_78,_79){var _7a=_78.cell.getHeaderNode();var _7b=this._getCellElements(_7a);if(!_7b){return;}var _7c=_7b["selectRegion"];dijit.setWaiState(_7c,"label","Column "+(_78.cell.index+1)+" "+_78.attr);var _7d=(_77.length==1);var _7e=this.sortStateInt2Str(_78.asc).toLowerCase();var _7f=_7d?_7b["unarySortWrapper"]:_7b["nestedSortWrapper"];dijit.setWaiState(_7f,"sort",_7e);this._setSortRegionWaiState(_7d,_78.cell.index,_78.attr,_79+1,_7f);}));},_setSortRegionWaiState:function $DAVa_(_80,_81,_82,_83,_84){if(_83<0){return;}var _85=_80?"single sort":"nested sort";var _86="Column "+(_81+1)+" "+_82+" "+_85+" "+(!_80?(" sort position "+_83):"");dijit.setWaiState(_84,"label",_86);},_inPage:function $DAVb_(_87){return _87<this._bop||_87>=this._eop;}});dojo.declare("dojox.grid.enhanced.plugins._NestedSortingFocusManager",dojox.grid._FocusManager,{lastHeaderFocus:{cellNode:null,regionIdx:-1},currentHeaderFocusEvt:null,cssMarkers:["dojoxGridHeaderCellSelectRegion","dojoxGridNestedSortWrapper","dojoxGridUnarySortWrapper"],_focusBorderBox:null,_initColumnHeaders:function $DAVc_(){var _88=this._findHeaderCells();dojo.forEach(_88,dojo.hitch(this,function(_89){var _8a=dojo.query(".dojoxGridHeaderCellSelectRegion",_89);var _8b=dojo.query("[class*='SortWrapper']",_89);_8a=_8a.concat(_8b);_8a.length==0&&(_8a=[_89]);dojo.forEach(_8a,dojo.hitch(this,function(_8c){this._connects.push(dojo.connect(_8c,"onfocus",this,"doColHeaderFocus"));this._connects.push(dojo.connect(_8c,"onblur",this,"doColHeaderBlur"));}));}));},focusHeader:function $DAVd_(_8d,_8e,_8f){if(!this.isNavHeader()){this.inherited(arguments);}else{var _90=this._findHeaderCells();this._colHeadNode=_90[this._colHeadFocusIdx];_8e&&(this.lastHeaderFocus.cellNode=this._colHeadNode);}if(!this._colHeadNode){return;}if(this.grid.indirectSelection&&this._colHeadFocusIdx==0){this._colHeadNode=this._findHeaderCells()[++this._colHeadFocusIdx];}var _91=_8f?0:(this.lastHeaderFocus.regionIdx>=0?this.lastHeaderFocus.regionIdx:(_8d?2:0));var _92=dojo.query("."+this.cssMarkers[_91],this._colHeadNode)[0]||this._colHeadNode;this.grid.addHoverSortTip(this.currentHeaderFocusEvt=this._mockEvt(_92));this.lastHeaderFocus.regionIdx=_91;_92&&dojox.grid.util.fire(_92,"focus");},focusSelectColEndingHeader:function $DAVe_(e){if(!e||!e.cellNode){return;}this._colHeadFocusIdx=e.cellIndex;this.focusHeader(null,false,true);},_delayedHeaderFocus:function $DAVf_(){this.isNavHeader()&&this.focusHeader(null,true);},_setActiveColHeader:function $DAVg_(_93,_94,_95){dojo.attr(this.grid.domNode,"aria-activedescendant",_93.id);this._colHeadNode=_93;this._colHeadFocusIdx=_94;},doColHeaderFocus:function $DAVh_(e){this.lastHeaderFocus.cellNode=this._colHeadNode;if(e.target==this._colHeadNode){this._scrollHeader(this.getHeaderIndex());}else{var _96=this.getFocusView(e);if(!_96){return;}_96.header.baseDecorateEvent(e);this._addFocusBorder(e.target);this._colHeadFocusIdx=e.cellIndex;this._colHeadNode=this._findHeaderCells()[this._colHeadFocusIdx];this._colHeadNode&&this.getHeaderIndex()!=-1&&this._scrollHeader(this._colHeadFocusIdx);}this._focusifyCellNode(false);this.grid.isDndSelectEnable&&this.grid.focus._blurRowBar();this.grid.addHoverSortTip(this.currentHeaderFocusEvt=this._mockEvt(e.target));if(dojo.isIE&&!dojo._isBodyLtr()){this.grid._fixAllSelectRegion();}},doColHeaderBlur:function $DAVi_(e){this.inherited(arguments);this._removeFocusBorder();if(!this.isNavCellRegion){var _97=this.getFocusView(e);if(!_97){return;}_97.header.baseDecorateEvent(e);this.grid.removeHoverSortTip(e);this.lastHeaderFocus.cellNode=this._colHeadNode;}},getFocusView:function $DAVj_(e){var _98;dojo.forEach(this.grid.views.views,function(_99){if(!_98){var _9a=dojo.coords(_99.domNode),_9b=dojo.coords(e.target);var _9c=_9b.x>=_9a.x&&_9b.x<=(_9a.x+_9a.w);_9c&&(_98=_99);}});return (this.focusView=_98);},_mockEvt:function $DAVk_(_9d){var _9e=this.grid.getCell(this._colHeadFocusIdx);return {target:_9d,cellIndex:this._colHeadFocusIdx,cell:_9e,cellNode:this._colHeadNode,clientX:-1,sourceView:_9e.view};},navHeader:function $DAVl_(e){var _9f=e.ctrlKey?0:(e.keyCode==dojo.keys.LEFT_ARROW)?-1:1;!dojo._isBodyLtr()&&(_9f*=-1);this.focusView.header.baseDecorateEvent(e);dojo.forEach(this.cssMarkers,dojo.hitch(this,function(css,_a0){if(dojo.hasClass(e.target,css)){var _a1=_a0+_9f,_a2,_a3;do{_a2=dojo.query("."+this.cssMarkers[_a1],e.cellNode)[0];if(_a2&&dojo.style(_a2.lastChild||_a2.firstChild,"display")!="none"){_a3=_a2;break;}_a1+=_9f;}while(_a1>=0&&_a1<this.cssMarkers.length);if(_a3&&_a1>=0&&_a1<this.cssMarkers.length){if(e.ctrlKey){return;}dojo.isIE&&(this.grid._sortTipMap[e.cellIndex]=false);this.navCellRegion(_a3,_a1);return;}var _a4=_a1<0?-1:(_a1>=this.cssMarkers.length?1:0);this.navHeaderNode(_a4);}}));},navHeaderNode:function $DAVm_(_a5,_a6){var _a7=this._colHeadFocusIdx+_a5;var _a8=this._findHeaderCells();while(_a7>=0&&_a7<_a8.length&&_a8[_a7].style.display=="none"){_a7+=_a5;}if(this.grid.indirectSelection&&_a7==0){return;}if(_a5!=0&&_a7>=0&&_a7<this.grid.layout.cells.length){this.lastHeaderFocus.cellNode=this._colHeadNode;this.lastHeaderFocus.regionIdx=-1;this._colHeadFocusIdx=_a7;this.focusHeader(_a5<0?true:false,false,_a6);}},navCellRegion:function $DAVn_(_a9,_aa){this.isNavCellRegion=true;dojox.grid.util.fire(_a9,"focus");this.currentHeaderFocusEvt.target=_a9;this.lastHeaderFocus.regionIdx=_aa;var _ab=_aa==0?_a9:_a9.parentNode.nextSibling;_ab&&this.grid._fixSelectRegion(_ab);this.isNavCellRegion=false;},headerCellInFocus:function $DAVo_(_ac){return (this._colHeadFocusIdx==_ac)&&this._focusBorderBox;},clearHeaderFocus:function $DAVp_(){this._colHeadNode=this._colHeadFocusIdx=null;this.lastHeaderFocus={cellNode:null,regionIdx:-1};},addSortFocus:function $DAVq_(e){var _ad=this.grid.getCellSortInfo(e.cell);if(!_ad){return;}var _ae=this.grid.sortAttrs;var _af=!_ae||_ae.length<1;var _b0=(_ae&&_ae.length==1&&_ad["sortPos"]==1);this._colHeadFocusIdx=e.cellIndex;this._colHeadNode=e.cellNode;this.currentHeaderFocusEvt={};this.lastHeaderFocus.regionIdx=(_af||_b0)?2:(e.nestedSortChoice?1:0);},_addFocusBorder:function $DAVr_(_b1){if(!_b1){return;}this._removeFocusBorder();this._focusBorderBox=dojo.create("div");this._focusBorderBox.className="dojoxGridFocusBorderBox";dojo.toggleClass(_b1,"dojoxGridSelectRegionFocus",true);dojo.toggleClass(_b1,"dojoxGridSelectRegionHover",false);var _b2=_b1.offsetHeight;if(_b1.hasChildNodes()){_b1.insertBefore(this._focusBorderBox,_b1.firstChild);}else{_b1.appendChild(this._focusBorderBox);}var _b3={"l":0,"t":0,"r":0,"b":0};for(var i in _b3){_b3[i]=dojo.create("div");}var pos={x:dojo.coords(_b1).x-dojo.coords(this._focusBorderBox).x,y:dojo.coords(_b1).y-dojo.coords(this._focusBorderBox).y,w:_b1.offsetWidth,h:_b2};for(var i in _b3){var n=_b3[i];dojo.addClass(n,"dojoxGridFocusBorder");dojo.style(n,"top",pos.y+"px");dojo.style(n,"left",pos.x+"px");this._focusBorderBox.appendChild(n);}var _b4=function(val){return val>0?val:0;};dojo.style(_b3.r,"left",_b4(pos.x+pos.w-1)+"px");dojo.style(_b3.b,"top",_b4(pos.y+pos.h-1)+"px");dojo.style(_b3.l,"height",_b4(pos.h-1)+"px");dojo.style(_b3.r,"height",_b4(pos.h-1)+"px");dojo.style(_b3.t,"width",_b4(pos.w-1)+"px");dojo.style(_b3.b,"width",_b4(pos.w-1)+"px");},_updateFocusBorder:function $DAVs_(){if(this._focusBorderBox==null){return;}this._addFocusBorder(this._focusBorderBox.parentNode);},_removeFocusBorder:function $DAVt_(){if(this._focusBorderBox&&this._focusBorderBox.parentNode){dojo.toggleClass(this._focusBorderBox.parentNode,"dojoxGridSelectRegionFocus",false);this._focusBorderBox.parentNode.removeChild(this._focusBorderBox);}this._focusBorderBox=null;}});}