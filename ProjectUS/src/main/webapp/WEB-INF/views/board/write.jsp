<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/board.css">
<script type="text/javascript" src="/resources/js/boardwrite.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/attach.js"></script>
<meta charset="UTF-8">
<title>자유게시판</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div id="Bwrite">
			<h2>자유게시판</h2>
			<form action="/board/write" method="post" id="writeform">
				<table class="Btable" id="writeTable" border="1">
					<tr>
						<td class="hc">제목</td>
						<td colspan="3"><input type="text" name="title" class="BdetailInfo" id="title"></td>
					</tr>
					<tr>
						<td class="hc">작성자</td>
						<td colspan="3"><input type="text" class="BdetailInfo" id="seller"> <input type="text" name="nick" class="BdetailInfo" id="nick"
							value="${user.nick}"> <input type="hidden" name="id" class="BdetailInfo" id="id" value="${user.id}"></td>
					</tr>
					<tr>
						<td class="hc">카테고리</td>
						<td><select class="BdetailInfo" name="category" id="category">
								<option value="null">선택</option>
								<option value="1">거래</option>
								<option value="2">질문</option>
								<option value="3">기타</option>
						</select></td>
					</tr>
					<tr class="hiddenprice" id="two">
						<td class="hc">가격</td>
						<td><input type="text" name="price" class="BdetailInfo" id="price"></td>
					</tr>
					<tr>
						<td class="hc" rowspan="2">내용</td>
						<td colspan="3"><textarea rows="30" cols="100" name="content" class="BdetailInfo" id="contentB"></textarea></td>
					</tr>
					<tr id="trPreview">
						<td colspan="3" id="preview"></td>
					</tr>
					<tr class="line2px">
						<td class="hc">첨부파일</td>
						<td class="BdetailInfo" colspan="3"><input type="file" name="attachFile" id="attachFile" accept="image/*" multiple></td>
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