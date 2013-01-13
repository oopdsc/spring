package cn.nono.test;

public class Para {
	
	String name = "";
	
	void setName(String n){
		name = n;
	}
	
	void outName(){
		System.out.println(name);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Para p = new Para();
		String s = "aaa";
		p.setName(s);
		s = "";
		p.outName();
	}

}
