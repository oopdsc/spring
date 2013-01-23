package com.nono.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nono.dao.UserDao;
import com.nono.dao.impl.UserDaoImpl;
import com.nono.domain.UserBean;

/**
 * Servlet implementation class Verify
 */
public class Verify extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Verify() {
        super();
        // TODO Auto-generated constructor stub
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
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		UserDao userDao = new UserDaoImpl();
		UserBean userBean = userDao.findByUserName(username);
		if(userBean == null){
			System.out.println("null");
			request.setAttribute("errorMessage", "Invalid username.");
			toUrl = "/index.jsp";
		}else{
			if(!userBean.isValidPwd(password)){
				System.out.println("invalid pwd");
				request.setAttribute("errorMessage", "Invalid password.");
				toUrl = "/index.jsp";
			}else{
				System.out.println("successfully");
				toUrl = "/ppcrList.jsp";
			}
		}
		request.getRequestDispatcher(toUrl).forward(request, response);
		//response.sendRedirect(toUrl);		
	}

}
