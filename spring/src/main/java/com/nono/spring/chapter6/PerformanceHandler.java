/**
 * 
 */
package com.nono.spring.chapter6;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

/**
 * @author nono
 *
 */
public class PerformanceHandler implements InvocationHandler {

	private Object target;
	
	public PerformanceHandler(){
		
	}
	
	public PerformanceHandler(Object target){
		this.target = target;
	}
	
	/* (non-Javadoc)
	 * @see java.lang.reflect.InvocationHandler#invoke(java.lang.Object, java.lang.reflect.Method, java.lang.Object[])
	 */
	@Override
	public Object invoke(Object proxy, Method method, Object[] args)
			throws Throwable {
		PerformanceMonitor.begin(target.getClass().getName() + "." + method.getName());
		Object obj = method.invoke(target, args);
		PerformanceMonitor.end();
		return obj;
	}

	public Object getTarget() {
		return target;
	}

	public void setTarget(Object target) {
		this.target = target;
	}

}
