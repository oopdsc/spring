package cn.nono.test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author nono
 *
 */
public class RegText {
	
	public static void te(){
		String c = "<run html=\"true\">&lt;DIV style=\"HEIGHT: " +
				"100px; refText: txt1\"&gt;</run>";
		Pattern p = Pattern.compile("refText:([^;\"]*)");
		Matcher m = p.matcher(c);
		if(m.find()){
			System.out.println(m.group(1));
		}

	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		te();
	}

}
