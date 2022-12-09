<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<script type="text/javascript" src="/resources/js/home.js"></script>
<!-- 임시 -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<!-- 임시 -->

<title>Home</title>
</head>
<body>
	<%@include file="header.jsp"%>
	<%@include file="nav.jsp"%>
	<div id="content">
		<div id="event"></div>
		<div id="competition"></div>
		<div id="crew"></div>
		<div id="notice"></div>
	</div>
	<%@include file="footer.jsp"%>
</body>
</html>
