/**
 * 
 */
package com.nono.spring.chapter4;

import java.util.ArrayList;
import java.util.List;

/**
 * @author nono
 *
 */
public class UserManager {
	
	private String managerName;
	private UserBean user;
	private InnerBean innerBean;
	private List<String> sports = new ArrayList<String>();
	
	public List<String> getSports() {
		return sports;
	}
	public void setSports(List sports) {
		this.sports = sports;
	}
	public String getManagerName() {
		return managerName;
	}
	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	public UserBean getUser() {
		return user;
	}
	public void setUser(UserBean user) {
		this.user = user;
	}
	public InnerBean getInnerBean() {
		return innerBean;
	}
	public void setInnerBean(InnerBean innerBean) {
		this.innerBean = innerBean;
	}
	
	

}
