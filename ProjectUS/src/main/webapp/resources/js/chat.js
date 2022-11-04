/**
 * 중고거래 채팅
 */
window.onload = function() {
	// 웹소켓 객체 생성
	//let ws = new WebSocket("wss://javascript.info/article/websocket/chatting/hello");   // 여기서 에러 발생
	 let ws = new WebSocket("wss://javascript.info/article/websocket/demo/hello");   // 이건 됨
	
	ws.onmessage = send; // 메세지 수신시 send 함수 호출
	ws.onclose = closeChat; // 웹소켓 연결 끊길 시 closeChat 함수 호출
	ws.onopen = openChat; // 웹소켓 연결 성공 시 openChat 함수 호출
	ws.onerror = wserror; // 웹소켓 에러발생시 wserror 함수 호출
	
	/* 채팅 참여 */
	function openChat() {
		console.log("open")
	}

	/* 채팅 나가기 */
	function closeChat() {
		console.log("close")
	}

	/* 메세지 보내기 */
	function send() {
		console.log("send")
	}
	
	/* 에러 확인 */
	function wserror(event){
		console.log(event)
	}
}