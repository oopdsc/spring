package cn.nono.maven;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * 
 *2013-1-13 - 下午1:54:59
 */
public class TtttParameter {
	
	public int age;
	public String name;

	private Log log = LogFactory.getLog(TtttParameter.class);
	public TtttParameter(int age, String name) {
		this.age = age;
		this.name = name;
		log.debug(this);
	}
	
	
}