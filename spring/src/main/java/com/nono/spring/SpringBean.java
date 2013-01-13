package com.nono.spring;

import javax.annotation.Resource;

import org.apache.log4j.Logger;

import com.nono.spring.chapter4.UserBean;

public class SpringBean {
	
	@Resource private UserBean userBean;
	private Logger logger = Logger.getLogger(getClass());
	
	
	public void setUserBean(UserBean userBean) {
		this.userBean = userBean;
	}



	public void getBean(){
		userBean.setName("xxxx");
		logger.info(userBean.getName());
	}

}
