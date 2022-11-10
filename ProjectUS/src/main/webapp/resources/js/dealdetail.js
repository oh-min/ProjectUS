/**
 * 중고거래 디테일
 */
/* 목록 버튼 */
function listbtn() {
	location.href = "/deal/list";
}
/*채팅 버튼*/
function chatbtn(){
	let dno = document.getElementById("dno").innerText; // dno값 가져오기
	console.log(dno)
	location.href = "/deal/chat?dno="+dno+"";
}