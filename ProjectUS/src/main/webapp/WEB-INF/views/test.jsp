<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/resources/js/testwrite.js"></script>
<link rel="stylesheet" href="/resources/css/test.css">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="/test/write" method="post" id="writeform">
		제&nbsp;&nbsp;&nbsp;목 : <input type="text" name="title" id="title"><br> 작성자 : <input type="text" name="id" id="id"><br>
		내&nbsp;&nbsp;&nbsp;용 :
		<textarea name="content" id="content"></textarea>
		<br> <input type="button" value="작성하기" id="btn">
	</form>
</body>
</html>