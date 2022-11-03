<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/deal.css">
<link rel="stylesheet" href="/resources/css/top.css">
<script type="text/javascript" src="/resources/js/deallist.js"></script>
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
			<h2>중고거래</h2>
			<!-- 검색 -->
			<div class="search">
				<form action="/deal/list" method="get">
					<input type="submit" value="검색"> 
					<input type="text" id="search" name="keyword"  value="${paging.cri.keyword}">
					<select name="type">
						<option value="P">판매물품명</option>
						<option value="I">내용</option>
						<option value="PI">판매물품명+내용</option>
						<option value="N">판매자</option>
					</select>
				</form>
			</div>
			<!-- 목록 -->
			<table class="Dtable" id="listTable">
				<tr>
					<th>번호</th>
					<th>분류</th>
					<!-- 1: 택배 / 2: 직거래 -> 직거래일경우 지역명 -->
					<th>판매물품명</th>
					<th>가격</th>
					<th>판매자</th>
					<th>거래상황</th>
					<th>작성일자</th>
					<th>조회</th>
				</tr>
				<!-- 고정공지 -->
				<c:forEach items="${top}" var="top" end="4">
					<tr id="topInfo">
						<td class="nno" id="topN"><span>공 지</span></td>
						<c:choose>
							<c:when test="${top.category eq 1}">
								<td class="category">일반</td>
							</c:when>
							<c:when test="${top.category eq 2}">
								<td class="category">이벤트</td>
							</c:when>
							<c:when test="${top.category eq 3}">
								<td class="category">기타</td>
							</c:when>
						</c:choose>
						<td class="title"><a href="/notice/detail?nno=${top.nno}">${top.title}</a></td>
						<td></td>
						<td class="id">${top.id}</td>
						<td></td>
						<td class="regdate"><fmt:formatDate value="${top.regdate}" pattern="yyyy-MM-dd" /></td>
						<td class="cnt">${top.cnt}</td>
					</tr>
				</c:forEach>
				<!-- 목록 -->
				<c:forEach items="${list}" var="list">
					<tr id="DlistInfo">
						<td class="dno">${list.dno}</td>
						<td class="way">${list.way}</td>
						<td class="product"><a href="/deal/detail?dno=${list.dno}">${list.product}</a></td>
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
			<!-- 페이징 -->
			<div id="paging">
				<c:if test="${paging.prev}">
					<a href="/deal/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${paging.startPage-1}&amount=${paging.cri.amount}">이전</a>
				</c:if>
				<c:forEach begin="${paging.startPage}" end="${paging.endPage}" var="num">
					<a id="${num}" href="/deal/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${num}&amount=${paging.cri.amount}">${num}</a>
				</c:forEach>
				<c:if test="${paging.next}">
					<a href="/deal/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${paging.endPage+1}&amount=${paging.cri.amount}">다음</a>
				</c:if>
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>