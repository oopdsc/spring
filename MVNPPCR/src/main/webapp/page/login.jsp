<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <script type="text/javascript">
    	function submit1(){
    		document.getElementById("value1").value = "test jsp";
    		document.getElementById("hiddenSubmit").click();
    	}
    </script>
  </head>
  <body>

    <form method="POST" action="/MVNPPCR/CreatePpcr">
    <input type="hidden" value="" id="value1" name="value1">
      <table>
        <tr>
          <td>username:</td>
          <td><input type="text" name="username"></td>
          <td>CreateDate:</td>
          <td><input type="text" name="createDate"></td>
        </tr>
  
        <tr>
          <td>projectName:</td>
          <td><input type="text" name="projectName"></td>
          <td>ticketNum:</td>
          <td><input type="text" name="ticketNum"></td>
        </tr>
      </table>
  
      <br>
      <button type="submit" style="visible:false" id="hiddenSubmit">Hidden Submit</button>
      <button type="button" onclick="submit1()">Submit</button>
      <button type="button" onclick="history.go(-1);">Return</button>
    </form>
  </body>
</html>