/**
 * 공지사항 디테일
 */
document.write('<script src="/resources/js/attachlist.js"></script>');
window.onload = function() {
	/* 첨부파일 목록 불러오는 함수 */
	attachlistfnc()
	/* 수정 및 삭제를 위해 nno 값 가져오기 */
	let nno = document.getElementById("nno")
}
/* 목록 버튼 */
function listbtn() {
	location.href = "/notice/list";
}
/* 수정 버튼 */
function editbtn() {
	console.log(nno.value)
	location.href = "/notice/edit?nno="+nno.value+"";
}
/* 삭제 버튼 */
function deletebtn() {
	console.log("삭제 버튼 클릭")
}