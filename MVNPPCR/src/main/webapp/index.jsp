<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="css/basic.css" type="text/css">
    <style type="text/css">
      .login_button input {
        outline: none;
        background: #8dba36 url(image/lg_btn120730b.png) no-repeat
      }
    </style>
    <title>Insert title here</title>
  </head>
  <body>
    <c:if test="${!empty errorMessage}">
      <script type="text/javascript">
  		alert("${errorMessage}");
       </script>
    </c:if>
    <form method="POST" action="/MVNPPCR/Verify">
      <ul id="g_list" class="lg_list clear">
        <li id="g_u" class="item">
          <div class="input_w">
            <label id="username_tips" for="username">Username</label><br />
            <input type="text" name="username" id="username" tabindex=1>
          </div>
        </li>
        <li id="g_p" class="item">
          <div class="input_w">
            <label id="label_pwd" for="password">password</label><br /> <input
              type="password" name="password" id="password" tabindex=2>
          </div>
        </li>
        <br />
        <div class="login_button">
          <input type="submit" tabindex=5 value="登 录" id="login_btn" />
        </div>
    </form>
  </body>
</html>