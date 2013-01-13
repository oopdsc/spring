/**
 * 
 */
package com.nono.spring.chapter4;

import junit.framework.Assert;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.nono.spring.chapter4.UserBean;
import com.nono.spring.chapter4.UserManager;

/**
 * @author nono
 *
 */
public class TestScope {
	private static ApplicationContext ctx = null;
	
	@BeforeClass
	public static void before(){
		ctx = new FileSystemXmlApplicationContext("classpath:/beans.xml");
	}
	
	@Test
	public void testScope(){
		UserBean user1 = ctx.getBean("userBean", UserBean.class);
		UserBean user2 = ctx.getBean("userBean", UserBean.class);
		Assert.assertEquals(user1, user2);
	}
	
	@Test
	public void testScope2(){
		UserManager user1 = ctx.getBean("userManager", UserManager.class);
		UserManager user2 = ctx.getBean("userManager", UserManager.class);
		Assert.assertEquals(user1, user2);
		Assert.assertEquals(user1.getUser(), user2.getUser());
	}

}
