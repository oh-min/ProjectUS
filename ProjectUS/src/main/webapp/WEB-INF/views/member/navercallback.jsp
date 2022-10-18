<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- <script type="text/javascript" src="/resources/js/navercallback.js"></script> -->
<!-- 네이버 로그인 -->
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
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
		// alert(naver_id_login.oauthParams.access_token);
		// 네이버 사용자 프로필 조회
		naver_id_login.get_naver_userprofile("naverSignInCallback()");
		// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
		function naverSignInCallback() {
			// 생일을 월 / 일 나누어서 저장
			const birth = naver_id_login.getProfileData('birthday');
			const birthM = birth.substr(0, 2)
			const birthD = birth.substr(3, 2)

			$("#id").val(naver_id_login.getProfileData('email')) // 아이디
			// $("#pw").val(naver_id_login.getProfileData('id')) // 비밀번호
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
	<div>
		<form action="/member/join" method="post" id="naverjoinform">
			<input type="hidden" name="name" id="name"> <input type="hidden" name="email" id="email"> <input type="hidden" name="nick"
				id="nick"> <input type="hidden" name="gender" id="gender"> <input type="hidden" name="birthM" id=birthM"> <input
				type="hidden" name="birthD" id="birthD"> <input type="hidden" name="birthY" id="birthY"> <input type="hidden" name="phone"
				id="phone">
			<p>
				회원님의 아이디는 <input type="text" name="id" id="id" readonly> 입니다
			</p>
			<p>
				비밀번호를 설정해 주세요 : <input type="text" name="pw" id="pw">
			</p>
			<p id="msg"></p>
			<input type=button id="yes" value="가입하기"> <input type="button" id="no" value="취소">
		</form>
	</div>

	<script type="text/javascript">
		window.onload = function() {

			const pwreg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
		alert("first")
			$("#yes").on("click", function() {
				alert("hi")
				if ($("#email").val() != "" && $("#id").val() != "" && $("#pw").val() != "") {

					if (!pwreg.test($("#pw").val())) {
						$("#msg").html("8 ~ 16자 영문, 숫자 조합만 입력 가능합니다.")
						$("#msg").css("color", "red");
					} else {
						// samechk($("#id").val())
						// if($("#msg").text ==""){
							$("#naverjoinform").submit();
							setTimeout(function() {
								window.close();
							}, 5);
						//}else{
						//	alert("안됨")
						// }
					}

				} else if ($("#email").val() == "" || $("#id").val() == "") {
					$("#msg").html("회원님의 정보를 정상적으로 가져오지 못했습니다.")
					$("#msg").css("color", "red");
				} else if ($("#email").val() != "" && $("#id").val() != "" && $("#pw").val() == "") {
					$("#msg").html("비밀번호를 입력해 주세요.")
					$("#msg").css("color", "red");
				} else {
					alert("실패3")
				}
			})
			
			/* function samechk(id){
				$.ajax({
					type:"post",
					url:"/member/samechk",
					data: JSON.stringify(reply),
					contentType:"application/json; charset=utf-8",
					success:function(result){
						if(result=="canUse"){
							alert()
						}else{
							$("#msg").html("이미 가입된 아이디입니다.")
							$("#msg").css("color", "red");
						}
					}
				} 
			} */

		}
	</script>
</body>
</html>