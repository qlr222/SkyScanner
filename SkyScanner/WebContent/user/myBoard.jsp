<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@include file="../include/headerSub.jsp" %>
	<!--popup start -->
   <section class="my-page">          

      <div class="container">
         <!--my page-->
         <div class="wrapper">

            <!-- myboard -->
            <div class="user-box detail-box">
				<div class="box-header mb-2r">
				   <a href="#" onclick="history.back();"><i class="fa fa-angle-left"></i></a> <h4 class="header-title">문의내역</h4>				   
				</div>

				<!-- detail -->
				<div class="board-view">
					<p class="title mb-1r"><span class="notice">[${view.type}]</span> ${view.title}</p>
					<div class="info mb-2r">
						<span class="date">${fn:substring({view.writeDate},1,17)}</span><span class="count"><c:choose><c:when test="${view.conState eq 'False'}">답변 대기중</c:when><c:otherwise>답변완료</c:otherwise></c:choose></span>						
					</div>
					<div class="content mb-2r">
						<p class="template">${view.content}</p>
					</div>
					
					<c:if test="${view.conState eq 'True'}">
					<!-- Admin Content -->
					<div class="content content-admin mb-2r">
   						<div class="info">
							<p>관리자 답변</p>
							<span class="date">${view.answerDate}</span>
						</div>
						<p class="template">${view.adminAnswer}</p>    
					</div>
					</c:if>					
				</div>
			</div>
			
         </div>
      </div>
      <!--/.container-->

   </section>
   <!--/.member-page-->
   <!--member-page end -->
		

<%@include file="../include/footer.jsp" %>