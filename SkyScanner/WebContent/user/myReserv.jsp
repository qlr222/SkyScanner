<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="../include/headerSub.jsp" %>
	<!--popup start -->
   <section class="my-page">

      <div class="modal fade" id="popup" role="dialog">
         <div class="modal-dialog">

            <!-- Modal content : payment -->
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">×</button>
                  <h4 class="modal-title">취소/환불 안내</h4>
               </div>

               <div class="modal-body">
                  취소/환불 수수료 안내
               </div>

               <div class="modal-footer">
                  <button type="button" class="" data-dismiss="modal">닫기</button>
               </div>

            </div>
         </div>
      </div>

      <div class="container">
         <!--my page-->
         <div class="wrapper">

            <!-- reservation history -->
            <div class="user-box detail-box">
				<div class="box-header mb-2r">
				   <a href="#" onclick="history.back();"><i class="fa fa-angle-left"></i></a> <h4 class="header-title">예약내역</h4>
				   <a href="#" data-toggle="modal" data-target="#popup" class="link float-right">취소/환불 안내</a>
				</div>

				<!-- detail -->
				<div class="resv-table">
					
					<div class="resv-info mb-2r">
						<ul>
							<li>
								<p class="info-title">예약일</p>
								<p class="info-no">201888888</p>
            				</li>
        					<li>
								<p class="info-title">항공정보</p>
								<p class="info-no">아시아나 항공</p>
							</li>
							<li>
								<p class="info-title">탑승인원</p>
								<p class="info-no">00명</p>
							</li>
						</ul>					
					</div>
							
					<div class="ticket-info">
						<ul>
							<li>
								<div class="trip-date on">
									<p class="trip-title">출발 공항</p>
									<p class="trip-airport">어디어디 <span>201939393</span></p>
								</div>
							</li>
							<li>
								<div class="trip-date on">
									<p class="trip-title">도착 공항</p>
									<p class="trip-airport">어디어디 <span>201939393</span></p>
								</div>
							</li>												
							<li>
								<div class="trip-date">
									<p class="trip-title">결제정보</p>
							    	<p class="text-price">380,400원(신용카드)</p>
									<p class="text-success">예약완료</p>
									<!-- 결제 안했을 때 결제하기와 예약 취소 : 분기할 때 이 div의 id를 이용하자 -->
									<div id="#">
								   		<input type="button" name="resv-payment" value="결제하기" class="basic-btn pay-btn">
								   		<input type="button" name="resv-cancel" value="예약취소" class="basic-btn cancel-btn">
									</div>
								</div>
							</li>
						</ul>
					</div>
					
				</div>
               
               <!-- <div class="resv-table">
                  <form action="#" method="post">
                     <table class="table">
                        <tbody>
                           <tr>
                              <th>예약정보</th>
                              <td>
                                 <p class="info-no">20180920172500000000</p>
                                 <p class="info-date">2018/09/20 17:25</p>
                              </td>
                           </tr>

                           <tr>
                              <th>항공정보</th>
                              <td>
                                 <p>아시아나 항공</p>
                                 <p>탑승인원 2명</p>
                              </td>
                           </tr>

                           <tr>
                              <th>일정</th>
                              <td class="trip-date">
                                 <p class="trip-title">가는 날</p>
                                 <p><span class="trip-airport">김포</span> 2018/09/26 06:05</p>
                                 <p class="trip-title">오는 날</p>
                                 <p><span class="trip-airport">제주</span> 2018/09/31 17:05</p>
                              </td>
                           </tr>

                           <tr>
                              <th>결제</th>
                              <td>
                                 <p class="text-price">380,400원</p>
                                 결제 했을 때
                                 <p class="text-success">예약완료</p>
                                 결제 안했을 때
                                 <p class="text-standby">예약대기</p>
                                 예약 취소햇을 때
                                 <p class="text-cancel">예약취소</p>

                                 결제 했을 때, 안했을 때 예약 취소
                                 <input type="button" name="resv-cancel" value="예약취소" class="basic-btn cancel-btn">
                                 결제 안했을 때 결제하기와 예약 취소 : 분기할 때 이 div의 id를 이용하자
                                 <div id="#">
                                    <input type="button" name="resv-payment" value="결제하기" class="basic-btn pay-btn">
                                    <input type="button" name="resv-cancel" value="예약취소" class="basic-btn cancel-btn">
                                 </div>

                                 시연용 예약하기 버튼
                                 <input type="button" name="resv-cancel" value="예약하기" class="basic-btn resv-btn">

                                 예약 취소 했을 땐 버튼 아무것도 안보임
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </form>
               </div> -->

               <%-- <c:forEach var="item" items="${Ticket}" varStatus="var">
					<div class="resv-table">
						<ul>
							<li class="resv-info">
								<p class="info-title">예약정보</p>
								<p class="info-no">${fn:substring({item.reserveNum},1,17)}</p>
								<!-- <p class="info-date">2018/09/20 17:25</p> -->
								<a href="<%=request.getContextPath()%>/member?cmd=memberReserve&num=${item.num}" class="info-more-btn">상세내역</a>
							</li>
							<li>
								<div class="ticket-info">
									<ul>
										<li>
											<p>${item.airlineNm}</p>
											<p>탑승인원 ${people.get(var.index) }명</p>
											<p><span class="text-price">${item.economyCharge }원</span> <span class="text-success">예약완료</span></p>
										</li>

										<li>
											<div class="trip-date">
												<p class="trip-title">출발 공항</p>
												<p><span class="trip-airport">${item.depAirportNm}</span> ${fn:substring({item.depPlandTime},1,13)}</p>
											</div>
											<div class="trip-date">
												<p class="trip-title">도착 공항</p>
												<p><span class="trip-airport">${item.arrAirportNm}</span> ${fn:substring({item.arrPlandTime},1,13)}</p>
											</div>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
					</c:forEach> --%>					
				</div>
				
            </div>
         </div>
      </div>
      <!--/.container-->

   </section>
   <!--/.member-page-->
   <!--member-page end -->
		

<%@include file="../include/footer.jsp" %>