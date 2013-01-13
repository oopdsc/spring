package cn.nono.test;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

/**
 * @author nono
 *
 */
public class List {
	
	Map<String, String> l = new HashMap();

	

	
	
	public String getIndex(String o){
		return l.get(o);
	}
	
	public static void main(String[] arg){
		List l1 = new List();
		O l2 = new O("3");
		O l3 = new O("3");
		System.out.print(l2.equals(l3));
		String s = new String("2");
		String i = new String("2");
		System.out.println(s==i);
		l1.l.put(s, "1");
		System.out.println(l1.getIndex(i));
	}

}

class O{
	String name = "";
	public O(String n){
		name = n;		
	}
	@Override
	public boolean equals(Object obj) {
		if(obj instanceof O){
			return this.name.equals(((O) obj).name);
		}else{
			return false;
		}
	}
	
	
}
