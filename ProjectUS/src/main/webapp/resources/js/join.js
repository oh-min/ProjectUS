/**
 * 회원가입
 */
window.onload = function() {

	var name = document.getElementById('name');
	var id = document.getElementById('id');
	var pw = document.getElementById('pw');
	var pwchk = document.getElementById('pwchk');
	var nick = document.getElementById('nick');
	var birthY = document.getElementById('birthY');
	var birthM = document.getElementById('birthM');
	var birthD = document.getElementById('birthD');
	var phone = document.getElementById('phone');
	var gender = document.getElementById('gender');

	var namemsg = document.getElementById('namemsg');
	var idmsg = document.getElementById('idmsg');
	var pwmsg = document.getElementById('pwmsg');
	var pwchkmsg = document.getElementById('pwchkmsg');
	var nickmsg = document.getElementById('nickmsg');
	var birthmsg = document.getElementById('birthmsg');
	var phonemsg = document.getElementById('phonemsg');

	// blur시 정규식 함수 호출
	regchk(name, namemsg, /^[가-힣]{2,20}$/, "2 ~ 20자 이내의 한글만 입력 가능합니다."); // 이름
	regchk(id, idmsg, /^[a-z0-9]{6,20}$/g, "영문자 또는 숫자 6~20자만 입력 가능합니다.") // 아이디
	regchk(pw, pwmsg, /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
			"8 ~ 16자 영문, 숫자 조합만 입력 가능합니다.") // 비밀번호
	regchk(nick, nickmsg, /^.{4,20}$/, "4 ~ 20자만 입력 가능합니다.") // 닉네임
	regchk(phone, phonemsg, /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
			"형식에 맞지 않는 번호입니다.") // 휴대폰번호

	// 비밀번호 확인 정규식
	pwchk.onblur = function() {
		if (pw.value == pwchk.value) {
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치합니다."
			pwchkmsg.style.color = "green";
		} else {
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치하지 않습니다."
			pwchkmsg.style.color = "red";
		}
	}
	pw.onchange = function() {
		if (pw.value == pwchk.value) {
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치합니다."
			pwchkmsg.style.color = "green";
		} else {
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치하지 않습니다."
			pwchkmsg.style.color = "red";
		}
	}

	// 년도 blur 이벤트
	birthY.onblur = function() {
		// 년도 입력시 숫자만 입력 정규식
		let yearchk = /^[0-9]+$/;
		if (birthY.value) {
			if (!yearchk.test(birthY.value)) {
				birthmsg.innerHTML = "숫자만 입력 가능합니다."
				birthmsg.style.color = "red";
			} else {
				birthmsg.innerHTML = ""
			}
		}
	}

	// 년도, 월 입력시 일 옵션 정하기
	birthM.onblur = function() {
		if (birthM.value != "") {
			birthY.onblur = function() {
				birthDay(birthY.value, birthM.value)
			}
		}
		// 월 입력시 1~12만 선택하는 함수 호출
		birthDay(birthY.value, birthM.value)
	}

	// 회원가입 버튼 클릭시
	document.getElementById("joinbtn").onclick = function() {

		// 회원가입 클릭시 정규식 함수 호출
		clickreg(name, namemsg, /^[가-힣]{2,20}$/, "2 ~ 20자 이내의 한글만 입력 가능합니다."); // 이름
		clickreg(id, idmsg, /^[a-z0-9]{6,20}$/g, "영문자 또는 숫자 6~20자만 입력 가능합니다.") // 아이디
		clickreg(pw, pwmsg, /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
				"8 ~ 16자 영문, 숫자 조합만 입력 가능합니다.") // 비밀번호
		clickreg(nick, nickmsg, /^.{4,20}$/, "4 ~ 20자만 입력 가능합니다.") // 닉네임
		clickreg(phone, phonemsg,
				/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
				"형식에 맞지 않는 번호입니다.") // 휴대폰번호

		// msg에 text가 입력되어있지 않으면 controller 로 값 보내기
		var allmsg = document.getElementsByClassName("msg")
		if (!allmsg[0].innerText && !allmsg[1].innerText
				&& !allmsg[2].innerText && !allmsg[3].innerText
				&& !allmsg[4].innerText && !allmsg[5].innerText
				&& pwchkmsg.innerText == "위에 입력한 비밀번호와 일치합니다.") {
			if(confirm("가입하시겠습니까?")){
				console.log("done")
				
				document.getElementById('join').submit();
				
			}
			
		}

		// location.replace("/");
	}

	/* 함수 선언 */

	// 월 입력시 1~12만 선택하는 함수 선언
	function birthDay(year, month) {
		var lastday = new Date(Number(year), Number(month), 0).getDate();
		console.log("마지막 날짜 = " + lastday);
		var str = "";
		str += "<option value='empty'>선택</option>"
		for (i = 1; i <= lastday; i++) {
			str += "<option>" + i + "</option>"
			birthD.innerHTML = str;
		}
	}

	// blur시 정규식 함수 선언
	function regchk(val, msg, reg, eachmsg) {
		val.onblur = function() {
			let regchk = reg;
			if (!val.value) {
				msg.innerHTML = "필수 항목입니다."
				msg.style.color = "red";
			} else if (!regchk.test(val.value)) { // 정규식 불일치시
				msg.innerHTML = eachmsg
				msg.style.color = "red";
			} else {
				msg.innerHTML = ""
			}
		}
	}
	// 회원가입 클릭시 정규식 함수 선언
	function clickreg(val, msg, reg, eachmsg) {
		let regchk = reg;
		if (!val.value) {
			msg.innerHTML = "필수 항목입니다."
			msg.style.color = "red";
		} else if (!regchk.test(val.value)) { // 정규식 불일치시
			msg.innerHTML = eachmsg
			msg.style.color = "red";
		} else {
			msg.innerHTML = ""
		}

	}

}
