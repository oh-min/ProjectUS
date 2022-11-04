<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<script type="text/javascript" src="/resources/js/chat.js"></script>
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
				<button type="button" onclick="openChat();">채팅 참여</button>
				<button type="button" onclick="closeChat();">채팅 나가기</button>
				<br><br><br>
				<input type="text" id="sender" value="">
				<input type="text" id="messageinput" value="">
				<button type="button" onclick="send();">메세지 전송</button>
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>