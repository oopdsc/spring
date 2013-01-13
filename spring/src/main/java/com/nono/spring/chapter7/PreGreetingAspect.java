/**
 * 
 */
package com.nono.spring.chapter7;

import org.apache.log4j.Logger;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

/**
 * @author nono
 *
 */

@Aspect
public class PreGreetingAspect {
	
	private Logger logger = Logger.getLogger(getClass());
	
	@Before("execution(* removeTopic(..)) && !@annotation(com.nono.spring.chapter7.RemForum)")
	public void beforeGreeting(){
		logger.info("Aspect before greeting.");
	}
	
	@Before("@annotation(com.nono.spring.chapter7.RemForum)")
	public void beforeAnnotation(){
		logger.info("Aspect before greeting by annotation.");
	}
	
	@AfterReturning("@annotation(com.nono.spring.chapter7.RemForum)")
	public void afterAnnotation(){
		logger.info("Aspect after greeting by annotation.");
	}

}
