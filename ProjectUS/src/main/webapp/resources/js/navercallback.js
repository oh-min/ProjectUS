window.onload = function() {
	let id = document.getElementById("id"); // 아이디
	console.log(id.value)
	let pw = document.getElementById("pw"); // 비밀번호
	console.log(pw.value)
	let naverform = document.getElementById("naverjoinform")
		
	/* 아이디 중복확인 */
	// 아이디 값을 json타입의 data에 저장하여 아이디 중복확인으로 연결
	data = JSON.stringify({
		id: id.value,
		pw: pw.value
	})
	console.log(data)
	xhr = new XMLHttpRequest(); // 서버에 데이터를 요청
	xhr.onreadystatechange = () => { // 서버로부터의 응답을 확인
		if (xhr.readyState === XMLHttpRequest.DONE) {
			let txt = xhr.responseText; // 응답으로 받은 데이터를 문자열로 반환
			
			if (xhr.status === 200) { // 아이디 중복확인 했을 때, 가입된 회원이 아닌경우
				console.log("연결성공 & "+txt)
				
				/* 회원가입 후 -> 로그인 */
				console.log("회원가입 후 로그인")
				naverform.action="/member/naverjoin"
				naverform.submit(); // '네이버 회원가입 후 로그인' 으로 submit
			} else { // 아이디 중복확인 했을 때, 이미 가입된 회원일 경우
				console.log("연결실패 & "+txt) 
				
				/* 로그인하기 */
				console.log("로그인")
				naverform.action="/member/login"
				naverform.submit(); // '네이버 로그인' 으로 submit
			}	
		}
	};
	xhr.open('POST','/member/samechk',true) // '아이디 중복체크'로
	xhr.setRequestHeader('Content-Type', 'application/json'); // 헤더 값 설정
	xhr.send(data); // 데이터 전송
}