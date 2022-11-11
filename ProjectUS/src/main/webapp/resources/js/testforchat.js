/**
 * test for chat
 */
$(document).on('keydown', 'div.chatBottom textarea', function(e) {
	if (e.keyCode == 13 && !e.shiftKey) {
	//	e.preventDefault(); // 엔터키가 입력되는 것을 막아준다.
		const message = $(this).val(); // 현재 입력된 메세지를 담는다.
		console.log(message)
		let search3 = $('div.chatBottom textarea').val();
		console.log(search3)
		let a = search3.replace(/\s|  /gi, "")
		console.log(a)
		if (search3.replace(/\s|  /gi, "").length == 0) {
			// 공백제거
			alert("here")
			return false;
			$('div.chatBottom textarea').focus();
		}

		//sendMessage(message);
		// textarea 비우기
		//clearTextarea();
	}
});