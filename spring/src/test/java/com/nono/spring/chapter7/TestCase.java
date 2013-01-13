package com.nono.spring.chapter7;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


/**
 * @author nono
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/beans-chapter7.xml"})
public class TestCase {

	//org.aspectj.weaver.tools.PointcutParser pp;
	@Autowired
	@Qualifier("simpleForumServiceImpl")
	private ForumService forumService;
	
	
	@Test
	public void testCase1(){
		forumService.removeTopic(11);
		forumService.removdForum(11);
	}
	
	@Ignore
	@Test
	public void testCase2(){
		ForumRemoveService removeService = (ForumRemoveService)forumService;
		removeService.removeAllForum();
	}
	
	@Ignore
	@Test
	public void testCase3(){
		((SimpleForumServiceImpl)forumService).thisRemove();
	}
	
}
