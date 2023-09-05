<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Insert title here</title>
</head>
<body>

	<form action="<%=request.getContextPath()%>/hotel?cmd=hotelView"
		method="POST">
		<input type="hidden" name="areaCode" value="${areaCode}"> 
		<select name="sigunguCode">
			<c:forEach var="item" items="${sigungu}" varStatus="value">
				<option value="${item.code}">${item.name}</option>
			</c:forEach>
		</select> <br>
		<br> <input type="submit">
	</form>


</body>
</html>