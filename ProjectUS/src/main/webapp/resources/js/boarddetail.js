/**
 * 중고거래 디테일
 */
document.write('<script src="/resources/js/attachlist.js"></script>');
window.onload = function() {
	/* 첨부파일 목록 불러오는 함수 */
	attachlistfnc()
}

/* 목록 버튼 */
function listbtn() {
	location.href = "/board/list";
}