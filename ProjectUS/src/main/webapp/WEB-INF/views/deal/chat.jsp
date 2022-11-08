<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<script type="text/javascript" src="/resources/js/chat.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<meta charset="UTF-8">
<title>중고거래 채팅</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div>
			<h2>중고거래 채팅</h2>
			<div>
				<button type="button">채팅 참여</button>
				<button type="button">채팅 나가기</button>
				<br>
				<br>
				<br>
				<!-- div with messages -->
				<div id="messages"></div>
				<br>
				<br>
				<br> <input type="text" id="sendms">
				<button type="button" id="sendbtn">메세지 전송</button>
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>