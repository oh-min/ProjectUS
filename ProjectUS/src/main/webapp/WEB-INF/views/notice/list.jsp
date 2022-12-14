<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/notice.css">
<link rel="stylesheet" href="/resources/css/top.css">
<script type="text/javascript" src="/resources/js/noticelist.js"></script>
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
		<div id="Nlist">
			<h2>공지사항</h2>
			<!-- 검색 -->
			<div class="search">
				<form action="/notice/list" method="get">
					<input type="submit" value="검색"> <input type="text" id="search" name="keyword" value="${paging.cri.keyword}" placeholder="제목 검색">
				</form>
			</div>
			<!-- 목록 -->
			<table class="Ntable" id="listTable">
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
					<tr id="NlistInfo">
						<td class="nno">${list.nno}</td>
						<c:choose>
							<c:when test="${list.category eq 1}">
								<td class="category">일반</td>
							</c:when>
							<c:when test="${list.category eq 2}">
								<td class="category">이벤트</td>
							</c:when>
							<c:when test="${list.category eq 3}">
								<td class="category">기타</td>
							</c:when>
						</c:choose>
						<td class="title"><a href="/notice/detail?nno=${list.nno}">${list.title}</a></td>
						<td class="nick">${list.nick}</td>
						<td class="regdate"><fmt:formatDate value="${list.regdate}" pattern="yyyy-MM-dd" /></td>
						<td class="cnt">${list.cnt}</td>
					</tr>
				</c:forEach>
			</table>
			<!-- 글쓰기 버튼 -->
			<c:if test="${user.admin eq 1}">
				<!-- 관리자 아이디로 로그인 한 경우에만 버튼 생성 -->
				<div id="btn">
					<div id="gowrite">
						<input type="button" value="글쓰기" id="writebtn">
					</div>
				</div>
			</c:if>
			<!-- 페이징 -->
			<div id="paging">
				<c:if test="${paging.prev}">
					<a href="/notice/list?keyword=${paging.cri.keyword}&pageNum=${paging.startPage-1}&amount=${paging.cri.amount}">이전</a>
				</c:if>
				<c:forEach begin="${paging.startPage}" end="${paging.endPage}" var="num">
					<a id="${num}" href="/notice/list?keyword=${paging.cri.keyword}&pageNum=${num}&amount=${paging.cri.amount}">${num}</a>
				</c:forEach>
				<c:if test="${paging.next}">
					<a href="/notice/list?keyword=${paging.cri.keyword}&pageNum=${paging.endPage+1}&amount=${paging.cri.amount}">다음</a>
				</c:if>
			</div>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>