<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/notice.css">
<script type="text/javascript" src="/resources/js/noticedetail.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- 임시 -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
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
			<!-- 값 가져오기 -->
			<input type="hidden" id="nno" value="${detail.nno}">
			<!-- 값 가져오기 -->
			<table class="Ntable" id="detailTable">
				<tr>
					<td class="nno" id="idD">${detail.nno}</td>
					<td colspan="6" class="title" id="titleD">${detail.title}</td>
				</tr>
				<tr id="circ" class="bb2">
					<td class="category">${detail.category}</td>
					<td class="hc">작성자</td>
					<td class="id">${detail.id}</td>
					<td class="hc">작성일</td>
					<td class="regdate"><fmt:formatDate value="${detail.regdate}" pattern="yyyy-MM-dd" /></td>
					<td class="hc">조회수</td>
					<td class="cnt" id="cntchk">${detail.cnt}</td>
				</tr>
				<tr id="attachTR">
					<td colspan="7" class="attach" id="attachD"></td>
				</tr>
				<tr id="contentTR" class="bb2">
					<td colspan="7" class="content" id="contentD">${detail.content}</td>
				</tr>
			</table>
			<table id="ponTable" class="Ntable">
				<c:choose>
					<c:when test="${!empty nextpre[1].nno}">
						<tr id="next">
							<td class="pon">다음글</td>
							<td><a href="/notice/detail?nno=${nextpre[1].nno}">${nextpre[1].title}</a></td>
						</tr>
						<tr id="pre" class="bb2">
							<td class="pon">이전글</td>
							<td><a href="/notice/detail?nno=${nextpre[0].nno}">${nextpre[0].title}</a></td>
						</tr>
					</c:when>
					<c:when test="${nextpre[0].nno < detail.nno}">
						<tr id="pre" class="bb2">
							<td class="pon">이전글</td>
							<td><a href="/notice/detail?nno=${nextpre[0].nno}">${nextpre[0].title}</a></td>
						</tr>
					</c:when>
					<c:when test="${nextpre[0].nno > detail.nno}">
						<tr id="next">
							<td class="pon">다음글</td>
							<td><a href="/notice/detail?nno=${nextpre[0].nno}">${nextpre[0].title}</a></td>
						</tr>
					</c:when>
				</c:choose>
			</table>
			<div id="btn">
				<input type="button" value="목록" id="listbtn" onclick="listbtn()">
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>