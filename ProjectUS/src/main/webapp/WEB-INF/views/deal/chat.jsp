<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<script type="text/javascript" src="/resources/js/chat.js"></script>
<script type="text/javascript">
	// websocket 주소
	//let wsurl = "ws://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}/websocket/echo";
	let wsurl = "ws://localhost:8080/websocket/echo";
</script>
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
				<button type="button" id="chatopen" onclick="connect()">채팅 참여</button>
				<button type="button">채팅 나가기</button>
				<br> <br> <br>
				<!-- div with messages -->
				<div id="messages">
					<p></p>
				</div>
				<br> <br> <br>
				<!-- 닉네임은 임시 -->
				<input type="text" id="sendms" placeholder="메세지를 입력하세요">
				<button type="button" id="sendbtn" onclick="sendMessage()">메세지 전송</button>
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>