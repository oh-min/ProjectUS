<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/notice.css">
<script type="text/javascript" src="/resources/js/noticelist.js"></script>
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
		<div id="Nlist">
			<h2>공지사항</h2>
			<table class="Ntable" id="listTable" border="1">
				<tr>
					<th>번호</th>
					<th>분류</th>
					<th>제목</th>
					<th>작성자</th>
					<th>작성일자</th>
					<th>조회</th>
				</tr>
				<c:forEach items="${list}" var="list">
					<tr id="NlistInfo">
						<td class="nno">${list.nno}</td>
						<td class="category">${list.category}</td>
						<td class="title"><a href="/notice/detail?nno=${list.nno}">${list.title}</a></td>
						<td class="id">${list.id}</td>
						<td class="regdate"><fmt:formatDate value="${list.regdate}"
								pattern="yyyy-MM-dd" /></td>
						<td class="cnt">${list.cnt}</td>
					</tr>
				</c:forEach>
			</table>
			<div id="btn">
				<div id="gowrite">
				<input type="button" value="글쓰기" id="writebtn">
				</div>
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>