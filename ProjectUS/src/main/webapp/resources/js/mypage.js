/**
 * 마이페이지
 */

window.onload = function(){
	
	let chatbtn = document.getElementById('chatbtn'); // 참여 채팅 목록 버튼
	
	chatbtn.onclick = function(){
		location.href = "/chat/chatroom"
	}
}