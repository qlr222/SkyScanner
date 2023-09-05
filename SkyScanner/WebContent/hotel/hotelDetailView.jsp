<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@include file="../include/headerSub.jsp" %>
<div class="header-dummy">헤더 fixed 뒷처리</div>

<!------------------------------- 숙박 상세페이지 시작 ------------------------------->
		
<!-- ▼상품 목록 영역▼ -->
		<section class="list-section hotel-list-section clearfix">
			<!-- 상품 목록 -->
			<ul class="hotel-list ">
			<c:choose>
			<c:when test="${!empty hotel }">
				<li class="product clearfix">
					<div class="img" style="background: url(${hotel.firstimage}) no-repeat; background-size: cover;"></div>

					<div class="info-wrap">
						<input type="hidden" name="primaryKey" value="${hotel.contentid}">
						<h1 class="hotel-name">${hotel.title}</h1>
						<p class="hits">후기 : <span>${hotel.readcount}</span></p>
						<p class="address">${hotel.addr1}</p>
						<p class="call">${hotel.tel}</p>
						
					</div>
				</li>
				</c:when>
				<c:otherwise>
				검색결과 없음.
				</c:otherwise>
				</c:choose>
				
			</ul>
			<!-- 지도 영역 -->
			<div id="map" style="width:900px;height:700px;"></div>
			<script>//자칫하면 전체를 변수화 해야 할 수도 있다.
					
					var map = new naver.maps.Map('map', {
					    center: new naver.maps.LatLng(${hotel.mapy}, ${hotel.mapx}),  //변수처리...
					    zoom: 10
					});
					
					<c:if test="${hotel.mapy ne null && hotel.mapx ne null}">
						var marker = new naver.maps.Marker({
						    map: map,
						    position: new naver.maps.LatLng(${hotel.mapy}, ${hotel.mapx}),
						    icon: {
						        url: 'https://yaimg.yanolja.com/joy/pw/place/maker-focused.png'
						    }
						});
					</c:if>
			</script>
			<!-- <div id="map" style="width:100%;height:500px;"></div> -->
		</section>
<!-- ▲상품 목록 영역▲ -->
<!-------------------- 숙박 상세 끝! -------------------->	
<%@include file="../include/footer.jsp" %>
