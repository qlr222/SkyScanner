<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@include file="../include/headerAdmin.jsp" %>
		
	<%@include file="../include/sidePanelAdmin.jsp" %>
	
	<!-- Right Panel : Contents --> 
    <div id="right-panel" class="right-panel">

        <!-- Header-->
        <%@include file="../include/panelHeaderAdmin.jsp" %>

        <div class="content pb-0">

			<div class="card">
				<div class="card-body">
				
					<!-- Table -->
		            <p class="table-caption">총 회원 : ${userCount}명</p>
		            <p class="admin-notice"><i class="fa fa-info-circle"></i> 회원관리는 이메일을 클릭하세요. / 탈퇴한 회원은 휴면 계정으로 표기됩니다.</p>		            
		            
					<table class="table admin-table">
						<thead>
							<tr>
								<th>이메일</th>
								<th class="name">이름</th>
								<th>주소</th>
								<th>계정상태</th>
							</tr>					
						</thead>
						<tbody>
							<c:forEach var="item" items="${users}" varStatus="var">
								<tr>
									<td><a href="<%=request.getContextPath()%>/admin?cmd=userPage&email=${item.email}">${item.email}</a></td>
									<td>${item.username}</td>
									<td><c:if test="${empty item.roadFullAddr}"><span class="empty-text">주소 미입력</span></c:if>${item.roadFullAddr}</td>
									<td><c:choose><c:when test="${item.useYN eq 'true'}"><span class="on-text">정상</span></c:when><c:otherwise><span class="off-text">휴면</span></c:otherwise></c:choose></td>
								</tr>
							</c:forEach>
						</tbody>
					</table>					
		            <!-- Table End -->
		            
				</div>
			</div>            

        </div> <!-- .content -->



        <div class="clearfix"></div>

		<!-- Footer -->
        <%@include file="../include/panelFooterAdmin.jsp" %>

    </div><!-- /#right-panel -->
	
	<%@include file="../include/scriptAdmin.jsp" %>	

<%@include file="../include/footerAdmin.jsp" %>