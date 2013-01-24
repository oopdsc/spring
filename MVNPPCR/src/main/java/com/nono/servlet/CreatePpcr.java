package com.nono.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.nono.dao.PpcrDao;
import com.nono.dao.impl.PpcrDaoImpl;
import com.nono.domain.PpcrBean;

/**
 * Servlet implementation class CreatePpcr
 */
public class CreatePpcr extends HttpServlet {
	private PpcrDao ppcrDao = null;
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreatePpcr() {
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
		ppcrDao = new PpcrDaoImpl();
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
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
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
		session.setAttribute("ppcrs", ppcrDao.findAll());
		//return to all list page
		response.sendRedirect("ppcrList.jsp");
	}

}
