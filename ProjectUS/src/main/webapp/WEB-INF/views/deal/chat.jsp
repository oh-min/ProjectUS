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
		<!-- 정보 가져오기 -->
		<div>
			<table border="1">
				<tr>
					<td>${detail.dno}</td>
					<td>${detail.product}</td>
					<td id="writernick">${detail.nick}</td>
					<td id="writerid">${detail.id}</td>
				</tr>
			</table>
		</div>
		<div>
			<h2>중고거래 채팅</h2>
			<div>
				<!-- 주고받은 메세지들 -->
				<div></div>
				<!-- 주고받은 메세지들 -->
				<br> <br> <br> <input type="text" id="message" placeholder="메세지를 입력하세요">
				<button type="button" id="sendbtn">메세지 전송</button>
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>