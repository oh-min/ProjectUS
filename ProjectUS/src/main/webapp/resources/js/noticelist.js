/**
 * 공지사항 리스트
 */
window.onload = function() {
	/* 글 작성페이지로 이동 */
	document.getElementById("writebtn").onclick = function() {
		location.href = "/notice/write";
	}

	/* 페이징 class 변경 */
	// url 주소에서 pageNum 값
	const urlParams = new URL(location.href).searchParams;
	const pagenum = urlParams.get('pageNum');
	// pnum과 text값이 같은 a태그
	const anum = document.getElementById(pagenum);
	// 현재페이지 번호 색변경
	if (pagenum == anum.text) {
		anum.className = "nowpage";
	}

}