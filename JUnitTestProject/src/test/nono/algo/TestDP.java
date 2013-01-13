package test.nono.algo;

import org.junit.Test;

import cn.nono.algo.DP;
import cn.nono.algo.DP01;



public class TestDP {

@Test
public void test1(){
	DP dp = new DP();
	dp.cacu();
}

@Test
public void test2(){
	int [] iv = new int[]{23,34,60,200,220};
	int [] iw = new int[]{3,8,10,20,30};
	DP01 dp01 = new DP01(iv, iw, 60);
	dp01.cacu();
}

}
