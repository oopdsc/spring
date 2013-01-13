/**
 * 
 */
package com.nono.spring.chapter6;

import java.lang.reflect.Method;

import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

/**
 * @author nono
 *
 */
public class CglibForumServiceImpl implements MethodInterceptor {

	private Enhancer enhancer = new Enhancer();
	
	@SuppressWarnings("rawtypes")
	public Object getProxy(Class clazz){
		enhancer.setSuperclass(clazz);
		enhancer.setCallback(this);
		return enhancer.create();
	}
	
	/* (non-Javadoc)
	 * @see net.sf.cglib.proxy.MethodInterceptor#intercept(java.lang.Object, java.lang.reflect.Method, java.lang.Object[], net.sf.cglib.proxy.MethodProxy)
	 */
	@Override
	public Object intercept(Object arg0, Method arg1, Object[] arg2,
			MethodProxy arg3) throws Throwable {
		PerformanceMonitor.begin(arg0.getClass().getName() + "." + arg1.getName());
		Object result = arg3.invokeSuper(arg0, arg2);
		PerformanceMonitor.end();
		return result;
	}

}
