/**
 * 
 */
package com.nono.spring.chapter6;

import org.apache.log4j.Logger;

/**
 * @author nono
 *
 */
public class AltSimpleForumServiceImpl implements ForumService {
	
	private Logger logger = Logger.getLogger(AltSimpleForumServiceImpl.class);

	/* (non-Javadoc)
	 * @see com.nono.spring.chapter6.ForumService#removeTopic(int)
	 */
	@Override
	public void removeTopic(int topId) {
		logger.info("Simulate to remove topic record:" + topId);
		try{
			Thread.sleep(20);
		}catch(Exception e){
			logger.warn(e);
		}
	}

	/* (non-Javadoc)
	 * @see com.nono.spring.chapter6.ForumService#removdForum(int)
	 */
	@Override
	public void removdForum(int forumId) {
		logger.info("Simulate to remove forum record:" + forumId);
		try{
			Thread.sleep(40);
		}catch(Exception e){
			logger.warn(e);
		}
	}

}
