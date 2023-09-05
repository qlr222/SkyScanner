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
					</div>
					
					<form action="<%=request.getContextPath()%>/board?cmd=customerWriteAdminProc&num=${view.num}" method="post">
						<textarea name="adminAnswer" rows="8" cols="80" class="form-control mb-2r" placeholder="답변을 작성하세요." required></textarea>																	
						<input type="submit" class="btn book-btn float-right" value="답변작성">
					</form>
					
					<a href="<%=request.getContextPath()%>/board?cmd=customerCenter" class="btn book-btn dark">목록</a>
				</div>
			</div><!--/.container-->

		</section><!--/.customer-view-->
		<!--customer-view end -->

<%@include file="../include/footer.jsp" %>