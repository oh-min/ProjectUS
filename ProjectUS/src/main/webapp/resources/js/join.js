/**
 * 회원가입
 */
window.onload = function() {
	/* 입력된 값 */
	let name = document.getElementById('name'); // 이름
	let id = document.getElementById('id'); // 아이디
	let pw = document.getElementById('pw'); // 비밀번호
	let pwchk = document.getElementById('pwchk'); // 비밀번호 재확인
	let email = document.getElementById('email'); // 이메일
	let nick = document.getElementById('nick'); // 닉네임
	let birthY = document.getElementById('birthY'); // 생년
	let birthM = document.getElementById('birthM'); // 월
	let birthD = document.getElementById('birthD'); // 일
	let phone = document.getElementById('phone'); // 휴대폰
	let gender = document.getElementById('gender'); // 성별
	let chkbox = document.getElementById('chkbox'); // 동의체크
	/* msg */
	let namemsg = document.getElementById('namemsg'); // 이름 메세지
	let idmsg = document.getElementById('idmsg'); // 아이디 메세지
	let pwmsg = document.getElementById('pwmsg'); // 비밀번호 메세지
	let pwchkmsg = document.getElementById('pwchkmsg'); // 비밀번호 재확인 메세지
	let emailmsg = document.getElementById('emailmsg'); // 이메일 메세지
	let nickmsg = document.getElementById('nickmsg'); // 닉네임 메세지
	let birthmsg = document.getElementById('birthmsg'); // 생년월일 메세지
	let phonemsg = document.getElementById('phonemsg'); // 휴대폰 메세지
	let chkboxmsg = document.getElementById('chkboxmsg'); // 동의체크 메세지
	/* 정규식 */
	let namereg = /^[가-힣]{2,20}$/; // 한글 2 ~ 20자
	let idreg = /^[a-z0-9]{6,20}$/; // 소문자 영문, 숫자 6 ~ 20자
	let pwreg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; // 8 ~ 16자 영문, 숫자
	let emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일  정규식
	let nickreg = /^.{4,20}$/; // 4 ~ 20자
	let phonereg = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/; // 01* - 숫자 3 ~ 4자 - 숫자 4자
	// 년도 입력 정규식
	let yearchk1 = /^[0-9]+$/; // 숫자만 입력
	let yearchk2 = /^[0-9]{4}$/; // 4자리 숫자만 입력
																	
	/* 정규식 불일치시 msg */
	let nameInnermsg = "2 ~ 20자 이내의 한글만 입력 가능합니다."
	let idInnermsg = "영문자 또는 숫자 6~20자만 입력 가능합니다."
	let pwInnermsg = "8 ~ 16자 영문, 숫자 조합만 입력 가능합니다."
	let emailInnermsg = "이메일 주소를 다시 확인해주세요."
	let nickInnermsg = "4 ~ 20자만 입력 가능합니다."
	let phoneInnermsg = "형식에 맞지 않는 번호입니다."
	/* 버튼 */
	let sameidchk = document.getElementById('sameidchk'); // 아이디 중복체크
	let samenickchk = document.getElementById('samenickchk'); // 닉네임 중복 체크
	let randomnick = document.getElementById('randomnick'); // 닉네임 자동생성

	/* 이름 확인 정규식 (name blur) */
	name.onblur = function(){
		notnullregchkfnc(name, namemsg, namereg, nameInnermsg); 
	}
	
	/* 아이디 확인 정규식(id blur,sameidchk click) */
	sameregchkfnc(id, idmsg, idreg, idInnermsg, sameidchk) 

	/* 비밀번호 확인 정규식(pw change) */
	pw.onchange = function() {
		pwchkfnc(pw, pwchk)
	}
	/* 비밀번호 확인 정규식 (pw blur) */
	pw.onblur = function(){
		notnullregchkfnc(pw, pwmsg, pwreg, pwInnermsg) 
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
		if (birthY.value) { // 년도에 값이 있는 경우
			if (!yearchk1.test(birthY.value)) { // 숫자 이외의 문자를 입력하는 경우
				birthmsg.innerHTML = "숫자만 입력 가능합니다."
				birthmsg.style.color = "red";
			} else if (!yearchk2.test(birthY.value)) { // 숫자 4자리를 입력하지 않는 경우
				birthmsg.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
				birthmsg.style.color = "red";
			} else {
				birthmsg.innerHTML = ""
			}
		}else if(birthM.value || birthD.value){ // 년도에 값이 없는데, 월,일에 값이 있는 경우
			birthmsg.innerHTML = "년도부터 입력해 주세요."
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
			
			if (!yearchk1.test(birthY.value)) { // 숫자 이외의 문자를 입력하는 경우
				birthmsg.innerHTML = "숫자만 입력 가능합니다."
				birthmsg.style.color = "red";
			} else if (!yearchk2.test(birthY.value)) { // 숫자 4자리를 입력하지 않는 경우
				birthmsg.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
				birthmsg.style.color = "red";
			} else {
				birthmsg.innerHTML = ""
				birthDayfnc(birthY.value, birthM.value) // 월 입력시 1~12만 선택하는 함수 호출
			}
			
		} else if (!birthY.value || birthD.value == "null") { // 년도와 일에 값이 없는  경우
			
			birthmsg.innerHTML = ""
				
		}else { // 년도에 값이 없는데, 월,일에 값이 있는 경우
			
			birthmsg.innerHTML = "년도부터 입력해 주세요."
			birthmsg.style.color = "red";
			
		}
	}

	/* 생년월일 모두 입력했을 경우(일 blur) */
	birthD.onblur = function() {
		
		if (birthY.value && birthM.value && birthD.value) { // 생년월일 모두 값이 존재
			// 현재 날짜 구하기
			let today = new Date(); // 현재날짜
			let todayY = today.getFullYear(); // 현재 년도
			let todayM = today.getMonth() + 1; // 현재 월
			let todayD = today.getDate(); // 현재 날짜

			// 한자리 수인 경우 앞에 0을 넣어 2자리로 맞추기. ex) 3 -> 03
			let birthM00 = ('00' + birthM.value).slice(-2)
			let birthD00 = ('00' + birthD.value).slice(-2); 
			
			// 날짜를 비교하기 위해 년도/월/일 형식으로 변경하기 ex) 22/11/22
			let todayYMD = todayY + "/" + todayM + "/" + todayD; // 현재날짜
			let birthYMD = birthY.value + "/" + birthM00 + "/" + birthD00; // 입력한날짜
		
			// 만 14세 미만인 경우를 구분하기위해 년도월일 형식으로 변경하기
			var childtoday = todayY + "" + todayM + "" + todayD; // 현재날짜
			var childBirth = birthY.value + birthM00 + birthD00; // 입력한 날짜
			var under14 = (childtoday - childBirth) - 140000 // (현재날짜 -입력한날짜) - 14000
			
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
		notnullregchkfnc(name, namemsg, namereg, nameInnermsg); // 이름
		notnullregchkfnc(pw, pwmsg, pwreg, pwInnermsg) // 비밀번호
		regchkfnc(email, emailmsg, emailreg, emailInnermsg) // 이메일
		regchkfnc(phone, phonemsg, phonereg, phoneInnermsg) // 휴대폰번호

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

	randomnick.onclick = function(){
		console.log("randomnick")
		let xhr = new XMLHttpRequest();
		xhr.open('GET', '/member/randomnick', true);
		xhr.onload = function() {
			  if (xhr.status >= 200 && xhr.status < 400) {
			    console.log("success")
			    let data = JSON.parse(xhr.responseText);
			    console.log(data.words)
			    nick.value = data.words; // 닉네임 입력 창에 값 넣기
			    sameregchkfnc(randomnick, nickmsg, nickreg, nickInnermsg, samenickchk)
			  } else {
				console.log("what's wrong?")
			  }
			};

			xhr.onerror = function(e) {
				console.log(e)
			};

			xhr.send();
	}
	
	
	/* 함수 선언 */

	/* 년도, 월 입력시 일 옵션 함수 선언 */
	function birthDayfnc(year, month) {
		var lastday = new Date(Number(year), Number(month), 0).getDate(); // Date객체 사용. getDate() 사용하여 해당 년도의 해당 달의 일수 구하기
		console.log("마지막 날짜 = " + lastday);
		var str = "";
		str += "<option value='null'>선택</option>"
		for (i = 1; i <= lastday; i++) { // 반복문을 사용하여 마지막 날짜 만큼 +1 반복
			str += "<option>" + i + "</option>"
			birthD.innerHTML = str;
		}
	}
	
	/* 필수 입력사항 blur시 정규식 함수 선언 */
	function notnullregchkfnc(val, msg, reg, eachmsg) {
		let regchk = reg;
		if (!val.value) { // 입력된 값이 없는경우
			msg.innerHTML = "필수 항목입니다."
				msg.style.color = "red";
		} else if (!regchk.test(val.value)) { // 정규식 불일치한 경우
			msg.innerHTML = eachmsg
			msg.style.color = "red";
		} else { // 값도 입력되고, 정규식에도 일치하는 경우
			msg.innerHTML = ""
		}
	}
	/* blur시 정규식 함수 선언 */
	function regchkfnc(val, msg, reg, eachmsg) {
		let regchk = reg;
		if (!val.value) { // 값이 없을시
			msg.innerHTML = ""
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
			if (!val.value) { // 입력된 값이 없는 경우
				msg.innerHTML = "필수 항목입니다."
				msg.style.color = "red";
			} else if (!regchk.test(val.value)) { // 정규식 불일치한 경우
				msg.innerHTML = eachmsg
				msg.style.color = "red";
			} else { // 값도 입력되고, 정규식에도 일치한 경우
				msg.innerHTML = "중복확인 해주세요."
				msg.style.color = "red";
				
				// 버튼을 클릭할때
				chkbtn.onclick = function() {
					data = JSON.stringify({ // id 값과 nick 값을 json타입의 data로 변형하여 이동
						id: id.value,
						nick: nick.value 
					});
					let xhr = new XMLHttpRequest(); // 통신에 사용 될 XMLHttpRequest 객체 정의
					xhr.onreadystatechange = () => { // httpRequest의 readyState가 변화했을때 함수 실행
						// readyState가 Done이고 응답 값이 200일 때, 받아온 response로 id를 그려줌
						if (xhr.readyState === XMLHttpRequest.DONE) {
							let txt = xhr.responseText; // controller에서 응답된 문자열
							if (xhr.status === 200) { // 연결이 된 경우
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
					xhr.open('POST','/member/samechk',true) // post 방식으로 id
															// 파라미터와 할께 요청
					xhr.setRequestHeader('Content-Type', 'application/json'); // 요청 Header에 컨텐츠 타입은 Json으로 사전 정의
					xhr.send(data); // 정의된 서버에 Json 형식의 요청 Data를 포함하여 요청을 전송
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
}
