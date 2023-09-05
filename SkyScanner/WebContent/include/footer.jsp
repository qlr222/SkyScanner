<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

		<!-- footer-copyright start -->
		<footer class="footer-copyright">
			<div class="container">
				<div class="footer-content">
					<div class="row">

						<div class="col-sm-3">
							<div class="single-footer-item">
								<div class="footer-logo">
									<a href="index.jsp">
										sky<span>Planner</span>
									</a>
									<p>
										best travel agency
									</p>
								</div>
							</div><!--/.single-footer-item-->
						</div><!--/.col-->

						<div class="col-sm-3">
							<div class="single-footer-item">
								<h2>sitemap</h2>
								<div class="single-footer-txt">
									<p><a href="#">airlines</a></p>
									<p><a href="#">hotels</a></p>
									<p><a href="#">car sharing</a></p>
									<hr>
									<div class="other-footer-item">
										<p><a href="#" onclick="alert('서비스 준비중 입니다.\n불편을 드려 죄송합니다.');">회사소개</a></p>
										<p><a href="<%=request.getContextPath()%>/board?cmd=news">뉴스</a></p>
										<p><a href="<%=request.getContextPath()%>/board?cmd=customerCenter">고객센터</a></p>
										<p><a href="<%=request.getContextPath()%>/board/policy.jsp">서비스 이용약관</a></p>
										<p><a href="<%=request.getContextPath()%>/board/privacy.jsp">개인정보처리방침</a></p>
									</div>
								</div><!--/.single-footer-txt-->
							</div><!--/.single-footer-item-->

						</div><!--/.col-->

						<div class="col-sm-3">
							<div class="single-footer-item text-center">
								<h2 class="text-left">contacts</h2>
								<div class="single-footer-txt text-left">
									<p>+82 (051) 1234 6543</p>
									<p>bemyangel2@gmail.com</p>
									<p>Busan, Korea</p>
								</div><!--/.single-footer-txt-->
							</div><!--/.single-footer-item-->
						</div><!--/.col-->

					</div><!--/.row-->

				</div><!--/.footer-content-->
				<hr>
				<div class="foot-icons ">
					<!-- <ul class="footer-social-links list-inline list-unstyled">
		                <li><a href="#" target="_blank" class="foot-icon-bg-1"><i class="fa fa-facebook"></i></a></li>
		                <li><a href="#" target="_blank" class="foot-icon-bg-2"><i class="fa fa-twitter"></i></a></li>
		                <li><a href="#" target="_blank" class="foot-icon-bg-3"><i class="fa fa-instagram"></i></a></li>
		        	</ul> -->
		        	<p>&copy; 2018 SkyScanner. All Right Reserved</p>

		        </div><!--/.foot-icons-->
				<div id="scroll-Top">
					<i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div><!--/.scroll-Top-->
			</div><!-- /.container-->

		</footer><!-- /.footer-copyright-->
		<!-- footer-copyright end -->




		<script src="<%=request.getContextPath()%>/assets/js/jquery.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->

		<!--modernizr.min.js-->
		<script  src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>


		<!--bootstrap.min.js-->
		<script  src="<%=request.getContextPath()%>/assets/js/bootstrap.min.js"></script>

		<!-- bootsnav js -->
		<script src="<%=request.getContextPath()%>/assets/js/bootsnav.js"></script>

		<!-- jquery.filterizr.min.js -->
		<script src="<%=request.getContextPath()%>/assets/js/jquery.filterizr.min.js"></script>

		<script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

		<!--jquery-ui.min.js-->
        <script src="<%=request.getContextPath()%>/assets/js/jquery-ui.min.js"></script>

		<!--owl.carousel.js-->
        <script  src="<%=request.getContextPath()%>/assets/js/owl.carousel.min.js"></script>

        <!-- jquery.sticky.js -->
		<script src="<%=request.getContextPath()%>/assets/js/jquery.sticky.js"></script>

        <!--datepicker.js-->
        <script  src="<%=request.getContextPath()%>/assets/js/datepicker.js"></script>

		<!--Custom JS-->
		<script src="<%=request.getContextPath()%>/assets/js/custom.js"></script>
		<script src="<%=request.getContextPath()%>/assets/js/waypoints.min.js"></script>

		
	</body>

</html>