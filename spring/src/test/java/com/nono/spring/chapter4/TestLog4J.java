/**
 * 
 */
package com.nono.spring.chapter4;

import org.apache.log4j.Logger;
import org.junit.Test;

/**
 * @author nono
 *
 */
public class TestLog4J {

	protected final Logger logger = Logger.getLogger(getClass());
	
	@Test
	public void testDebug(){
		logger.debug("This is debug");
	}
}