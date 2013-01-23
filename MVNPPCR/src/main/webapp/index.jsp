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

<c:out value="${errorMessage }" />
<c:if test="${!empty errorMessage}">
	<script type="text/javascript">
		alert("${errorMessage}");
	</script>
</c:if>
<form method="POST" action="<%=this.getServletContext().getContextPath() %>/Verify">
<table>
<tr>
<td>username:</td><td><input type="text" name="username"></td>
<td>password:</td><td><input type="password" name="password"></td>
</tr>
</table>

<br>
<button type="submit">Submit</button>
</form>
</body>
</html>