/**
 * 첨부파일 목록 가져오기
 */

function attachlistfnc() {
	let url = document.location.href; // url주소 가져오기
	console.log("url주소 : " + url);
	let para = document.location.href.split("?"); // url주소의 파라미터값 
	console.log("파라미터[0] : " + para[0]);
	console.log("파라미터[1] : " + para[1]);
	let what = para[1].split('=')[0] // bno 인지 nno 인지 구분
	let nno;
	let bno;
	if (what == 'nno') {
		nno = para[1].split('=')[1];
	}
	if (what == 'bno') {
		bno = para[1].split('=')[1];
	}

	console.log("nno : " + nno)
	console.log("bno : " + bno)

	/* 공지사항 */
	if (nno != undefined) {
		$.getJSON("/notice/attachlist", {
			nno : nno
		}, function(attachlist) {
			console.log(attachlist)

			let str = "";

			$(attachlist).each(function(i, attach) {
				// 만약 image결과가 true면
				if (attach.image) {
					// 아래에 있는거 실행
					let filePath = encodeURIComponent(attach.attachPath + "/s_" + attach.uuid + "_" + attach.fileName);
					//str += "<div>"
					str += "<img src='\display?fileName=" + filePath + "' class='attachinfo'>"
					// 수정페이지인 경우 -> x 버튼
					if (para[0] == "http://localhost:8080/notice/edit") {
						str += "<input type='button' value='x' onclick='xbtn()' id='xbtn'>"
					}
					//str += "</div>"
					str += "<br>"
				} else { // 그렇지 않으면
					// 다운로드 할 수 있도록 실행
					let filePath = encodeURIComponent(attach.uploadPath + "/" + attach.uuid + "_" + attach.fileName);
					//str += "<div>"
					str += "<a href='\download?fileName=" + filePath + "'class='attachinfo'>" + attach.fileName + "</a>"
					// 수정페이지인 경우 -> x 버튼
					if (para[0] == "http://localhost:8080/notice/edit") {
						str += "<input type='button' value='x' onclick='xbtn()' id='xbtn'>"
					}
					//str += "</div>"
					str += "<br>"
				}
			})
			$("#attachD").html(str);

		})
	}

	/* 자유게시판 */
	if (bno != undefined) {
		$.getJSON("/board/attachlist", {
			bno : bno
		}, function(attachlist) {
			console.log(attachlist)

			let str = "";

			$(attachlist).each(function(i, attach) {
				// 만약 image결과가 true면
				if (attach.image) {
					// 아래에 있는거 실행
					let filePath = encodeURIComponent(attach.attachPath + "/s_" + attach.uuid + "_" + attach.fileName);
					//str += "<div>"
					str += "<img src='\display?fileName=" + filePath + "' class='attachinfo'>"
					// 수정페이지인 경우 -> x 버튼
					if (para[0] == "http://localhost:8080/board/edit") {
						str += "<input type='button' value='x' onclick='xbtn()' id='xbtn'>"
					}
					//str += "</div>"
					str += "<br>"
				} else { // 그렇지 않으면
					console.log("no image")
				}
			})
			$("#attachD").html(str);

		})
	}

}
