<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/basic.css" type="text/css">

<title>${user.username} · PPCR</title>

<script type="text/javascript"
  data-dojo-config="isDebug: false, async: true, parseOnLoad: true"
  src="js/dojo/dojo.js"></script>
  
<script type="text/javascript">
  require([ "dojo", "dojo/on", "dojo/query", "dojo/dom", "dojo/parser" ], function(dojo, on, query,
  		dom) {
      dojo.ready(function() {
        on(dom.byId("create"), "click", function() {
          window.location = "Ppcr.jsp";
        });
      
        on(dom.byId("remove"), "click", function() {
          var ppcrCb = query(".ppcrCbClass:checked");
          
          if(ppcrCb.length == 0){
            alert("Please choose at least one record");
            return;
          }
          
          var strPpcr = "";
          dojo.forEach(ppcrCb, function(item, index, arr){
            strPpcr += dojo.attr(item, "value") + ",";
          });
          window.location = "./RemovePpcr?ppcrnums=" + strPpcr.substring(0 , strPpcr.length - 1);
        });
      });
  });
</script>

</head>
<body class="logged_out windows env-production ">

  <p><a href="Ppcr.jsp">Create PPCR</a>

  <button id="create" type="button" class="button">Create</button>
  <button id="remove" type="button" class="button">Delete</button>
  </p>

  <table class="tree-browser css-truncate" cellpadding="0" cellspacing="0">
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
          <tr>
          <td><input class="ppcrCbClass" type="checkbox" name="ppcrCb" value="${ppcr.ticketNum}"></td>
          <td>${sta.index + 1 }</td>
          <td><a href="./ListPpcr?ppcrnum=${ppcr.ticketNum}">${ppcr.ticketNum}</a></td>
          <td>${ppcr.projectName }</td>
          <td>${ppcr.creator}</td>
          <td><time class="js-relative-date" datetime="2013-01-12T21:44:36-08:00" title="2013-01-12 21:44:36">January 12, 2013</time>${ppcr.createDate }</td>
          </tr>
        </c:forEach>


      </c:if>
    </tbody>
  </table>

</body>
</html>