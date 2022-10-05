<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/join.css">
<script type="text/javascript" src="/resources/js/join.js"></script>
<title>Join</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<form id="join" action="/join" method="post">
			<h2>회원가입</h2>
			<div id="name">
				<p>이름*</p>
				<input type="text">
			</div>
			<div class="chk">
				<p>아이디*</p>
				<input type="text"><input type="button" value="중복확인">
			</div>
			<div>
				<p>비밀번호*</p>
				<input type="password">
			</div>
			<div class="chk">
				<p>비밀번호 재확인*</p>
				<input type="password">
			</div>
			<div class="chk">
				<p>닉네임*</p>
				<input type="text"><input type="button" value="중복확인">
			</div>
			<div>
				<p>생년월일</p>
				<input type="text" id="birth"> 년 <select>
					<option>선택</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
					<option>12</option>
					<option>13</option>
				</select> 월 <select>
					<option>선택</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>31</option>
				</select> 일
			</div>
			<div class="chk">
				<p>전화번호*</p>
				<input type="text"><input type="button" value="본인인증">
			</div>
			<div>
				<p>성별</p>
				<select>
					<option>선택</option>
					<option>남</option>
					<option>여</option>
					<option>선택안함</option>
				</select>
			</div>
			<div>
				<p>지역</p>
				<select>
					<option>서울</option>
					<option>부산</option>
					<option>대구</option>
					<option>인천</option>
					<option>광주</option>
					<option>대전</option>
					<option>울산</option>
					<option>세종</option>
					<option>경기</option>
					<option>강원</option>
					<option>충북</option>
					<option>충남</option>
					<option>전북</option>
					<option>전남</option>
					<option>경북</option>
					<option>경남</option>
					<option>제주</option>
				</select>
			</div>
			<div>
				<p>
					서비스 이용약관 및 개인정보취급방침 동의 <input type="checkbox">
				</p>
			</div>
			<div>
				<input type="button" value="회원가입" id="joinbtn">
			</div>
		</form>
		<!-- join end -->
	</div>
	<!-- content end -->
	<%@include file="../footer.jsp"%>
</body>
</html>