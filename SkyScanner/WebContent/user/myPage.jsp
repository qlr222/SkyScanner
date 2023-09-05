<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

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
				<!-- my info -->
				<div class="user-info mb-2r">
					<div class="profile">
						<img src="<%=request.getContextPath()%>/assets/images/user/basic-profile.jpg" alt="">
					</div>
					<div class="info-box text-center">
						<p class="info-name">${member.username}</p>
						<p class="info-email">${member.email}</p>
						<a href="#" class="info-btn"><i class="fa fa-cog"></i> 정보수정</a>
					</div>
					<div class="user-bg"></div>
				</div>

				<!-- reservation history -->
				<div class="user-box mb-4r">
					<div class="box-header mb-2r">
						<h4 class="header-title">예약내역</h4>
						<a href="#" data-toggle="modal" data-target="#popup" class="link float-right">취소/환불 안내</a>
					</div>

					<!-- list -->
					<c:if test="${empty Ticket}">
						<div class="user-table-notice mb-2r">예약정보가 없습니다.</div>
					</c:if>
					
					<c:if test="${!empty Ticket}">
					<table class="table table-bordered user-table">
						<thead>
							<th>예약일</th>
							<th>예약정보</th>
							<th>상태</th>
						</thead>
						
						<tbody>
							<c:forEach var="item" items="${Ticket}" varStatus="var">
								<tr>
									<td>${fn:substring({item.reserveNum},1,17)}</td>
									<td>
										${item.depAirportNm} - ${item.arrAirportNm}
										<a href="<%=request.getContextPath()%>/member?cmd=memberReserve&num=${item.num}" class="info-more-btn">상세내역</a>
									</td>
									<td>예약상태</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
					</c:if>
					
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
					</c:forEach>					
				</div> --%>

				<!-- customer history -->
				<div class="user-box mb-4r">
					<div class="box-header mb-2r">
						<h4 class="header-title">문의내역</h4>
					</div>
					
					<c:if test="${empty board}">
						<div class="user-table-notice mb-2r">문의내역이 없습니다.<br>문의는 하단 고객센터를 이용하시기 바랍니다.</div>
					</c:if>
					
					<c:if test="${!empty board}">
					<table class="table table-bordered user-table">
						<thead>
							<th>제목</th>
							<th>상태</th>
						</thead>
						<tbody>
							<c:forEach var="list" items="${board}" varStatus="var">
							<tr>
								<td>
									<a href="<%=request.getContextPath()%>/member?cmd=memberBoard&num=${list.num}">[${list.type}] ${list.title}</a>
									<p class="qna-date">${fn:substring({list.writeDate},1,17)}</p>
								</td>
								<td class="qna-state"><c:choose><c:when test="${list.conState eq 'False'}">답변 대기중</c:when><c:otherwise><p class="text-success">답변 완료</p></c:otherwise></c:choose></td>			
							</tr>
							</c:forEach>
						</tbody>
					</table>
					</c:if>
				</div>

				<!-- review history -->
				<!-- <div class="user-box mb-4r">
					<div class="box-header mb-2r">
						<h4 class="header-title">리뷰관리</h4>
					</div>

					<table class="table table-bordered review-table">
						<thead>
							<th>1</th>
							<th>1</th>
							<th>1</th>
							<th>1</th>
							<th>1</th>
							<th>1</th>
						</thead>
						<tbody>
							<tr>
								<td>2</td>
								<td>2</td>
								<td>2</td>
								<td>2</td>
								<td>2</td>
								<td>2</td>
							</tr>
						</tbody>
					</table>
				</div> -->
				
			</div>
			
		</div>
		<!--/.container-->

	</section>
	<!--/.member-page-->
	<!--member-page end -->

<%@include file="../include/footer.jsp" %>