<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@include file="../include/headerSub.jsp" %>

		<!--news start -->
		<section class="board-page">
			<div class="container">
				<div class="wrapper">
					<div class="mb-4r">
						<ul class="nav nav-tabs">
							<li><a href="<%=request.getContextPath()%>/board?cmd=news">뉴스</a></li>
							<li class="active"><a href="<%=request.getContextPath()%>/board?cmd=customerCenter">고객센터</a></li>
							<li><a href="<%=request.getContextPath()%>/board/policy.jsp">서비스 이용약관</a></li>
							<li><a href="<%=request.getContextPath()%>/board/privacy.jsp">개인정보처리방침</a></li>
						</ul>
					</div>
					
					<!--content view-->
					<div class="board-view">
						<p class="title mb-1r"><span class="notice">[${view.type}]</span> ${view.title}</p>
						<div class="info mb-2r">
							<span class="date">${fn:substring({view.writeDate},1,17)}</span><span class="count"><c:choose><c:when test="${view.conState eq 'False'}">답변 대기중</c:when><c:otherwise>답변완료</c:otherwise></c:choose></span>
							<c:if test="${sessionScope.id eq 'admin'}"><span class="count">${view.userName}(${view.userId})</span></c:if>
						</div>
						<div class="content mb-2r">
							<p class="template">${view.content}</p>
						</div>
						
						<c:if test="${view.conState eq 'True'}">
						<!-- Admin Content -->
						<div class="content content-admin mb-2r">
    						<div class="info">
    							<span class="border-icon"></span>
								<p>관리자 답변</p>
								<span class="date">${view.answerDate}</span>
							</div>
							<p class="template">${view.adminAnswer}</p>    
						</div>
						</c:if>
					</div>

					<!--btns-->
					<a href="<%=request.getContextPath()%>/board?cmd=customerCenter" class="btn book-btn dark">목록</a>
					<c:choose><c:when test="${sessionScope.id eq 'admin'}"><a href="<%=request.getContextPath()%>/board?cmd=customerWriteAdmin&num=${view.num}" class="btn book-btn float-right">답변작성</a></c:when><c:otherwise><a href="<%=request.getContextPath()%>/board?cmd=customerWrite" class="btn book-btn float-right">문의하기</a></c:otherwise></c:choose>
				</div>
			</div><!--/.container-->

		</section><!--/.customer-view-->
		<!--customer-view end -->

<%@include file="../include/footer.jsp" %>