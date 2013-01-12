package com.nono.spring.chapter8;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/beans-chapter8.xml"})
public class TestCase {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Test
	public void testCase1(){
		String sql = "select count(*) from user;";
		int count = jdbcTemplate.queryForInt(sql);
		assertEquals(count, 4);
	}
}
