<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="../include/headerSub.jsp" %>

		<!--news start -->
		<section class="board-page">
			<div class="container">
				<div class="wrapper">
					<div class="mb-4r">
						<ul class="nav nav-tabs">
							<li><a href="<%=request.getContextPath()%>/board?cmd=news">뉴스</a></li>
							<li><a href="<%=request.getContextPath()%>/board?cmd=customerCenter">고객센터</a></li>
							<li class="active"><a href="<%=request.getContextPath()%>/board/policy.jsp">서비스 이용약관</a></li>
							<li><a href="<%=request.getContextPath()%>/board/privacy.jsp">개인정보처리방침</a></li>
						</ul>
					</div>
					
					<h4 class="mb-2r">서비스 이용약관</h4>
					<p>
						서비스이용약관
					</p>
				</div>
			</div>
		</section><!--/.news-->
		<!--news end -->

<%@include file="../include/footer.jsp" %>
