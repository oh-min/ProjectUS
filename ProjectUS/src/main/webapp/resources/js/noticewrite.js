/**
 * 공지사항 작성
 */
window.onload = function() {
	let title = document.getElementById("title"); // 제목
	let id = document.getElementById("id"); // 아이디
	let category = document.getElementById("category"); // 카테고리
	let content = document.getElementById("Ncontent"); // 내용
	let top = document.getElementById("top"); // 고정여부

	let formData = new FormData(); // 파일 업로드

	/* 글 작성 버튼 click */
	document.getElementById("writebtn").onclick = function() {
		// 첨부된 파일 정보
		let fileName = document.getElementById("fileName");
		let uuid = document.getElementById("uuid");
		let attachPath = document.getElementById("attachPath");
		let image = document.getElementById("image");

		if (title.value == "") {
			alert("제목을 입력해 주세요.")
		} else if (id.value == "") {
			alert("로그인 후 작성해주세요.")
			location.href="/member/login"
		}else if (id.value != "admin"){ // 로그인된 아이디가 관리자 아이디가 아닌 경우
			alert("관리자만 작성할 수 있습니다.")
			location.href="/notice/list"
		}else if (category.value == "null") {
			alert("카테고리를 설정해 주세요.")
		} else if (content.value == "") {
			alert("내용을 입력해 주세요.")
		} else {
			document.getElementById('writeform').submit();
		}
	}

}