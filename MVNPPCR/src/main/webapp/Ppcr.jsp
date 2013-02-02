<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Calendar" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<% 
	Calendar calendar = Calendar.getInstance();
%>

<form method="POST" action="/MVNPPCR/CreatePpcr">
<c:if test="${empty ppcr }">
<table>
<tr>
<td>username:</td><td><input type="text" name="username" value="${user.username }"></td>
<td>CreateDate:</td><td><input type="text" name="createDate" value="<%= calendar.getTime()%>"></td>
</tr>

<tr>
<td>projectName:</td><td><input type="text" name="projectName"></td>
<td>ticketNum:</td><td><input type="text" name="ticketNum"></td>
</tr>
</table>
</c:if>

<c:if test="${!empty ppcr }">
<table>
<tr>
<td>username:</td><td><input type="text" name="username" value="${ppcr.creator }"></td>
<td>CreateDate:</td><td><input type="text" name="createDate" value="${ppcr.createDate }"></td>
</tr>

<tr>
<td>projectName:</td><td><input type="text" name="projectName" value="${ppcr.projectName }"></td>
<td>ticketNum:</td><td>${ppcr.ticketNum }</td>
</tr>
</table>
</c:if>
<br>
<button type="submit">Save</button><button type="button" onclick="history.go(-1);">Return</button>
</form>
</body>
</html>