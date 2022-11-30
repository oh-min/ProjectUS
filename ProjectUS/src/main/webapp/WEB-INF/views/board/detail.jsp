<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/board.css">
<script type="text/javascript" src="/resources/js/boarddetail.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<meta charset="UTF-8">
<title>자유게시판</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div id="Bdetail">
			<h2>자유 게시판</h2>
			<!-- 디테일 -->
			<table class="Btable" id="detailTable">
				<tr>
					<td class="bno" id="bno">${detail.bno}</td>
					<td colspan="5" class="title" id="titleB">${detail.title}</td>
					<td class="bookmark">${detail.bookmark}</td>
				</tr>
				<tr id="info" class="bb2">
					<td class="category">${detail.category}</td>
					<td class="hc">작성자</td>
					<td class="nick">${detail.nick}</td>
					<td class="hc">작성일</td>
					<td class="regdate"><fmt:formatDate value="${detail.regdate}" pattern="yyyy-MM-dd" /></td>
					<td class="hc">조회수</td>
					<td class="cnt" id="cntchk">${detail.cnt}</td>
				</tr>
				<tr>
					<td colspan="7" id="attachD"></td>
				</tr>
				<tr class="bb2">
					<td colspan="7" id="contentD">${detail.content}</td>
				</tr>
			</table>
			<!-- 이전글 / 다음글 -->
			<table id="ponTable" class="Btable">
				<c:choose>
					<c:when test="${!empty nextpre[1].bno}">
						<tr id="next">
							<td class="pon">다음글</td>
							<td><a href="/board/detail?bno=${nextpre[1].bno}">${nextpre[1].title}</a></td>
						</tr>
						<tr id="pre" class="bb2">
							<td class="pon">이전글</td>
							<td><a href="/board/detail?bno=${nextpre[0].bno}">${nextpre[0].title}</a></td>
						</tr>
					</c:when>
					<c:when test="${nextpre[0].bno < detail.bno}">
						<tr id="pre" class="bb2">
							<td class="pon">이전글</td>
							<td><a href="/board/detail?bno=${nextpre[0].bno}">${nextpre[0].title}</a></td>
						</tr>
					</c:when>
					<c:when test="${nextpre[0].bno > detail.bno}">
						<tr id="next" class="bb2">
							<td class="pon">다음글</td>
							<td><a href="/board/detail?bno=${nextpre[0].bno}">${nextpre[0].title}</a></td>
						</tr>
					</c:when>
				</c:choose>
			</table>
			<!-- 목록 버튼 -->
			<div id="btn">
				<input type="button" value="목록" id="listbtn" onclick="listbtn()">
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>