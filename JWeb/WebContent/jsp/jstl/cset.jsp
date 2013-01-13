<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="com.nono.bean.UserBean" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<jsp:useBean id="user" class="com.nono.bean.UserBean" scope="session" />
<c:set value="nono" target="${user}" property="name" />
<c:out value="${user.name}" />
<%
	HashMap map = new HashMap();
	session.setAttribute("m", map);
%>
<c:set target="${m}" property="city" value="nanchang" />
<c:out value="${m.city }" />
</body>
</html>