<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/notice.css">
<script type="text/javascript" src="/resources/js/noticedetail.js"></script>
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
					<td class="nno" id="idD">${detail.nno}</td>
					<td colspan="3" class="title" id="titleD">${detail.title}</td>
				</tr>
				<tr>
					<td class="category">${detail.category}</td>
					<td class="id">${detail.id}</td>
					<td class="regdate">${detail.regdate}</td>
					<td class="cnt">${detail.cnt}</td>
				</tr>
				<tr>
					<td colspan="4" class="content" id="contentD">${detail.content}</td>
				</tr>
				<tr>
					<td colspan="4" class="attach" id="attachD">첨부파일</td>
				</tr>
			</table>
			<table id="ponTable" class="Ntable" border="1">
				<tr id="pre">
					<td class="pon">이전글</td>
					<td>이전글 제목</td>
				</tr>
				<tr id="next">
					<td class="pon">다음글</td>
					<td>다음글 제목</td>
				</tr>
			</table>
			<div id="btn">
				<input type="button" value="목록" id="listbtn">
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>