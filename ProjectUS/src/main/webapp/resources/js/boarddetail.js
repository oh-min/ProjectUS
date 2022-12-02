/**
 * 중고거래 디테일
 */
document.write('<script src="/resources/js/attachlist.js"></script>');
window.onload = function() {
	/* 첨부파일 목록 불러오는 함수 */
	attachlistfnc()

	let heart_empty = document.getElementById('heart_empty'); // 빈하트
	let heartform = document.getElementById('heartform');
	let bno = document.getElementById('bno').innerText; // 자유게시판 글 번호
	let loginid; // 로그인된 아이디

	/* 로그인된 아이디의 좋아요 여부 */
	try{
		loginid = document.getElementById('headerId').value; // 로그인 값
		
		if (loginid){ // 로그인 된 경우
			
			console.log("로그인됨")
			// bno, loginid 를 JSON 타입으로 저장하여
			data = JSON.stringify({
				id : loginid,
				bno : bno
			})
			console.log(data)

			// Ajax로 controller에 전송하기
			let xhr = new XMLHttpRequest(); // 서버에 데이터를 요청
			xhr.onreadystatechange = () => { // 서버로부터의 응답을 확인
				if (xhr.readyState === XMLHttpRequest.DONE) {
					let txt = xhr.responseText; // 응답으로 받은 데이터를 문자열로 반환
					
					if (xhr.status === 200) { // 좋아요를 누른 글인 경우
						console.log("연결성공 & "+txt)
						// 빨간하트로 변경
						heart_empty.src = "https://cdn-icons-png.flaticon.com/512/2107/2107845.png";
						heart_empty.id = "red_heart";
						
						
						/* 좋아요 취소 */
						let red_heart = document.getElementById('red_heart');
						red_heart.onclick = function(){ // 빨간 하트 클릭시
							console.log("좋아요 취소")
							
							// bno, loginid를 JSON타입으로 저장
							data = JSON.stringify({
								id: loginid,
								bno : bno
							})
							console.log(data)
							
							// Ajax로 controller에 전송하기
							let request = new XMLHttpRequest(); // 서버에 데이터를 요청
							request.open('POST', '/board/heartout', true) // '좋아요 취소'로
							request.setRequestHeader('Content-Type', 'application/json'); // 헤더 값 설정
							request.send(data); // 데이터 전송
							
							// 빈 하트로 변경
							heart_empty.src = "https://cdn-icons-png.flaticon.com/512/2107/2107952.png";
							heart_empty.id = "heart_empty";
						}
							
						
						
						
						
					} else { // 좋아요를 누르지 않은 경우
						console.log("연결실패 & "+txt) 
					}	
				}
			};
			xhr.open('POST', '/board/heartid', true) // '좋아요 여부'로
			xhr.setRequestHeader('Content-Type', 'application/json'); // 헤더 값 설정
			xhr.send(data); // 데이터 전송

		}
	}catch(e){
		console.log(e)
	}
	
	
	/* 좋아요 추가 */
	heart_empty.onclick = function() {
		try { // 로그인이 되었을 경우
			loginid = document.getElementById('headerId').value; // 값을 가져오고
		} catch (e) { // 로그인이 되지않았을 경우
			console.log(e)
			loginid = null // null값을 넣어라
		}
		console.log(bno)
		console.log(loginid)

		// 로그인이 된 경우
		if (loginid != null) {
			console.log("로그인됨")

			// bno, loginid 를 JSON 타입으로 저장하여
			data = JSON.stringify({
				id : loginid,
				bno : bno
			})
			console.log(data)

			// Ajax로 controller에 전송하기
			let xhr = new XMLHttpRequest(); // 서버에 데이터를 요청
			xhr.open('POST', '/board/heartin', true) // '좋아요 추가'로
			xhr.setRequestHeader('Content-Type', 'application/json'); // 헤더 값 설정
			xhr.send(data); // 데이터 전송

			// 빨간하트로 변경
			heart_empty.src = "https://cdn-icons-png.flaticon.com/512/2107/2107845.png";
			heart_empty.id = "red_heart";
		} else { // 로그인이 되지 않은 경우
			alert("로그인 후 이용가능합니다.")
		}
	}
		
}

/* 목록 버튼 */
function listbtn() {
	location.href = "/board/list";
}