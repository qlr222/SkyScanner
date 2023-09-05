<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

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
		            <p class="table-caption"><a href="#" onclick="history.back();"><i class="fa fa-angle-left"></i></a> 회원관리</p>
		            <p class="admin-notice"><i class="fa fa-info-circle"></i> 회원정보를 회원 동의없이 수정할 수 없습니다. 사용자의 요청이 있을 경우에 수정할 수 있습니다.</p>
		            
					<table class="table admin-table">
						<tbody>
							<tr>
								<th>이메일</th>
								<td>${userInfo.email}</td>
							</tr>
							<tr>
								<th>이름</th>
								<td>${userInfo.username}</td>
							</tr>
							<tr>
								<th>주소</th>
								<td><c:if test="${empty userInfo.roadFullAddr}"><span class="empty-text">주소 미입력</span></c:if>${userInfo.roadFullAddr}</td>
							</tr>
							<tr>
								<th>가입일자</th>
								<td>${fn:substring({userInfo.signDate},1,17)}</td>
							</tr>
							<tr>
								<th>계정상태</th>
								<td><c:choose><c:when test="${userInfo.useYN eq 'true'}"><span class="on-text">정상</span></c:when><c:otherwise><span class="off-text">휴면</span></c:otherwise></c:choose></td>
							</tr>
							<tr>
								<th>관리</th>
								<td>
									<c:choose>
										<c:when test="${userInfo.useYN eq 'true'}">
											<a href="#" class="admin-fn-btn on" onclick="send('dormant')">휴면전환</a> <p class="admin-notice"><i class="fa fa-info-circle"></i> 정상 계정을 휴면 계정으로 전환합니다.</p>
										</c:when>
										<c:otherwise>
											<a href="#" class="admin-fn-btn" onclick="send('normal')">정상전환</a> <p class="admin-notice"><i class="fa fa-info-circle"></i> 휴면 계정을 정상 계정으로 전환합니다.</p>
										</c:otherwise>
									</c:choose>							
								</td>
							</tr>
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
	
	<script>
		function send(account) {
			var msg;
			var path = '<%=request.getContextPath()%>';
			
			if(account == 'dormant'){
				msg = confirm('휴면 계정으로 전환하시겠습니까?');
			}
			
			else if (account == 'normal') {
				msg = confirm('정상 계정으로 전환하시겠습니까?');
			}
			
			if(msg == true){
				location.href= path+'/admin?cmd=userAccount&email=${userInfo.email}&acnt='+account;
			}
			
		}
	</script>
	
<%@include file="../include/footerAdmin.jsp" %>