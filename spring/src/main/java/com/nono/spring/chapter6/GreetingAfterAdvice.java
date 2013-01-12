/**
 * 
 */
package com.nono.spring.chapter6;

import java.lang.reflect.Method;

import org.apache.log4j.Logger;
import org.springframework.aop.AfterReturningAdvice;

/**
 * @author nono
 *
 */
public class GreetingAfterAdvice implements AfterReturningAdvice {

	private Logger logger = Logger.getLogger(getClass());
	/* (non-Javadoc)
	 * @see org.springframework.aop.AfterReturningAdvice#afterReturning(java.lang.Object, java.lang.reflect.Method, java.lang.Object[], java.lang.Object)
	 */
	@Override
	public void afterReturning(Object returnValue, Method method,
			Object[] args, Object target) throws Throwable {
		logger.info("greeting after advice :" + args[0]);
	}

}
