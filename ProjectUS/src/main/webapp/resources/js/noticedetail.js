/**
 * 공지사항 디테일
 */
document.write('<script src="/resources/js/attachlist.js"></script>');
window.onload = function() {
	/* 첨부파일 목록 불러오는 함수 */
	attachlistfnc()
}
/* 목록 버튼 */
function listbtn() {
	location.href = "/notice/list";
}
/* 수정 버튼 */
function editbtn() {
	console.log("수정 버튼 클릭")
}
/* 삭제 버튼 */
function deletebtn() {
	console.log("삭제 버튼 클릭")
}