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
		            <p class="table-caption"><a href="#" onclick="history.back();"><i class="fa fa-angle-left"></i></a> 문의관리</p>
		            <p class="admin-notice"><i class="fa fa-info-circle"></i> 문의 삭제는 DB 관리팀에게 문의하세요.</p>
		            
					<table class="table admin-table">
						<tbody>
							<tr>
								<th>유형</th>
								<td>${con.type}</td>
							</tr>
							<tr>
								<th>제목</th>
								<td>${con.title}</td>
							</tr>
							<tr>
								<th>작성일</th>
								<td>${fn:substring({con.writeDate},1,17)}</td>
							</tr>
							<tr>
								<th>내용</th>
								<td>${con.content}</td>
							</tr>
							<tr>
								<th>상태</th>
								<td><c:choose><c:when test="${con.conState eq 'True'}"><span class="on-text">답변완료</span></c:when><c:otherwise><span class="off-text">답변대기중</span></c:otherwise></c:choose></td>
							</tr>
							<c:if test="${con.conState eq 'True'}">
							<tr>
								<th>답변</th>
								<td>${con.adminAnswer}</td>
							</tr>
							<tr>
								<th>답변 작성일</th>
								<td>${fn:substring({con.answerDate},1,17)}</td>
							</tr>
							</c:if>
							<tr>
								<th>관리</th>
								<td>
									<c:choose>
										<c:when test="${con.conState eq 'True'}">
											<a href="<%=request.getContextPath()%>/admin?cmd=boardUsedChange&num=${con.num}" class="admin-fn-btn">문의 숨기기</a> <p class="admin-notice"><i class="fa fa-info-circle"></i> 해당 문의를 숨기면 목록에서 확인하실 수 없습니다.<br>자세한 사항은 DB 관리팀에게 문의하세요.</p>
										</c:when>
										<c:otherwise>
											<a href="<%=request.getContextPath()%>/admin?cmd=boardWrite&num=${con.num}" class="admin-fn-btn on">답변작성</a> <p class="admin-notice"><i class="fa fa-info-circle"></i> 답변은 수정할 수 없습니다.</p>
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