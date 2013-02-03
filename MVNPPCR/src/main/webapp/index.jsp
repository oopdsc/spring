<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="css/basic.css" type="text/css">

    </style>
    <title>Sign in · PPCR</title>
  </head>
  <body class="logged_out windows env-production ">
    <div id="wrapper"> 
      <c:if test="${!empty errorMessage}">
        <script type="text/javascript">
    		alert("${errorMessage}");
         </script>
      </c:if>
      <div class="site clearfix">
        <div id="site-container" class="context-loader-container">
          <div class="auth-form" id="login">
            <form method="POST" action="/MVNPPCR/Verify">
              <div class="auth-form-header">
                <h1>Sign in</h1>
              </div>
              <div class="auth-form-body">
                <label for="username">Username</label> 
                <input type="text" class="input-block" name="username" id="username" tabindex="1" /> 
                <label for="password">Password<a href="#"> (forgot password)</a></label> 
                <input type="password" class="input-block" name="password" id="password" tabindex="2" /> 
                  
                <input class="button" name="commit" tabindex="3" type="submit" value="Sign in" />
              </div>
    
            </form>
          </div>
         </div>
        </div>
     </div>
  </body>
</html>