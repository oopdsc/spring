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

import com.nono.spring.chapter4.DependeeBean;


/**
 * @author nono
 *
 */
public class TestDepend {
	
	private static ApplicationContext ctx = null;
	
	@BeforeClass
	public static void before(){
		ctx = new FileSystemXmlApplicationContext("classpath:/beans-chapter4.xml");
	}
	
	
	@Test
	public void testDepend(){
		DependeeBean dependee = ctx.getBean("dependeeBean", DependeeBean.class);
		//Assert.assertEquals(dependee.getBean().getBeanName(), "Init name");
	}

}
