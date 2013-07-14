<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ page import="java.util.Calendar"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="css/basic.css" type="text/css">
    <link rel="stylesheet" href="css/advance.css" type="text/css">
    <script type="text/javascript" src="js/dojo/dojo.js"
      data-dojo-config="isDebug: false, async: true, parseOnLoad: true"></script>
    
    <script type="text/javascript" src="js/git/git1.js"></script>
    
    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-5c60c478b1e0f90d149f11ed15aa52edd2996882.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-30e75eead7a0b9c0c4bf82707cbb7e5ab8958275.js" type="text/javascript"></script>
      
    <title>${user.username} · Create New PPCR</title>
  </head>
  <body>
  
    <form method="POST" action="./SavePpcr">
			<div class="auth-form-header">
				<h1>Create New PPCR</h1>
			</div>
			
			<dl class="form">
      	<dt><label>PPCR No.</label></dt>
      	<dd><input type="text" class="textfield"></dd>
      	<dt><label>Creator</label></dt>
      	<dd><input type="text" class="textfield" value="${ppcr.creator}"></dd>
      	<dt><label>Date</label></dt>
      	<dd><input type="text" class="textfield" value="${ppcr.createDate}"></dd>
    	</dl>
    	
    	
    	<div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="octicon octicon-gear"></span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">select-menu Title</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list">

            <div class="select-menu-item js-navigation-item">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">List item 1</div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">List item 2</div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">List item 3</div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->
        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->
    
    
<br> <br>
      <button type="submit">Sav111e</button>
      <button type="button" onclick="history.go(-1);">Retur111n</button>
    </form>
  </body>
</html>