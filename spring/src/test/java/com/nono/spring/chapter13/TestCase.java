package com.nono.spring.chapter13;

import static org.junit.Assert.assertEquals;

import org.apache.log4j.Logger;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SchedulerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/beans-chapter13.xml"})
public class TestCase {
	//org.springframework.scheduling.quartz.JobDetailBean jdb;
	protected final Logger logger = Logger.getLogger(getClass());
	@Autowired
	private Scheduler scheduler;
	
	@Ignore
	@Test
	public void testCase1() throws SchedulerException, InterruptedException{
		System.out.println("begin");
		scheduler.start();
		Thread.sleep(10000);
		System.out.println("end");
	}
}
