/**
 * 공지사항 작성
 */
window.onload = function() {
	const title = document.getElementById("title");
	const id = document.getElementById("id");
	const category = document.getElementById("category");
	const content = document.getElementById("Ncontent");
	const top = document.getElementById("top");

	const formData = new FormData(); // 파일 업로드

	/* 글 작성 버튼 click */
	document.getElementById("writebtn").onclick = function() {

		/* 파일 attach */
		const attachFile = $("input[name='attachFile']"); // 선택된 파일 정보
		const attachfiles = attachFile[0].files; // 선택된 파일을 배열에 저장

		for (var i = 0; i < attachfiles.length; i++) {

			// 파일 attach 확장자 제한 함수호출
			if (!attachchk(attachfiles[i].name, attachfiles[i].size)) {
				return false;
			}
			formData.append("attachFile", attachfiles[i]); // attachFile 이름으로 컨트롤러로 이동
		}

		/* 파일 upload */
		const uploadFile = $("input[name='attachFile']"); // 선택된 파일 정보
		const uploadfiles = uploadFile[0].files; // 선택된 파일을 배열에 저장
		for (var i = 0; i < uploadfiles.length; i++) {

			// 파일 upload 확장자 제한 함수호출
			if (!uploadchk(uploadfiles[i].name, uploadfiles[i].size)) {
				return false;
			}
			formData.append("uploadFile", uploadfiles[i]); // uploadFile 이름으로 컨트롤러로 이동
		}
		
		if (title.value == "") {
			alert("제목을 입력해 주세요.")
		} else if (id.value == "") {
			alert("나중에 관리자 아이디로 로그인 했을 경우만 글 작성 가능하도록 변경해야한다.")
		} else if (category.value == "null") {
			alert("카테고리를 설정해 주세요.")
		} else if (content.value == "") {
			alert("내용을 입력해 주세요.")
		} else {
			if (top.checked == true) {
				attachajax(); // 파일 attach ajax 함수호출
				uploadajax(); // 파일 upload ajax 함수호출
				document.getElementById('writeform').submit();
			} else {
				attachajax(); // 파일 attach ajax 함수호출
				uploadajax(); // 파일 upload ajax 함수호출
				document.getElementById('writeform').submit();

			}
		}
	}

	/* 파일 attach ajax 함수선언 */
	function attachajax() {
		$.ajax({
			type : "post",
			url : "/attach",
			data : formData,
			contentType : false,
			processData : false
		})
	}

	/* 파일 attach 확장자 제한 함수선언 */
	function attachchk(fileName, fileSize) {
		const reg = new RegExp("(.*?)\.(exe)$") // 확장자 제한
		const maxSize = 5242880; // 최대 크기 설정
		// 확장자 제한
		if (reg.test(fileName)) {
			alert("해당 종류의 파일은 업로드 할 수 없습니다.");
			return false;
		}
		// 파일크기 제한
		if (fileSize >= maxSize) {
			alert("파일 사이즈 초과");
			return false;
		}
		return true;
	}
	/* 파일 upload ajax 함수선언 */
	function uploadajax() {
		$.ajax({
			type : "post",
			url : "/upload",
			data : formData,
			contentType : false,
			processData : false
		})
	}
	
	/* 파일 upload 확장자 제한 함수선언 */
	function uploadchk(fileName, fileSize) {
		
		

		/* 해야됨 *//* 해야됨 *//* 해야됨 *//* 해야됨 *//* 해야됨 *//* 해야됨 */
		const reg = new RegExp("(.*?)\.(jpg|jpeg|png|gif|bmp)$") // 확장자 제한 - 이미지 
		/* 해야됨 *//* 해야됨 *//* 해야됨 *//* 해야됨 *//* 해야됨 *//* 해야됨 */
		
		
		
		
		
		const maxSize = 5242880; // 최대 크기 설정
		// 확장자 제한
		if (!reg.test(fileName)) {
			alert("해당 종류의 파일은 업로드 할 수 없습니다.");
			return false;
		}
		// 파일크기 제한
		if (fileSize >= maxSize) {
			alert("파일 사이즈 초과");
			return false;
		}
		return true;
	}
}