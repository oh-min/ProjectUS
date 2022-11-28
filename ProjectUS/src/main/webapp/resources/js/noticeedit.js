/**
 * 공지사항 수정
 */
document.write('<script src="/resources/js/attachlist.js"></script>');
window.onload = function() {
	/* 첨부파일 목록 불러오는 함수 */
	attachlistfnc()
	/* 카테고리 selected 하기 */
	let forcategory = document.getElementById("forcategory") // 카테고리 값 가져오기
	console.log("카테고리 : " + forcategory.value)
	let select = document.getElementById("category")
	let selectlen = select.options.length; // 카테고리 select의 option 길이
	console.log(selectlen)
	//select 의 option 갯수만큼 for문 반목
	for (let i = 0; i < selectlen; i++) {
		//option value의 값과 일치할 경우 selected
		if (select.options[i].value == forcategory.value) {
			console.log(i + " & " + select.options[i].value)
			select.options[i].selected = true;
		}
	}

	/* 상단고정 여부 checked 하기 */
	let fortop = document.getElementById("fortop") // 상단여부 값 가져오기
	console.log("상단고정 : " + fortop.value)
	let check = document.getElementById("top")
	if (fortop.value == 1) {
		check.checked = true;
	}

	/* 글 작성 버튼 click */
	document.getElementById("writebtn").onclick = function() {
		let fileName = document.getElementById("fileName");
		let uuid = document.getElementById("uuid");
		let attachPath = document.getElementById("attachPath");
		let image = document.getElementById("image");
		if (title.value == "") {
			alert("제목을 입력해 주세요.")
		} else if (id.value == "") {
			alert("나중에 관리자 아이디로 로그인 했을 경우만 글 작성 가능하도록 변경해야한다.")
		} else if (category.value == "null") {
			alert("카테고리를 설정해 주세요.")
		} else if (content.value == "") {
			alert("내용을 입력해 주세요.")
		} else {
			document.getElementById('editform').submit();
		}

	}

}
