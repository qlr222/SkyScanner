<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@include file="../include/headerSub.jsp" %>

		<!--news start -->
		<section class="board-page">
			<div class="container">
				<div class="wrapper">
					<div class="">
						<ul class="nav nav-tabs">
							<li><a href="<%=request.getContextPath()%>/board?cmd=news">뉴스</a></li>
							<li class="active"><a href="<%=request.getContextPath()%>/board?cmd=customerCenter">고객센터</a></li>
							<li><a href="<%=request.getContextPath()%>/board/policy.jsp">서비스 이용약관</a></li>
							<li><a href="<%=request.getContextPath()%>/board/privacy.jsp">개인정보처리방침</a></li>
						</ul>
					</div>
					
					<!--customer table-->
					<c:if test="${empty csList}">
						<p style="text-align: center;">등록된 문의가 없습니다.</p>
					</c:if>
					
					<c:if test="${!empty csList}">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>구분</th>
								<th>제목</th>
								<th>작성일</th>
								<th>상태</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="item" items="${csList}" varStatus="var">
							<tr>
								<td><span class="notice">[${item.type}]</span></td>
								<td><a href="<%=request.getContextPath()%>/board?cmd=customerView&num=${item.num}" class="board-link">${item.title}</a></td>
								<td>${fn:substring({item.writeDate},1,11)}</td>
								<td><c:choose><c:when test="${item.conState eq 'False'}">답변 대기중</c:when><c:otherwise>답변완료</c:otherwise></c:choose></td>
							</tr>
							</c:forEach>
						</tbody>
					</table>					
					</c:if>
					
					<a href="<%=request.getContextPath()%>/board?cmd=customerWrite" class="btn book-btn float-right">문의하기</a>
				</div>
			</div><!--/.container-->

		</section><!--/.customer-->
		<!--customer end -->

<%@include file="../include/footer.jsp" %>