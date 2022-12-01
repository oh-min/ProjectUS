/**
 * 중고거래 디테일
 */
document.write('<script src="/resources/js/attachlist.js"></script>');
window.onload = function() {
	/* 첨부파일 목록 불러오는 함수 */
	attachlistfnc()

	let heart_empty = document.getElementById('heart_empty'); // 빈하트
	let heartform = document.getElementById('heartform');

	heart_empty.onclick = function() {

		let bno = document.getElementById('bno').innerText; // 자유게시판 글 번호
		let loginid; // 로그인된 아이디

		try { // 로그인이 되었을 경우
			loginid = document.getElementById('headerId').value; // 값을 가져오고
		} catch (e) { // 로그인이 되지않았을 경우
			console.log(e)
			loginid = null // null값을 넣어라
		}
		// 빨간하트로 변경

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
			xhr.open('POST', '/board/heartin', true) // '아이디 중복체크'로
			xhr.setRequestHeader('Content-Type', 'application/json'); // 헤더 값 설정
			xhr.send(data); // 데이터 전송

			// 빨간하트로 변경 확인 되면 여기로 옮기기
		} else { // 로그인이 되지 않은 경우
			alert("로그인 후 이용가능합니다.")
		}
	}
}

/* 목록 버튼 */
function listbtn() {
	location.href = "/board/list";
}