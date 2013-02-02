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
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.nono.dao.PpcrDao;
import com.nono.domain.PpcrBean;

/**
 * @author nono
 *
 */
public class PpcrDaoImpl implements PpcrDao {
	
	private Map<String, PpcrBean> ppcrMap;
	
	public PpcrDaoImpl(){
		ppcrMap = new HashMap<String, PpcrBean>();
	}

	/* (non-Javadoc)1111
	 * @see com.nono.dao.PpcrDao#save(com.nono.domain.PpcrBean)
	 */
	@Override
	public void save(PpcrBean ppcr) {
		// TODO Auto-generated method stub
		ppcrMap.put(ppcr.getTicketNum(), ppcr);
	}

	/* (non-Javadoc)
	 * @see com.nono.dao.PpcrDao#findById(java.lang.String)
	 */
	@Override
	public PpcrBean findById(String ppcrNum) {
		// TODO Auto-generated method stub
		
		return ppcrMap.get(ppcrNum);
	}

	/* (non-Javadoc)
	 * @see com.nono.dao.PpcrDao#findAll()
	 */
	@Override
	public List<PpcrBean> findAll() {
		List<PpcrBean> list = new LinkedList<PpcrBean>();
		list.addAll(ppcrMap.values());
		return list;
	}

	/* (non-Javadoc)
	 * @see com.nono.dao.PpcrDao#remove(com.nono.domain.PpcrBean)
	 */
	@Override
	public void remove(PpcrBean ppcr) {
		ppcrMap.remove(ppcr.getTicketNum());		
	}

}
