package com.nono.spring.chapter6;

import java.lang.reflect.Proxy;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/beans-chapter6-2.xml"})
public class TestCase1 {
	
	@Autowired
	private PerformanceHandler performanceHandler;
	@Autowired
	private ForumService simpleForumServiceImpl;	
	@Autowired
	private CglibForumServiceImpl cglibForumServiceImpl;
	@Autowired
	private ForumService forumServiceBeforeAdviceImpl;
	//@Autowired
	private ForumService forumService2;
	@Autowired
	private ForumServiceDelegate forumServiceDelegate;
	
	
	//@Test
	public void testCase1(){
		simpleForumServiceImpl.removeTopic(22);
		simpleForumServiceImpl.removdForum(22);
	}
	
	//@Test
	/**
	 * test the proxy provided by java.proxy
	 */
	public void testCase2(){
		ForumService proxy = (ForumService)Proxy.newProxyInstance(
				simpleForumServiceImpl.getClass().getClassLoader(), 
				simpleForumServiceImpl.getClass().getInterfaces(),
				performanceHandler);
		proxy.removeTopic(33);
		proxy.removdForum(33);
	}
	
	//@Test
	/**
	 * test the proxy provide by cglib 
	 */
	public void testCase3(){
		ForumService forumService = (ForumService)cglibForumServiceImpl.getProxy(SimpleForumServiceImpl.class);
		forumService.removeTopic(44);
		forumService.removdForum(44);
	}
	
	//@Test
	/**
	 * test the advice provided by aopalliance
	 */
	public void testCase4(){
		forumServiceBeforeAdviceImpl.removeTopic(55);
		forumServiceBeforeAdviceImpl.removdForum(55);
	}
	
	//@Test
	/**
	 * test the pointcut 
	 */
	public void testCase5(){
		forumService2.removeTopic(66);
		forumService2.removdForum(66);
		
		forumService2.removeTopic(77);
		forumService2.removdForum(77);
	}
		
	//@Test
	/**
	 * test the flow control pointcut
	 */
	public void testCase6(){
		simpleForumServiceImpl.removeTopic(88);
		simpleForumServiceImpl.removdForum(88);
		forumServiceDelegate.removeAll(88);
		
	}
	
	@Test
	/**
	 * test the defaultAdvisorAutoproxycreator
	 */
	public void testCase7(){
		simpleForumServiceImpl.removeTopic(88);
		simpleForumServiceImpl.removdForum(88);
	}
}
