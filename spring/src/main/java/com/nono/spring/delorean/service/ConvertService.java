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


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.SqlProvider;

import com.nono.spring.delorean.bean.MarcoDetailBean;

/**
 * Oct 27, 2012-12:00:17 PM
 */
public class ConvertService {
	
	private final Logger log = Logger.getLogger(getClass());
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private SqlProvider sqlFromTori = new SQLTemplate(1, 1);
	
	public List<MarcoDetailBean> converte(){
		log.info(sqlFromTori.getSql());
		List<MarcoDetailBean> beanList;
		
		beanList = jdbcTemplate.query(sqlFromTori.getSql(), new RowMapper<MarcoDetailBean>(){
			
			@Override
			public MarcoDetailBean mapRow(ResultSet arg0, int arg1)
					throws SQLException {
				MarcoDetailBean bean = new MarcoDetailBean();
				log.info(arg1);
				bean.setBaseDate(arg0.getDate(1));
				bean.setSubNum(arg0.getInt(2));
				bean.setTranType(arg0.getInt(3));
				bean.setPostType(arg0.getInt(4));
				bean.setRecNum(arg1);
				bean.setActBch(arg0.getInt(5));
				bean.setActNumSri(arg0.getInt(6));
				bean.setActSuf(arg0.getInt(7));
				bean.setDrCr(arg0.getInt(8));
				bean.setPrdCode(arg0.getString(9));
				bean.setrCYAmt(0);
				bean.setlCYAmt(arg0.getInt(10));
				
				return bean;
			}
			
		});
		
		return beanList;
	}

}
