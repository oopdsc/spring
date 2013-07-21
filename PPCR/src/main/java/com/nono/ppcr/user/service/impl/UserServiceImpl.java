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
package com.nono.ppcr.user.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nono.ppcr.user.dao.mapper.UserMapper;
import com.nono.ppcr.user.dao.model.User;
import com.nono.ppcr.user.dao.model.UserExample;
import com.nono.ppcr.user.dao.model.UserExample.Criteria;
import com.nono.ppcr.user.service.UserService;

/**
 * @author nono
 *
 */

@Repository
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper mapper;

	/* (non-Javadoc)
	 * @see com.nono.ppcr.user.service.UserService#insert(com.nono.ppcr.user.dao.model.User)
	 */
	public int insert(User user) {
		return mapper.insert(user);
	}

	/* (non-Javadoc)
	 * @see com.nono.ppcr.user.service.UserService#update(com.nono.ppcr.user.dao.model.User)
	 */
	public int update(User user) {
		return mapper.updateByPrimaryKey(user);
	}

	/* (non-Javadoc)
	 * @see com.nono.ppcr.user.service.UserService#delete(com.nono.ppcr.user.dao.model.User)
	 */
	public int delete(User user) {
		return mapper.deleteByPrimaryKey(user.getId());
	}

	/* (non-Javadoc)
	 * @see com.nono.ppcr.user.service.UserService#findAll(com.nono.ppcr.user.dao.model.User)
	 */
	public List<User> findAll() {
		return mapper.selectByExample(null);
	}

	public boolean findByName(String username) {
		UserExample example = new UserExample();
		Criteria criteria = example.createCriteria();
		criteria.andUsernameEqualTo(username);
		return mapper.selectByExample(example) == null;
	}
	
	public boolean selectByAuth(User user) {
		return mapper.selectByAuth(user) == 1;
	}

}
