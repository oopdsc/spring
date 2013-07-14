<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" href="css/basic.css" type="text/css">
    <link rel="stylesheet" href="css/advance.css" type="text/css">
    <script type="text/javascript" src="js/dojo/dojo.js"
      data-dojo-config="isDebug: false, async: true, parseOnLoad: true"></script>
    <title>Sign in · PPCR</title>
  </head>
  <body class="logged_out windows env-production ">
    <div id="wrapper"> 
      <div class="site clearfix">
        <div id="site-container" class="context-loader-container">
          <c:if test="${error}">        
            <div class="flash-messages container">
              <div class="flash flash-error">Incorrect username or password. 
                <span class="mini-icon mini-icon-remove-close close"></span>
              </div>
            </div>
          </c:if>
          <div class="auth-form" id="login">
            <form method="POST" action="./Verify">
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
     
    <script type="text/javascript">
      require(["dojo", "dojo/on", "dojo/query", "dojo/dom-construct", "dojo/_base/fx", "dojo/dom" ],
          function(dojo, on, query, con, fx, dom) {
            dojo.ready(function() {
            	query(".close").on('click', function(evt){          
            		var target = evt.target.parentNode;
            		var anim = fx.fadeOut({node:target});
            		on(anim, "End", function(){
            			con.destroy(target);
            		});
            		anim.play();
            	});
            })
      });
    </script>
  </body>
</html>