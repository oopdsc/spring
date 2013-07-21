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
package com.nono.ppcr.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nono.ppcr.user.dao.model.User;
import com.nono.ppcr.user.dao.model.UserExample.Criteria;
import com.nono.ppcr.user.service.UserService;

/**
 * @author nono
 *
 */

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping("/main")
	public String main(){
		return "user/main";
	}
	
	@RequestMapping("/login")
	public String login(User user, BindingResult bindingResult){
		if(userService.selectByAuth(user)){
			return "ppcr/ppcrList";
		}else{
			bindingResult.rejectValue("username", "username or password is wrong");
			return "user/main";
		}		
	}
	
	@RequestMapping("/create")
	public String create(User user, BindingResult bindingResult){
		if(userService.findByName(user.getUsername())){
			bindingResult.rejectValue("username", "Username is already exist, please change one.");
			return "user/register";
		}else{
			userService.insert(user);
			return "user/main";
		}
		
		
	}

}
