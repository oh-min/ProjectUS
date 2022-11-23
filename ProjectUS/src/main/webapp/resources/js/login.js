/**
 * 로그인
 */
window.onload = function() {

	var id = document.getElementById('id');
	var pw = document.getElementById('pw');
	var loginmsg = document.getElementById('loginmsg');

	/* 로그인 버튼 누를 경우 */
	document.getElementById("loginbtn").onclick = function() {

		if (!id.value) { // 아이디가 없는 경우
			loginmsg.innerHTML = "아이디를 입력해주세요."
			loginmsg.style.color = "red";
		} else if (!pw.value) { // 비밀번호가 없는 경우
			loginmsg.innerHTML = "비밀번호를 입력해주세요."
			loginmsg.style.color = "red";
		}else{
			login.action="/member/login"
			login.submit(); // '로그인' 으로 submit
		}
		
	}

	/* 네이버 로그인 */
	// 													본인의 Client ID 					callback URL 
	var naver_id_login = new window.naver_id_login("cdycnoa2eTLT0zibGaQY", "http://localhost:8080/member/navercallback"); 
	console.log(naver_id_login)
	var state = naver_id_login.getUniqState(); // Uniq 코드 받아오기(새로고침할때마다 변경)
	console.log(state)
	naver_id_login.setButton("green", 3, 45); // 버튼 설정
	naver_id_login.setState(state); // Uniq 코드 설정
	// naver_id_login.setPopup(); // 팝업창 열기
	naver_id_login.init_naver_id_login(); // 설정 정보 초기화
	
} // window.onload 종료

/* 카카오 로그인 */
function loginWithKakao() {
	Kakao.Auth.authorize({
		redirectUri : 'http://localhost:8080/member/login',
		scope: 'account_email,gender,birthday',
	});				
}

const code = location.search.split('?code=')[1];
console.log(code); // 인가 코드

if(code){ // 인가 코드가 있을 경우
	const JS_APP_KEY ="f42e808f1e635004cb0b41d796f2c56d";
	const REDIRECT_URI = "http://localhost:8080/member/login";
	const makeFormData = params => {
		const searchParams = new URLSearchParams()
		Object.keys(params).forEach(key => {
			searchParams.append(key, params[key])
		})
		return searchParams
	}
	    
	$.ajax({
		type: "POST",
		url: 'https://kauth.kakao.com/oauth/token',
		data: {
			grant_type: 'authorization_code',
			client_id: JS_APP_KEY,
			redirect_uri: REDIRECT_URI,
			code
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8");
		},
		success: function (res) {
			console.log(res);
	            
			const accessTK = res.access_token;
	            
			console.log("토큰 = "+accessTK)
			Kakao.Auth.setAccessToken(accessTK) // 토큰 할당
		}
	});
}else{ // 없을경우
	
}
function kakaologinfnc(){	
	Kakao.API.request({
		url: '/v2/user/me',
})
	.then(function(res) {
		alert(JSON.stringify(res));
		console.log("============"+res);
		console.log(res.kakao_account.email); // 이메일
		console.log(res.id);  // 아이디(임시)
		console.log(res.properties.nickname); // 닉네임
		alert("확인")

	})
	.catch(function(err) {
		alert(
				'failed to request user information: ' + JSON.stringify(err)
		);
	});
	
}
