package test.nono.test;

/**
 *2012-10-20 - 上午11:40:10
 */
public class Test {
	public void Test(){
		Parent p = new Parent();
		DerivedOne d1 = new DerivedOne();
		DerivedTwo d2 = new DerivedTwo();
		p = p;
	}
	public static void main(String args[]){
		int x=0;
		int y=0;
		outer: for (x=0; x<100;x++) {
			middle: for (y=0;y<100;y++) {
				System.out.println("x=" + x + "; y=" + y);
				if (y==10){
					break outer;
				}
			}
		}
	}
}


class Parent {}
class DerivedOne extends Parent {}
class DerivedTwo extends Parent {}
