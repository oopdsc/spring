<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*,com.nono.bean.UserBean" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
Collection users = new ArrayList();
for(int i = 0; i < 5; i++){
	UserBean user  = new UserBean();
	user.setName("user" + i);
	user.setPassword("pass" + i);
	users.add(user);
}
session.setAttribute("u", users);

%>
<table border=1>
<tr><td>username</td><td>password</td></tr>
<c:forEach var="usera" items="${u }" begin="2" end="5" step="2">
<tr><td>${usera.name }</td><td>${usera.password}</td></tr>
</c:forEach>
</table>

</body>
</html>