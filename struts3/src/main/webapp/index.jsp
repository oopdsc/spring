<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<s:form action="login">

	<s:textfield label="Username" name="loginBean.testUser" />
	<s:password label="Password" name="loginBean.testPwd" />
	
	<s:submit />
	<a href="<s:url action='hello'/>">Return to hello</a>
</s:form>
</body>
</html>