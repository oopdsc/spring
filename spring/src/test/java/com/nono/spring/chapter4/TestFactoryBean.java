/**
 * 
 */
package com.nono.spring.chapter4;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


/**
 * @author nono
 *
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/beans-chapter4.xml"})
public class TestFactoryBean {
	
	@Autowired
	private UserBean factoryUserBean;
	
	@Autowired
	private AnnotationBean annotationBean;
	
	@Autowired
	private UserBean userBean;
	
	@Test
	public void testFactory(){
		assertEquals(factoryUserBean.getName(), "Create by factory");
	}
	
	@Test
	public void testAnnotation(){
		assertEquals(annotationBean.getBean().getName(), "cacsssss");
		
		userBean.setName("Test Annotation");
		assertEquals(annotationBean.getBean().getName(), "Test Annotation");
	}

} 
