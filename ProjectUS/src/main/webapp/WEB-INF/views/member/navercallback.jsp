<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- 네이버 로그인 -->
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="/resources/js/navercallback.js"></script>
<!-- 네이버 로그인 -->
<!-- 임시 -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<!-- 임시 -->
<title>네이버 로그인</title>
</head>
<body>
	<script type="text/javascript">
		var naver_id_login = new naver_id_login("cdycnoa2eTLT0zibGaQY", "http://localhost:8080/member/navercallback");
		console.log(naver_id_login.oauthParams.access_token); // 토큰 값
		
		naver_id_login.get_naver_userprofile("naverSignInCallback()"); // 네이버 사용자 프로필 조회 함수 호출
		
		/* 네이버 사용자 프로필 조회 함수 선언 */
		function naverSignInCallback() {
			$("#id").val(naver_id_login.getProfileData('email')) // 아이디 - 이메일을 아이디로 사용
			$("#pw").val(naver_id_login.oauthParams.access_token) // 비밀번호 - 토큰 값을 비밀번호로 사용
			$("#name").val(naver_id_login.getProfileData('name')) // 이름
			$("#email").val(naver_id_login.getProfileData('email')) // 이메일
		}
	</script>
	<div id="content">
		<form id="naverjoinform" method="post">
			<!-- 아이디 -->
			<input type="hidden" name="id" id="id"><br>
			<!-- 비밀번호 -->
			<input type="hidden" name="pw" id="pw"><br>
			<!-- 이름 -->
			<input type="hidden" name="name" id="name"><br>
			<!-- 이메일 -->
			<input type="hidden" name="email" id="email"><br>
		</form>
	</div>
</body>
</html>