package test.nono.test;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import cn.nono.test.A2;

public class TestTest1 {

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
		System.out.println("teardown");
	}

	//@Ignore("just test ignore")
	@Test
	public void testSayHello() {
		assertEquals("hello", "hello");
	}
	
	@Test
	public void oo(){
		assertEquals("1", "1");
	}
	
	@Test
	public void testExtends(){
		A2 a2 = new A2(10);
		//a2.setN(10);
		assertEquals(10, a2.getN());
	}

}
