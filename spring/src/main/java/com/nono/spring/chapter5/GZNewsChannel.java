/**
 * 
 */
package com.nono.spring.chapter5;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * @author nono
 *
 */
public class GZNewsChannel implements ApplicationContextAware {
	
	private ApplicationContext ctx;
	/* (non-Javadoc)
	 * @see org.springframework.context.ApplicationContextAware#setApplicationContext(org.springframework.context.ApplicationContext)
	 */
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		// TODO Auto-generated method stub
		this.ctx = applicationContext;
	}
	
	public void broadNews(){
		System.out.println("This is the latest news from GZ:");
		FightWithJapenEvent fightEvent = new FightWithJapenEvent(this.ctx, "GZ");
		ctx.publishEvent(fightEvent);
	}

}
