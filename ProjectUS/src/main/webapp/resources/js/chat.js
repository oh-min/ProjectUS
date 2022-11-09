let websocket; // 웹소켓
let chatopen = document.getElementById("chatopen") // 채팅 참여

// 입장 버튼을 눌렀을 때 호출되는 함수
function connect() {

	let sendms = document.getElementById("sendms") // 입력된 메세지
	
	ws = new WebSocket(wsurl); // websocket 연

	/* 웹 소켓에 연결되었을 때 호출될 함수 */
	ws.onopen = function(e) {
		console.log("서버 연결 성공");
		console.log(e)
		/* 메세지 보내기 */
		// 메세지 전송 버튼 클릭시
		document.getElementById("sendbtn").onclick = function() {
			console.log("메세지전송 버튼 클릭");
			console.log("입력된 메세지 = " + sendms.value); // 입력된 메세지 내용

			// 입력된메세지를 보내기
			ws.send(sendms.value);
		}
	}

	/* 받은 메세지 */
	ws.onmessage = function(event) {
		console.log(`Data received from server: ${event.data}`);
		console.log(event.data) // 입력한 메세지 내용
	};

	/* 채팅 종료 */
	ws.onclose = function(event) {
		if (event.wasClean) {
			console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
			console.log("코드 1 = " + event.code)
			console.log("이유 1 = " + event.reason)
		} else {
			console.log(event)
			console.log("코드 2 = " + event.code)
			console.log("이유 2 = " + event.reason)
			alert('연결종료');
		}
	};
}