<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/notice.css">
<script type="text/javascript" src="/resources/js/noticewrite.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/attach.js"></script>
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
						<td colspan="3"><input type="text" name="title" class="NdetailInfo" id="title"></td>
					</tr>
					<tr>
						<td class="hc">작성자</td>
						<td colspan="3">
							<input type="text" name="nick" class="NdetailInfo" id="nick" value="${user.nick}" readonly> 
							<input type="hidden"name="id" class="NdetailInfo" id="id" value="${user.id}" readonly>
						</td>
					</tr>
					<tr>
						<td class="hc">분류</td>
						<td><select class="NdetailInfo" name="category" id="category">
								<option value="null">선택</option>
								<option value="1">일반</option>
								<option value="2">이벤트</option>
								<option value="3">기타</option>
						</select></td>
						<td class="hc">공지 선택</td>
						<td><input type="checkbox" name="top" id="top" value="1"></td>
					</tr>
					<tr>
						<td class="hc" rowspan="2">내용</td>
						<td colspan="3"><textarea rows="30" cols="100" name="content" class="NdetailInfo" id="Ncontent"></textarea></td>
					</tr>
					<tr id="trPreview">
						<td colspan="3" id="preview"></td>
					</tr>
					<tr class="line2px">
						<td class="hc">첨부파일</td>
						<td class="NdetailInfo" colspan="3"><input type="file" name="attachFile" id="attachFile" multiple></td>
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