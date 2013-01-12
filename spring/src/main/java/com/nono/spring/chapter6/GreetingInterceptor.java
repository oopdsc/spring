/**
 * 
 */
package com.nono.spring.chapter6;


import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.apache.log4j.Logger;



/**
 * @author nono
 *
 */
public class GreetingInterceptor implements MethodInterceptor {

	private Logger logger = Logger.getLogger(getClass());

	@Override
	public Object invoke(MethodInvocation arg0) throws Throwable {
		Object[] args = arg0.getArguments();
		logger.info("Greet interceptor :" + args[0]);
		Object obj = arg0.proceed();
		logger.info("Greet interceptor :" + args[0]);
		return obj;
	}

}
