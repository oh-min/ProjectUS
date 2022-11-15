window.onload = function() {
	/* 메세지 보낼때 필요한 변수 */
	let sendbtn = document.getElementById("sendbtn") // 보내기 버튼
	let sendms = document.getElementById("sendms") // 보내는 메세지 내용

	/* 로그인한 사람 정보(본인) */
	let usernick = document.getElementById("headerNick").innerText; // 로그인한 사람의 닉네임
	usernick = usernick.slice(0, -2); // ' 님' 을 제거
	let userid = document.getElementById("headerId").value; // 로그인한 사람의 아이디
	console.log("로그인한 사람의 닉네임 : "+usernick)
	console.log("로그인한 사람의 아이디 : "+userid)

	/* 작성한 메세지 내용 */
	let message = document.getElementById("message"); // 작성한 메세지 내용

	// -------------------------------------------------------------------------------

	/* 웹소켓 객체 연결하기 */
	let socket = new WebSocket("ws://localhost:8080/websocket/echo");

	/* 채팅 서버 열기 */
	socket.onopen = function(e) {
		console.log("채팅 서버 open 성공");
	};

	/* 채팅 메세지 보내기 */
	sendbtn.onclick = function() {
		console.log(message.value)
		const data = {
			"userid" : userid, // 로그인한 사람의 아이디
			"usernick" : usernick, // 로그인한 사람의 닉네임
			"message" : message.value // 메세지 내용
		}
		console.log(data)
		let jsonData = JSON.stringify(data);
		console.log("전송하는 데이터 json타입 : "+jsonData)
		/* 메세지 보내기 */
		socket.send(jsonData);
	}

	/* 받은 메세지 */
	socket.onmessage = function(event) {
		console.log("받은메세지 : " + event)
	};

	/* 채팅 서버 닫기 */// 채팅방 나가기 버튼 -> 채팅방을 나가시면 채팅 내역이 지워집니다. 알람 yes 하면 나가지기
	// 뒤로버튼 누르면 내역 삭제 안됨
	socket.onclose = function(event) {
		if (event.wasClean) {
			console.log("종료 코드 = " + event.code)
			console.log("종료 이유 = " + event.reason)
		} else {
			// e.g. server process killed or network down
			// event.code is usually 1006 in this case
			console.log('채팅 서버 종료');
		}
	};

	/* 채팅 에러 발생시 */
	socket.onerror = function(error) {
		console.log("에러 발생 : "+error)
	};

}

