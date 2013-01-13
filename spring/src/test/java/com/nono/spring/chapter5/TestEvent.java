/**
 * 
 */
package com.nono.spring.chapter5;

import static org.junit.Assert.assertEquals;

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
@ContextConfiguration(locations={"/beans-chapter5.xml"})
public class TestEvent {	
	
	@Autowired
	private GZNewsChannel newsChannel;
	
	@Test
	public void testFactory(){
		newsChannel.broadNews();
	}
	
	public void testFactory2(){
		newsChannel.broadNews();
	}
}
