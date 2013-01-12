<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@ page import="java.util.Date" %>
<%@ page errorPage="errorPage.jsp" %>
<jsp:include page="header.jsp">
<jsp:param value="fromjsp1" name="where"/>
</jsp:include>
<title>Insert title here</title>
</head>
<body>

I'm jsp1.
<%@ include file="footer.jsp"%>

</body>
</html>