/**
 * 공지사항 작성
 */
window.onload = function() {
	const title = document.getElementById("title");
	const category = document.getElementById("category");
	const content = document.getElementById("content");
	document.getElementById("writebtn").onclick = function() {
		alert("hi");
		console.log(title.value);
		console.log(category.value);
		console.log(content); // undefined 나옴
		// document.getElementById('writeform').submit();
	}
}