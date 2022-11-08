/**
 * 중고거래 채팅
 */
window.onload = function() {
	
	let sendms = document.getElementById("sendms") // 입력된 메세지
	
	
	/* 웹소켓 객체 생성 */
	// let ws = new WebSocket("wss://javascript.info/article/websocket/demo/hello"); // 이건 됨 - 근데 예시 url 이라서 되는듯
	// let ws = new WebSocket("ws://localhost:8080/"+${pageContext.request.contextPath}+"/chatting"); // 안됨
	// let ws = new WebSocket("wss://localhost:8080/us/chatting") // 안됨
	// let ws = new WebSocket("wss://localhost:8080/chatting") // 안됨
	// let ws = new WebSocket(((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + "/chatting"); // 안됨
	
	let ws = new WebSocket("wss://localhost:8080/controller/chatting") // 안됨 - 1006
	// let ws = new SockJS("http://localhost:8080/controller/chatting") // 안됨 - 1002
	
	
	
	
	/* 채팅 참여 */
	ws.onopen = function(e) {
		console.log("Sending to server");
		/* 메세지 보내기 */
		// 메세지 전송 버튼 클릭시
		document.getElementById("sendbtn").onclick = function() {
			console.log("메세지전송 버튼 클릭");
			console.log(sendms.value); // 입력된 메세지 내용
			// 입력된메세지를 보내기
			ws.send(sendms.value);
		}
	}

	/* 받은 메세지 */
	ws.onmessage = function(event) {
		console.log(`Data received from server: ${event.data}`);
		console.log(event.data) // Hello from server, 입력한 메세지 내용
	};

	/* 채팅 종료 */
	ws.onclose = function(event) {
		if (event.wasClean) {
			console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
			console.log("1코드 = "+event.code)
			console.log("1이유 = "+event.reason)
		} else {
			console.log(event)
			console.log("2코드 = "+event.code)
			console.log("2이유 = "+event.reason)
			// e.g. server process killed or network down
			// event.code is usually 1006 in this case
			alert('[close] Connection died');
		}
	};

	/* 에러발생시 */
	ws.onerror = function(error) {
		console.log(error);
	};
}