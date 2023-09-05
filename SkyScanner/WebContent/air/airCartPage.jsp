<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!doctype html>
<html class="no-js">

	<head>
		<!-- META DATA -->
		<meta charset="utf-8">
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<script  src="assets/js/fly.js"></script>
		<!--font-family-->
		<link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet" />

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

		<!-- font-family : kr -->
		<link href="http://fonts.googleapis.com/earlyaccess/notosanskr.css" rel="stylesheet" />

		<!-- TITLE OF SITE -->
		<title>Travel</title>

		<!-- favicon img -->
		<link rel="shortcut icon" type="image/icon" href="assets/logo/favicon.png"/>

		<!--font-awesome.min.css-->
		<link rel="stylesheet" href="assets/css/font-awesome.min.css" />

		<!--animate.css-->
		<link rel="stylesheet" href="assets/css/animate.css" />

		<!--hover.css-->
		<link rel="stylesheet" href="assets/css/hover-min.css">

		<!--datepicker.css-->
		<link rel="stylesheet"  href="assets/css/datepicker.css" >

		<!--owl.carousel.css-->
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
		<link rel="stylesheet" href="assets/css/owl.theme.default.min.css"/>

		<!-- range css-->
        <link rel="stylesheet" href="assets/css/jquery-ui.min.css" />

		<!--bootstrap.min.css-->
		<link rel="stylesheet" href="assets/css/bootstrap.min.css" />

		<!-- bootsnav -->
		<link rel="stylesheet" href="assets/css/bootsnav.css"/>

		<!--style.css-->
		<link rel="stylesheet" href="assets/css/custom.css" />
		<link rel="stylesheet" href="assets/css/style.css" />

		<!--responsive.css-->
		<link rel="stylesheet" href="assets/css/responsive.css" />
		
		<!-- 항공권 목록 -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<link rel="stylesheet" href="assets/css/custom2.css" />


		<!-- 결제 -->
		<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
		<script type="text/javascript" src="https://service.iamport.kr/js/iamport.payment-1.1.2.js"></script>
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

	</head>

	<body id="air">
		
		<!--[if lte IE 9]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade
			your browser</a> to improve your experience and security.</p>
		<![endif]-->

		<!-- main-menu Start -->
		<header class="top-area">
			<div class="header-area">
				<div class="container">
					<div class="row">
						<div class="col-sm-2">
							<div class="logo">
								<a href="index.html">
									sky<span>Scanner</span>
								</a>
							</div><!-- /.logo-->
						</div><!-- /.col-->
						<div class="col-sm-10">
							<div class="main-menu">

								<!-- Brand and toggle get grouped for better mobile display -->
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<i class="fa fa-bars"></i>
									</button><!-- / button-->
								</div><!-- /.navbar-header-->
								<div class="collapse navbar-collapse">
									<ul class="nav navbar-nav navbar-right">
										<li class="smooth-menu"><a href="#home">home</a></li>
										<li class="smooth-menu active"><a href="#gallery">항공권</a></li>
										<li class="smooth-menu"><a href="#pack">호텔</a></li>
										<li class="smooth-menu"><a href="#spo">렌터카</a></li>
										<li>
											<button class="book-btn">Sign in</button>
										</li><!--/.project-btn-->
									</ul>
								</div><!-- /.navbar-collapse -->
							</div><!-- /.main-menu-->
						</div><!-- /.col-->
					</div><!-- /.row -->
					<div class="home-border"></div><!-- /.home-border-->
				</div><!-- /.container-->
			</div><!-- /.header-area -->
		</header><!-- /.top-area-->
		<!-- main-menu End -->
		<div class="header-dummy">헤더 absolute 뒷처리</div>
		<!------------------------------- 항공권 검색 목록 시작 ------------------------------->
		<!-- 상단 검색 영역 -->
		<!-- top-search-bar END-->
		<!-- 상단 검색 영역 END -->
		
		<!-- 상품 목록 -->
		<form id="airlist" action="<%=request.getContextPath()%>/air?cmd=airInsert" method="POST">
		
		<section class="list-section air-list-section container">
         <div class="product clearfix">
            <a class="product-picker" href="javascript:product-picker">
               <!-- <form action="" method="post"> -->
               <div class="flight-box">
                  <!-- going-ticket 가는 티켓 -->
                  <div class="flight-info clearfix">
                  <input type="hidden" name="airlineNm" value="${Ticket.airlineNm}">
                  <input type="hidden" name="depAirportNm" value="${Ticket.depAirportNm}">
                  <input type="hidden" name="arrAirportNm" value="${Ticket.arrAirportNm}">
                  <input type="hidden" name="depPlandTime" value="${Ticket.depPlandTime}">
                  <input type="hidden" name="arrPlandTime" value="${Ticket.arrPlandTime}">
                  <input type="hidden" name="economyCharge" value="${Ticket.economyCharge}">
                  <input type="hidden" name="vihicleId" value="${Ticket.vihicleId}">
                  <input type="hidden" name="people" value="${people}">
                        <c:choose>
									<c:when test="${Ticket.airlineNm == '아시아나항공'}">				
		    							<p class="airline">${Ticket.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket.airlineNm == '대한 항공'}">				
		    							<p class="airline airline2">${Ticket.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket.airlineNm == '진 에어'}">				
		    							<p class="airline airline3">${Ticket.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket.airlineNm == '제주항공'}">				
		    							<p class="airline airline4">${Ticket.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket.airlineNm == '이스타항공'}">				
		    							<p class="airline airline5">${Ticket.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket.airlineNm == '에어부산'}">				
		    							<p class="airline airline6">${Ticket.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:otherwise>
		    							<p class="airline airline7 online">${Ticket.airlineNm}</p>
		    						</c:otherwise>
	    						</c:choose>
                        <!-- 이륙 정보 departure -->
                           <p class="dep-info">${fn:substring({Ticket.depPlandTime},9,11)}:${fn:substring({Ticket.depPlandTime},11,13)}<span class="airport">${Ticket.depAirportNm}</span></p>
                           <p class="flight-time">
                           <script>
                            fly(${Ticket.depPlandTime},${Ticket.arrPlandTime});
                            </script>
							</p>
                           <!-- 착륙 정보 arrival info -->
                     <p class="arr-info">${fn:substring({Ticket.arrPlandTime},9,11)}:${fn:substring({Ticket.arrPlandTime},11,13)}<span class="airport">${Ticket.arrAirportNm}</span></p>
                  </div>
               </div>
               <div class="price-box">
                  <div class="box">
                  	<c:choose>
                  	<c:when test="${Ticket.sit eq '-1' }">
                     <p class="price">이코노미<span class="price">${Ticket.economyCharge}</span><span>원</span>(30/30)석</p>
                     </c:when>
                      <c:when test="${Ticket.sit eq '0' }">
                     <p class="price">이코노미<span class="price">${Ticket2.economyCharge}</span><span>원</span><span class="sit">(좌석 없음)</span></p>
                     </c:when> 
                     <c:otherwise>
                     <p class="price">이코노미<span class="price">${Ticket.economyCharge}</span><span>원</span>(${Ticket.sit}/30)석</p>
                     </c:otherwise>
                     </c:choose>
                  </div>
               </div>
               <!-- </form> -->
            </a>
         </div><!-- .product END -->
      </section>
      <c:if test="${empty Ticket2 }">
      <c:set var="num" value="1"></c:set>
      </c:if>
      <c:if test="${!empty Ticket2 }">
      <section class="list-section air-list-section container">
         <div class="product clearfix">
            <a class="product-picker" href="javascript:product-picker">
               <!-- <form action="" method="post"> -->
               <div class="flight-box">
                  <!-- going-ticket 가는 티켓 -->
                  <div class="flight-info clearfix">
                  <input type="hidden" name="airlineNm2" value="${Ticket2.airlineNm}">
                  <input type="hidden" name="depAirportNm2" value="${Ticket2.depAirportNm}">
                  <input type="hidden" name="arrAirportNm2" value="${Ticket2.arrAirportNm}">
                  <input type="hidden" name="depPlandTime2" value="${Ticket2.depPlandTime}">
                  <input type="hidden" name="arrPlandTime2" value="${Ticket2.arrPlandTime}">
                  <input type="hidden" name="economyCharge2" value="${Ticket2.economyCharge}">
                  <input type="hidden" name="vihicleId2" value="${Ticket2.vihicleId}">
                        <c:choose>
									<c:when test="${Ticket2.airlineNm == '아시아나항공'}">					
		    							<p class="airline">${Ticket2.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket2.airlineNm == '대한 항공'}">				
		    							<p class="airline airline2">${Ticket2.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket2.airlineNm == '진 에어'}">				
		    							<p class="airline airline3">${Ticket2.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket2.airlineNm == '제주항공'}">				
		    							<p class="airline airline4">${Ticket2.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket2.airlineNm == '이스타항공'}">				
		    							<p class="airline airline5">${Ticket2.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:when test="${Ticket2.airlineNm == '에어부산'}">				
		    							<p class="airline airline6">${Ticket2.airlineNm}</p>
		    						</c:when>
		    						
		    						<c:otherwise>
		    							<p class="airline airline7 online">${Ticket2.airlineNm}</p>
		    						</c:otherwise>
	    						</c:choose>
                        <!-- 이륙 정보 departure -->
                           <p class="dep-info">${fn:substring({Ticket2.depPlandTime},9,11)}:${fn:substring({Ticket2.depPlandTime},11,13)}<span class="airport">${Ticket2.depAirportNm}</span></p>
                           <p class="flight-time">
                           <script>
                            fly(${Ticket2.depPlandTime},${Ticket2.arrPlandTime});
                            </script>
							</p>
                           <!-- 착륙 정보 arrival info -->
                     <p class="arr-info">${fn:substring({Ticket2.arrPlandTime},9,11)}:${fn:substring({Ticket2.arrPlandTime},11,13)}<span class="airport">${Ticket2.arrAirportNm}</span></p>
                  </div>
               </div>
               <div class="price-box">
                  <div class="box">
                  	<c:choose>
                  	<c:when test="${Ticket2.sit eq '-1' }">
                     <p class="price">이코노미<span class="price">${Ticket2.economyCharge}</span><span>원</span>(30/30)석</p>
                     </c:when>
                    <c:when test="${Ticket2.sit eq '0' }">
                     <p class="price">이코노미<span class="price">${Ticket2.economyCharge}</span><span>원</span>(좌석 없음)</p>
                     </c:when> 
                     <c:otherwise>
                     <p class="price">이코노미<span class="price">${Ticket2.economyCharge}</span><span>원</span>(${Ticket2.sit}/30)석</p>
                     </c:otherwise>
                     </c:choose>
                  </div>
               </div>
               <!-- </form> -->
            </a>
         </div><!-- .product END -->
      </section>
      <c:set var="num" value="${Ticket2.arrAirportNm}"></c:set>
      </c:if>
      <c:choose>
      <c:when test="${!empty Ticket2 }">
      총 : ${people} 명 / 총 금액 : ${people*(Ticket.economyCharge+Ticket2.economyCharge)}원
      </c:when>
      <c:otherwise>
      총 : ${people} 명 / 총 금액 : ${people*Ticket.economyCharge}원
      </c:otherwise>
      </c:choose>
      <!-- 상품 목록 끝 -->
		<button id="check_moduled">예약하기</button>
		<button id="check_module" type="button">결제하기</button>
		<!-- 상품 목록 끝 -->
		</form>

		<!------------------------------- 항공권 검색 목록 끝 ------------------------------->

		<!-- footer-copyright start -->
		<footer  class="footer-copyright">
			<div class="container">
				<div class="footer-content">
					<div class="row">
						<div class="col-sm-3">
							<div class="single-footer-item">
								<div class="footer-logo">
									<a href="index.html">
										sky<span>Scanner</span>
									</a>
									<p>
										best travel agency
									</p>
								</div>
							</div><!--/.single-footer-item-->
						</div><!--/.col-->

						<div class="col-sm-3">
							<div class="single-footer-item">
								<h2>link</h2>
								<div class="single-footer-txt">
									<p><a href="#">home</a></p>
									<p><a href="#">destination</a></p>
									<p><a href="#">spacial packages</a></p>
									<p><a href="#">special offers</a></p>
									<p><a href="#">blog</a></p>
									<p><a href="#">contacts</a></p>
								</div><!--/.single-footer-txt-->
							</div><!--/.single-footer-item-->

						</div><!--/.col-->

						<div class="col-sm-3">
							<div class="single-footer-item text-center">
								<h2 class="text-left">contacts</h2>
								<div class="single-footer-txt text-left">
									<p>+1 (300) 1234 6543</p>
									<p class="foot-email"><a href="#">info@tnest.com</a></p>
									<p>North Warnner Park 336/A</p>
									<p>Newyork, USA</p>
								</div><!--/.single-footer-txt-->
							</div><!--/.single-footer-item-->
						</div><!--/.col-->

					</div><!--/.row-->

				</div><!--/.footer-content-->
				<hr>
				<div class="foot-icons ">
					<ul class="footer-social-links list-inline list-unstyled">
		                <li><a href="#" target="_blank" class="foot-icon-bg-1"><i class="fa fa-facebook"></i></a></li>
		                <li><a href="#" target="_blank" class="foot-icon-bg-2"><i class="fa fa-twitter"></i></a></li>
		                <li><a href="#" target="_blank" class="foot-icon-bg-3"><i class="fa fa-instagram"></i></a></li>
		        	</ul>
		        	<p>&copy; 2017 <a href="https://www.themesine.com">ThemeSINE</a>. All Right Reserved</p>

		        </div><!--/.foot-icons-->
				<div id="scroll-Top">
					<i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div><!--/.scroll-Top-->
			</div><!-- /.container-->
		</footer><!-- /.footer-copyright-->
		<!-- footer-copyright end -->

		<script src="assets/js/jquery.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->

		<!--modernizr.min.js-->
		<script  src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>


		<!--bootstrap.min.js-->
		<script  src="assets/js/bootstrap.min.js"></script>

		<!-- bootsnav js -->
		<script src="assets/js/bootsnav.js"></script>

		<!-- jquery.filterizr.min.js -->
		<script src="assets/js/jquery.filterizr.min.js"></script>

		<script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

		<!--jquery-ui.min.js-->
        <script src="assets/js/jquery-ui.min.js"></script>

		<!--owl.carousel.js-->
        <script  src="assets/js/owl.carousel.min.js"></script>

        <!-- jquery.sticky.js -->
		<script src="assets/js/jquery.sticky.js"></script>

        <!--datepicker.js-->
        <script  src="assets/js/datepicker.js"></script>

		<!--Custom JS-->
		<script src="assets/js/custom.js"></script>
	<script>
	var people = ${people};
	var sum = ${Ticket.economyCharge}*people;
	
	var ticket = "${Ticket.depAirportNm} - "+"${Ticket.arrAirportNm}"+"(편도)";
	
	if("${num}" != "1") {
		sum = sum + (${Ticket2.economyCharge}*people);
		var ticket = "${Ticket.depAirportNm} - "+"${Ticket.arrAirportNm}"+"(왕복)";
	} 
	
	
	
	
	$("#check_module").click(function () {
        var IMP = window.IMP; // 생략가능
        IMP.init('imp47619516'); 
        // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
        // i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
        IMP.request_pay({
            pg: 'inicis', // version 1.1.0부터 지원.
            /* 
                'kakao':카카오페이, 
                html5_inicis':이니시스(웹표준결제)
                    'nice':나이스페이
                    'jtnet':제이티넷
                    'uplus':LG유플러스
                    'danal':다날
                    'payco':페이코
                    'syrup':시럽페이
                    'paypal':페이팔
                */
            pay_method: 'card',
            /* 
                'samsung':삼성페이, 
                'card':신용카드, 
                'trans':실시간계좌이체,
                'vbank':가상계좌,
                'phone':휴대폰소액결제 
            */
            merchant_uid: 'merchant_' + new Date().getTime(),
            /* 
                merchant_uid에 경우 
                https://docs.iamport.kr/implementation/payment
                위에 url에 따라가시면 넣을 수 있는 방법이 있습니다.
                참고하세요. 
                나중에 포스팅 해볼게요.
             */
            name: ticket,
            //결제창에서 보여질 이름
            amount: sum, 
            //가격 
            buyer_email: 'iamport@siot.do',
            buyer_name: '구매자이름',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456',
            m_redirect_url: 'https://www.yourdomain.com/payments/complete'
            /*  
                모바일 결제시,
                결제가 끝나고 랜딩되는 URL을 지정 
                (카카오페이, 페이코, 다날의 경우는 필요없음. PC와 마찬가지로 callback함수로 결과가 떨어짐) 
                */
        }, function (rsp) {
            console.log(rsp);
            if (rsp.success) {
                var msg = '결제가 완료되었습니다.';
                msg += '고유ID : ' + rsp.imp_uid;
                msg += '상점 거래ID : ' + rsp.merchant_uid;
                msg += '결제 금액 : ' + rsp.paid_amount;
                msg += '카드 승인번호 : ' + rsp.apply_num;
            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
            }
            alert(msg);
        });
    });
	</script>
	
	
	</body>

</html>
