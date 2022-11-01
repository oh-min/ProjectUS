<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
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
			<!-- 목록 -->
			<table class="Dtable" id="listTable" border="1">
				<tr>
					<th>번호</th>
					<th>분류</th> <!-- 1: 택배 / 2: 직거래 -> 직거래일경우 지역명 -->
					<th>판매물품</th>
					<th>가격</th>
					<th>판매자</th>
					<th>거래상황</th>
					<th>작성일자</th>
					<th>조회</th>
				</tr>
			</table>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>