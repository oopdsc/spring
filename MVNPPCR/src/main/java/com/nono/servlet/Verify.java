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
    
    /* (non-Javadoc)
	 * @see javax.servlet.GenericServlet#init()
	 */
	@Override
	public void init() throws ServletException {
		// TODO Auto-generated method stub
		super.init();
		ServletContext application =getServletContext();
        WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(application);//获取spring的context
		
		userDao = context.getBean("userDao", UserDao.class);
	}



	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String toUrl = "";
		HttpSession session = request.getSession();
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		
		UserBean userBean = userDao.findByUserName(username);
		if(userBean == null){
			
			logger.debug("null");
			request.setAttribute("errorMessage", "Invalid username.");
			toUrl = "index.jsp";
		}else{
			if(!userBean.isValidPwd(password)){
				logger.debug("invalid pwd");
				request.setAttribute("errorMessage", "Invalid password.");
				toUrl = "index.jsp";
			}else{
				logger.debug("successfully");
				session.setAttribute("user", userBean);
				toUrl = "ppcrList.jsp";
			}
		}
		//request.getRequestDispatcher(toUrl).forward(request, response);
		response.sendRedirect(toUrl);
	}

}
