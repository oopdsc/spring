/**
 * Copyright 2002-2007 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.nono.spring.chapter4;

import java.util.List;

import org.apache.log4j.Logger;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

/**
 * Dec 29, 2012-8:34:42 PM
 */
@Aspect
public class AOPLog {
	
	protected Logger logger = Logger.getLogger(AOPLog.class);
//	@Before("execution(* *BeanName(..))")
	
//	@Before("args(name)")
//	@Before("this(domainBean)")
	public void doLog(Object domainBean){
		logger.info("this is log from " + domainBean.getClass() + "!");

//		logger.info("this is log from " + logger.getClass() +  name +"!");
	}
	
	@Pointcut("execution(* getBeanName(..))")
	public void getBeanNamePoint(){
		
	}
	
	@Pointcut("execution(* setBeanName(..))")
	public void setBeanNamePoint(){
		
	}
	
	@Before("AOPLog.getBeanNamePoint()")
	public void beforeGetBeanName(){
		logger.info("before getBeanName()");
	}
	
	@AfterReturning(value="AOPLog.getBeanNamePoint()", returning = "retVal")
	public void afterGetBeanName(String retVal){
		logger.info("after getBeanName()" + retVal);
	}
	
	public <T> T getClassT(List<? extends T> l){
		return l.get(0);
	}


}
