/**
 * 
 */
package com.nono.spring.chapter6;

import org.apache.log4j.Logger;

/**
 * @author nono
 *
 */
public class PerformanceMonitor {
	
	private static Logger logger = Logger.getLogger(PerformanceMonitor.class);
	private static ThreadLocal<MethodPerformance> performanceRecord = 
		new ThreadLocal<MethodPerformance>();
	
	public static void begin(String method){
		logger.info("Begin monitor");
		MethodPerformance mp = new MethodPerformance(method);
		performanceRecord.set(mp);
	}
	
	public static void end(){
		logger.info("End monitor");
		MethodPerformance mp = performanceRecord.get();
		mp.printPerformance();
	}

}
