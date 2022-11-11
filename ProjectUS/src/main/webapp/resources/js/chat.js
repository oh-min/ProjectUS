let websocket; // 웹소켓
let chatopen = document.getElementById("chatopen") // 채팅 참여

let dno; // dno값
let id; // id값
let nick; // nick값

window.onload = function() {
	// dno(중고거래 글번호) 값 불러오기
	let para = document.location.href.split("?");
	let paradno = para[1]; // url 파라미터에서 dno 값
	let delpart = paradno.slice(0, 4) // dno 값에서 지워야 하는 부분
	dno = paradno.replace(delpart, "") // dno값
	console.log(dno)

	// id(유저 아이디) 값 불러오기
	id = document.getElementById("headerId").value;
	console.log(id)

	// nick(유저 닉네임) 값 불러오기
	nick = document.getElementById("headerNick").innerText;
	nick = nick.slice(0, -2); // ' 님' 을 제거
	console.log(nick)
}

/* 입장 버튼을 눌렀을 때 호출되는 함수 */
function connect() {

	ws = new WebSocket(wsurl); // websocket 연결

	/* 웹 소켓에 연결되었을 때 호출될 함수 호출 */
	ws.onopen = onOpen;
	/* 받은 메세지 함수 선언 */
	ws.onmessage = onMessage;

}

/* 웹 소켓에 연결되었을 때 호출될 함수 선언 */
function onOpen() {
	console.log("서버 연결 성공");
	// console.log(e)
	data(dno, id, nick, "ENTER-CHAT"); // data를 json타입으로 저장하는 함수 호출

}
/* 메세지 보내기 함수 선언 */
function sendMessage(message) {
	console.log("메세지 전송")
	let sendms = document.getElementById("sendms") // 입력된 메세지
	console.log(sendms.value)

	let a = sendms.value.replace(/\s|/gi, "");
	console.log(a)
	
	// 공백이 있으면 안됨
	if (sendms.value.replace(/\s|\gi/, "").length == 0) {
		alert("hello")
	}

	data(dno, id, nick, sendms.value);
}

/* 받은 메세지 함수 선언 */
function onMessage(evt) {
	console.log("받은 메세지")
}

/* 채팅 종료 */
// ws.onclose = function(event) {
// if (event.wasClean) {
// console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
// console.log("코드 1 = " + event.code)
// console.log("이유 1 = " + event.reason)
// } else {
// console.log(event)
// console.log("코드 2 = " + event.code)
// console.log("이유 2 = " + event.reason)
// alert('연결종료');
// }
// };
/* data를 json타입으로 저장하는 함수 선언 */
function data(dno, id, nick, message) {
	const data = {
		// "roomID" : roomID, // 채팅방 숫자 - 후에 보고 필요하면 넣고 아님 넣지말기
		"dno" : dno, // 중고거래 글번호
		"id" : id, // 유저아이디
		"nick" : nick, // 유저 닉네임
		"message" : message
	// 메세지 내용
	}
	console.log(data)
	let jsonData = JSON.stringify(data);
	console.log(jsonData)
}