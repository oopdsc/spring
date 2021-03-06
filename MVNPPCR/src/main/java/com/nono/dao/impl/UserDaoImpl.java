/**
 * Copyright 2012-2013 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.nono.dao.impl;

import java.util.HashMap;
import java.util.Map;

import com.nono.dao.UserDao;
import com.nono.domain.UserBean;

/**
 * @author nono
 *
 */
public class UserDaoImpl implements UserDao {
	
	private Map<String, UserBean> userMap;
	
	public UserDaoImpl(){		
		userMap = new HashMap<String, UserBean>();		
		
		for(int i = 1; i <= 3; i++){
			UserBean userBean = new UserBean();
			userBean.setUsername("username" + i);
			userBean.setPassword("password" + i);		
			save(userBean);
		}
		
	}

	/* (non-Javadoc)
	 * @see com.nono.dao.UserDao#findByUserName(java.lang.String)
	 */
	@Override
	public UserBean findByUserName(String username) {		
		return userMap.get(username);
	}

	/* (non-Javadoc)
	 * @see com.nono.dao.UserDao#save(com.nono.domain.UserBean)
	 */
	@Override
	public void save(UserBean user) {
		// TODO Auto-generated method stub
		userMap.put(user.getUsername(), user);
	}

	/* (non-Javadoc)
	 * @see com.nono.dao.UserDao#update(com.nono.domain.UserBean)
	 */
	@Override
	public void update(UserBean user) {
		userMap.remove(user.getUsername());
		save(user);

	}

}
