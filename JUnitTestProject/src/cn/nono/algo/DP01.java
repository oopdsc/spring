package cn.nono.algo;

public class DP01 {

	private int n, W;
	private int[][] v, ib;
	private int[] iv, iw;

	public DP01(int[] ivs, int[] iws, int WS) {
		iv = ivs;
		iw = iws;
		n = ivs.length;
		W = WS;
		v = new int[n][W + 1];
		ib = new int[n][W + 1];
		for (int j = 0; j <= W; j++) {
			if (iw[0] < j) {
				v[0][j] = iv[0];
				ib[0][j] = 1;
			} else {
				v[0][j] = 0;
			}
		}
	}

	private void Q2() {
		int q1, q2;
		for (int i = 1; i < n; i++) {
			for (int j = 0; j <= W; j++) {
				q1 = 0;
				q2 = 0;
				if (j >= iw[i]) {
					if (iv[i] + v[i - 1][j - iw[i]] > v[i - 1][j]) {
						q1 = iv[i] + v[i - 1][j - iw[i]];
						q2 = 1;
					} else {
						q1 = v[i - 1][j];
					}
					v[i][j] = q1;
					ib[i][j] = q2;
				}
			}
		}
	}

	private void P2() {
		System.out.println(v[n - 1][W]);
		for (int j = n - 1, o = W; j >= 0; j--) {
			if (ib[j][o] == 1) {
				System.out.print(j + ",");
				o = o - iw[j];
			}
		}
	}

	// 1st version, wrong!!
	// 不需要使用递归，可以用数组将之前的值保存下来，后面的直接使用数组就行了
	private void Q(int num, int wei) {
		int q1 = 0, q2 = 0;
		if (wei + iw[num] <= W) {
			if (v[num + 1][wei - iw[num]] < 0) {
				Q(num + 1, wei - iw[num]);
			}
			if (v[num + 1][wei] < 0) {
				Q(num + 1, wei);
			}
			if (iv[num] + v[num + 1][wei - iw[num]] >= v[num + 1][wei]) {
				q1 = iv[num] + v[num + 1][wei - iw[num]];
				q2 = 1;
			} else {
				q1 = v[num + 1][wei];
				q2 = 0;
			}
		}
		v[num][wei] = q1;
		// ib[num] = q2;
	}

	private void P() {
		// for(int i : ib){
		// System.out.println(i);
		// }
	}

	public void cacu() {
		Q2();
		P2();
	}

}
