/**
 * 
 */
package com.nono.spring.chapter4;

/**
 * @author nono
 *
 */
public class DependBean {
	
	public static String beanName = "Default name";
	
	public DependBean(){
		DependBean.beanName = "Init name";
	}
}
