<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="../include/headerSub.jsp" %>
	
		<!--member-page start -->
		<section class="member-page">
			<div class="container">
				<div class="text-center wrapper">
					<!--login form-->
					<h3 class="mb-2r">로그인</h3>
    				<h5 class="mb-2r menu-text">서비스를 이용하시려면 로그인이 필요합니다.</h5>

		            <form action="<%=request.getContextPath()%>/member?cmd=memberLogin" method="post">
		                <input type="text" class="form-control" name="id" placeholder="ex)account@email.com" required>
		                <input type="password" class="form-control" name="password" placeholder="Password" required>
		                <input type="submit" class="btn btn-block book-btn" value="로그인">
		            </form>

					<!--login menu-->
					<div class="other-menu">
	                    <a href="<%=request.getContextPath()%>/user/signUp.jsp" class="btn-custom-outline">회원가입</a>
	                    <a href="<%=request.getContextPath()%>/user/userFind.jsp" class="btn-custom-outline">비밀번호 찾기</a>
	                </div>

					<!--social login menu-->
					<div class="social-menu">
		                <div class="foot-icons">
		                    <h5 class="mb-2r">다른 소셜계정으로 로그인</h5>
		                    <ul class="footer-social-links list-inline list-unstyled">
		                        <li><a href="#" target="_blank" name="loginFacebook" class="foot-icon-bg-1"><i class="fa fa-facebook"></i></a></li>
		                        <li><a href="#" target="_blank" name="loginGoogle" class="foot-icon-bg-2"><i class="fa fa-google"></i></a></li>
		                        <li><a href="#" target="_blank" name="loginNaver" class="foot-icon-bg-3"><i class="fa fa-comment"></i></a></li>
		                    </ul>
		                </div>
		            </div>

				</div>
			</div><!--/.container-->

		</section><!--/.member-page-->
		<!--member-page end -->

<%@include file="../include/footer.jsp" %>