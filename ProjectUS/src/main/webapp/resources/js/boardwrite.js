/**
 * 
 */
window.onload = function() {
	let id = document.getElementById("id"); // 아이디
	let nick = document.getElementById("nick"); // 닉네임
	//	console.log(id.value)
	//	console.log(nick.value)

	/* 아이디 마스킹 */
	let idmsk = id.value.replace(/(?<=.{2})(?=.{2})./gi, "*") // 앞 2글자, 뒤 1글자를 제외한 나머지 아이디 부분 '*'로 대체
	//	console.log(idmsk)

	let seller_value = nick.value + '(' + idmsk + ')' // 닉네임(아이***디) 형식
	//	console.log(seller_value)

//	// 판매자 value 값 으로 설정하기
//	let seller = document.getElementById("seller"); // 판매자
//	seller.value = seller_value
//	
//	let formData = new FormData(); // 파일 업로드
}