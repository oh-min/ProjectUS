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
		}

		if (id.value && pw.value) { // 아이디, 비밀번호가 모두 입력되는 경우
			document.getElementById('login').submit();

		}
	}

	/* 네이버 로그인 */
	var naver_id_login = new window.naver_id_login("cdycnoa2eTLT0zibGaQY", "http://localhost:8080/member/navercallback"); // 새창이 뜨는 주소
	var state = naver_id_login.getUniqState();
	naver_id_login.setButton("green", 200, 45);
	naver_id_login.setState(state);
	naver_id_login.setPopup();
	naver_id_login.init_naver_id_login();
}
/* 카카오 로그인 */
function loginWithKakao() {
	Kakao.Auth.authorize({
		redirectUri : 'http://localhost:8080/member/login',
	});
}

window.onload = function() {
	
	// url에서 인가코드를 추출하기
	const uri = location.search
	const redirectUri = new URLSearchParams(uri);
	const code = redirectUri.get('code');
	console.log("인가코드 = " + code) // 인가 코드
	console.log("http://localhost:8080/member/login?code"+code) // uri
	
	
	
	$.ajax({
        type: "POST",
        url: 'https://kauth.kakao.com/oauth/token',
        data: JSON.stringify({
            grant_type: 'authorization_code',
            client_id: 'bb70e04e0d5931a3241ef1a2ebcb994d',
            redirect_uri: "http://localhost:8080/member/login",
            code: code,
        }),
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        success:function(result){
        	if(result=="success"){
        		console.log("성공")
        	}else[
        		console.log("실패")
        	]
        }
    });

	
}
