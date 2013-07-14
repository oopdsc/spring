package com.nono.servlet;

import java.io.IOException;
import java.util.Calendar;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.nono.dao.PpcrDao;
import com.nono.domain.PpcrBean;
import com.nono.domain.UserBean;

/**
 * Servlet implementation class CreatePpcr
 */
public class CreatePpcr extends HttpServlet {
	

	private Logger log = Logger.getLogger(getClass());
	private PpcrDao ppcrDao = null;
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreatePpcr() {
        super();
        
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
		// TODO Auto-generated method stub
		log.info("this is get function");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		log.info("this is post function");
		HttpSession session = request.getSession();
		PpcrBean ppcr = new PpcrBean();
		UserBean userBean = (UserBean)session.getAttribute("user");
		ppcr.setCreator(userBean.getUsername());
		ppcr.setCreateDate(Calendar.getInstance().getTime());
		request.setAttribute("ppcr", ppcr);
		request.getRequestDispatcher("page/Ppcr.jsp").forward(request, response);
		
		/*
		PpcrBean ppcr = new PpcrBean();
		
		String username = (String)request.getParameter("username");
		String createDate = (String)request.getParameter("createDate");
		String projectName = (String)request.getParameter("projectName");
		String ticketNum = (String)request.getParameter("ticketNum");
		
		ppcr.setCreator(username);
		ppcr.setCreateDate(createDate);
		ppcr.setProjectName(projectName);
		ppcr.setTicketNum(ticketNum);		
		
		ppcrDao.save(ppcr);
		
		//session.setAttribute("ppcr", ppcr);
		request.setAttribute("ppcrs", ppcrDao.findAll());
		
		//return to all list page
		request.getRequestDispatcher("/WEB-INF/page/ppcrList.jsp").forward(request, response);		
		//response.sendRedirect("ppcrList.jsp");
		 * */
		 
		
		
		 
		 
	}



	
	

}
