/**
 * 파일업로드 ajax
 */
$(document).ready(function() {

	/* 첨부파일 확장자 제한 함수 선언 */
	const reg = new RegExp("(.*?)\.(exe|zip|alz)$") // 확장자 제한
	const maxSize = 5242880; // 크기 제한

	function checkExtension(fileName, fileSize) {
		// 파일크기 제한
		if (fileSize >= maxSize) {
			alert("파일 사이즈 초과");
			return false;
		}
		// 확장자 제한
		if (reg.test(fileName)) {
			alert("해당 종류의 파일은 업로드 할 수 없습니다.");
			return false;
		}
		return true;
	}

	/* 파일 첨부 change 이벤트 */
	$("#attachFile").on("change", function() {
		attachAjax() // == 나중에는 주석 해제하고 이 함수 '글쓰기 버튼'클릭시 함수가 호출되게 해야한다.
	})

	/* 파일 정보를 ajax방법으로 controller에 보내는 함수 선언 */
	function attachAjax() {
		const formData = new FormData(); // 파일 업로드

		const attachFile = $("input[name='attachFile']"); // 선택된 파일 정보
		const attachfiles = attachFile[0].files; // 선택된 파일을 배열에 저장

		for (let i = 0; i < attachfiles.length; i++) {

			// 첨부파일 확장자 제한 함수 호출
			if (!checkExtension(attachfiles[i].name, attachfiles[i].size)) {
				return false;
			}

			// jsp의 파일을 통해 선택한 파일들을 form태그에 추가
			formData.append("attachFile", attachfiles[i]);
		}
		$.ajax({
			type : "post",
			url : "/attach",
			data : formData,
			contentType : false,
			processData : false,
			dataType : "json",
			success : function(result) {
				console.log(result)

				let str = "";
				let input = "";
				$(result).each(function(i, obj) {
					console.log(obj)
					console.log("파일 이름"+obj.fileName)

					if (obj.image) { // 이미지 파일일 경우 -> 사진 보기
						str += "<input type='hidden' id='fileName' name='attach[" + i + "].fileName' value='" + obj.fileName + "'>";
						str += "<input type='hidden' id='uuid' name='attach[" + i + "].uuid' value='" + obj.uuid + "'>";
						str += "<input type='hidden' id='attachPath' name='attach[" + i + "].attachPath' value='" + obj.attachPath + "'>";
						str += "<input type='hidden' id='image' name='attach[" + i + "].image' value='" + obj.image + "'>";

						let filePath = encodeURIComponent(obj.attachPath + "/s_" + obj.uuid + "_" + obj.fileName);
						console.log("이미지 파일 경로 : "+filePath);
						str += "<img src='\display?fileName=" + filePath + "'><br>"
					} else { // 그 외의 파일일 경우 -> 다운로드
						str += "<input type='hidden' id='fileName' name='attach[" + i + "].fileName' value='" + obj.fileName + "'>";
						str += "<input type='hidden' id='uuid' name='attach[" + i + "].uuid' value='" + obj.uuid + "'>";
						str += "<input type='hidden' id='attachPath' name='attach[" + i + "].attachPath' value='" + obj.attachPath + "'>";
						str += "<input type='hidden' id='image' name='attach[" + i + "].image' value='" + obj.image + "'>";

						let fileName = obj.fileName.replace(/,/g, "")
						console.log("그 외의 파일 이름 : "+fileName)
						let filePath = encodeURIComponent(obj.attachPath + "/" + obj.uuid + "_" + fileName);
						console.log("그 외의 파일 경로 : "+filePath);
						str += "<a href='\download?fileName=" + filePath + "'>" + obj.fileName + "</a>" + "<br>"
					}
				})
				$("#preview").html(str);
			}
		})
	}

})