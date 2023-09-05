<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@include file="../include/headerSub.jsp" %>
<div class="search-header-dummy-hotel">헤더+검색바 fixed 뒷처리</div>

<!------------------------------- 숙박 시작 ------------------------------->
<!-- 상단 검색 영역 -->
<section class="hotel-search top-search-bar">
   <div class="container"> 
      <form class="search-wrap clearfix" action="<%=request.getContextPath()%>/hotel?cmd=hotelView" method="post">
         <div class="search-option airport-option">
            <select name="areaCode" id="selOne" onchange="doChange(this, 'selTwo')" class="form-control">
                 <option value="0">지역을 선택하세요</option>
               <option value="1">서울</option>
                <option value="2">인천</option>
                <option value="3">대전</option>
                <option value="4">대구</option>
                <option value="5">광주</option>
                <option value="6">부산</option>
                <option value="7">울산</option>
                <option value="8">세종</option>
                <option value="31">경기도</option>
                <option value="32">강원도</option>
                <option value="33">충청북도</option>
                <option value="34">충청남도</option>
                <option value="35">경상북도</option>
                <option value="36">경상남도</option>
                <option value="37">전라북도</option>
                <option value="38">전라남도</option>
                <option value="39">제주도</option>
            </select>
            <select name="sigunguCode" id="selTwo" class="form-control ">
               <option value="0">상세지역을 선택하세요</option>
             </select>
         </div>
         <button type="sumbit" class="btn">검색</button>
      </form>
   </div><!--/.container-->
</section><!-- top-search-bar END-->
<!-- 상단 검색 영역 END -->
<!-- ▼상품 목록 영역▼ -->
<section class="list-section hotel-list-section clearfix">
   <ul class="hotel-list ">
      <c:choose>
      <c:when test="${!empty hotel }">
         <c:forEach var="item" items="${hotel}" varStatus="val">
            <c:set var="i" value="${val.index}"/>
               <li class="product clearfix">
                  <form id="form${i}" action="hotel" method="post">
                     <input type="hidden" name="cmd" value="hotelDetailView">
                     <input type="hidden" name="image" value="${item.firstimage}">
                     <input type="hidden" name="id" value="${item.contentid}">
                     <input type="hidden" name="title" value="${item.title}">
                     <input type="hidden" name="readcount" value="${item.readcount}">
                     <input type="hidden" name="addr1" value="${item.addr1}">
                     <input type="hidden" name="mapx" value="${item.mapx}">
                     <input type="hidden" name="mapy" value="${item.mapy}">
            
                     <!-- 관광공사 이미지 안줘서 임시 이미지로 대체 -->
                     <%-- <div class="img" style="background: url(${item.firstimage}) no-repeat; background-size: cover;"> --%>
                     <div class="img" style="background: url(assets/images/hotel/no-img.jpg) center no-repeat; background-size: cover;">
                     </div>
                     <div class="info-wrap">
                        <a class="hotel-name" onclick="submit('form${i}')">${item.title}</a>
                        <p class="hits"><span>hits</span> : ${item.readcount}</p>
                        <p class="address"><span class="icon"></span>${item.addr1}</p>
                        <a class="call" href="tel:${item.tel}" title="전화걸기">대표번호 <span>${item.tel}</span></a>
                        <%-- 
                        지도 좌표값                        
                        <p>${item.mapx }</p>
                        <p>${item.mapy }</p> 
                        --%>
                     </div>
                  </form>
               </li>
         </c:forEach>
      </c:when>
      <c:otherwise>
         검색결과 없음.
      </c:otherwise>
      </c:choose>
   </ul>
   <script>
      function submit(form_id){
         $('#'+form_id).submit();
      }
   </script>
   <!-- 지도 영역 -->
   <div id="map" style="width:45%; height:0; right: 5%;"></div>
   <script>
      //지도 높이 잡는 코드
      var winHeight = window.innerHeight;
      //alert("현재 윈도우 높이"+winHeight);
      var mapHeight = winHeight+"px";
      //alert(mapHeight);
      var map = document.getElementById("map")
      map.style.height = mapHeight;
      //
      
      //자칫하면 전체를 변수화 해야 할 수도 있다.
      <c:forEach var="item" items="${hotel}" varStatus="status" end="0">
         var map = new naver.maps.Map('map', {
             center: new naver.maps.LatLng(${item.mapy}, ${item.mapx}),  //변수처리...
             zoom: 10
         });
      </c:forEach>            
         
      <c:forEach var="item" items="${hotel}" varStatus="status">
         <c:if test="${item.mapy ne null && item.mapx ne null}">
            var marker = new naver.maps.Marker({
               map: map,
               position: new naver.maps.LatLng(${item.mapy}, ${item.mapx}),
               icon: {
                  url: 'https://yaimg.yanolja.com/joy/pw/place/maker-focused.png'
               }
            });
         </c:if>
      </c:forEach>
      
   </script>
   
</section>
<!-- ▲상품 목록 영역▲ -->
<!-------------------- 숙박 끝! -------------------->   
         
<%@include file="../include/footer.jsp" %>