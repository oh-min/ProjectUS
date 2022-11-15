<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div id="header">
	<div id="logo" ><a href="/">Save ♺︎<br>the earth</a></div>
	<div id="headerR">
		 <c:if test="${empty user}">
			<ul>
				<li><a href="/member/join">회원가입</a></li>
				<li><a href="/member/login">로그인</a></li>
			</ul>
		</c:if>
		 <c:if test="${not empty user}">
			<ul>
				<li><a href="/member/logout">로그아웃</a></li>
				<li><a href="/member/mypage">마이페이지</a></li>
				<li id ="headerNick">${user.nick}&nbsp님</li>
			</ul>
			<input type="hidden" value="${user.id}" id="headerId">
		</c:if>
	</div>
</div>

