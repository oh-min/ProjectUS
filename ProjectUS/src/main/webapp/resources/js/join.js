/**
 * 회원가입
 */
window.onload = function() {

	var name = document.getElementById('name');
	var id = document.getElementById('id');
	var pw = document.getElementById('pw');
	var pwchk = document.getElementById('pwchk');
	var email = document.getElementById('email');
	var nick = document.getElementById('nick');
	var birthY = document.getElementById('birthY');
	var birthM = document.getElementById('birthM');
	var birthD = document.getElementById('birthD');
	var phone = document.getElementById('phone');
	var gender = document.getElementById('gender');
	var chkbox = document.getElementById('chkbox');

	var allmsg = document.getElementsByClassName("msg")
	var namemsg = document.getElementById('namemsg');
	var idmsg = document.getElementById('idmsg');
	var pwmsg = document.getElementById('pwmsg');
	var pwchkmsg = document.getElementById('pwchkmsg');
	var emailmsg = document.getElementById('emailmsg');
	var nickmsg = document.getElementById('nickmsg');
	var birthmsg = document.getElementById('birthmsg');
	var phonemsg = document.getElementById('phonemsg');
	var chkboxmsg = document.getElementById('chkboxmsg');
	
	/* 정규식 */
	let namereg = /^[가-힣]{2,20}$/;
	let idreg = /^[a-z0-9]{6,20}$/;
	let pwreg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
	let emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	let nickreg = /^.{4,20}$/;
	let phonereg = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
	
	/* 정규식 불일치시 msg */
	let nameInnermsg = "2 ~ 20자 이내의 한글만 입력 가능합니다."
	let idInnermsg = "영문자 또는 숫자 6~20자만 입력 가능합니다."
	let pwInnermsg = "8 ~ 16자 영문, 숫자 조합만 입력 가능합니다."
	let emailInnermsg = "이메일 주소를 다시 확인해주세요."
	let nickInnermsg = "4 ~ 20자만 입력 가능합니다."
	let phoneInnermsg = "형식에 맞지 않는 번호입니다."

	/* blur시 정규식 함수 호출 */
	regchkfnc(name, namemsg, namereg, nameInnermsg); // 이름
	regchkfnc(id, idmsg, idreg, idInnermsg) // 아이디
	regchkfnc(pw, pwmsg, pwreg, pwInnermsg) // 비밀번호
	regchkfnc(email, emailmsg, emailreg, emailInnermsg) // 닉네임
	regchkfnc(nick, nickmsg, nickreg, nickInnermsg) // 닉네임
	regchkfnc(phone, phonemsg, phonereg, phoneInnermsg) // 휴대폰번호
	
	/* 비밀번호 확인 정규식(비밀번호재확인 blur) */
	pwchk.onblur = function() {
		if (pw.value == pwchk.value) { // 비밀번호와 비밀번호 재확인 값이 일치할 경우
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치합니다."
			pwchkmsg.style.color = "green";
		} else { // 일치하지 않을 경우
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치하지 않습니다."
			pwchkmsg.style.color = "red";
		}
	}
	/* 비밀번호 확인 정규식(비밀번호 change) */
	pw.onchange = function() {
		if (pw.value == pwchk.value) { // 비밀번호와 비밀번호 재확인 값이 일치할 경우
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치합니다."
			pwchkmsg.style.color = "green";
		} else { // 일치하지 않을 경우
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치하지 않습니다."
			pwchkmsg.style.color = "red";
		}
	}

	/* 년도 정규식(년도 blur) */
	birthY.onblur = function() {
		// 년도 입력 정규식
		let yearchk1 = /^[0-9]+$/; // 숫자만 입력
		let yearchk2 = /^[0-9]{4}$/; // 4자리 숫자만 입력

		// 년도에 값이 있는 경우
		if (birthY.value) {
			if (!yearchk1.test(birthY.value)) { // 숫자 이외의 문자를 입력하는 경우
				birthmsg.innerHTML = "숫자만 입력 가능합니다."
				birthmsg.style.color = "red";
			} else if (!yearchk2.test(birthY.value)) { // 숫자 4자리를 입력하지 않는 경우
				birthmsg.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
				birthmsg.style.color = "red";
			} else {
				birthmsg.innerHTML = ""
			}
		}
		// 년도, 월 입력시 일 옵션 정하기
		if (birthM.value) { // 월에 값이 있는 경우
			birthDayfnc(birthY.value, birthM.value) // 월 입력시 1~12만 선택하는 함수 호출
		}
	}

	/* 년도, 월 입력시 일 옵션 정하기(월 blur) */
	birthM.onblur = function() {
		if (birthY.value) { // 년도에 값이 있는 경우
			birthDayfnc(birthY.value, birthM.value) // 월 입력시 1~12만 선택하는 함수 호출
		}
	}

	/* 이용약관 blur 이벤트(약관 blur) */
	chkbox.onblur = function() {
		chkboxfnc(chkbox, chkboxmsg) // 약관 동의 함수 호출
	}

	
	/* 회원가입 버튼 클릭시(회원가입 버튼 click) */
	document.getElementById("joinbtn").onclick = function() {

		// 회원가입 클릭시 정규식 함수 호출
		clickregfnc(name, namemsg, namereg, nameInnermsg); // 이름
		clickregfnc(id, idmsg, idreg, idInnermsg) // 아이디
		clickregfnc(pw, pwmsg, pwreg, pwInnermsg) // 비밀번호
		clickregfnc(email, emailmsg, emailreg, emailInnermsg) // 닉네임
		clickregfnc(nick, nickmsg, nickreg, nickInnermsg) // 닉네임
		clickregfnc(phone, phonemsg, phonereg, phoneInnermsg) // 휴대폰번호

		// 약관 동의 함수 호출
		chkboxfnc(chkbox, chkboxmsg)
		
		// 모든 값이 다 입력되었으면 controller 로 값 보내기
		if (!allmsg[0].innerText && !allmsg[1].innerText
				&& !allmsg[2].innerText && !allmsg[3].innerText
				&& !allmsg[4].innerText && !allmsg[5].innerText
				&& pwchkmsg.innerText == "위에 입력한 비밀번호와 일치합니다."
				&& chkbox.checked) {
				console.log("아이디 = "+id.value)
				console.log("비밀번호 = "+pw.value)
				console.log("이름 = "+name.value)
				console.log("닉네임 = "+nick.value)
				console.log("년도 = "+birthY.value)
				console.log("월 = "+birthM.value)
				console.log("일 = "+birthD.value)
				console.log("전화번호 = "+phone.value)
				console.log("성별 = "+gender.value)
			if (confirm("가입하시겠습니까?")) {
				console.log("done")
				document.getElementById('join').submit();
			}
		}
	}

	/* 함수 선언 */

	/* 년도, 월 입력시 일 옵션 함수 선언 */
	function birthDayfnc(year, month) {
		var lastday = new Date(Number(year), Number(month), 0).getDate();
		console.log("마지막 날짜 = " + lastday);
		var str = "";
		str += "<option value='null'>선택</option>"
		for (i = 1; i <= lastday; i++) {
			str += "<option>" + i + "</option>"
			birthD.innerHTML = str;
		}
	}

	/* blur시 정규식 함수 선언 */
	function regchkfnc(val, msg, reg, eachmsg) {
		val.onblur = function() {
			let regchk = reg;
			if (!val.value) { // 값이 없을시
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
	/* 회원가입 클릭시 정규식 함수 선언 */
	function clickregfnc(val, msg, reg, eachmsg) {
		let regchk = reg;
		if (!val.value) { // 값이 없을시
			msg.innerHTML = "필수 항목입니다."
			msg.style.color = "red";
		} else if (!regchk.test(val.value)) { // 정규식 불일치시
			msg.innerHTML = eachmsg
			msg.style.color = "red";
		} else {
			msg.innerHTML = ""
		}
	}
	/* 약관 동의 함수 선언 */
	function chkboxfnc(val, msg) {
		if (!val.checked) {
			msg.innerHTML = "서비스 이용약관 및 개인정보취급방침에 동의해 주세요."
			msg.style.color = "red";
		} else {
			msg.innerHTML = ""
		}
	}

}
