/**
 * 
 */
package com.nono.spring.chapter6;

import org.apache.log4j.Logger;

/**
 * @author nono
 *
 */
public class MethodPerformance {
	
	private long begin;
	private long end;
	private String serviceMethod;
	private static Logger logger = Logger.getLogger(MethodPerformance.class);
	
	public MethodPerformance(String serviceMethod){
		this.serviceMethod = serviceMethod;
		this.begin = System.currentTimeMillis();
	}
	
	public void printPerformance(){
		this.end = System.currentTimeMillis();
		logger.info(serviceMethod + " cost " + (end - begin) + " ms.");
	}

}
