/**
 * 공지사항 디테일
 */
document.write('<script src="/resources/js/attachlist.js"></script>');
/* 목록 버튼 */
function listbtn() {
	location.href = "/notice/list";
}
window.onload = function() {
	/* 첨부파일 목록 불러오는 함수 */
	attachlistfnc()
	
}