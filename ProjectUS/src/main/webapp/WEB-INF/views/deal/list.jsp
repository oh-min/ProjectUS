<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/deal.css">
<!-- 임시 -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<!-- 임시 -->
<meta charset="UTF-8">
<title>거래 게시판</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div id="Dlist">
			<h2>거래 게시판</h2>
			<!-- 검색 -->
			<div class="search">
				<form action="#" method="get">
					<input type="submit" value="검색"> <input type="text" id="search" name="keyword">
				</form>
			</div>
			<table class="Dtable" id="listTable">
				<tr>
					<th>번호</th>
					<th>분류</th>
					<!-- 1: 택배 / 2: 직거래 -> 직거래일경우 지역명 -->
					<th>판매물품</th>
					<th>가격</th>
					<th>판매자</th>
					<th>거래상황</th>
					<th>작성일자</th>
					<th>조회</th>
				</tr>
				<!-- 목록 -->
				<c:forEach items="${list}" var="list">
					<tr id="DlistInfo">
						<td class="dno">${list.dno}</td>
						<td class="way">${list.way}</td>
						<td class="product"><a href="#">${list.product}</a></td>
						<td class="price"><p>${list.price}</p></td>
						<td class="nick"><p>${list.nick}</p></td>
						<c:choose>
							<c:when test="${list.state eq 1}">
								<td class="state">거래완료</td>
							</c:when>
							<c:otherwise>
								<td class="state">거래중</td>
							</c:otherwise>
						</c:choose>
						<td class="regdate"><fmt:formatDate value="${list.regdate}" pattern="yyyy-MM-dd" /></td>
						<td class="cnt">${list.cnt}</td>
					</tr>
				</c:forEach>
			</table>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>