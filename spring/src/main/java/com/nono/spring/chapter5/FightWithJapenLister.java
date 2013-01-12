/**
 * 
 */
package com.nono.spring.chapter5;

import org.springframework.context.ApplicationListener;

/**
 * @author nono
 *
 */
public class FightWithJapenLister implements ApplicationListener<FightWithJapenEvent> {

	/* (non-Javadoc)
	 * @see org.springframework.context.ApplicationListener#onApplicationEvent(org.springframework.context.ApplicationEvent)
	 */
	public void onApplicationEvent(FightWithJapenEvent event) {
		System.out.println("500 people fight with Japanese in " + event.getCity());
		
	}
}
	