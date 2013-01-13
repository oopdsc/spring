/**
 * 
 */
package com.nono.spring.chapter7;

import org.apache.log4j.Logger;

/**
 * @author nono
 *
 */
public class ForumRemoveServiceImpl implements ForumRemoveService {

	private Logger logger = Logger.getLogger(getClass());
	/* (non-Javadoc)
	 * @see com.nono.spring.chapter7.ForumRemoveService#removeAllForum()
	 */
	@Override
	public void removeAllForum() {
		logger.info("Remove all forums.");
	}

}
