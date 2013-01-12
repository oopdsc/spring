/**
 * Copyright 2002-2007 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.nono.spring.delorean.service;

import org.springframework.jdbc.core.SqlProvider;

/**
 * Oct 27, 2012-5:39:37 PM
 */
public class SQLTemplate implements SqlProvider {
	
	private String tmpSql = "";

	public SQLTemplate(int tranType, int PostType){
		
		//TODO to finish the class to return the correct sql statement
		// for the different TranType and PostType
		init();
	}
	
	public void init(){
		StringBuffer sb = new StringBuffer();
		sb.append("select c.Uke_D as BaseDate, ");
		sb.append(" 1 as SubNum,");
		sb.append(" c.TranType as TranType,");
		sb.append(" c.PostType as PostType,");
		sb.append(" case when c.ActiveFlg = 1 then DDACCRU.DFACB else c.ActBch end as ActBch,");
		sb.append(" case when c.ActiveFlg = 1 then DDACCRU.DFACS else c.ActNumSri end as ActNumSri,");
		sb.append(" case when c.ActiveFlg = 1 then DDACCRU.DFACX else c.ActSuf end as ActSuf, ");
		sb.append(" c.DrCr as DrCr,");
		sb.append(" c.PrdCode as ProdCode,");
		sb.append(" c.LCYAmt as LCYAmt");
		sb.append(" from (");
		sb.append(" select a.BtnCD, a.ActNo, a.ToriKbn, a.Uke_D,");
		sb.append(" case when b.PostType = 2 then a.SeiKin");
		sb.append(" when b.PostType = 3 then a.SyoZei");
		sb.append(" when b.PostType = 4 then a.JyuZei end as LCYAmt,");
		sb.append(" b.TranType, b.PostType, b.DrCr, b.Entity, b.CCY, b.ActBch, b.ActNumSri,");
		sb.append(" b.ActSuf,  b.PrdCode, b.ActiveFlg");
		sb.append(" from (");
		sb.append(" SELECT BTNCD, ACTNO, ToriKbn, Uke_D, SEIKIN, SyoZei, JyuZei");		
		sb.append(" FROM `test`.`tori`");
		sb.append(" WHERE UKE_D = DATE('20121018') and (ToriKbn = 2 or ToriKbn = 3)");	
		sb.append(" ) as a");
		sb.append(" cross join  (");
		sb.append(" select TranType, PostType, DrCr, Entity , ProdType, CCY, ActBch, ");
		sb.append(" ActNumSri, ActSuf, PrdCode, ActiveFlg");
		sb.append(" from test.CodeMst");
		sb.append(" where ActiveFlg != 2 and TranType = 11");
		sb.append(" ) as b");
		sb.append(" ) as c, DDACCRU");
		sb.append(" where c.LCYAmt != 0 and DDACCRU.DFACB = c.BtnCD and c.ActNo = DDACCRU.DFACS");
		sb.append(" and DDACCRU.DFCYCD = c.CCY and DDACCRU.DFAPTY = 'SSR'");
		tmpSql = sb.toString();
	}
	
	
	
	/* (non-Javadoc)
	 * @see org.springframework.jdbc.core.SqlProvider#getSql()
	 */
	@Override
	public String getSql() {
		return tmpSql;
	}

}
