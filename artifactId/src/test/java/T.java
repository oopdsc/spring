import static org.junit.Assert.*;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import cn.nono.maven.TtttParameter;


public class T {

	private Logger logger = Logger.getLogger(T.class);
	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		TtttParameter tt = new TtttParameter(0, null);
		logger.debug(this);
	}

}
