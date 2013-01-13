package cn.nono.algo;

public class DP {
	
	private int [] x = {0,1,2,3,2,4,1,2};
	int [] y = {0,2,4,3,1,2,1};
	
	int m, n;
	int [][] c;
	int [][] b;
	public DP(){
		m = x.length;
		n = y.length;
		c = new int[m+1][n+1];
		b = new int[m+1][n+1];
		
		for(int i = 1; i <= m; i++){
			c[i][0] = 0;
		}
		
		for(int j = 0; j <= n; j++){
			c[0][j] = 0;
		}
	}
	
	public void cacu(){
		caculate();
		printX(m-1,n-1);
	}
	
	private void caculate(){
		for(int i = 1; i < m; i++){
			for(int j = 1; j < n; j++){
				if(x[i] == y[j]){
					c[i][j] = c[i-1][j-1]+1;
					b[i][j] = 2;
				}else if(c[i - 1][j] >= c[i ][j- 1]){
					c[i][j] =c[i - 1][j];
					b[i][j] = 1;
				}else{
					c[i][j] = c[i ][j- 1];
					b[i][j] = 0;
				}
			}
		}		
	}
	
	private void printX(int num1, int num2){
		if(num1 == 0 || num2 == 0){
			return;
		}
		if(b[num1][num2] == 2){
			printX(num1 - 1, num2 - 1);
			System.out.println(x[num1]);
		}else if(b[num1][num2] == 1){
			printX(num1 - 1, num2);
		}else{
			printX(num1, num2 - 1);
		}
	}

}
