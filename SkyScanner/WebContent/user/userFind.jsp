<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="../include/headerSub.jsp" %>
	
		<!--member-page start -->
		<section class="member-page">
			<div class="container">
				<div class="text-center wrapper">
					<!--login form-->
					<h3 class="mb-2r">비밀번호 찾기</h3>
    				<h5 class="mb-2r menu-text">회원가입 시 입력했던 이메일을 입력하세요.<br>비밀번호 재설정 링크를 보내드립니다.</h5>

		            <form action="#" method="post">
		                <input type="email" class="form-control" name="userId" placeholder="ex)account@email.com" required>
		                <input type="submit" class="btn btn-block book-btn" value="비밀번호 재설정 하기">
		            </form>

				</div>
			</div><!--/.container-->

		</section><!--/.member-page-->
		<!--member-page end -->

<%@include file="../include/footer.jsp" %>