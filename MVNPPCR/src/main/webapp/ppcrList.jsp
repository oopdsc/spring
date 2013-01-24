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

hello ${ppcr.creator}. <br>

<a href="./CreatePpcr.jsp">Create PPCR</a>

<table>
<thead>
<td>Index</td>
<td>Ticket Number</td>
<td>Project Name</td>
<td>Creator</td>
<td>Create Date</td>
</thead>
<tbody>
<c:forEach var="ppcr" items="${ppcrs}" varStatus="sta">
<tr>
<td>${sta.index }</td>
<td><a href="./ppcr.jsp?ppcrnum=${ppcr.ticketNum}"</td>
<td>${ppcr.projectName }</td>
<td>${ppcr.creator}</td>
<td>${ppcr.createDate }</td>
</tr>
</c:forEach>
</tbody>
</table>

</body>
</html>