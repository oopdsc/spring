<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<form method="POST" action="/MVNPPCR/CreatePpcr">
<table>
<tr>
<td>username:</td><td><input type="text" name="username"></td>
<td>CreateDate:</td><td><input type="text" name="createDate"></td>
</tr>

<tr>
<td>projectName:</td><td><input type="text" name="projectName"></td>
<td>ticketNum:</td><td><input type="text" name="ticketNum"></td>
</tr>
</table>

<br>
<button type="submit">Submit</button><button type="button" onclick="history.go(-1);">Return</button>
</form>
</body>
</html>