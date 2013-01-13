/**
 * 
 */
package com.nono.spring.chapter4;

import org.springframework.beans.factory.FactoryBean;

/**
 * @author nono
 *
 */
public class UserBeanFactory implements FactoryBean<UserBean> {

	public UserBean getObject() throws Exception {
		// TODO Auto-generated method stub
		UserBean bean = new UserBean();
		bean.setName("Create by factory");
		bean.setAge(30);
		return bean;
	}

	public Class<UserBean> getObjectType() {
		// TODO Auto-generated method stub
		return UserBean.class;
	}

	public boolean isSingleton() {
		// TODO Auto-generated method stub
		return false;
	}

}
