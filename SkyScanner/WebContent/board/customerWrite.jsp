<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@include file="../include/headerSub.jsp" %>

		<!--customer-write start -->
		<section class="board-page">
			<div class="container">
				<div class="wrapper">
					<div class="mb-4r">
						<ul class="nav nav-tabs">
							<li><a href="<%=request.getContextPath()%>/board?cmd=news">뉴스</a></li>
							<li class="active"><a href="<%=request.getContextPath()%>/board?cmd=customerCenter">고객센터</a></li>
							<li><a href="<%=request.getContextPath()%>/board/policy.jsp">서비스 이용약관</a></li>
							<li><a href="<%=request.getContextPath()%>/board/privacy.jsp">개인정보처리방침</a></li>
						</ul>
					</div>
					<!--write form-->
					<div class="board-view board-write">
						<h3 class="title mb-2r">문의하기</h3>
						<p class="sub-title mb-2r">
							문의하시려는 유형을 선택하여 작성하세요. 욕설 및 비방글은 통보없이 삭제될 수 있습니다.<br>
							문의내역은 마이페이지 > 문의내역에서 확인하실 수 있습니다.<br>
							작성하신 문의글은 수정 및 삭제하실 수 없습니다. 삭제를 원하시면 관리자에게 문의하세요.	
						</p>
						
						<div class="content mb-2r">
							<div class="write-form">
								<form action="<%=request.getContextPath()%>/board?cmd=customerWriteProc" method="post">									
									<div class="col-md-3">
										<select class="input-select form-control" name="contentType" required>
											<option value="">유형 선택</option>
											<option value="사이트 이용">사이트 이용</option>
											<option value="결제">결제</option>
											<option value="예약">예약</option>
											<option value="회원">회원</option>
											<option value="기타">기타</option>
										</select>
									</div>
									<div class="col-md-9 mb-1r">
										<input type="text" name="title" class="input-title form-control" placeholder="제목을 입력하세요.(최대 30자)" maxlength="100" autofocus required>
									</div>
									<textarea name="contentText" rows="8" cols="80" class="form-control mb-2r" placeholder="문의하실 내용을 입력하세요." required></textarea>

									<!--btns-->
									<a href="<%=request.getContextPath()%>/board?cmd=customerCenter" class="btn book-btn dark">목록</a>
									<input type="submit" class="btn book-btn float-right" value="문의하기">
								</form>
							</div>
						</div>
					</div>
				</div>
			</div><!--/.container-->

		</section><!--/.customer-write-->
		<!--customer-write end -->

<%@include file="../include/footer.jsp" %>