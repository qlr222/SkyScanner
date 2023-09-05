<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>

<html class="no-js">

   <head>
      <!-- META DATA -->
      <meta charset="utf-8">
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

      <!-- font-family : kr -->
      <link href="http://fonts.googleapis.com/earlyaccess/notosanskr.css" rel="stylesheet" />

      <!-- TITLE OF SITE -->
      <title>SkyPlanner</title>

      <!-- favicon img -->
      <link rel="shortcut icon" type="image/icon" href="<%=request.getContextPath()%>/assets/logo/favicon.png"/>

      <!--font-awesome.min.css-->
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/font-awesome.min.css" />

      <!--animate.css-->
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/animate.css" />

      <!--hover.css-->
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/hover-min.css">

      <!--datepicker.css-->
      <link rel="stylesheet"  href="<%=request.getContextPath()%>/assets/css/datepicker.css" >

      <!--owl.carousel.css-->
        <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/owl.carousel.min.css">
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/owl.theme.default.min.css"/>

      <!-- range css-->
        <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/jquery-ui.min.css" />
        

      <!--bootstrap.min.css-->
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/bootstrap.min.css" />

      <!-- bootsnav -->
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/bootsnav.css"/>

      <!--style.css-->
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/style.css" />
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/custom2.css" />
      <script  src="assets/js/fly.js"></script>
	  <script  src="<%=request.getContextPath()%>/assets/js/hotel.js"></script>
      <!--responsive.css-->
      <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/responsive.css" />

      <script src="https://maps.googleapis.com/maps/api/js?sensor=false&language=ko"></script>
	  
	  <!-- 네이버 지도 -->
	  <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=jXnOGdVhrI8h3Nmmg6MB"></script>
	  
      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->

   </head>
   
   <body>
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
                        <a href="<%=request.getContextPath()%>">
                           sky<span>Planner</span>
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
                              <li class="smooth-menu"><a href="#">home</a></li>
                              <li class="smooth-menu"><a href="#">항공권</a></li>
                              <li class="smooth-menu"><a href="#">호텔</a></li>
                              <li class="smooth-menu"><a href="#">렌터카</a></li>
                                 <c:choose>
									<c:when test="${empty sessionScope.id}">
									<li>
									<button class="book-btn" onclick="location.href='<%=request.getContextPath()%>/user/signIn.jsp'">로그인</button>
									</li>
									</c:when>
									<c:otherwise>
			                        <li class="smooth-menu">
										
											<c:choose>
												<c:when test="${sessionScope.id eq 'admin'}">
													<a href="<%=request.getContextPath()%>/admin?cmd=adminPage"><i class="fa fa-wrench"></i> <span>관리자 페이지</span></a>
												</c:when>
												
												<c:otherwise>
													<a href="<%=request.getContextPath()%>/member?cmd=memberPage"><i class="fa fa-user"></i> <span>마이페이지</span></a>
												</c:otherwise>
											</c:choose>
											
			                           </li>
			                           <li class="smooth-menu">
			                              <a href="<%=request.getContextPath()%>/member?cmd=memberLogout"><i class="fa fa-sign-out"></i> <span>로그아웃</span></a>
			                           </li>
											</c:otherwise>
											</c:choose>
                             <!--/.project-btn-->
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