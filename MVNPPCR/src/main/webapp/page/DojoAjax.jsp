<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Dojo Ajax Test Page · PPCR))</title>
    <link rel="stylesheet" href="../css/basic.css" type="text/css">

    <script type="text/javascript" src="../js/dojo/dojo.js"
      data-dojo-config="isDebug: false, async: true, parseOnLoad: true"></script>
    <script type="text/javascript">
      require(["dojo", "dojo/request" ],
        function(dojo, request) {
          dojo.ready(function() {
            request.get("AjaxServlet", {
			  query:"name=nono"
			  	//method - An uppercase string representing the HTTP method to use to make the request. Several helper functions are provided to make specifying this option easier (request.get, request.post, request.put, request.del).
			  	//sync - A boolean that, if true, causes the request to block until the server has responded or the request has timed out.
			  	//query - A string or key-value object containing query parameters to append to the URL.
			  	//data - A string, key-value object, or FormData object containing data to transfer to the server.
			  	//timeout - Time in milliseconds before considering the request a failure and triggering the error handler.
			  	//handleAs - A string representing how to convert the text payload of the response before passing the converted data to the success handler. Possible formats are "text" (the default), "json", "javascript", and "xml".
			  	//headers - A key-value object containing extra headers to send with the request.
			}).then(function(response){alert(response);},
					function(error){alert(error);}
			);
            
            request.post("AjaxServlet", {
            	data:{name:"nono", method:"post"}
            }).then(function(response){alert(response);},
            		function(error){alert(error);});
          });
        });	
	</script>
  </head>
  <body>

  </body>
</html>