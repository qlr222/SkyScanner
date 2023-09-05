<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="include/header.jsp" %>
   
   <!--about-us start -->
   <section class="about-us">
      <div class="container">
         <div class="about-us-content">
            <div class="row">
               <div class="col-sm-12">
                  <div class="single-about-us">
                     <div class="about-us-txt">
                        <h2>
                           Explore the Beauty of the Beautiful World
                        </h2>
                     </div><!--/.about-us-txt-->
                  </div><!--/.single-about-us-->
               </div><!--/.col-->
               <div class="col-sm-0">
                  <div class="single-about-us">
   
                  </div><!--/.single-about-us-->
               </div><!--/.col-->
            </div><!--/.row-->
         </div><!--/.about-us-content-->
      </div><!--/.container-->
   
   </section><!--/.about-us-->
   <!--about-us end -->
   
   <!--travel-box start-->
   <section class="travel-box">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <div class="single-travel-boxes">
                        <div id="desc-tabs" class="desc-tabs">
   
                     <ul class="nav nav-tabs" role="tablist">
   
                        <li role="presentation">
                            <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">
                               <i class="fa fa-plane"></i>
                               항공권
                            </a>
                        </li>
   
                        <li role="presentation">
                           <a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">
                              <i class="fa fa-building"></i>
                              호텔
                           </a>
                        </li>
   
                        <li role="presentation" class="active">
                            <a href="#tours" aria-controls="tours" role="tab" data-toggle="tab">
                               <i class="fa fa-car"></i>
                               렌터카
                            </a>
                        </li>
   
                     </ul>
   
                     <!-- Tab panes -->
                     <div class="tab-content">
   
                        <div role="tabpanel" class="tab-pane active fade in" id="flights">
                           <div class="tab-para">
                              <div class="trip-circle">
                                 <div class="single-trip-circle">
                                    <input type="radio" id="radio01" name="radio" checked />
                                    <label for="radio01">
                                       <span class="round-boarder">
                                          <span class="round-boarder1"></span>
                                       </span>round trip(왕복)
                                    </label>
                                 </div><!--/.single-trip-circle-->
                                 <div class="single-trip-circle">
                                    <input type="radio" id="radio02" name="radio" />
                                    <label for="radio02">
                                       <span class="round-boarder">
                                          <span class="round-boarder1"></span>
                                       </span>on way(편도)
                                    </label>
                                 </div><!--/.single-trip-circle-->
                              </div><!--/.trip-circle-->
   
                              <!-- Round-trip -->
                              <form action="<%=request.getContextPath()%>/air?cmd=airView" method="POST">
                                 <div id="roundTrip">
                                    <div class="row">
                                       <!-- From -->
                                       <div class="col-sm-6">
                                          <div class="single-tab-select-box">

                                             <h2>출발지</h2>

                                             <div class="travel-select-icon">
                                                <select class="form-control " name="depairport" required>

                                                   <option value="">출발지를 선택하세요.</option><!-- /.option-->
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

                                                </select><!-- /.select-->
                                             </div><!-- /.travel-select-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- To -->
                                       <div class="col-sm-6">
                                          <div class="single-tab-select-box">

                                             <h2>도착지</h2>

                                             <div class="travel-select-icon">
                                                <select class="form-control " name="arrairport">

                                                   <option value="default">도착지를 선택하세요.</option><!-- /.option-->

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
                                                </select><!-- /.select-->
                                             </div><!-- /.travel-select-icon -->

                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Departure -->
                                       <div class="col-sm-3">
                                          <div class="single-tab-select-box">
                                             <h2>가는 날</h2>
                                             <div class="travel-check-icon">
                                                   <input type="text" name="depdate" class="form-control" data-toggle="datepicker" placeholder="날짜 선택">
                                             </div><!-- /.travel-check-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Return -->
                                       <div class="col-sm-3">
                                          <div class="single-tab-select-box">
                                             <h2>오는 날</h2>
                                             <div class="travel-check-icon">
                                                   <input type="text" name="depdate2" class="form-control" data-toggle="datepicker" placeholder="날짜 선택">
                                             </div><!-- /.travel-check-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Class -->
                                       <div class="col-sm-3">
                                          <div class="single-tab-select-box">

                                             <h2>클래스</h2>
                                             <div class="travel-select-icon">
                                                <select class="form-control ">

                                                   <option value="default">클래스를 선택하세요.</option><!-- /.option-->

                                                   <option value="A">A</option><!-- /.option-->

                                                   <option value="B">B</option><!-- /.option-->
                                                   <option value="C">C</option><!-- /.option-->

                                                </select><!-- /.select-->
                                             </div><!-- /.travel-select-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Person -->
                                       <div class="col-sm-3">
                                          <div class="single-tab-select-box">

                                             <h2>인원</h2>
                                             <div class="travel-select-icon">
                                                <select class="form-control " name="people" required>

                                                   <option value="">인원을 선택하세요.</option><!-- /.option-->

                                                   <option value="1">1</option><!-- /.option-->

                                                   <option value="2">2</option><!-- /.option-->
                                                   <option value="3">3</option><!-- /.option-->

                                                </select><!-- /.select-->
                                             </div><!-- /.travel-select-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Search-btn -->
                                       <div class="col-lg-12 search-btn">
                                          <div class="about-btn pull-right">
                                             <button  class="about-view travel-btn">
                                                search
                                             </button><!--/.travel-btn-->
                                          </div><!--/.about-btn-->
                                       </div><!--/.col-->
                                    </div><!--/.row-->
                                 </div>
                                 </form>
   
                              <!-- Single-trip -->
                              <form action="<%=request.getContextPath()%>/air?cmd=airView" method="POST">
                                 <div id="singleTrip" style="display: none">
                                    <div class="row">
                                       <!-- From -->
                                       <div class="col-sm-6">
                                          <div class="single-tab-select-box">

                                             <h2>출발지</h2>

                                             <div class="travel-select-icon">
                                                <select class="form-control " name="depairport">

                                                   <option value="">출발지를 선택하세요.</option><!-- /.option-->

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

                                                </select><!-- /.select-->
                                             </div><!-- /.travel-select-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- To -->
                                       <div class="col-sm-6">
                                          <div class="single-tab-select-box">

                                             <h2>도착지</h2>

                                             <div class="travel-select-icon">
                                                <select class="form-control " name="arrairport">

                                                   <option value="">도착지를 선택하세요.</option><!-- /.option-->

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

                                                </select><!-- /.select-->
                                             </div><!-- /.travel-select-icon -->

                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Departure -->
                                       <div class="col-sm-6">
                                          <div class="single-tab-select-box">
                                             <h2>가는 날</h2>
                                             <div class="travel-check-icon">
                                                   <input type="text" name="depdate" class="form-control" data-toggle="datepicker" placeholder="날짜 선택">
                                             </div><!-- /.travel-check-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Class -->
                                       <div class="col-sm-3">
                                          <div class="single-tab-select-box">

                                             <h2>클래스</h2>
                                             <div class="travel-select-icon">
                                                <select class="form-control ">

                                                   <option value="default">클래스를 선택하세요.</option><!-- /.option-->

                                                   <option value="A">A</option><!-- /.option-->

                                                   <option value="B">B</option><!-- /.option-->
                                                   <option value="C">C</option><!-- /.option-->

                                                </select><!-- /.select-->
                                             </div><!-- /.travel-select-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Person -->
                                       <div class="col-sm-3">
                                          <div class="single-tab-select-box">

                                             <h2>인원</h2>
                                             <div class="travel-select-icon">
                                                <select class="form-control " name="people" required>

                                                   <option value="">인원을 선택하세요.</option><!-- /.option-->

                                                   <option value="1">1</option><!-- /.option-->

                                                   <option value="2">2</option><!-- /.option-->
                                                   <option value="3">3</option><!-- /.option-->

                                                </select><!-- /.select-->
                                             </div><!-- /.travel-select-icon -->
                                          </div><!--/.single-tab-select-box-->
                                       </div><!--/.col-->
                                       <!-- Search-btn -->
                                       <div class="col-lg-12 search-btn">
                                          <div class="about-btn pull-right">
                                             <button  class="about-view travel-btn">
                                                search
                                             </button><!--/.travel-btn-->
                                          </div><!--/.about-btn-->
                                       </div><!--/.col-->
                                    </div><!--/.row-->
                                 </div>
                                 </form>
                           </div>
   
                        </div><!--/.tabpannel-->
<!-- 호텔  -->
                        <div role="tabpanel" class="tab-pane fade in" id="hotels">
                        <form method="post" action="<%=request.getContextPath()%>/hotel?cmd=hotelView" >
                           <div class="tab-para">
                              <div class="row">
                                 <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="single-tab-select-box">
                                       <h2>destination</h2>
                                       <div class="col-lg-6 col-md-6 travel-select-icon">
                                          <select name="areaCode" id="selOne" onchange="doChange(this, 'selTwo')" class="form-control">
                                               <option value="0">지역을 선택하세요</option><!-- /.option-->
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
                                       </div>                        
                                       <div class="col-lg-6 col-md-6 travel-select-icon">
                                          <select name="sigunguCode" id="selTwo" class="form-control ">
                                                 <option value="0">상세지역을 선택하세요</option>
                                             </select>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div class="row">
                                 <div class="col-sm-5"></div>
                                 <div class="clo-sm-7">
                                    <div class="about-btn travel-mrt-0 pull-right">
                                       <button  class="about-view travel-btn" type="submit">
                                          search
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           </form>
                        </div>
<!-- 호텔  -->   
                        <div role="tabpanel" class="tab-pane fade in" id="tours">
                           <div class="tab-para">
   
                              <div class="row">
                                 <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="single-tab-select-box">
   
                                       <h2>destination</h2>
   
                                       <div class="travel-select-icon">
                                          <select class="form-control ">
   
                                               <option value="default">enter your destination country</option><!-- /.option-->
   
                                               <option value="turkey">turkey</option><!-- /.option-->
   
                                               <option value="russia">russia</option><!-- /.option-->
                                               <option value="egept">egypt</option><!-- /.option-->
   
                                          </select><!-- /.select-->
                                       </div><!-- /.travel-select-icon -->
   
                                       <div class="travel-select-icon">
                                          <select class="form-control ">
   
                                               <option value="default">enter your destination location</option><!-- /.option-->
   
                                               <option value="istambul">istambul</option><!-- /.option-->
   
                                               <option value="mosko">mosko</option><!-- /.option-->
                                               <option value="cairo">cairo</option><!-- /.option-->
   
                                          </select><!-- /.select-->
                                       </div><!-- /.travel-select-icon -->
   
                                    </div><!--/.single-tab-select-box-->
                                 </div><!--/.col-->
   
                                 <div class="col-lg-2 col-md-3 col-sm-4">
                                    <div class="single-tab-select-box">
                                       <h2>check in</h2>
                                       <div class="travel-check-icon">
                                          <form action="#">
                                             <input type="text" name="check_in" class="form-control" data-toggle="datepicker" placeholder="2018/00/00">
                                          </form>
                                       </div><!-- /.travel-check-icon -->
                                    </div><!--/.single-tab-select-box-->
                                 </div><!--/.col-->
   
                                 <div class="col-lg-2 col-md-3 col-sm-4">
                                    <div class="single-tab-select-box">
                                       <h2>check out</h2>
                                       <div class="travel-check-icon">
                                          <form action="#">
                                             <input type="text" name="check_out" class="form-control"  data-toggle="datepicker" placeholder="2018/00/00">
                                          </form>
                                       </div><!-- /.travel-check-icon -->
                                    </div><!--/.single-tab-select-box-->
                                 </div><!--/.col-->
   
                                 <div class="col-lg-2 col-md-1 col-sm-4">
                                    <div class="single-tab-select-box">
                                       <h2>duration</h2>
                                       <div class="travel-select-icon">
                                          <select class="form-control ">
   
                                               <option value="default">5</option><!-- /.option-->
   
                                               <option value="10">10</option><!-- /.option-->
   
                                               <option value="15">15</option><!-- /.option-->
                                               <option value="20">20</option><!-- /.option-->
   
                                          </select><!-- /.select-->
                                       </div><!-- /.travel-select-icon -->
                                    </div><!--/.single-tab-select-box-->
                                 </div><!--/.col-->
   
                                 <div class="col-lg-2 col-md-1 col-sm-4">
                                    <div class="single-tab-select-box">
                                       <h2>members</h2>
                                       <div class="travel-select-icon">
                                          <select class="form-control ">
   
                                               <option value="default">1</option><!-- /.option-->
   
                                               <option value="2">2</option><!-- /.option-->
   
                                               <option value="4">4</option><!-- /.option-->
                                               <option value="8">8</option><!-- /.option-->
   
                                          </select><!-- /.select-->
                                       </div><!-- /.travel-select-icon -->
                                    </div><!--/.single-tab-select-box-->
                                 </div><!--/.col-->
   
                              </div><!--/.row-->
   
                              <div class="row">
                                 <div class="col-sm-5">
                                    <div class="travel-budget">
                                       <div class="row">
                                          <div class="col-md-3 col-sm-4">
                                             <h3>budget : </h3>
                                          </div><!--/.col-->
                                          <div class="co-md-9 col-sm-8">
                                             <div class="travel-filter">
                                                <div class="info_widget">
                                                   <div class="price_filter">
   
                                                      <div id="slider-range"></div><!--/.slider-range-->
   
                                                      <div class="price_slider_amount">
                                                         <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                                      </div><!--/.price_slider_amount-->
                                                   </div><!--/.price-filter-->
                                                </div><!--/.info_widget-->
                                             </div><!--/.travel-filter-->
                                          </div><!--/.col-->
                                       </div><!--/.row-->
                                    </div><!--/.travel-budget-->
                                 </div><!--/.col-->
                                 <div class="clo-sm-7">
                                    <div class="about-btn travel-mrt-0 pull-right">
                                       <button  class="about-view travel-btn">
                                          search
                                       </button><!--/.travel-btn-->
                                    </div><!--/.about-btn-->
                                 </div><!--/.col-->
   
                              </div><!--/.row-->
   
                           </div><!--/.tab-para-->
   
                        </div><!--/.tabpannel-->
   
                     </div><!--/.tab content-->
                  </div><!--/.desc-tabs-->
                     </div><!--/.single-travel-box-->
                  </div><!--/.col-->
               </div><!--/.row-->
            </div><!--/.container-->
   
         </section><!--/.travel-box-->
   <!--travel-box end-->
   
         <!--service start-->
   <section class="service">
      <div class="container">
   
         <div class="service-counter text-center">
   
            <div class="col-md-4 col-sm-4">
               <div class="single-service-box">
                  <div class="service-img">
                     <img src="assets/images/service/s1.png" alt="service-icon" />
                  </div><!--/.service-img-->
                  <div class="service-content">
                     <h2>어디든 떠나세요!</h2>
                     <p>가고자 하는 어디든 좋아요. 지칠 땐 한 번쯤 멀리 떠나봐요.</p>
                  </div><!--/.service-content-->
               </div><!--/.single-service-box-->
            </div><!--/.col-->
   
            <div class="col-md-4 col-sm-4">
               <div class="single-service-box">
                  <div class="service-img">
                     <img src="assets/images/service/s2.png" alt="service-icon" />
                  </div><!--/.service-img-->
                  <div class="service-content">
                     <h2>언제든 호캉스!</h2>
                     <p>전망 좋은 곳에서 보내는 하루는 짜릿하죠.</p>
                  </div><!--/.service-content-->
               </div><!--/.single-service-box-->
            </div><!--/.col-->
   
            <div class="col-md-4 col-sm-4">
               <div class="single-service-box">
                  <div class="statistics-img">
                     <img src="assets/images/service/s3.png" alt="service-icon" />
                  </div><!--/.service-img-->
                  <div class="service-content">
                     <h2>비행기 타고 슝!</h2>
                     <p>이륙할 때 두근거림은 정말 최고예요.</p>
                  </div><!--/.service-content-->
               </div><!--/.single-service-box-->
            </div><!--/.col-->
   
         </div><!--/.statistics-counter-->
      </div><!--/.container-->
   
   </section><!--/.service-->
   <!--service end-->
   
   <!--galley start-->
   <section class="gallery">
      <div class="container">
         <div class="gallery-details">
            <div class="gallary-header text-center">
               <h2>top destination</h2>
               <p>다들 어디로 떠나는 걸까요? 인기있는 여행지를 한 눈에 확인하세요!</p>
            </div><!--/.gallery-header-->
            <div class="gallery-box">
               <div class="gallery-content">
                    <div class="filtr-container">
                       <div class="row">
   
                          <div class="col-md-6">
                             <div class="filtr-item">
                              <img src="assets/images/gallary/praha.jpg" alt="portfolio image"/>
                              <div class="item-title">
                                 <p class="item-title-text">Praha</p>
                                 <p><span>20 tours</span><span>15 places</span></p>
                              </div><!-- /.item-title -->
                           </div><!-- /.filtr-item -->
                          </div><!-- /.col -->
   
                          <div class="col-md-6">
                             <div class="filtr-item">
                              <img src="assets/images/gallary/canada.jpg" alt="portfolio image"/>
                              <div class="item-title">
                                 <p class="item-title-text">canada</p>
                                 <p><span>12 tours</span><span>9 places</span></p>
                              </div> <!-- /.item-title-->
                           </div><!-- /.filtr-item -->
                          </div><!-- /.col -->
   
                          <div class="col-md-4">
                             <div class="filtr-item">
                              <img src="assets/images/gallary/osaka.jpg" alt="portfolio image"/>
                              <div class="item-title">
                                 <p class="item-title-text">Osaka</p>
                                 <p><span>25 tours</span><span>10 places</span></p>
                              </div><!-- /.item-title -->
                           </div><!-- /.filtr-item -->
                          </div><!-- /.col -->
   
                          <div class="col-md-4">
                             <div class="filtr-item">
                              <img src="assets/images/gallary/g4.jpg" alt="portfolio image"/>
                              <div class="item-title">
                                 <p class="item-title-text">australia</p>
                                 <p><span>18 tours</span><span>9 places</span></p>
                              </div> <!-- /.item-title-->
                           </div><!-- /.filtr-item -->
                          </div><!-- /.col -->
   
                          <div class="col-md-4">
                             <div class="filtr-item">
                              <img src="assets/images/gallary/newyork.jpg" alt="portfolio image"/>
                              <div class="item-title">
                                 <p class="item-title-text">newyork</p>
                                 <p><span>14 tours</span><span>12 places</span></p>
                              </div> <!-- /.item-title-->
                           </div><!-- /.filtr-item -->
                          </div><!-- /.col -->
   
                          <div class="col-md-8">
                             <div class="filtr-item">
                              <img src="assets/images/gallary/cebu.jpg" alt="portfolio image"/>
                              <div class="item-title">
                                 <p class="item-title-text">cebu</p>
                                 <p><span>14 tours</span><span>6 places</span></p>
                              </div> <!-- /.item-title-->
                           </div><!-- /.filtr-item -->
                          </div><!-- /.col -->
   
                       </div><!-- /.row -->
   
                    </div><!-- /.filtr-container-->
               </div><!-- /.gallery-content -->
            </div><!--/.galley-box-->
         </div><!--/.gallery-details-->
      </div><!--/.container-->
   
   </section><!--/.gallery-->
   <!--gallery end-->
   
   <!--google map start-->
   <section class="googlemap">
   
      <script>
         function initialize() {
   
            var Y_point         = 35.156219;
            var X_point         = 129.059525;
   
            var zoomLevel      = 16;
   
            var markerTitle      = "테스트";
            var markerMaxWidth   = 300;
   
            var contentString   = '<div>' +
            '<h2>야임마</h2>'+
            '<p>반갑다</p>'+
            '</div>';
   
            var myLatlng = new google.maps.LatLng(Y_point, X_point);
            var mapOptions = {
                           zoom: zoomLevel,
                           center: myLatlng,
                           mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);
   
            var marker = new google.maps.Marker({
                                          position: myLatlng,
                                          map: map,
                                          title: markerTitle
            });
   
            var infowindow = new google.maps.InfoWindow(
                                             {
                                                content: contentString,
                                                maxWidth: markerMaxWidth
                                             }
            );
   
            google.maps.event.addListener(marker, 'click', function() {
               infowindow.open(map, marker);
            });
         }
      </script>
      <div id="map_view"></div>
   </section>
   <!--google map end-->
   
   <!--packages start-->
   <section class="packages">
      <div class="container">
         <div class="gallary-header text-center">
            <h2>Special Ticket</h2>
            <p>이 달의 특가 항공권! 이 기회를 놓치지 마세요!</p>
         </div><!--/.gallery-header-->
         <div class="packages-content">
            <div class="row">
   
               <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                     <img src="assets/images/packages/p9.jpg" alt="package-place">
                     <div class="single-package-item-txt">
                        <h3>제주 <span class="pull-right">편도 40,500원~</span></h3>
                        <div class="packages-para">
                           <p>
                              <span>
                                 <i class="fa fa-angle-right"></i> 김포 - 제주
                              </span>
                           </p>
                           <p>
                              <span>
                                 <i class="fa fa-angle-right"></i>  7월 1일 ~ 12월 31일
                              </span>
                            </p>
                        </div><!--/.packages-para-->
                        <div class="about-btn">
                           <button  class="about-view packages-btn">
                              예약하기
                           </button>
                        </div><!--/.about-btn-->
                     </div><!--/.single-package-item-txt-->
                  </div><!--/.single-package-item-->
   
               </div><!--/.col-->
   
               <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                     <img src="assets/images/packages/p8.jpg" alt="package-place">
                     <div class="single-package-item-txt">
                        <h3>부산 <span class="pull-right">편도 25,700원~</span></h3>
                        <div class="packages-para">
                           <p>
                              <span>
                                 <i class="fa fa-angle-right"></i> 김포 - 부산
                              </span>
                           </p>
                           <p>
                              <span>
                                 <i class="fa fa-angle-right"></i>  7월 1일 ~ 12월 31일
                              </span>
                            </p>
                        </div><!--/.packages-para-->
                        <div class="about-btn">
                           <button  class="about-view packages-btn">
                              예약하기
                           </button>
                        </div><!--/.about-btn-->
                     </div><!--/.single-package-item-txt-->
                  </div><!--/.single-package-item-->
   
               </div><!--/.col-->
   
               <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                     <img src="assets/images/packages/p7.jpg" alt="package-place">
                     <div class="single-package-item-txt">
                        <h3>제주 <span class="pull-right">편도 38,900원~</span></h3>
                        <div class="packages-para">
                           <p>
                              <span>
                                 <i class="fa fa-angle-right"></i> 부산 - 제주
                              </span>
                           </p>
                           <p>
                              <span>
                                 <i class="fa fa-angle-right"></i>  7월 1일 ~ 12월 31일
                              </span>
                            </p>
                        </div><!--/.packages-para-->
                        <div class="about-btn">
                           <button  class="about-view packages-btn">
                              예약하기
                           </button>
                        </div><!--/.about-btn-->
                     </div><!--/.single-package-item-txt-->
                  </div><!--/.single-package-item-->
   
               </div><!--/.col-->
   
            </div><!--/.row-->
         </div><!--/.packages-content-->
      </div><!--/.container-->
   
   </section><!--/.packages-->
   <!--packages end-->
   
   <!--subscribe start-->
   <section class="subscribe">
      <div class="container">
         <div class="subscribe-title text-center">
            <h2>
               Join with SkyScanner!
            </h2>
            <p>
               당신의 여행, 스카이스캐너와 함께 하세요!
            </p>
         </div>
      </div>
   
   </section>
   <!--subscribe end-->

<%@include file="include/footer.jsp" %>