window.onload = function() {
	/* 메세지 보낼때 필요한 변수 */
	let sendbtn = document.getElementById("sendbtn") // 보내기 버튼
	let sendms = document.getElementById("sendms") // 보내는 메세지 내용

	/* 글번호(dno) 값 */
	let para = document.location.href.split("?");
	let paradno = para[1]; // url 파라미터에서 dno 값
	let deletepart = paradno.slice(0, 4) // dno 값에서 지워야 하는 부분
	let dno = paradno.replace(deletepart, "") // dno값
	console.log(dno)

	/* 거래글을 작성한 사람 정보 */
	let writernick = document.getElementById("writernick").innerText; // 거래글을 작성한 사람의 닉네임
	let writerid = document.getElementById("writerid").innerText; // 거래글을 작성한 사람의 아이디
	console.log(writernick)
	console.log(writerid)

	/* 거래를 원하는 사람 정보 */
	let wantednick = document.getElementById("headerNick").innerText; // 거래를 원하는 사람의 닉네임
	wantednick = wantednick.slice(0, -2); // ' 님' 을 제거
	let wantedid = document.getElementById("headerId").value; // 거래를 원하는 사람의 아이디
	console.log(wantednick)
	console.log(wantedid)

	/* 작성한 메세지 내용 */
	let message = document.getElementById("message"); // 작성한 메세지 내용

	// -------------------------------------------------------------------------------

	/* 웹소켓 객체 연결하기 */
	let socket = new WebSocket("ws://localhost:8080/websocket/echo");

	/* 채팅 서버 열기 */
	socket.onopen = function(e) {
		console.log("Sending to server");
	};

	/* 채팅 메세지 보내기 */
	sendbtn.onclick = function() {
		console.log(message.value)
		const data = {
			"dno" : dno, // 거래글 번호
			"writerid" : writerid, // 거래글을 작성한 사람 아이디
			"writernick" : writernick, // 거래글을 작성한 사람 닉네임
			"wantedid" : wantedid, // 거래를 원하는 사람 아이디
			"wantednick" : wantednick, // 거래를 원하는 사람 닉네임
			"message" : message.value // 메세지 내용
		}
		console.log(data)
		let jsonData = JSON.stringify(data);
		console.log(jsonData)
		/* 메세지 보내기 */
		socket.send(jsonData);
	}

	/* 받은 메세지 */
	socket.onmessage = function(event) {
		console.log("onmessage" + event)
	};

	/* 채팅 서버 닫기 */// 채팅방 나가기 버튼 -> 채팅방을 나가시면 채팅 내역이 지워집니다. 알람 yes 하면 나가지기
	// 뒤로버튼 누르면 내역 삭제 안됨
	socket.onclose = function(event) {
		if (event.wasClean) {
			console.log("close code = " + event.code)
			console.log("close reason = " + event.reason)
		} else {
			// e.g. server process killed or network down
			// event.code is usually 1006 in this case
			console.log('[close] Connection died');
		}
	};

	/* 채팅 에러 발생시 */
	socket.onerror = function(error) {
		console.log(error)
	};

	// -------------------------------------------------------------------------------
	
	/* data를 json타입으로 저장하는 함수 선언 */
//	function data(dno, writerid, writernick, wantedid, wantednick, message) {
//		const data = {
//			"dno" : dno, // 거래글 번호
//			"writerid" : writerid, // 거래글을 작성한 사람 아이디
//			"writernick" : writernick, // 거래글을 작성한 사람 닉네임
//			"wantedid" : wantedid, // 거래를 원하는 사람 아이디
//			"wantednick" : wantednick, // 거래를 원하는 사람 닉네임
//			"message" : message // 메세지 내용
//		}
//		console.log(data)
//		let jsonData = JSON.stringify(data);
//		console.log(jsonData)
//	}

}

// let websocket; // 웹소켓
// let chatopen = document.getElementById("chatopen") // 채팅 참여
//
// let dno; // dno값
// let id; // id값
// let nick; // nick값
//
// window.onload = function() {
// // dno(중고거래 글번호) 값 불러오기
// let para = document.location.href.split("?");
// let paradno = para[1]; // url 파라미터에서 dno 값
// let delpart = paradno.slice(0, 4) // dno 값에서 지워야 하는 부분
// dno = paradno.replace(delpart, "") // dno값
// console.log(dno)
//
// // id(유저 아이디) 값 불러오기
// id = document.getElementById("headerId").value;
// console.log(id)
//
// // nick(유저 닉네임) 값 불러오기
// nick = document.getElementById("headerNick").innerText;
// nick = nick.slice(0, -2); // ' 님' 을 제거
// console.log(nick)
// }
//
// /* 클릭 이벤트 */
// /* 입장 버튼을 눌렀을 때 호출되는 함수 */
// function connect() {
//
// ws = new WebSocket(wsurl); // websocket 연결
//
// /* 웹 소켓에 연결되었을 때 호출될 함수 호출 */
// ws.onopen = onOpen;
//
// /* 받은 메세지 함수 호출 */
// ws.onmessage = onMessage;
//
// }
// /* 나가기 버튼 눌렀을 때 호출되는 함수 */
// function close() {
// alert("hi")
// ws.onclose = onClose;
// }
//
// /* 메세지 보내기 버튼 눌렀을 때 호출되는 함수 */
// function sendMessage(message) {
// let sendms = document.getElementById("sendms") // 입력된 메세지
//
// // 메세지를 입력하지 않을 경우
// if (sendms.value.replace(/\s|\gi/, "").length == 0) {
// alert("메세지를 입력해주세요")
// return false // 값이 넘어가지 않응ㅁ
// } else { // 메세지를 입력한경우
// console.log("메세지 전송")
// console.log(sendms.value)
//
// data(dno, id, nick, sendms.value); // data 전송
// }
//
// }
//
// /* 함수 선언 */
// /* 웹 소켓에 연결되었을 때 호출될 함수 선언 */
// function onOpen() {
// console.log("서버 연결 성공");
// // console.log(e)
// data(dno, id, nick, "ENTER-CHAT"); // data를 json타입으로 저장하는 함수 호출
//
// }
//
// /* 받은 메세지 함수 선언 */
// function onMessage(evt) {
// console.log("받은 메세지")
// console.log(evt)
// }
//
// /* 채팅나가기 함수 선언 */
// function onClose(event) {
// alert("hi")
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
// /* data를 json타입으로 저장하는 함수 선언 */
// function data(dno, id, nick, message) {
// const data = {
// // "roomID" : roomID, // 채팅방 숫자 - 후에 보고 필요하면 넣고 아님 넣지말기
// "dno" : dno, // 중고거래 글번호
// "id" : id, // 유저아이디
// "nick" : nick, // 유저 닉네임
// "message" : message
// // 메세지 내용
// }
// console.log(data)
// let jsonData = JSON.stringify(data);
// console.log(jsonData)
// }
