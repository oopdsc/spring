package com.nono.spring.delorean;

import static org.junit.Assert.assertEquals;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/beans-delorean.xml"})
public class TestCase {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Ignore
	@Test
	public void calendarTest(){
		Calendar calendar = Calendar.getInstance();
		Date d1 = calendar.getTime();
		calendar.set(100, 1, 2);
		Date d2 = calendar.getTime();
		
		List<Date> ds = new ArrayList<Date>();
		ds.add(d1);
		ds.add(d2);
		
		calendar.set(100, 2, 23);
		d2 = calendar.getTime();
		
		for(Date dt : ds){
			System.out.println(dt);
		}
	}
	
	@Ignore
	@Test
	public void testCase1(){
		String sql = "select count(*) from user;";
		int count = jdbcTemplate.queryForInt(sql);
		assertEquals(count, 4);
	}
	
	@Ignore
	@Test
	public void testInsertTori(){
		String sql = "insert into tori values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
		Calendar calendar = Calendar.getInstance();
		
		calendar.set(2012, 9, 12);		
		Date d1 = calendar.getTime();
		calendar.set(2012, 9, 17);	
		Date d2 = calendar.getTime();
		
		final Object [][] paras = new Object[5][11];
		paras[0] = new Object[]{100, 111111, 2, d1, d2, 
				0, 0, 1000000, 1000000, 0, 0};
		
		calendar.set(2012, 9, 15);		
		d1 = calendar.getTime();
		calendar.set(2012, 9, 18);	
		d2 = calendar.getTime();
		
		paras[1] = new Object[] { 100, 222222, 2, d1, d2, 0, 0, 2000000,
				1980000, 14000, 6000 };
		paras[2] = new Object[] { 100, 333333, 3, d1, d2, 0, 0, 3000000,
				3000000, 0, 0 };
		paras[3] = new Object[] { 100, 555555, 3, d1, d2, 0, 0, 5000000,
				4990000, 7000, 3000 };
		
		calendar.set(2012, 9, 14);		
		d1 = calendar.getTime();
		calendar.set(2012, 9, 17);	
		d2 = calendar.getTime();
		paras[4] = new Object[] { 100, 444444, 15, d1, d2, 0, 0,
				4000000, 4000000, 0, 0 };
		
		
		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter(){
			
			
			@Override
			public int getBatchSize() {
				// TODO Auto-generated method stub
				return paras.length;
			}

			@Override
			public void setValues(PreparedStatement arg0, int arg1)
					throws SQLException {
				for(int i = 0; i < paras[arg1].length; i++){
					arg0.setObject(i + 1, paras[arg1][i]);
				}
				
				
			}
			
		});
	}
	
	@Ignore
	@Test
	public void testInsertDDACCRU(){
		String sql = "insert into DDACCRU values (?, ?, ?, ?, ?, ?, ?, ?);";
		
		final Object [][] paras = new Object[10][8];
		paras[0] = new Object[]{100, 222222, 888, "SSR", "JPY", 1, 0, 0};
		paras[1] = new Object[]{100, 222222, 783, "MSV", "USD", 1, 0, 0};
		paras[2] = new Object[]{100, 222222, 786, "MSV", "EUR", 1, 0, 0};
		paras[3] = new Object[]{100, 333333, 888, "MSV", "JPY", 1, 0, 0};
		paras[4] = new Object[]{100, 333333, 999, "SSR", "JPY", 1, 0, 0};
		paras[5] = new Object[]{100, 333333, 783, "MSV", "USD", 1, 0, 0};
		paras[6] = new Object[]{100, 444444, 888, "SSR", "JPY", 1, 0, 0};
		paras[7] = new Object[]{100, 555555, 888, "MSV", "JPY", 1, 0, 0};
		paras[8] = new Object[]{100, 555555, 999, "SSR", "JPY", 1, 0, 0};
		paras[9] = new Object[]{100, 555555, 777, "MSV", "USD", 1, 0, 0};		
		
		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter(){			
			
			@Override
			public int getBatchSize() {
				// TODO Auto-generated method stub
				return paras.length;
			}

			@Override
			public void setValues(PreparedStatement arg0, int arg1)
					throws SQLException {
				for(int i = 0; i < paras[arg1].length; i++){
					arg0.setObject(i + 1, paras[arg1][i]);
				}
				
				
			}
			
		});
	}
	
	@Ignore
	@Test
	public void testInsertCodeMst(){
		String sql = "delete from CodeMst";
		
		jdbcTemplate.execute(sql);
		
		sql = "insert into CodeMst values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
		
		final Object [][] paras = new Object[18][11];
		paras[0] = new Object[]{11, 1, 0, 100, 0, "JPY", 2, null, null, null, null};		
		paras[1] = new Object[]{11, 1, 1, 100, 0, "JPY", 2, null, null, null, null};	
		paras[2] = new Object[]{11, 2, 0, 100, 0, "JPY", 0, 100, 915156, 140, "TEST03"};		
		paras[3] = new Object[]{11, 2, 1, 100, 0, "JPY", 1, null, null, null, null};			
		paras[4] = new Object[]{11, 3, 0, 100, 0, "JPY", 0, 100, 915156, 140, "TEST05"};		
		paras[5] = new Object[]{11, 3, 1, 100, 0, "JPY", 0, 100, 910397, 140, "TEST06"};	
		paras[6] = new Object[]{11, 4, 0, 100, 0, "JPY", 0, 100, 915156, 140, "TEST07"};		
		paras[7] = new Object[]{11, 4, 1, 100, 0, "JPY", 0, 100, 910405, 140, "TEST08"};	
		
		paras[8] = new Object[]{21, 1, 0, 100, 0, "JPY", 0, 100, 915115, 140, "TEST09"};		
		paras[9] = new Object[]{21, 1, 1, 100, 0, "JPY", 0, 100, 915131, 140, "TEST10"};	
		paras[10] = new Object[]{21, 2, 0, 100, 0, "JPY", 0, 100, 915131, 140, "TEST11"};		
		paras[11] = new Object[]{21, 2, 1, 100, 0, "JPY", 0, 100, 915123, 140, "TEST12"};		
	
		paras[12] = new Object[]{22, 1, 0, 100, 0, "JPY", 2, null, null, null, null};		
		paras[13] = new Object[]{22, 1, 1, 100, 0, "JPY", 2, null, null, null, null};	
		paras[14] = new Object[]{22, 2, 0, 100, 0, "JPY", 0, 100, 915156, 140, "TEST15"};		
		paras[15] = new Object[]{22, 2, 1, 100, 0, "JPY", 0, 100, 915115, 140, "TEST16"};			
		paras[16] = new Object[]{22, 3, 0, 100, 0, "JPY", 0, 100, 915123, 140, "TEST17"};		
		paras[17] = new Object[]{22, 3, 1, 100, 0, "JPY", 1, null, null, null, null};	
		
		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter(){			
			
			@Override
			public int getBatchSize() {
				// TODO Auto-generated method stub
				return paras.length;
			}

			@Override
			public void setValues(PreparedStatement arg0, int arg1)
					throws SQLException {
				for(int i = 0; i < paras[arg1].length; i++){
					arg0.setObject(i + 1, paras[arg1][i]);
				}
				
				
			}
			
		});
	}
	
	@Ignore
	@Test
	public void simpleTest(){
		String sql = "select count(b.BtnCD) from ( " +
				"	select BtnCD, a.TranType, a.PostType from tori  cross join " +
				" (select TranType, PostType from CodeMst where activeFlg != 2) a )  b;";
		int count = jdbcTemplate.queryForInt(sql);
		assertEquals(count, 14);
	}
}

