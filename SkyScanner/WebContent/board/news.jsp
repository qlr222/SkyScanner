<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<%@include file="../include/headerSub.jsp" %>

		<!--news start -->
		<section class="board-page">
			<div class="container">
				<div class="wrapper">
					<div class="">
						<ul class="nav nav-tabs">
							<li class="active"><a href="<%=request.getContextPath()%>/board?cmd=news">뉴스</a></li>
							<li><a href="<%=request.getContextPath()%>/board?cmd=customerCenter">고객센터</a></li>
							<li><a href="<%=request.getContextPath()%>/board/policy.jsp">서비스 이용약관</a></li>
							<li><a href="<%=request.getContextPath()%>/board/privacy.jsp">개인정보처리방침</a></li>
						</ul>
					</div>
					
					<!--news table-->
					<table class="table table-striped">
						<c:if test="${empty newsList}">
							<thead>
								<tr>
									<th style="text-align: center; padding: 5rem 0 !important;">등록된 뉴스가 없습니다.</th>
								</tr>
							</thead>
						</c:if>
						<c:if test="${!empty newsList}">
						<thead>
							<tr>
								<th>번호</th>
								<th>제목</th>
								<th>작성일</th>
							</tr>
						</thead>
						<tbody>						
							<c:forEach var="list" items="${newsList}" varStatus="var">						
							<tr>
								<td>${list.num}</td>
								<td><a href="<%=request.getContextPath()%>/board?cmd=newsView&num=${list.num}" class="board-link"><span class="notice">[${list.type}]</span> ${list.title}</a></td>
								<td>${fn:substring({list.writeDate},1,11)}</td>
							</tr>
							</c:forEach>
						
						</tbody>
						</c:if>
					</table>
					
					<c:if test="${sessionScope.id eq 'admin'}">
						<a href="<%=request.getContextPath()%>/board?cmd=newsWrite" class="book-btn">뉴스 등록</a>
					</c:if>
				</div>
			</div><!--/.container-->

		</section><!--/.news-->
		<!--news end -->

<%@include file="../include/footer.jsp" %>
