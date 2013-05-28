package com.nono.servlet;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.nono.dao.UserDao;
import com.nono.dao.impl.UserDaoImpl;
import com.nono.domain.UserBean;

/**
 * Servlet implementation class Verify
 */
public class Verify extends HttpServlet {
	
	private String value1;

	protected Logger logger = Logger.getLogger(getClass());
	private static final long serialVersionUID = 1L;

	protected UserDao userDao;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Verify() {
		super();
		// TODO Auto-generated constructor stub
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.GenericServlet#init()
	 */
	@Override
	public void init() throws ServletException {
		// TODO Auto-generated method stub
		super.init();
		ServletContext application = getServletContext();
		WebApplicationContext context = WebApplicationContextUtils
				.getWebApplicationContext(application);// 获取spring的context

		userDao = context.getBean("userDao", UserDao.class);
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("/WEB-INF/page/index.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String toUrl = "";
		HttpSession session = request.getSession();
		
		System.out.println("This is value111:" + value1);
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");

		if (username == null || password == null) {
			// do not send anything
			toUrl = "index.jsp";
		} else {

			UserBean userBean = userDao.findByUserName(username);
			if (userBean == null || !userBean.isValidPwd(password)) {

				logger.debug("invalid username or password");
				request.setAttribute("error", true);
				toUrl = "/WEB-INF/page/index.jsp";
			} else {
				logger.debug("successfully");
				session.setAttribute("user", userBean);
				toUrl = "/WEB-INF/page/ppcrList.jsp";
			}
		}
		request.getRequestDispatcher(toUrl).forward(request, response);
		// response.sendRedirect(toUrl);
	}
	

	/**
	 * @return the value1
	 */
	public String getValue1() {
		return value1;
	}



	/**
	 * @param value1 the value1 to set
	 */
	public void setValue1(String value1) {
		this.value1 = value1;
	}

}
