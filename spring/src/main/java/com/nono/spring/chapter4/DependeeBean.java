/**
 * 
 */
package com.nono.spring.chapter4;

import org.apache.log4j.Logger;

/**
 * @author nono
 *
 */
public class DependeeBean {
	
	private Logger logger = Logger.getLogger(getClass());
	//private DependBean bean;
	
	public DependeeBean() {
		logger.info("Depend name:" + DependBean.beanName);
	}
}
