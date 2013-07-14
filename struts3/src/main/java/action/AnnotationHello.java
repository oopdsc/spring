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
package action;

import org.apache.struts2.convention.annotation.ParentPackage;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;

import com.opensymphony.xwork2.ActionSupport;

/**
 * @author nono
 * 
 */

@ParentPackage("basicstruts2")
public class AnnotationHello extends ActionSupport {

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.opensymphony.xwork2.ActionSupport#execute()
	 */
	@Override
	@Action(value = "anno", results = { @Result(location = "/hello.jsp") })
	public String execute() throws Exception {
		return SUCCESS;
	}

	@Action(value = "index", results = { @Result(location = "/index.jsp") })
	public String index() throws Exception {
		return SUCCESS;
	}

}
