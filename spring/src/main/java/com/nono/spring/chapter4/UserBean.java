package com.nono.spring.chapter4;

import org.apache.log4j.Logger;

public class UserBean {
	
	private Logger logger = Logger.getLogger(getClass());
	private String name;
	private int age;
	
	public UserBean(){
		logger.info("UserBean init");
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	

}
