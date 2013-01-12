/**
 * Copyright 2002-2007 the original author or authors.
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
package com.nono.spring.delorean;

import static org.junit.Assert.assertEquals;

import java.util.Iterator;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.nono.spring.delorean.bean.MarcoDetailBean;
import com.nono.spring.delorean.service.ConvertService;


/**
 * Oct 27, 2012-6:26:04 PM
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/beans-delorean.xml"})
public class TestFromTori {

	@Autowired
	private ConvertService dd;
	
	@Ignore
	@Test
	public void testService(){
		assertEquals(14, dd.converte().size());
		Iterator<MarcoDetailBean> iterator = dd.converte().iterator();
		while(iterator.hasNext()){
			System.out.println(iterator.next().getRecNum());
		}
	}
}
