/**
 * 
 */
package com.nono.spring.chapter6;

import java.lang.reflect.Method;

import org.apache.log4j.Logger;
import org.springframework.aop.MethodBeforeAdvice;

/**
 * @author nono
 *
 */
public class GreetingBeforeAdvice implements MethodBeforeAdvice {
	
	private Logger logger = Logger.getLogger(getClass());

	/* (non-Javadoc)
	 * @see org.springframework.aop.MethodBeforeAdvice#before(java.lang.reflect.Method, java.lang.Object[], java.lang.Object)
	 */
	@Override
	public void before(Method arg0, Object[] arg1, Object arg2)
			throws Throwable {
		// TODO Auto-generated method stub
		logger.info("Greeting before advice to remove :" + arg1[0]);
		
	}

}
