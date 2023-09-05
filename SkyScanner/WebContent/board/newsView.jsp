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
					
					<!--news view-->
					<div class="board-view">
						<p class="title mb-1r" style="margin-top: 4rem;"><span class="notice">[${view.type}]</span> ${view.title}</p>
						<div class="info mb-2r">
							<span class="date">${fn:substring({view.writeDate},1,11)}</span> <c:if test="${!empty view.editDate}"><span class="date">(${fn:substring({view.editDate},1,17)} 수정됨)</span></c:if>							
						</div>
						<c:if test="${sessionScope.id eq 'admin'}">
							<div class="admin-menu mb-2r">
								<a href="<%=request.getContextPath()%>/board?cmd=newsEdit&num=${view.num}" class="admin-btn">수정</a> <a href="<%=request.getContextPath()%>/board?cmd=newsDelete&num=${view.num}" class="admin-btn">삭제</a>
							</div>
						</c:if>						
						<div class="content mb-2r">
							<p class="template">
								${view.content}
							</p>
						</div>
					</div>

					<!--btns-->
					<a href="<%=request.getContextPath()%>/board?cmd=news" class="btn book-btn dark">목록</a>
					<c:if test="${sessionScope.id eq 'admin'}">
						<a href="<%=request.getContextPath()%>/board?cmd=newsWrite" class="book-btn float-right">뉴스 등록</a>
					</c:if>
					
				</div>
			</div><!--/.container-->			

		</section><!--/.news-->
		<!--news end -->

<%@include file="../include/footer.jsp" %>
