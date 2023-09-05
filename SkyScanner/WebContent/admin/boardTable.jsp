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
		            <p class="admin-notice"><i class="fa fa-info-circle"></i> 제목을 클릭하시면 답변을 작성하실 수 있습니다.</p>		            
		            
					<table class="table admin-table">
						<thead>
							<tr>
								<th>유형</th>
								<th>제목</th>
								<th>작성일</th>
								<th>상태</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="item" items="${list}" varStatus="var">
								<tr>
									<td>${item.type}</td>
									<td><a href="<%=request.getContextPath()%>/admin?cmd=boardPage&num=${item.num}">${item.title}</a></td>
									<td>${fn:substring({item.writeDate},1,17)}</td>
									<td><c:choose><c:when test="${item.conState eq 'True'}"><span class="on-text">답변완료</span></c:when><c:otherwise><span class="off-text">답변대기중</span></c:otherwise></c:choose></td>
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