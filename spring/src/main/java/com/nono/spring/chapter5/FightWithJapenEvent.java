/**
 * 
 */
package com.nono.spring.chapter5;

import org.springframework.context.ApplicationContext;
import org.springframework.context.event.ApplicationContextEvent;

/**
 * @author nono
 *
 */
public class FightWithJapenEvent extends ApplicationContextEvent {

	private String city;
	
	public FightWithJapenEvent(ApplicationContext source, String city) {
		super(source);
		this.city = city;
	}
	
	public String getCity(){
		return city;
	}

}
