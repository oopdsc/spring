<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

hello ${ppcr.creator}, your ppcr has been created successfully.
Below is your ppcr infomation:

<table>
<tr>
<td>username:</td><td>${ppcr.creator }</td>
<td>CreateDate:</td><td>${ppcr.createDate }</td>
</tr>

<tr>
<td>projectName:</td><td>${ppcr.projectName }</td>
<td>ticketNum:</td><td>${ppcr.ticketNum }</td>
</tr>
</table>

</body>
</html>