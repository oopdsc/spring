<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/basic.css" type="text/css">
<link rel="stylesheet" href="css/advance.css" type="text/css">

<title>${user.username} · PPCR</title>

<script type="text/javascript"
  data-dojo-config="isDebug: false, async: true, parseOnLoad: true"
  src="js/dojo/dojo.js"></script>
  
<script type="text/javascript">
  require([ "dojo", "dojo/on", "dojo/query", "dojo/dom", "dojo/parser" ], function(dojo, on, query,
  		dom) {
      dojo.ready(function() {
        on(dom.byId("create"), "click", function() {
          dojo.attr(dom.byId("mainForm"), "action", "CreatePpcr");
          dom.byId("hiddenSubmit").click();
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
<body class="logged_out windows env-production">
<form id="mainForm" action="" method="post">
	<button id="hiddenSubmit" type="submit" style="visible:false">HiddenSubmit</button>
  <p>
    <div class="button-group">  
      <button id="create" type="button" class="minibutton primary">Create</button>
      <button id="remove" type="button" class="minibutton primary">Delete</button>
    </div>
  </p>

  <table class="tree-browser css-truncate" cellpadding="0" cellspacing="0">
    <thead>
      <tr>
        <td style="max-width:50px"></td>
        <td style="max-width:110px">Ticket Number</td>
        <td style="max-wdith:110px">Project Name</td>
        <td style="max-width:110px">Creator</td>
        <td style="max-width:110px">Create Date</td>
      </tr>
    </thead>
    <tbody>

      <c:if test="${empty ppcrs }">
        <tr>
          <td colspan="5">There is no PPCR.</td>
        </tr>
      </c:if>

      <c:if test="${!empty ppcrs }">
        <c:forEach var="ppcr" items="${ppcrs}" varStatus="sta">
          <tr>
            <td><input class="ppcrCbClass" type="checkbox" name="ppcrCb" value="${ppcr.ticketNum}"></td>
            <td><a href="./ListPpcr?ppcrnum=${ppcr.ticketNum}">${ppcr.ticketNum}</a></td>
            <td>${ppcr.projectName }</td>
            <td>${ppcr.creator}</td>
            <td><time class="js-relative-date" datetime="2013-01-12T21:44:36-08:00" title="2013-01-12 21:44:36">January 12, 2013</time>${ppcr.createDate }</td>
           </tr>
        </c:forEach>
      </c:if>
    </tbody>
  </table>
</form>
</body>
</html>