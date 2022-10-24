/**
 * 공지사항 작성
 */
window.onload = function() {
	const title = document.getElementById("title");
	const id = document.getElementById("id");
	const category = document.getElementById("category");
	const content = document.getElementById("Ncontent");
	const top = document.getElementById("top");

	/* 글 작성 버튼 click */
	document.getElementById("writebtn").onclick = function() {

		if (title.value == "") {
			alert("제목을 입력해 주세요.")
		} else if (id.value == "") {
			alert("나중에 관리자 아이디로 로그인 했을 경우만 글 작성 가능하도록 변경해야한다.")
		} else if (category.value == "null") {
			alert("카테고리를 설정해 주세요.")
		} else if (content.value == "") {
			alert("내용을 입력해 주세요.")
		} else {
			if (top.checked == true) {
				document.getElementById('writeform').submit();
			} else {
				document.getElementById('writeform').submit();

			}
		}
	}
}