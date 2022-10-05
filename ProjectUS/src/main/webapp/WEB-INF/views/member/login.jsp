<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/login.css">
<title>Login</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<form id="login">
			<h2>로그인</h2>
			<div>
				<input type="text" placeholder="아이디">
				<input type="password" placeholder="비밀번호"> 
				<input type="button" value="로그인" id="loginbtn">
				<a href="/member/join">회원가입</a>
				<a href="">아이디/비밀번호 찾기</a>
			</div>
		</form>
		<div id="sns">
			<div>
				네이버 로그인
			</div>
			<div>
				구글 로그인
			</div>
			<div>
				카카오 로그인
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>