<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/join.css">
<script type="text/javascript" src="/resources/js/join.js"></script>
<link rel="shortcut icon" href="#">
<!-- 임시 -->
<title>Join</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<form id="join" method="post" action="/member/join">
			<h2>회원가입</h2>
			<div>
				<p>이름*</p>
				<input type="text" name="name" id="name">
				<p class="msg" id="namemsg"></p>
			</div>
			<div class="chk">
				<p>아이디*</p>
				<input type="text" name="id" id="id"><input type="button" value="중복확인" id="sameidchk">
				<p class="msg" id="idmsg"></p>
			</div>
			<div>
				<p>비밀번호*</p>
				<input type="password" name="pw" id="pw">
				<p class="msg" id="pwmsg"></p>
			</div>
			<div class="chk">
				<p>비밀번호 재확인*</p>
				<input type="password" id="pwchk">
				<p class="msgexcept" id="pwchkmsg"></p>
			</div>
			<div class="chk">
				<p>이메일</p>
				<input type="text" name="email" id="email"><input type="button" value="본인인증">
				<p class="msg" id="emailmsg"></p>
			</div>
			<div class="chk">
				<p>닉네임*</p>
				<input type="text" name="nick" id="nick"><input type="button" value="중복확인" id="samenickchk">
				<input type="button" value="랜덤닉네임 자동생성" id="randomnick">
				<p class="msg" id="nickmsg"></p>
			</div>
			<div>
				<p>생년월일</p>
				<input type="text" id="birthY" name="birthY" maxlength="4"> 년 <select id="birthM" name="birthM">
					<option value="null">선택</option>
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
				</select> 월 <select id="birthD" name="birthD">
					<option value="null">선택</option>
				</select> 일
				<p class="msg" id="birthmsg"></p>
			</div>
			<div class="chk">
				<p>전화번호</p>
				<input type="text" name="phone" id="phone">
				<p class="msg" id="phonemsg"></p>
			</div>
			<div>
				<p>성별</p>
				<select name="gender" id="gender" name="gender">
					<option value="null">선택</option>
					<option value="m">남</option>
					<option value="f">여</option>
				</select>
			</div>
			<div>
				<p>
					서비스 이용약관 및 개인정보취급방침 동의 <input type="checkbox" id="chkbox">
				</p>
				<p class="msg" id="chkboxmsg"></p>
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