<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/board.css">
<link rel="stylesheet" href="/resources/css/top.css">
<script type="text/javascript" src="/resources/js/boardlist.js"></script>
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
		<div id="Blist">
			<h2>중고거래</h2>
			<!-- 검색 -->
			<div class="search">
				<form action="/board/list" method="get">
					<input type="submit" value="검색"> <input type="text" id="search" name="keyword" value="${paging.cri.keyword}"> <select name="type">
						<option value="P">판매물품명</option>
						<!-- 검색 변경 필요 -->
						<option value="I">내용</option>
						<option value="PI">판매물품명+내용</option>
						<option value="N">판매자</option>
					</select>
				</form>
			</div>
			<!-- 목록 -->
			<table class="Btable" id="listTable">
				<tr>
					<th>번호</th>
					<th>분류</th>
					<th>제목</th>
					<th>작성자</th>
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
						<td class="nick">${top.nick}</td>
						<td class="regdate"><fmt:formatDate value="${top.regdate}" pattern="yyyy-MM-dd" /></td>
						<td class="cnt">${top.cnt}</td>
					</tr>
				</c:forEach>
				<!-- 목록 -->
				<c:forEach items="${list}" var="list">
					<tr id="BlistInfo">
						<td class="bno">${list.bno}</td>
						<td class="category">${list.category}</td>
						<td class="title"><a href="/board/detail?bno=${list.bno}">${list.title}</a></td>
						<td class="nick"><p>${list.nick}</p></td>
						<td class="regdate"><fmt:formatDate value="${list.regdate}" pattern="yyyy-MM-dd" /></td>
						<td class="cnt">${list.cnt}</td>
					</tr>
				</c:forEach>
			</table>
			<!-- 글쓰기 버튼 -->
			<div id="btn">
				<div id="gowrite">
					<input type="button" value="글쓰기" id="writebtn">
				</div>
			</div>
			<!-- 페이징 -->
			<div id="paging">
				<c:if test="${paging.prev}">
					<a href="/board/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${paging.startPage-1}&amount=${paging.cri.amount}">이전</a>
				</c:if>
				<c:forEach begin="${paging.startPage}" end="${paging.endPage}" var="num">
					<a id="${num}" href="/board/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${num}&amount=${paging.cri.amount}">${num}</a>
				</c:forEach>
				<c:if test="${paging.next}">
					<a href="/board/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${paging.endPage+1}&amount=${paging.cri.amount}">다음</a>
				</c:if>
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>