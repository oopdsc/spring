/**
 * 
 */
package com.nono.spring.chapter4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

/**
 * @author nono
 *
 */

@Component
public class AnnotationBean {

	@Autowired
	@Qualifier("userBean")
	private UserBean bean;

	public UserBean getBean() {
		return bean;
	}

	public void setBean(UserBean bean) {
		this.bean = bean;
	}
	
	
	
}
