/**
 * 
 */
package com.nono.spring.chapter6;

/**
 * @author nono
 *
 */
public class ForumServiceWithMonitorImpl extends SimpleForumServiceImpl {

	@Override
	public void removeTopic(int topId) {
		PerformanceMonitor.begin("SimpleForumServiceImpl.removeTopic");
		super.removeTopic(topId);
		PerformanceMonitor.end();
	}

	@Override
	public void removdForum(int forumId) {
		PerformanceMonitor.begin("SimpleForumServiceImpl.removdForum");
		super.removdForum(forumId);
		PerformanceMonitor.end();
	}

}
