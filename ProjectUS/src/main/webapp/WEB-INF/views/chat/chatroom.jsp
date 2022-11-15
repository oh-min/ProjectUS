<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/home.css">
<script type="text/javascript" src="/resources/js/chatroom.js"></script>
<title>채팅</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div></div>

		<div>
			<!-- 주고받은 메세지들 -->
			<div></div>
			<!-- 주고받은 메세지들 -->
			<br> <br> <br> <input type="text" id="message" placeholder="메세지를 입력하세요">
			<button type="button" id="sendbtn">메세지 전송</button>
		</div>

	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>