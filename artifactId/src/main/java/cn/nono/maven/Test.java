package cn.nono.maven;

import java.io.Serializable;
import java.util.HashSet;

/**
 *2012-11-26 - 下午11:05:541111111111
 */
public class Test implements Serializable{
	//aaaaa
	private HashSet<TtttParameter> a;
	public static int s = 0;
	public int o = 0;
	/**
	 * @deprecated Use {@link #tttt(TtttParameter)} instead
	 */
	public void tttt(int age, String name){
		tttt(new TtttParameter(age, name));
	}
	
	public void tttt(TtttParameter parameterObject){
		a.add(parameterObject);
		s = 11;
		o = 12;
	}
}
