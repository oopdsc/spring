package com.nono.servlet;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.nono.dao.PpcrDao;
import com.nono.dao.UserDao;
import com.nono.domain.PpcrBean;

/**
 * Servlet implementation class RemoveServlet
 */
public class RemoveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected Logger logger = Logger.getLogger(getClass());
	
	private PpcrDao ppcrDao;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RemoveServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    /* (non-Javadoc)
	 * @see javax.servlet.GenericServlet#init()
	 */
	@Override
	public void init() throws ServletException {
		// TODO Auto-generated method stub
		super.init();
		ServletContext application =getServletContext();
        WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(application);//获取spring的context
		
        ppcrDao = context.getBean("ppcrDao", PpcrDao.class);
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String ppcrNums = request.getParameter("ppcrnums");
		
		if(logger.isDebugEnabled()){
			logger.debug("checkbox value:" + ppcrNums);
		}
		
		for(String num : ppcrNums.split(",")){
			PpcrBean bean = ppcrDao.findById(num);
			if(bean != null){
				ppcrDao.remove(bean);
			}
		}
		request.setAttribute("ppcrs", ppcrDao.findAll());
		request.getRequestDispatcher("/WEB-INF/page/ppcrList.jsp").forward(request, response);
		//response.sendRedirect("ppcrList.jsp");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
