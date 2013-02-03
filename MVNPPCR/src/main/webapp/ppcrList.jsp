<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>PPCR列表</title>
<script type="text/javascript"
  data-dojo-config="isDebug: false, async: true, parseOnLoad: true"
  src="js/dojo/dojo.js"></script>
<script type="text/javascript">
	require([ "dojo", "dojo/on", "dojo/dom", "dojo/parser" ], function(dojo, on,
			dom) {
      dojo.ready(function() {
        on(dom.byId("create"), "click", function() {
      	window.location = "./Ppcr.jsp";
        });
      
        on(dom.byId("remove"), "click", function() {
        	window.location = "./RemovePpcr";
        });
      });
	});
</script>

</head>
<body>

  hello ${ppcr.creator}.
  <a href="Ppcr.jsp">Create PPCR</a>

  <button id="create" type="button">Create1</button>
  <button id="remove" type="button">Delete1</button>
  <br>

  <table>
    <thead>
      <tr>
        <td></td>
        <td>Index</td>
        <td>Ticket Number</td>
        <td>Project Name</td>
        <td>Creator</td>
        <td>Create Date</td>
      </tr>
    </thead>
    <tbody>

      <c:if test="${empty ppcrs }">
        <tr>
          <td rowspan="4">There is no PPCR.</td>
        </tr>
      </c:if>

      <c:if test="${!empty ppcrs }">
        <c:forEach var="ppcr" items="${ppcrs}" varStatus="sta">

          <td><input type="checkbox" name="ppcrCb"
            value="${ppcr.ticketNum}"></td>
          <td>${sta.index + 1 }</td>
          <td><a href="./ListPpcr?ppcrnum=${ppcr.ticketNum}">${ppcr.ticketNum}</a></td>
          <td>${ppcr.projectName }</td>
          <td>${ppcr.creator}</td>
          <td>${ppcr.createDate }</td>
          </tr>
        </c:forEach>


      </c:if>
    </tbody>
  </table>

</body>
</html>