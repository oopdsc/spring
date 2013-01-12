/**
 * 
 */
package com.nono.spring.chapter4;

import static org.junit.Assert.assertEquals;

import javax.annotation.Resource;
import javax.annotation.Resources;

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
public class TestAOPLog {	
	
	@Resource
	private DomainBean domainBean;
	
	@Test
	public void testFactory(){
		domainBean.setBeanName("Nono");
		assertEquals("Nono", domainBean.getBeanName());
	}
	

}
