/**
 * 
 */
window.onload = function() {
	let title = document.getElementById("title"); // 제목
	let id = document.getElementById("id"); // 아이디
	let nick = document.getElementById("nick"); // 닉네임
	let seller = document.getElementById("seller"); // 판매자
	let category = document.getElementById("category"); // 카테고리
	let price = document.getElementById("price"); // 가격
	let content = document.getElementById("contentB"); // 내용

	/* 아이디 마스킹 처리하기 */
	let idmsk = id.value.replace(/(?<=.{2})(?=.{2})./gi, "*") // 앞 2글자, 뒤 1글자를 제외한 나머지 아이디 부분 '*'로 대체
	let seller_value = nick.value + '(' + idmsk + ')' // 닉네임(아이***디) 형식
	seller.value = seller_value // 판매자 value 값 으로 설정하기

	let btn = document.getElementById("writebtn"); // 작성 버튼

	/* 로그인에 문제가 생겼을 경우 */
	if (!id.value || !nick.value || !seller.value) {
		alert("로그인에 문제가 생겼습니다. 다시 로그인해주세요.")
		location.href = "/member/login"
	}

	/* 카테고리를 onblur 한 경우 */
	category.onblur = function() {
		let two = document.getElementById("two"); // 가격 tr
		console.log(category.value)
		if (category.value == '1') { // 거래 카테고리를 선택한 경우
			two.className = "see";
			console.log("see")
		}else{
			two.className = "hiddenprice"
			console.log("hiddenprice")
		}
		
	}

	/* 작성 버튼을 클릭했을 경우 */
	btn.onclick = function() {
		console.log("*제목 : " + title.value)
		console.log("*아이디 : " + id.value)
		console.log("*닉네임 : " + nick.value)
		console.log("판매자 : " + seller.value)
		console.log("*카테고리 : " + category.value)
		console.log("가격 : " + price.value)
		console.log("*내용 : " + content.value)

		if (!title.value) {
			alert("제목을 입력해 주세요")
		} else if (category.value == 'null') {
			alert("카테고리를 설정해 주세요")
		} else if (!content.value) {
			alert("내용을 입력해 주세요")
		} else {
			alert("submit")
			document.getElementById('writeform').submit();
		}
	}
}