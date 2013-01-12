/**
 * 
 */
package com.nono.spring.chapter6;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

/**
 * @author nono
 *
 */
public class ForumServiceDelegate {
	
	@Autowired
	@Qualifier("simpleForumServiceImpl")
	private ForumService simpleForumServiceImpl;

	public void removeAll(int forumId){
		simpleForumServiceImpl.removeTopic(forumId);
		simpleForumServiceImpl.removdForum(forumId);
	}
	
	public void setForumService(ForumService forumService){
		this.simpleForumServiceImpl = forumService;
	}
}
