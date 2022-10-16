<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/notice.css">
<script type="text/javascript" src="/resources/js/noticewrite.js"></script>
<!-- 임시 -->
<link rel="shortcut icon" href="#">
<!-- 임시 -->
<meta charset="UTF-8">
<title>공지사항</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div id="Nwrite">
			<h2>공지사항</h2>
			<form action="/notice/write" method="post" id="writeform">
				<table class="Ntable" id="writeTable" border="1">
					<tr>
						<td class="hc">제목</td>
						<td><input type="text" name="title" class="NdetailInfo" id="title"></td>
					</tr>
					<tr>
						<td class="hc">분류</td>
						<td><select class="NdetailInfo" name="category" id="category">
								<option value="null">선택</option>
								<option value="1">일반</option>
								<option value="2">이벤트</option>
								<option value="3">기타</option>
						</select></td>
					</tr>
					<tr>
						<td class="hc">내용</td>
						<td><textarea rows="30" cols="100" name="content"
								class="NdetailInfo" id="content"></textarea></td>
					</tr>
					<tr>
						<td class="hc">첨부파일</td>
						<td class="NdetailInfo">첨부파일 올리는~~</td>
					</tr>
				</table>
				<div id="btn">
					<div id="write">
						<input type="button" value="글쓰기" id="writebtn">
					</div>
				</div>
			</form>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>