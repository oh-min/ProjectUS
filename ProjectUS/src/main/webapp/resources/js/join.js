/**
 * 회원가입
 */
window.onload = function() {
	/* 입력된 값 */
	const name = document.getElementById('name');
	const id = document.getElementById('id');
	const pw = document.getElementById('pw');
	const pwchk = document.getElementById('pwchk');
	const email = document.getElementById('email');
	const nick = document.getElementById('nick');
	const birthY = document.getElementById('birthY');
	const birthM = document.getElementById('birthM');
	const birthD = document.getElementById('birthD');
	const phone = document.getElementById('phone');
	const gender = document.getElementById('gender');
	const chkbox = document.getElementById('chkbox');
	/* msg */
	const namemsg = document.getElementById('namemsg');
	const idmsg = document.getElementById('idmsg');
	const pwmsg = document.getElementById('pwmsg');
	const pwchkmsg = document.getElementById('pwchkmsg');
	const emailmsg = document.getElementById('emailmsg');
	const nickmsg = document.getElementById('nickmsg');
	const birthmsg = document.getElementById('birthmsg');
	const phonemsg = document.getElementById('phonemsg');
	const chkboxmsg = document.getElementById('chkboxmsg');
	/* 정규식 */
	const namereg = /^[가-힣]{2,20}$/;
	const idreg = /^[a-z0-9]{6,20}$/;
	const pwreg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
	const emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	const nickreg = /^.{4,20}$/;
	const phonereg = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
	/* 정규식 불일치시 msg */
	const nameInnermsg = "2 ~ 20자 이내의 한글만 입력 가능합니다."
	const idInnermsg = "영문자 또는 숫자 6~20자만 입력 가능합니다."
	const pwInnermsg = "8 ~ 16자 영문, 숫자 조합만 입력 가능합니다."
	const emailInnermsg = "이메일 주소를 다시 확인해주세요."
	const nickInnermsg = "4 ~ 20자만 입력 가능합니다."
	const phoneInnermsg = "형식에 맞지 않는 번호입니다."
	/* 버튼 */
	const sameidchk = document.getElementById('sameidchk');
	const samenickchk = document.getElementById('samenickchk');

	/* 이름 확인 정규식 (name blur) */
	name.onblur = function(){
		regchkfnc(name, namemsg, namereg, nameInnermsg); 
	}
	
	/* 아이디 확인 정규식(id blur,sameidchk click) */
	sameregchkfnc(id, idmsg, idreg, idInnermsg, sameidchk) 

	/* 비밀번호 확인 정규식(pw change) */
	pw.onchange = function() {
		pwchkfnc(pw, pwchk)
	}
	/* 비밀번호 확인 정규식 (pw blur) */
	pw.onblur = function(){
		regchkfnc(pw, pwmsg, pwreg, pwInnermsg) 
	}
	/* 비밀번호 확인 정규식(pwchk blur) */
	pwchk.onblur = function() {
		pwchkfnc(pw, pwchk)
	}
	/* 이메일 확인 정규식 (email blur) */
	email.onblur = function(){
		regchkfnc(email, emailmsg, emailreg, emailInnermsg) 
	}
	/* 닉네임 확인 정규식 (nick blur) */
	sameregchkfnc(nick, nickmsg, nickreg, nickInnermsg, samenickchk)
	
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
			} else if (birthM.value == "null" || birthD.value == "null") {
				birthmsg.innerHTML = "필수 항목입니다."
				birthmsg.style.color = "red";
			} else {
				birthmsg.innerHTML = ""
			}
		} else {
			birthmsg.innerHTML = "필수 항목입니다."
			birthmsg.style.color = "red";
		}

		// 년도, 월 입력시 일 옵션 정하기
		if (birthM.value) { // 월에 값이 있는 경우
			birthDayfnc(birthY.value, birthM.value) // 월 입력시 1~12만 선택하는 함수 호출
		}
	}

	/* 년도, 월 입력시 일 옵션 정하기(월 blur) */
	birthM.onblur = function() {
		
		if (birthY.value) { // 년도에 값이 있는 경우
			if (!birthY.value || birthD.value == "null") {
				birthmsg.innerHTML = "필수 항목입니다."
				birthmsg.style.color = "red";
			}
			birthDayfnc(birthY.value, birthM.value) // 월 입력시 1~12만 선택하는 함수 호출
		} else {
			birthmsg.innerHTML = "필수 항목입니다."
			birthmsg.style.color = "red";
		}
	}

	/* 생년월일 모두 입력했을 경우(일 blur) */
	birthD.onblur = function() {
			
		
		if (birthY.value && birthM.value && birthD.value) { // 생년월일 모두 값이 존재
			// 현재 날짜 구하기
			let today = new Date();
			let todayY = today.getFullYear(); // 년도
			let todayM = today.getMonth() + 1; // 월
			let todayD = today.getDate(); // 날짜

			// 한자리 수인 경우 앞에 0을 넣어 2자리로 맞추기
			var birthM00 = ('00' + birthM.value).slice(-2);
			var birthD00 = ('00' + birthD.value).slice(-2);

			var todayYMD = todayY + "/" + todayM + "/" + todayD; // 현재날짜
			var birthYMD = birthY.value + "/" + birthM00 + "/" + birthD00; // 입력한날짜

			// 만 14세 미만인 경우
			var childtoday = todayY + "" + todayM + "" + todayD;
			var childBirth = birthY.value + birthM00 + birthD00;
			var under14 = (childtoday - childBirth) - 140000
			console.log(under14)

			// 현재날짜보다 입력한 날짜가 미래인 경우
			if (todayYMD >= birthYMD) {
				if (under14 < 0) { // 14세 미만인 경우
					birthmsg.innerHTML = "만 14세 미만인 경우 부모의 동의가 필요합니다."
					birthmsg.style.color = "red";
				} else {
					birthmsg.innerHTML = ""
				}
			} else if (todayYMD < birthYMD) {
				birthmsg.innerHTML = "미래에서 오셨나요."
				birthmsg.style.color = "red";
			}
		}
		
		
	}
	/* 전화번호 확인 정규식 (phone blur) */ 
	phone.onblur = function(){
		regchkfnc(phone, phonemsg, phonereg, phoneInnermsg) 
	}
	
	/* 이용약관 blur 이벤트(약관 blur) */
	chkbox.onblur = function() {
		chkboxfnc(chkbox, chkboxmsg) // 약관 동의 함수 호출
	}
	
	
	/* 회원가입 버튼 클릭시(회원가입 버튼 click) */
	document.getElementById("joinbtn").onclick = function() {
		// 중복확인후 회원가입 버튼 클릭시 msg 유지하기위한 함수 호출
		forKeepMsg(idmsg)
		forKeepMsg(nickmsg)
		
		// 회원가입 클릭시 정규식 함수 호출
		regchkfnc(name, namemsg, namereg, nameInnermsg); // 이름
		regchkfnc(pw, pwmsg, pwreg, pwInnermsg) // 비밀번호
		regchkfnc(email, emailmsg, emailreg, emailInnermsg) // 이메일
		regchkfnc(phone, phonemsg, phonereg, phoneInnermsg) // 휴대폰번호
		
		// 생년월일 중 입력한 값이 하나라도 없는 경우 함수 호출
		forBirth(birthY, birthM, birthD)

		// 약관 동의 함수 호출
		chkboxfnc(chkbox, chkboxmsg)

		// 모든 값이 다 입력되었으면 controller 로 값 보내기
		if (namemsg.innerText == "" && idmsg.innerText == "사용가능합니다." && pwmsg.innerText == "" && emailmsg.innerText == ""
				&& nickmsg.innerText == "사용가능합니다." && phonemsg.innerText == "" && birthmsg.innerText == "" && pwchkmsg.innerText == "위에 입력한 비밀번호와 일치합니다."
				&& chkbox.checked) {
			console.log("1차완료")

			if (confirm("가입하시겠습니까?")) {
				document.getElementById('join').submit();
			}
		} else {
			console.log("회원가입 실패")
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
	/* 중복확인이 필요한 값의 blur시 정규식 함수 선언 */
	function sameregchkfnc(val, msg, reg, eachmsg, chkbtn) {
		val.onblur = function() {
			let regchk = reg;
			if (!val.value) { // 값이 없을시
				msg.innerHTML = "필수 항목입니다."
				msg.style.color = "red";
			} else if (!regchk.test(val.value)) { // 정규식 불일치시
				msg.innerHTML = eachmsg
				msg.style.color = "red";
			} else {
				msg.innerHTML = "중복확인 해주세요."
				msg.style.color = "red";
				chkbtn.onclick = function() {
					// 데이터를 json 타입으로 변형
					data = JSON.stringify({
						id: id.value,
						nick: nick.value 
					});
					// 통신에 사용 될 XMLHttpRequest 객체 정의
					xhr = new XMLHttpRequest();
					// httpRequest의 readyState가 변화했을때 함수 실행
					xhr.onreadystatechange = () => {
						// readyState가 Done이고 응답 값이 200일 때, 받아온 response로 id를 그려줌
						if (xhr.readyState === XMLHttpRequest.DONE) {
							let txt = xhr.responseText; // controller에서 응답된 문자열
							if (xhr.status === 200) {						
								console.log("연결성공 & "+txt)
								msg.innerText="사용가능합니다.";
								msg.style.color = "green";
							} else {
								console.log("연결실패 & "+txt) // 500에러가 뜨는 문제 발생
								msg.innerText="이미 사용중입니다.";
								msg.style.color = "red";
							}	
						}
					};
					// post / get 방식으로 id 파라미터와 할께 요청
					xhr.open('POST','/member/samechk',true)
					// 요청 Header에 컨텐츠 타입은 Json으로 사전 정의
					xhr.setRequestHeader('Content-Type', 'application/json');
					// 정의된 서버에 Json 형식의 요청 Data를 포함하여 요청을 전송
					xhr.send(data);
				}
			}
		}	
	}
	/* 비밀번호 일치 함수 선언 */
	function pwchkfnc(pw, pwchk) {
		if (pw.value == pwchk.value) { // 비밀번호와 비밀번호 재확인 값이 일치할 경우
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치합니다."
			pwchkmsg.style.color = "green";
		} else { // 일치하지 않을 경우
			pwchkmsg.innerHTML = "위에 입력한 비밀번호와 일치하지 않습니다."
			pwchkmsg.style.color = "red";
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
	/* 중복확인후 회원가입 버튼 클릭시 msg 유지하기위한 함수 선언 */
	function forKeepMsg(msg){
		if(msg.innerText=="사용가능합니다."){
			msg.innerHTML=="사용가능합니다."
			msg.style.color = "green";
		}else if(msg.innerText==""){
			msg.innerHTML = "필수 항목입니다."
			msg.style.color = "red";
		}
		else{
		}
	}
	/*생년월일 중 입력한 값이 하나라도 없는 경우 함수 선언*/
	function forBirth(birthY, birthM, birthD){
		if (!birthY.value || !birthM.value || !birthD.value || birthM.value == "null" || birthD.value == "null") {
			birthmsg.innerHTML = "필수 항목입니다."
			birthmsg.style.color = "red";
		} else {
			birthmsg.innerHTML = ""
		}
	}
}
