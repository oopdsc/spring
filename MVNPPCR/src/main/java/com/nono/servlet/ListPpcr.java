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
import com.nono.domain.PpcrBean;

/**
 * Servlet implementation class ListPpcr
 */
public class ListPpcr extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected Logger logger = Logger.getLogger(getClass());
	
	private PpcrDao ppcrDao;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ListPpcr() {
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
        WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(application);
		ppcrDao = context.getBean("ppcrDao", PpcrDao.class);
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String ppcrNum = request.getParameter("ppcrnum");
		PpcrBean bean = ppcrDao.findById(ppcrNum);
		if(logger.isDebugEnabled()){
			System.out.println("Search ppcr for " + ppcrNum + ":" + bean);
			logger.debug("Search ppcr for " + ppcrNum + ":" + bean);
		}
		
		request.setAttribute("ppcr", bean);
		request.getRequestDispatcher("/Ppcr.jsp?ppcrnum=" + ppcrNum).forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
