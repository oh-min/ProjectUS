<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/login.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/login.js"></script>
<!-- 임시 -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<!-- 임시 -->
<!-- 네이버 로그인 -->
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
<!-- 네이버 로그인 -->
<!-- 카카오 로그인 -->
<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js"
	integrity="sha384-PFHeU/4gvSH8kpvhrigAPfZGBDPs372JceJq3jAXce11bVA6rMvGWzvP4fMQuBGL" crossorigin="anonymous"></script>
<script type="text/javascript">
	// SDK를 초기화 합니다. 사용하려는 앱의 JavaScript 키 입력
	Kakao.init('f42e808f1e635004cb0b41d796f2c56d');
	// SDK 초기화 여부를 판단합니다.
	console.log(Kakao.isInitialized()); // true
</script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<!-- 카카오 로그인 -->
<title>Login</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<form id="login" action="/member/login" method="post">
			<h2>로그인</h2>
			<div>
				<input type="text" placeholder="아이디" name="id" id="id"> <input type="password" placeholder="비밀번호" name="pw" id="pw">
				<p class="msg" id="loginmsg"></p>
				<input type="button" value="로그인" id="loginbtn"> <a href="/member/join">회원가입</a> <a href="">아이디/비밀번호 찾기</a>
			</div>
		</form>
		<div id="sns">
			<!-- 네이버 로그인 -->
			<div id="naver_id_login"></div>
			<div>
				<a id="kakao-login-btn" href="javascript:loginWithKakao()"> <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
					width="222" alt="카카오 로그인 버튼" />
				</a>
				<p id="token-result"></p>


			</div>

			<div>구글 로그인</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>