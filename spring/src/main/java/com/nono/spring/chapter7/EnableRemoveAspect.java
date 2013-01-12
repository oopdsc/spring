package com.nono.spring.chapter7;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.DeclareParents;

@Aspect
public class EnableRemoveAspect {
	
	@DeclareParents(value="com.nono.spring.chapter7.ForumService", defaultImpl=ForumRemoveServiceImpl.class)
	public ForumService forumRemoveService;
	
}


