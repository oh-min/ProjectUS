<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/test.css">
<title>Insert title here</title>
</head>
<body>
	<table>
		<tr>
			<td class="fixS">no.</td>
			<td>제목</td>
			<td class="fixM">작성자</td>
			<td class="fixM">작성일</td>
			<td class="fixS">조회수</td>
		</tr>
		<c:forEach items="${list}" var="list" end="9">
			<tr>
				<td>${list.bno}</td>
				<td>${list.title}</td>
				<td>${list.id}</td>
				<td><fmt:formatDate value="${list.regdate}" pattern="yyyy-MM-dd" /></td>
				<td>${list.cnt}</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>