package test.nono.test;


import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

/**
 * @author nono
 *
 */
public class SCJP20Oct extends Object {

	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
	}
	
	@Ignore
	@Test
	public void stringTest(){
		String s = "Hellow";
		s += 10;
//		String implements = "s";
		System.out.println(s);
		
	}
	
	@Ignore
	@Test
	public void integerTest(){
//		int a [][] = new int[12][];
//		Integer i = new Integer(9);
//		assertEquals(true, i.equals(9));
		
		int i = 10;
		if(i == 10.0){
			System.out.println("true");
		}else{
			System.out.println("false");
		}
	}
	
	@Test
	public void switchTest(){
		int m = 0;
		while( m++ < 2 )
		System.out.println(m);
		
		myMethod();
		assertEquals("ten", switchMethod(10));
		
		foo(0);
		foo(1);
		System.out.println(output);
		
		System.out.println(2222^22);
	}
	
	private String switchMethod(int k){
		String ret = "";
		switch (k) {
		default:
			ret = "default";
			break;
		case 10:
			ret = "ten";
			break;
		case 20:
			ret = "twenty";
			break;
		}
		return ret;
	}
	
	private void myMethod(){
		try {
			throw new IOException();
		} catch (NullPointerException npex) {
			System.out.println("NullPointerException thrown ");
		} catch (Exception ex) {
			System.out.println("Exception thrown ");
			return;
		} finally {
			System.out.println("Done with exceptions ");
		}
		System.out.println("myMethod is done");
	}
	
	
	public static String output = "";

	public static void foo(int i) {
		try {
			if (i == 1) {
				throw new Exception();
			}
			output += "1";
		} catch (Exception e) {
			output += "2";
			return;
		} finally {
			output += "3";
		}
		output += "4";
	}

}
