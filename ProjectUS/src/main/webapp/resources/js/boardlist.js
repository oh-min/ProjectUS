/**
 * 거래 리스트
 */
window.onload = function() {
	/* 페이징 class 변경 */
	try {
		// url 주소에서 pageNum 값
		let urlParams = new URL(location.href).searchParams;
		let pagenum = urlParams.get('pageNum');
		// pnum과 text값이 같은 a태그
		let anum = document.getElementById(pagenum);
		// 현재페이지 번호 색변경
		if (pagenum == anum.text) {
			anum.className = "nowpage";
		}
	} catch (e) {
		console.log(e)
	}

	/* 검색 결과 유지 */
	try {
		let urlParams = new URL(location.href).searchParams;
		let url_type = urlParams.get('type'); // url 주소에서 type값 추출
		let url_keyword = urlParams.get('keyword'); // url 주소에서 keyword값 추출

		let search = document.getElementById('search');
		let type = document.getElementById('type');

		if (url_keyword) { // url주소에 keyword가 있는경우 -> 검색한 창에 입력한 값 유지하기
			search.value = url_keyword
			type.value = url_type
		}
	} catch (e) {
		console.log(e)
	}

	/* 글 작성페이지로 이동 */
	document.getElementById("writebtn").onclick = function() {
		location.href = "/board/write";
	}

	/* bno 별 좋아요 개수 */
	// console.log(bno)
	/*let heartinfo = document.getElementById("forheartlist")
	console.log(heartinfo.innerText)

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/board/heartlist', true);
	xhr.onload = function() {
		if (xhr.status >= 200 && xhr.status < 400) {
			console.log("ok")
			console.log(xhr.responseText)
			let data = JSON.parse(xhr.responseText);
			console.log(data)

			try {
				for (i = 0, j = 0; i < data.length, j < 10; i++, j++) {
					let bno_inlist = document.getElementsByClassName("bno")
					let heart_inlist = document.getElementsByClassName("heart")
					
					console.log(data[i].bno+","+bno_inlist[j].innerText)
					
					// console.log(bno_inlist[j].innerText)
					if (bno_inlist[j].innerText == data[i].bno) {
						//heart_inlist[j].innerText = data[i].count
					} else {
						//heart_inlist[j].innerText = 0;
					}
				}
			} catch (e) {
				console.log(e)
			}

		} else {
			console.log("no")
		}
	};

	xhr.onerror = function(e) {
		console.log(e)
	};

	xhr.send();
*/
}