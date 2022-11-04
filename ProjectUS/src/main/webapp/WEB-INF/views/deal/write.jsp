<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/home.css">
<link rel="stylesheet" href="/resources/css/deal.css">
<!-- 임시 -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<!-- 임시 -->
<meta charset="UTF-8">
<title>중고거래</title>
</head>
<body>
	<%@include file="../header.jsp"%>
	<%@include file="../nav.jsp"%>
	<div id="content">
		<div id="Dwrite">
			<h2>중고거래</h2>
			<form action="">
				<table class="Dtable" id="writeTable" border="1">
					<tr>
						<td class="hc">판매물품</td>
						<td colspan="3"><input type="text" name="product" class="DdetailInfo" id="product"></td>
					</tr>
					<!-- 나중에 로그인 정보 가져와서 넣어야 한다. -->
					<tr>
						<td class="hc">판매자</td>
						<td colspan="3"><input type="text" name="nick" class="DdetailInfo" id="nick"></td>
					</tr>
					<!-- 나중에 로그인 정보 가져와서 넣어야 한다. -->
					<tr>
						<td class="hc">거래 방법</td>
						<td><select class="DdetailInfo" name="way" id="way">
								<option value="택배">택배</option>
								<option value="서울">서울</option>
								<option value="인천">인천</option>
								<option value="부산">부산</option>
								<option value="대전">대전</option>
								<option value="광주">광주</option>
								<option value="대구">대구</option>
								<option value="울산">울산</option>
								<option value="경기">경기</option>
								<option value="강원">강원</option>
								<option value="충북">충북</option>
								<option value="충남">충남</option>
								<option value="전북">전북</option>
								<option value="전남">전남</option>
								<option value="경북">경북</option>
								<option value="경남">경남</option>
								<option value="제주">제주</option>
								<option value="세종">세종</option>
						</select></td>
						<td class="hc">가격</td>
						<td><input type="text" name="price" class="DdetailInfo" id="price"></td>
					</tr>
					<tr>
						<td class="hc" rowspan="2">내용</td>
						<td colspan="3"><textarea rows="30" cols="100" name="info" class="DdetailInfo" id="info"></textarea></td>
					</tr>
					<tr id="trPreview">
						<td colspan="3" id="preview"></td>
					</tr>
					<tr class="line2px">
						<td class="hc">첨부파일</td>
						<td class="DdetailInfo" colspan="3"><input type="file" name="attachFile" id="attachFile" multiple></td>
					</tr>
				</table>
				<div id="btn">
					<div id="write">
						<input type="button" value="글쓰기" id="writebtn">
					</div>
				</div>
			</form>
		</div>
	</div>
	<%@include file="../footer.jsp"%>
</body>
</html>