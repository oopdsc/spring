package com.nono.spring.chapter4;


import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.nono.spring.SpringBean;
import com.nono.spring.chapter4.UserBean;
import com.nono.spring.chapter4.UserManager;


public class CTXTest {
	
	protected final Logger logger = Logger.getLogger(getClass());
	private static ApplicationContext ctx = null;
	
	@BeforeClass
	public static void before(){
		System.out.println("qqqq");
		ctx = new FileSystemXmlApplicationContext("/target/test-classes/beans-chapter4.xml");
	}
	
	@Test
	public void ctxTestUserManager(){
		UserManager um = ctx.getBean("userManager", UserManager.class);
		logger.info(um.getManagerName());
		logger.info(um.getUser().getName());
		logger.info(um.getInnerBean().getName());
		for(String sport : um.getSports()){
			logger.info(sport);
		}
	}
	
	@Test
	public void ctxTest1(){
		UserBean user = ctx.getBean("userBean", UserBean.class);
		//user.setName("noo");
		logger.info(user.getName());
		logger.info(user.getAge());
	}
	
	@Test
	public void ctxTest2(){
		SpringBean spring = ctx.getBean("springBean", SpringBean.class);
		spring.getBean();
	}

}
