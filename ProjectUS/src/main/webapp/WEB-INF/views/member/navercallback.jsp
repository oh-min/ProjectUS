<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/navercallback.css">
<!-- 네이버 로그인 -->
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
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
		// 접근 토큰 값 출력
		console.log(naver_id_login.oauthParams.access_token);
		// 네이버 사용자 프로필 조회
		naver_id_login.get_naver_userprofile("naverSignInCallback()");
		// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
		function naverSignInCallback() {
			// 생일을 월 / 일 나누어서 저장
			const birth = naver_id_login.getProfileData('birthday');
			const birthM = birth.substr(0, 2)
			const birthD = birth.substr(3, 2)

			// 선택자 value 값 설정
			$("#pw").val(naver_id_login.oauthParams.access_token) // 비밀번호
			$("#id").val(naver_id_login.getProfileData('email')) // 아이디
			$("#name").val(naver_id_login.getProfileData('name')) // 이름
			$("#email").val(naver_id_login.getProfileData('email')) // 이메일
			$("#nick").val(naver_id_login.getProfileData('nickname')) // 닉네임
			$("#gender").val(naver_id_login.getProfileData('gender')) // 성별
			$("#birthM").val(birthM) // 생일(월)
			$("#birthD").val(birthD) // 생일(일)
			$("#birthY").val(naver_id_login.getProfileData('birthyear')) // 출생연도 --undefined
			$("#phone").val(naver_id_login.getProfileData('mobile')) // 휴대전화번호 --undefined
		}
	</script>
	<div id="content">
		<!-- <form action="/member/join" method="post" id="naverjoinform"> -->
		<form id="naverjoinform" method="post">
			<!-- 아이디 -->
			<input type="hidden" name="id" id="id">
			<!-- 비밀번호 -->
			<input type="hidden" name="pw" id="pw">
			<!-- 이름 -->
			<input type="hidden" name="name" id="name">
			<!-- 이메일 -->
			<input type="hidden" name="email" id="email">
			<!-- 닉네임 -->
			<input type="hidden" name="nick" id="nick">
			<!-- 성별 -->
			<input type="hidden" name="birthM" id="birthM">
			<!-- 일 -->
			<input type="hidden" name="birthD" id="birthD">
			<!-- 월 -->
			<input type="hidden" name="gender" id="gender">
			<!-- 년 -->
			<input type="hidden" name="birthY" id="birthY">
			<p>가입이 완료되었습니다.</p>
			<p id="msg"></p>
			<div class="btn">
				<input type=button id="yes" value="확인">
			</div>
		</form>
	</div>
</body>
</html>