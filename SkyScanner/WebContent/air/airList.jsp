<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@include file="../include/headerSub.jsp" %>
<!-- <div class="header-dummy">헤더 fixed 뒷처리</div> -->
<div class="search-header-dummy"><!-- 헤더+검색바 fixed 뒷처리 --></div>

<!------------------------------- 항공권 검색 목록 시작 ------------------------------->
<!-- ▼ 상단 검색 영역 -->
<section class="top-search-bar"> 
   <div class="container"> 
      <form class="search-wrap clearfix" action="<%=request.getContextPath()%>/air?cmd=airView" method="POST">
         <!-- 1★왕복/편도 (편도:오는날없음) -->
         <div class="direct-option">
            <input id="shuttle" type="radio" name="chk" value="chk" checked onclick="way('shuttle')">왕복
            <input id="oneway" type="radio" name="chk" value="chk" onclick="way('oneway')">편도
         </div>
           <div class="search-option airport-option clearfix">
            <c:choose>
               <c:when test="${!empty air}">
                  <select class="form-control " name="depairport" >
                     <option value="${air.get(0).depAirportNm }">${air.get(0).depAirportNm }</option>
                     <option value="NAARKJB">무안</option>
                     <option value="NAARKJJ">광주</option>
                     <option value="NAARKJK">군산</option>
                     <option value="NAARKJY">여수</option>
                     <option value="NAARKNW">원주</option>
                     <option value="NAARKNY">양양</option>
                     <option value="NAARKPC">제주</option>
                     <option value="NAARKPK">김해</option>
                     <option value="NAARKPS">사천</option>
                     <option value="NAARKPU">울산</option>
                     <option value="NAARKSI">인천</option>
                     <option value="NAARKSS">김포</option>
                     <option value="NAARKTH">포항</option>
                     <option value="NAARKTN">대구</option>
                     <option value="NAARKTU">청주</option>
                  </select>
                  <select class="form-control " name="arrairport" required>
                     <option value="${air.get(0).arrAirportNm }">${air.get(0).arrAirportNm }</option>
                     <option value="NAARKJB">무안</option>
                     <option value="NAARKJJ">광주</option>
                     <option value="NAARKJK">군산</option>
                     <option value="NAARKJY">여수</option>
                     <option value="NAARKNW">원주</option>
                     <option value="NAARKNY">양양</option>
                     <option value="NAARKPC">제주</option>
                     <option value="NAARKPK">김해</option>
                     <option value="NAARKPS">사천</option>
                     <option value="NAARKPU">울산</option>
                     <option value="NAARKSI">인천</option>
                     <option value="NAARKSS">김포</option>
                     <option value="NAARKTH">포항</option>
                     <option value="NAARKTN">대구</option>
                     <option value="NAARKTU">청주</option>
                  </select>
               </c:when>
               <c:otherwise>
                  <select class="form-control " name="depairport" required >
                     <option value="${search.get(0)}">${search.get(0)}</option>
                     <option value="NAARKJB">무안</option>
                     <option value="NAARKJJ">광주</option>
                     <option value="NAARKJK">군산</option>
                     <option value="NAARKJY">여수</option>
                     <option value="NAARKNW">원주</option>
                     <option value="NAARKNY">양양</option>
                     <option value="NAARKPC">제주</option>
                     <option value="NAARKPK">김해</option>
                     <option value="NAARKPS">사천</option>
                     <option value="NAARKPU">울산</option>
                     <option value="NAARKSI">인천</option>
                     <option value="NAARKSS">김포</option>
                     <option value="NAARKTH">포항</option>
                     <option value="NAARKTN">대구</option>
                     <option value="NAARKTU">청주</option>
                  </select>
                  <select class="form-control " name="arrairport" required>
                     <option value="${search.get(1)}">${search.get(1)}</option><!-- /.option-->
                     <option value="NAARKJB">무안</option>
                     <option value="NAARKJJ">광주</option>
                     <option value="NAARKJK">군산</option>
                     <option value="NAARKJY">여수</option>
                     <option value="NAARKNW">원주</option>
                     <option value="NAARKNY">양양</option>
                     <option value="NAARKPC">제주</option>
                     <option value="NAARKPK">김해</option>
                     <option value="NAARKPS">사천</option>
                     <option value="NAARKPU">울산</option>
                     <option value="NAARKSI">인천</option>
                     <option value="NAARKSS">김포</option>
                     <option value="NAARKTH">포항</option>
                     <option value="NAARKTN">대구</option>
                     <option value="NAARKTU">청주</option>
                  </select>
               </c:otherwise>
            </c:choose>
         </div>
         <!-- 1★ -->
         <div id="lineType" class="search-option date-option clearfix">
            <input class="departure" placeholder="가는 날" name="depdate" value="${search.get(2)}" data-toggle="datepicker">
            <c:choose>
               <c:when test="${!search.get(2)}"><!-- 오는날 있으면 -->
                  <input id="arr-date" class="arrival" placeholder="오는 날!" name="depdate2" data-toggle="datepicker" value="${search.get(2)}">
                  
               </c:when>
               <c:otherwise><!-- 오는날 없으면 -->
                  
                  <input type="text" name="depdate2" class="form-control" data-toggle="datepicker" placeholder="오는날">
               </c:otherwise>
            </c:choose>
         </div>
         <!-- 탑승인원 -->
         <div class="search-option other-option">
            <c:choose>
               <c:when test="${!empty people}">
                  <select class="form-control " name="people" required>
                     <option value="${people}">${people} 명</option>
                     <option value="1">1 명</option>
                     <option value="2">2 명</option>
                     <option value="3">3 명</option>
                  </select>
               </c:when>
               <c:otherwise>
                  <select class="form-control " name="people" required>
                     <option value="">탑승 인원</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                  </select>
               </c:otherwise>
            </c:choose>
         </div>
           <button class="btn">검색</button>
      </form>
   </div><!-- .container END-->
</section>
<!-- ▲ 상단 검색 영역 END -->

<!-- 선택된 항공권 -->
<!-- 3★ 선택된 항공권에 좌석등급 넣기-->    
<section id="ari-list" class="list-section air-list-section selected-list container cliearfix">
   <form id="airlist" action="<%=request.getContextPath()%>/air?cmd=airCart" method="POST">
      <div id='dticket'></div>
         <div id='sticket'></div>
   </form>
</section>

<!--■■■■■■■■■■■■■■■■ ▼ 검색 목록 영역■■■■■■■■■■■■■■■■-->
<!-- 목록 정렬 옵션 -->
<section id="air-sort" class="container">
   <div class="btn-group btn-group-toggle">            
      <input class="input-chk" type="radio" name="chk" id="option1" value="timed" checked onclick="check('timed')">
      <label class="btn btn-secondary" for="option1">시간순</label>
      
      <input class="input-chk" type="radio" name="chk" id="option2" value="price" onclick="check('price')">
      <label class="btn btn-secondary"  for="option2">가격순</label>
      
      <input class="input-chk" type="radio" name="chk" id="option3" value="line" onclick="check('line')">
      <label class="btn btn-secondary"  for="option3">항공사순</label>
   </div>
</section>
<!------------------ ▼ 시간순 항공권 -------------------->
<!-- 가는날 -->
<section class="list-section air-list-section container" id="timedeplist">
   <p class="announc">가는날 항공편  총<span>${fn:length(timeOrder)}</span>개</p>
   <p class="announc announc-sub"> 성인 1인 기준 요금입니다.</p>
   <c:choose>
      <c:when test="${!empty timeOrder}">
         <c:forEach var="item" items="${timeOrder}" varStatus="val">
            <c:if test="${ item.economyCharge != null && item.prestigeCharge != null }">
               <!-- 상품1개 -->
               <div class="product clearfix">
                  <!-- 항공기 정보 -->
                  <div class="flight-box">
                     <div class="flight-info clearfix">
                           <c:choose>
                           <c:when test="${item.airlineNm == '아시아나항공'}">            
                              <p class="airline">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '대한 항공'}">            
                              <p class="airline airline2">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '진 에어'}">            
                              <p class="airline airline3">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '제주항공'}">            
                              <p class="airline airline4">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '이스타항공'}">            
                              <p class="airline airline5">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '에어부산'}">            
                              <p class="airline airline6">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           <c:otherwise>
                              <p class="airline airline7 online">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:otherwise>
                        </c:choose>
                        <!-- 이륙정보 -->
                        <p class="dep-info">${fn:substring({item.depPlandTime},9,11)}:${fn:substring({item.depPlandTime},11,13)}
                           <span class="airport">${item.depAirportNm}</span>
                        </p>
                        <p class="flight-time online">
                           <script>
                              fly("${item.depPlandTime}","${item.arrPlandTime}");
                           </script>
                        </p>
                        <!-- 착륙 정보 -->
                        <p class="arr-info">${fn:substring({item.arrPlandTime},9,11)}:${fn:substring({item.arrPlandTime},11,13)}
                           <span class="airport">${item.arrAirportNm}</span>
                        </p>
                     </div>
                  </div>
                  <!-- 항공기 정보 END -->
                  
                  <!-- 좌석 등급 별 가격 -->
                  <div class="price-box">
                     <div class="box">
                        <a class="product-picker" href="#" onclick="a('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.economyCharge}','${item.vihicleId}','${tripType}','time',${people})">
                           이코노미<span class="price">${item.economyCharge}</span>
                           <span class="won">원</span>
                        </a>
                        <p></p>
                     </div>
                     <c:if test="${item.prestigeCharge ne 0 }">
                        <div class="box">
                           <a class="product-picker" href="#" onclick="a('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.prestigeCharge}', '${item.vihicleId}','${tripType}','time', ${people})">
                              비지니스<span class="price">${item.prestigeCharge}</span>
                              <span class="won">원</span>
                           </a>
                        </div>
                     </c:if>
                  </div>
                  <!-- 좌석 등급별 가격 END -->
               </div>
               <!-- 상품1개 END -->
            </c:if>
         </c:forEach>
      </c:when>
      <c:otherwise>
         검색결과 없음.
      </c:otherwise>
   </c:choose> 
</section>

<!-- 오는날 -->
<section class="list-section air-list-section container" id="timearrlist" style="display: none">
   <p class="announc">오는날 항공편  총<span>${fn:length(timeOrder2)}</span>개</p>
   <p class="announc announc-sub"> 성인 1인 기준 요금입니다.</p>         
    <c:choose>
      <c:when test="${!empty timeOrder2}">
         <c:forEach var="item" items="${timeOrder2}" varStatus="val">
            <c:if test="${ item.economyCharge != null && item.prestigeCharge != null }">
               <!-- 상품1개 -->
               <div class="product clearfix">
                  <!-- 항공기 정보 -->
                  <div class="flight-box">
                     <div class="flight-info clearfix">
                        <c:choose>
                           <c:when test="${item.airlineNm == '아시아나항공'}">            
                              <p class="airline">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '대한 항공'}">            
                              <p class="airline airline2">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '진 에어'}">            
                              <p class="airline airline3">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '제주항공'}">            
                              <p class="airline airline4">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '이스타항공'}">            
                              <p class="airline airline5">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '에어부산'}">            
                              <p class="airline airline6">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:otherwise>
                              <p class="airline airline7 online">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:otherwise>
                        </c:choose>
                        <!-- 이륙 정보 -->
                        <p class="dep-info">${fn:substring({item.depPlandTime},9,11)}:${fn:substring({item.depPlandTime},11,13)}
                           <span class="airport">${item.depAirportNm}</span>
                        </p>
                        <p class="flight-time online">
                           <script>
                              fly("${item.depPlandTime}","${item.arrPlandTime}");
                           </script>
                        </p>
                        <!-- 착륙 정보  -->
                        <p class="arr-info">${fn:substring({item.arrPlandTime},9,11)}:${fn:substring({item.arrPlandTime},11,13)}
                           <span class="airport">${item.arrAirportNm}</span>
                        </p>
                     </div>
                  </div>
                  <!-- 항공기 정보 END -->
                  
                  <!-- 좌석 등급 별 가격 -->
                  <div class="price-box">
                     <div class="box">
                        <a class="product-picker" href="#" onclick="b('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.economyCharge}','${item.vihicleId}','time')">
                           이코노미<span class="price">${item.economyCharge}</span><span>원</span>
                        </a>
                     </div>
                     
                     <c:if test="${item.prestigeCharge ne 0 }">
                     <div class="box">
                        <a class="product-picker" href="#" onclick="b('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.prestigeCharge}', '${item.vihicleId}','time')">
                           비지니스<span class="price">${item.prestigeCharge}</span><span class="won">원</span>
                        </a>
                     </div>
                     </c:if>
                     
                  </div>
                  <!-- 좌석 등급별 가격 END -->
               </div>
               <!-- 상품1개 END -->
            </c:if>
         </c:forEach>
      </c:when>
      <c:otherwise>
      </c:otherwise>
   </c:choose> 
</section>

<!-------------------- ▲ 시간순 항공권 끝 -------------------->
      
<!-------------------- ▼ 가격순 항공권 -------------------->

<!-- 가는날 -->
<section class="list-section air-list-section container" id="pricedeplist" style="display: none">
   <p class="announc">가는날 항공편  총<span>${fn:length(price)}</span>개</p>
   <p class="announc announc-sub"> 성인 1인 기준 요금입니다.</p>
         <c:choose>
            <c:when test="${!empty price}">
            <c:forEach var="item" items="${price}" varStatus="val">
            <c:if test="${ item.economyCharge != null && item.prestigeCharge != null }">
               <!-- 상품1개 -->
               <div class="product clearfix">
                  <!-- 항공기 정보 -->
                  <div class="flight-box">
                     <div class="flight-info clearfix">
                        <c:choose>
                           <c:when test="${item.airlineNm == '아시아나항공'}">            
                              <p class="airline">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '대한 항공'}">            
                              <p class="airline airline2">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '진 에어'}">            
                              <p class="airline airline3">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '제주항공'}">            
                              <p class="airline airline4">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '이스타항공'}">            
                              <p class="airline airline5">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '에어부산'}">            
                              <p class="airline airline6">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:otherwise>
                              <p class="airline airline7 online">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:otherwise>
                        </c:choose>
                        <!-- 이륙정보 -->
                        <p class="dep-info">${fn:substring({item.depPlandTime},9,11)}:${fn:substring({item.depPlandTime},11,13)}
                           <span class="airport">${item.depAirportNm}</span>
                        </p>
                        <p class="flight-time online">
                           <script>
                              fly("${item.depPlandTime}","${item.arrPlandTime}");
                           </script>
                        </p>
                        
                        <!-- 착륙 정보 -->
                        <p class="arr-info">${fn:substring({item.arrPlandTime},9,11)}:${fn:substring({item.arrPlandTime},11,13)}
                           <span class="airport">${item.arrAirportNm}</span>
                        </p>
                     </div>
                  </div>
                  <!-- 항공기 정보 END -->
                  
                  <!-- 좌석 등급 별 가격 -->
                  <div class="price-box">
                     <div class="box">
                        <a class="price product-picker" href="#" onclick="a('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.economyCharge}','${item.vihicleId}','${tripType}','price',${people})">
                           <p class="">이코노미<span class="price">${item.economyCharge}</span><span>원</span></p>
                        </a>
                     </div>
                     
                     <c:if test="${item.prestigeCharge ne 0 }">
                        <div class="box">
                           <a class="product-picker" href="#" onclick="a('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.prestigeCharge}', '${item.vihicleId}','${tripType}','price',${people})">
                              <p class="price">비지니스<span class="price">${item.prestigeCharge}</span><span class="won">원</span></p>
                           </a>
                        </div>
                     </c:if>
                  </div>
                  <!-- 좌석 등급별 가격 END -->
               </div>
               <!-- 상품1개 END -->
            </c:if>
         </c:forEach>
      </c:when>
      <c:otherwise>
      </c:otherwise>
   </c:choose> 
</section>
      
<!-- 오는날 -->

<section class="list-section air-list-section container" id="pricearrlist" style="display: none">
   <p class="announc">오는날 항공편  총<span>${fn:length(price2)}</span>개</p>
   <p class="announc announc-sub"> 성인 1인 기준 요금입니다.</p>   
   <c:choose>
      <c:when test="${!empty price2}">
         <c:forEach var="item" items="${price2}" varStatus="val">
            <c:if test="${ item.economyCharge != null && item.prestigeCharge != null }">
                     <!-- 상품1개 -->
               <div class="product clearfix">
                  <!-- 항공기 정보 -->
                  <div class="flight-box">
                        <div class="flight-info clearfix">
                           <c:choose>
                           <c:when test="${item.airlineNm == '아시아나항공'}">            
                              <p class="airline">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '대한 항공'}">            
                              <p class="airline airline2">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '진 에어'}">            
                              <p class="airline airline3">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '제주항공'}">            
                              <p class="airline airline4">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '이스타항공'}">            
                              <p class="airline airline5">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '에어부산'}">            
                              <p class="airline airline6">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:otherwise>
                              <p class="airline airline7 online">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:otherwise>
                        </c:choose>
                        <!-- 이륙 정보 -->
                        <p class="dep-info">${fn:substring({item.depPlandTime},9,11)}:${fn:substring({item.depPlandTime},11,13)}
                           <span class="airport">${item.depAirportNm}</span>
                        </p>
                        <p class="flight-time online">
                           <script>
                              fly("${item.depPlandTime}","${item.arrPlandTime}");
                           </script>
                        </p>
                        
                        <!-- 착륙 정보 -->
                        <p class="arr-info">${fn:substring({item.arrPlandTime},9,11)}:${fn:substring({item.arrPlandTime},11,13)}
                           <span class="airport">${item.arrAirportNm}</span>
                        </p>
                     </div>
                  </div>
                  <!-- 항공기 정보 END -->
                  
                  <!-- 좌석 등급 별 가격 -->
                  <div class="price-box">
                     <div class="box">
                        <a class="product-picker" href="#" onclick="b('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.economyCharge}','${item.vihicleId}','price')">
                           이코노미<span class="price">${item.economyCharge}</span><span>원</span>
                        </a>
                     </div>
                     
                     <c:if test="${item.prestigeCharge ne 0 }">
                        <div class="box">
                           <a class="product-picker" href="#" onclick="b('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.prestigeCharge}','${item.vihicleId}','price')">
                              비지니스<span class="price">${item.prestigeCharge}</span><span class="won">원</span>
                           </a>
                        </div>
                     </c:if>
                  </div>
               </div>
            <!-- 상품1개 END -->
            </c:if>
         </c:forEach>
      </c:when>
      <c:otherwise>
      </c:otherwise>
   </c:choose> 
</section>

<!-------------------- ▲ 가격순 항공권 -------------------->


<!-------------------- ▼ 항공권순 항공권 -------------------->
<!-- 가는날 -->
<section class="list-section air-list-section container" id="linedeplist" style="display: none">

   <p class="announc">가는날 항공편  총<span>${fn:length(line)}</span>개</p>
   <p class="announc announc-sub"> 성인 1인 기준 요금입니다.</p>
         <c:choose>
            <c:when test="${!empty line}">
            <c:forEach var="item" items="${line}" varStatus="val">
            <c:if test="${ item.economyCharge != null && item.prestigeCharge != null }">
               <!-- 상품1개 -->
               <div class="product clearfix">
                  <!-- 항공기 정보 -->
                  <div class="flight-box">
                     <div class="flight-info clearfix">
                        <c:choose>
                           <c:when test="${item.airlineNm == '아시아나항공'}">            
                              <p class="airline">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '대한 항공'}">            
                              <p class="airline airline2">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '진 에어'}">            
                              <p class="airline airline3">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '제주항공'}">            
                              <p class="airline airline4">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '이스타항공'}">            
                              <p class="airline airline5">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '에어부산'}">            
                              <p class="airline airline6">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:otherwise>
                              <p class="airline airline7 online">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:otherwise>
                        </c:choose>
                        <!-- 이륙정보 -->
                        <p class="dep-info">${fn:substring({item.depPlandTime},9,11)}:${fn:substring({item.depPlandTime},11,13)}
                           <span class="airport">${item.depAirportNm}</span>
                        </p>
                        <p class="flight-time online">
                           <script>
                              fly("${item.depPlandTime}","${item.arrPlandTime}");
                           </script>
                        </p>
                        
                        <!-- 착륙 정보 -->
                        <p class="arr-info">${fn:substring({item.arrPlandTime},9,11)}:${fn:substring({item.arrPlandTime},11,13)}
                           <span class="airport">${item.arrAirportNm}</span>
                        </p>
                     </div>
                  </div>
                  <!-- 항공기 정보 END -->
                  
                  <!-- 좌석 등급 별 가격 -->
                  <div class="price-box">
                     <div class="box">
                        <a class="product-picker" href="#" onclick="a('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.economyCharge}','${item.vihicleId}','${tripType}','line',${people})">
                           이코노미<span class="price">${item.economyCharge}</span><span>원</span>
                        </a>
                     </div>
                     
                     <c:if test="${item.prestigeCharge ne 0 }">
                        <div class="box">
                           <a class="product-picker" href="#" onclick="a('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.prestigeCharge}', '${item.vihicleId}','${tripType}','line',${people})">
                              비지니스<span class="price">${item.prestigeCharge}</span><span class="won">원</span>
                           </a>
                        </div>
                     </c:if>
                  </div>
                  <!-- 좌석 등급별 가격 END -->
               </div>
               <!-- 상품1개 END -->
            </c:if>
         </c:forEach>
      </c:when>
      <c:otherwise>
      </c:otherwise>
   </c:choose> 
</section>
      
<!-- 오는날 -->
<section class="list-section air-list-section container" id="linearrlist" style="display: none">
   <p class="announc">오는날 항공편  총<span>${fn:length(line2)}</span>개</p>
   <p class="announc announc-sub"> 성인 1인 기준 요금입니다.</p>   
   <c:choose>
      <c:when test="${!empty line2}">
         <c:forEach var="item" items="${line2}" varStatus="val">
            <c:if test="${ item.economyCharge != null && item.prestigeCharge != null }">
                     <!-- 상품1개 -->
               <div class="product clearfix">
                  <!-- 항공기 정보 -->
                  <div class="flight-box">
                        <div class="flight-info clearfix">
                           <c:choose>
                           <c:when test="${item.airlineNm == '아시아나항공'}">            
                              <p class="airline">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '대한 항공'}">            
                              <p class="airline airline2">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '진 에어'}">            
                              <p class="airline airline3">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '제주항공'}">            
                              <p class="airline airline4">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '이스타항공'}">            
                              <p class="airline airline5">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:when test="${item.airlineNm == '에어부산'}">            
                              <p class="airline airline6">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:when>
                           
                           <c:otherwise>
                              <p class="airline airline7 online">${item.airlineNm}<span>${item.vihicleId}</span></p>
                           </c:otherwise>
                        </c:choose>
                        <!-- 이륙 정보 -->
                        <p class="dep-info">${fn:substring({item.depPlandTime},9,11)}:${fn:substring({item.depPlandTime},11,13)}
                           <span class="airport">${item.depAirportNm}</span>
                        </p>
                        <p class="flight-time online">
                           <script>
                              fly("${item.depPlandTime}","${item.arrPlandTime}");
                           </script>
                        </p>
                        
                        <!-- 착륙 정보 -->
                        <p class="arr-info">${fn:substring({item.arrPlandTime},9,11)}:${fn:substring({item.arrPlandTime},11,13)}
                           <span class="airport">${item.arrAirportNm}</span>
                        </p>
                     </div>
                  </div>
                  <!-- 항공기 정보 END -->
                  
                  <!-- 좌석 등급 별 가격 -->
                  <div class="price-box">
                     <div class="box">
                        <a class="product-picker" href="#" onclick="b('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.economyCharge}','${item.vihicleId}','line')">
                           이코노미<span class="price">${item.economyCharge}</span><span>원</span>
                        </a>
                     </div>
                     
                     <c:if test="${item.prestigeCharge ne 0 }">
                        <div class="box">
                           <a class="product-picker" href="#" onclick="b('${item.airlineNm}','${item.depPlandTime}','${item.arrPlandTime}','${item.depAirportNm}','${item.arrAirportNm}','${item.economyCharge}','${item.vihicleId}','line')">
                              비지니스<span class="price">${item.prestigeCharge}</span><span class="won">원</span>
                           </a>
                        </div>
                     </c:if>
                     
                  </div>
               </div>
            <!-- 상품1개 END -->
            </c:if>
         </c:forEach>
      </c:when>
      <c:otherwise>
      </c:otherwise>
   </c:choose> 
</section>
<!-------------------- ▲ 항공권순 항공권 -------------------->
<!--■■■■■■■■■■■■■■■■ ▲ 검색 목록 영역 끝! ■■■■■■■■■■■■■■■■-->
      
<%@include file="../include/footer.jsp" %>