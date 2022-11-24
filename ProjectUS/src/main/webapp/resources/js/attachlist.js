/**
 * 첨부파일 목록 가져오기
 */
function attachlistfnc() {

	let nno = document.getElementById('nno').value;

	console.log(nno)
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
				str += "<img src='\display?fileName=" + filePath + "'>"
				console.log("첨부되어 있는 파일 경로 : "+filePath)

			} else { // 그렇지 않으면
				// 다운로드 할 수 있도록 실행
				let filePath = encodeURIComponent(attach.uploadPath + "/" + attach.uuid + "_" + attach.fileName);
				str += "<a href='\download?fileName=" + filePath + "'>" + attach.fileName + "</a><br>"
				console.log("첨부되어 있는 파일 경로 : "+filePath)
			}
		})
		$("#attachD").html(str);

	})

}