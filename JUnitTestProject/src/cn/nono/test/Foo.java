package cn.nono.test;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Foo {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		T1 t1 = new T1();
		T2 t2 = new T2();
		T3 t3 = new T3();
		System.out.println("foo");
		InputStreamReader isr = new InputStreamReader(System.in);
		BufferedReader br = new BufferedReader(isr);
		String s = null;
		try{
			while( (s = br.readLine()) != null){
				if(s.equals("1")){
					t1.greet();
				}else if(s.equals("2")){
					t2.greet();
				} else if(s.equals("3")){
					t3.greet();
				} else if(s.equals("end")){
					break;
				}else{
					System.out.println("i dont know");
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}

	}

}
