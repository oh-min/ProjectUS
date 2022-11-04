<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/deal.css">
<script type="text/javascript" src="/resources/js/dealdetail.js"></script>
<!-- 임시 -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<!-- 임시 -->
<meta charset="UTF-8">
<title>중고거래</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div id="Ddetail">
			<h2>중고거래</h2>
			<!-- 디테일 -->
			<table class="Dtable" id="detailTable">
				<tr>
					<td class="dno" id="dno">${detail.dno}</td>
					<td colspan="3" class="product" id="productD">${detail.product}</td>
					<td colspan="1" class="state">${detail.price} 원</td>
					<td colspan="2" class="state">${detail.state}</td>
				</tr>
				<tr id="wnrc" class="bb2">
					<td class="way">${detail.way}</td>
					<td class="hc">작성자</td>
					<td class="nick">${detail.nick}</td>
					<td class="hc">작성일</td>
					<td class="regdate"><fmt:formatDate value="${detail.regdate}" pattern="yyyy-MM-dd" /></td>
					<td class="hc">조회수</td>
					<td class="cnt" id="cntchk">${detail.cnt}</td>
				</tr>
				<tr>
					<td colspan="7" id="infoD">${detail.info}</td>
				</tr>
				<tr class="bb2">
					<td colspan="7" id="attachD">첨부된 파일</td>
				</tr>
			</table>
			<!-- 채팅 버튼 -->
			<div id="btn">
				<input type="button" value="채팅하기" id="chatbtn" onclick="chatbtn()">
			</div>
			<!-- 이전글 / 다음글 -->
			<table id="ponTable" class="Dtable">
				<c:choose>
					<c:when test="${!empty nextpre[1].dno}">
						<tr id="next">
							<td class="pon">다음글</td>
							<td><a href="/deal/detail?dno=${nextpre[1].dno}">${nextpre[1].product}</a></td>
						</tr>
						<tr id="pre" class="bb2">
							<td class="pon">이전글</td>
							<td><a href="/deal/detail?dno=${nextpre[0].dno}">${nextpre[0].product}</a></td>
						</tr>
					</c:when>
					<c:when test="${nextpre[0].dno < detail.dno}">
						<tr id="pre" class="bb2">
							<td class="pon">이전글</td>
							<td><a href="/deal/detail?dno=${nextpre[0].dno}">${nextpre[0].product}</a></td>
						</tr>
					</c:when>
					<c:when test="${nextpre[0].dno > detail.dno}">
						<tr id="next" class="bb2">
							<td class="pon">다음글</td>
							<td><a href="/deal/detail?dno=${nextpre[0].dno}">${nextpre[0].product}</a></td>
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