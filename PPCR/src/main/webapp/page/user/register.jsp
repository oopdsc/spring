<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>User Register</title>
<style>
	.errorClass{color:red}
</style>
</head>
<body>
	<form method="POST" action="/user/create.do">
		<table>
			<tr>
				<td>Username:</td>
				<form:errors path="username" cssClass="errorClass"/>
				<td><input type="text" name="username" /></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input type="password"		name="password" /></td>
			</tr>
			<tr>
				<td colspan="2"><button type="submit">Submit</button></td>
			</tr>
		</table>
	</form>
</body>
</html>