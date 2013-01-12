/**
 * Copyright 2002-2007 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.nono.assessment;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

import org.apache.log4j.Logger;
import org.junit.Ignore;
import org.junit.Test;


/**
 * Oct 16, 2012-11:39:31 PM
 */
public class ListTestCase {
	
	private Logger log = Logger.getLogger(ListTestCase.class);
	
	@Ignore
	@Test
	public void testSubList(){
		
//		String [] strs = {"a", "b", "c", "d"};
//		List<String> a = Arrays.asList(strs);
//		List<String> b = new ArrayList<String>(a);
//		for(String s : strs){
//			b.add(s);
//		}
//		Collections.reverse(b);
		
//		List<String> b = a.subList(2, 4);
//		a.set(3, "e");
//		a.remove(3);
//		log.info(b);
		
	}
	
	@Ignore
	@Test
	public void arrayTest(){
		String [][] a = new String[3][3];
		
		String [] a2 = new String[1];
		//a2 = {"a", "b"};
		
		a[0] = new String[]{"a", "b", "c"};
		a[1] = new String[]{"d", "e"};
		
		
		log.info(a[1][0] + a[1][1] + a[1][2]);
	}
	
	@Ignore
	@Test
	public void intTest(){
		int a=0;
		int b[]=new int[5];
		int c=3;
		b[a]=a=c; 
		assertEquals(b[0], 3);
	}
	
	@Ignore
	@Test
	public void mapTest(){
		Map<Integer, String> k = new HashMap<Integer, String>();
		k.put(1, "a");
		k.put(2, "b");
		
		Map<Integer, String> v = new HashMap<Integer, String>(k);
		k.put(3, "c");
		
		assertEquals(null, v.get(3));
	}

	@Ignore
	@Test
	public void sortTest(){
		Set<String> a = new LinkedHashSet<String>();
		a.add("a");
		a.add("ceeeee");
		a.add("b");
		
		List<String> b = new LinkedList<String>();
		b.add("a");
		b.add("ceeeee");
		b.add("b");
		
		for(String c : b){
			log.info(c);
		}
		for(int i = 0; i < b.size(); i++){
			log.info(b.get(i));
		}
		
		
		Collections.sort(b);
		
		log.info(b);
		
	}
	
	@Ignore
	@Test
	public void queueTest(){
		Queue<String> s = new LinkedList<String>();
		s.add("z");
		s.add("a");
		s.add("b");
		
		s.add("s");
		log.info(s.peek());
	}
	
	public <T> T getElement(String s){
		return null;
	}
	
	@Test
	public void stringTest() throws ClassNotFoundException{
		String s = new String("abcdefg");
		assertEquals("d", s.substring(3, 4));
		assertEquals("abcdefghi", s.concat("hi"));
		assertEquals('c', s.charAt(2));
	}
	
	@Test
	public void arrayTest2(){
		int [] s = {1,2,3};
		int s2[] = {2,3,4};
		int[] s3 = {3,4,5};
		
		int [][] s4 = {{1,2}, {3,4,5}, {6,7,8,9}};
		
		assertEquals(13, s4[0][1] + s4[1][1] + s4[2][1]);
		
		Thread tt = new Thread(new TestThread());
		tt.run();
		tt.run();
		tt.start();
	}
	
	class TestThread extends Thread{

		/* (non-Javadoc)
		 * @see java.lang.Runnable#run()
		 */
		@Override
		public void run() {
			// TODO Auto-generated method stub
			System.out.print("runThread");
		}
		
	}

	
	
	
	
}
