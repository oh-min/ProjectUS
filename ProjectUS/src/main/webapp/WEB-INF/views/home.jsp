<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<!-- 임시 -->
<link rel="shortcut icon" href="#">
<!-- 임시 -->
<title>Home</title>
</head>
<body>
	<%@include file="header.jsp"%>
	<%@include file="nav.jsp"%>
	<div id="content">
		<div id="event">이벤트(슬라이드)</div>
		<div id="competition">대회(슬라이드)</div>
		<div id="crew">크루(목록)</div>
		<div id="notice">공지(목록)</div>
	</div>
	<%@include file="footer.jsp"%>
</body>
</html>
