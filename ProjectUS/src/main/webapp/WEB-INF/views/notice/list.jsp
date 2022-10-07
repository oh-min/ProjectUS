<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/notice.css">
<meta charset="UTF-8">
<title>공지</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div id="Nlist">
			<h2>공지사항</h2>
			<table border="1" id="Ntable">
				<tr>
					<th>No.</th>
					<th>분류</th>
					<th>제목</th>
					<th>작성자</th>
					<th>조회</th>
					<th>작성일자</th>
				</tr>
				<tr>
					<td>1</td>
					<td>일반</td>
					<td>공지사항입니다</td>
					<td>관리자</td>
					<td>434</td>
					<td>2022.10.17</td>
				</tr>
				<tr>
					<td>2</td>
					<td>일반</td>
					<td>공지사항입니다</td>
					<td>관리자</td>
					<td>434</td>
					<td>2022.10.17</td>
				</tr>
				<tr>
					<td>3</td>
					<td>일반</td>
					<td>공지사항입니다</td>
					<td>관리자</td>
					<td>434</td>
					<td>2022.10.17</td>
				</tr>
			</table>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>