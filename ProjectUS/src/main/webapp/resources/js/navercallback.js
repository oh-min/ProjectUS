window.onload = function() {
	let id = document.getElementById("id"); // 아이디
	console.log(id.value)
	let pw = document.getElementById("pw"); // 아이디
	console.log(pw.value)
	let naverform = document.getElementById("naverjoinform")
		
	/* 아이디 중복확인 */
	// 아이디 값을 json 타입의 data에 저장하여 아이디 중복확인으로 연결
	data = JSON.stringify({
		id: id.value,
		pw: pw.value
	})
	console.log(data)
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			let txt = xhr.responseText; 							
			if (xhr.status === 200) { // 아이디 중복확인 했을 때, 가입된 회원이 아닌경우
				console.log("연결성공  "+txt)
					
				// 회원가입 후 -> 로그인
				naverform.action="/member/naverjoin"
				naverform.submit();
				setTimeout(function(){
					window.close();
					opener.parent.location.href="/"; // 부모창 이동
				},3)
			} else { // 아이디 중복확인 했을 때, 이미 가입된 회원일 경우
				console.log("연결실패 & "+txt) 
				// 로그인하기
				console.log("로그인")
				naverform.action="/member/login"
					naverform.submit();
				setTimeout(function(){
					window.close();
					opener.parent.location.href="/"; // 부모창 이동
				},3)
			}	
		}
	};
	xhr.open('POST','/member/samechk',true)
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(data);
}