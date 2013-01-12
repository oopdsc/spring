/**
 * 
 */
package com.nono.assessment;

import static org.junit.Assert.assertEquals;

import java.util.HashSet;
import java.util.Set;

import org.junit.Test;


/**
 * @author nono
 *
 */
public class SetRetainTestCase {
	
	@Test
	public void retainAllTest(){
		Set<String> a = new HashSet<String>();
		a.add("a");
		a.add("b");
		a.add("c");
		
		Set<String> b = new HashSet<String>();
		b.add("c");
		b.add("d");
		b.add("e");
		
		a.retainAll(b);
		
		assertEquals(3, b.size());
	}

}
