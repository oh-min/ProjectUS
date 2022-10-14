<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/notice.css">
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
		<div id="Ndetail">
			<h2>공지사항</h2>
			<table class="Ntable" id="detailTable" border="1">
				<tr>
					<td>번호</td>
					<td colspan="3">제목~~~~~</td>
				</tr>
				<tr>
					<td>분류</td>
					<td>작성자</td>
					<td>작성일자</td>
					<td>조회</td>
				</tr>
				<tr>
					<td colspan="4">내용~~~~~~~~~~~~~~~~~~~~~~~</td>
				</tr>
				<tr>
					<td colspan="4">첨부파일</td>
				</tr>
			</table>
			<table id="ponTable" class="Ntable">
				<tr>
					<td>이전글</td>
					<td>이전글 제목</td>
				</tr>
				<tr>
					<td>다음글</td>
					<td>다음글 제목</td>
				</tr>
			</table>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>