package test.nono.test;

import java.util.Arrays;
import java.util.Collection;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import static org.junit.Assert.*;

@RunWith(Parameterized.class)
public class ParaTest {
 private static String zipRegEx = "^\\d{5}([\\-]\\d{4})?$";
 private static Pattern pattern;

 @Before
 public  void setUpBeforeClass() throws Exception {
  pattern = Pattern.compile(zipRegEx);
 }


 
 @Test
 public void verifyGoodZipCode() throws Exception{		
  Matcher mtcher = this.pattern.matcher(phrase);
  boolean isValid = mtcher.matches();		
  assertEquals("Pattern did not validate zip code", isValid, match);
 }
 
 @Parameters
 public static Collection regExValues() {
  return Arrays.asList(new Object[][] {
   {"22101", true },
   {"221x1", false },
   {"22101-5150", true },
   {"221015150", false }});
 }
 
 private String phrase;
 private boolean match;
 
 public ParaTest(String phrase, boolean match) {
	 this.phrase = phrase;
	 this.match = match;
	}
 


}
