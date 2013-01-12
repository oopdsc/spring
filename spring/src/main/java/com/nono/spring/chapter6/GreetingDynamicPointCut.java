/**
 * 
 */
package com.nono.spring.chapter6;

import java.lang.reflect.Method;

import org.apache.log4j.Logger;
import org.springframework.aop.ClassFilter;
import org.springframework.aop.support.DynamicMethodMatcherPointcut;

/**
 * @author nono
 *
 */
public class GreetingDynamicPointCut extends DynamicMethodMatcherPointcut {

	private Logger logger = Logger.getLogger(getClass());
	/* (non-Javadoc)
	 * @see org.springframework.aop.MethodMatcher#matches(java.lang.reflect.Method, java.lang.Class, java.lang.Object[])
	 */
	@Override
	public boolean matches(Method method, Class<?> targetClass, Object[] args) {
		logger.info("Run the matches(method, targetClass, args) to check " + targetClass.getName()
				+ "." + method.getName() + " dynamicly.");	
		return Integer.parseInt(args[0].toString()) == 66;
	}

	@Override
	public ClassFilter getClassFilter() {
		return new ClassFilter(){

			@Override
			public boolean matches(Class<?> clazz) {
				logger.info("Run the getClassFilter to check " + clazz.getName() + " staticly.");
				return ForumService.class.isAssignableFrom(clazz);
			}
			
		};
	}

	@Override
	public boolean matches(Method method, Class<?> targetClass) {
		logger.info("Run the matches(method, targetClass) to check " + targetClass.getName()
				+ "." + method.getName() + " staticly.");		
		return super.matches(method, targetClass);
	}

}
