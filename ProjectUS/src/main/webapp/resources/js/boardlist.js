/**
 * 거래 리스트
 */
window.onload = function() {
	/* 페이징 class 변경 */
	try{
		// url 주소에서 pageNum 값
		let urlParams = new URL(location.href).searchParams;
		let pagenum = urlParams.get('pageNum');
		// pnum과 text값이 같은 a태그
		let anum = document.getElementById(pagenum);
		// 현재페이지 번호 색변경
		if (pagenum == anum.text) {
			anum.className = "nowpage";
		}
	}catch(e){
		console.log(e)
	}
	
	/*검색 결과 유지*/
	try{
		let urlParams = new URL(location.href).searchParams;
		let url_type = urlParams.get('type'); // url 주소에서 type값 추출
		let url_keyword = urlParams.get('keyword'); // url 주소에서 keyword값 추출
		
		let search = document.getElementById('search');
		let type = document.getElementById('type');
		
		if(url_keyword){ // url주소에 keyword가 있는경우 -> 검색한 창에 입력한 값 유지하기
			search.value = url_keyword
			type.value = url_type
		}
	}catch(e){
		console.log(e)
	}
	
	/* 글 작성페이지로 이동 */
	document.getElementById("writebtn").onclick = function() {
		location.href = "/board/write";
	}
}