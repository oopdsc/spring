package com.nono.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Servlet Filter implementation class LogFilter
 */
public class LogFilter implements Filter {
	
	private static Log logger = LogFactory.getLog(LogFilter.class);
	
    /**
     * Default constructor. 
     */
    public LogFilter() {
        // TODO Auto-generated constructor stub

    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// TODO Auto-generated method stub
		// place your code here

		// pass the request along the filter chain
		logger.info(request.getParameter("username"));
		if(request.getAttribute("username") == null ){
			//response.
			logger.error("no username");
			logger.info("hello info");
			HttpServletRequest httpreq = (HttpServletRequest) request;
			HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper(
                    (HttpServletResponse) response);
			logger.info(httpreq.getContextPath());
			wrapper.sendRedirect("./jsp/login.jsp");
			
		}
		chain.doFilter(request, response);
	} 

	/** 
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
