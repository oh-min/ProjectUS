/**
 * 공지사항 디테일
 */
document.write('<script src="/resources/js/attachlist.js"></script>');
window.onload = function() {
	/* 첨부파일 목록 불러오는 함수 */
	attachlistfnc()
	/* 수정 및 삭제를 위해 nno 값 가져오기 */
	let nno = document.getElementById("nno")

	/* 삭제 버튼 */
	let deletebtn = document.getElementById("deletebtn")
	deletebtn.onclick = function() {
		let deleteform = document.getElementById("deleteform")
		console.log("삭제 버튼 클릭")

		if (confirm("삭제하시겠습니까?")) {
			deleteform.action = '/notice/delete?nno=' + nno.value + '';
			deleteform.submit();
		} else {
			console.log("취소됨")
		}
	}
	
	/* 수정 버튼 */
	let editbtn = document.getElementById("editbtn")
	editbtn.onclick = function() {
		console.log(nno.value)
		location.href = "/notice/edit?nno=" + nno.value + "";
	}
	
	/* 목록 버튼 */
	let listbtn = document.getElementById("listbtn")
	listbtn.onclick = function() {
		location.href = "/notice/list";
	}
}