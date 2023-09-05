<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="../include/headerSub.jsp" %>
   <script>
// opener관련 오류가 발생하는 경우 아래 주석을 해지하고, 사용자의 도메인정보를 입력합니다. ("팝업API 호출 소스"도 동일하게 적용시켜야 합니다.)
//document.domain = "abc.go.kr";

function goPopup(){
   // 주소검색을 수행할 팝업 페이지를 호출합니다.
   // 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
   var pop = window.open("/SkyScanner/popup/jusoPopup.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
   
   // 모바일 웹인 경우, 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrMobileLinkUrl.do)를 호출하게 됩니다.
    //var pop = window.open("/popup/jusoPopup.jsp","pop","scrollbars=yes, resizable=yes"); 
}


function jusoCallBack(roadFullAddr){
      // 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
      document.form.roadFullAddr.value = roadFullAddr;
}

</script>
      <!--member-page start -->
      <section class="member-page">
         <div class="container">
            <div class="text-center wrapper">
               <!--login form-->
               <h3 class="mb-2r">회원가입</h3>
                <h5 class="mb-2r menu-text">모든 항목은 필수 입력 항목 입니다.</h5>

                  <form name="form" action="<%=request.getContextPath()%>/member?cmd=memberJoin"  method="post">
                      <input type="text" class="form-control" name="id" maxlength="20" placeholder="ID" required>
                      <input type="password" class="form-control" name="password" placeholder="Password" required>
                  <input type="password" class="form-control" placeholder="Password Confirm" required>
                  <input type="text" class="form-control" name="username" placeholder="UserName" maxlength="20" required>
                  <div class="form-group">
                       <label class="form-control-label">Address</label>
                       <button class="<btn btn-outline-info float-right" type="button" onclick="goPopup()">Search Korean Address</button>
                       <div id="list"></div>
                        <div id="callBackDiv">
                          <input class="form-control form-control-lg" type="text" name="roadFullAddr" id="roadFullAddr" maxlength="20" required readonly>
                       </div>
                    </div>
                  <!-- <input type="text" class="form-control" name="roadFullAddr" placeholder="roadFullAddr"  onclick="goPopup()"> -->
                  <input type="email" class="form-control" name="email" placeholder="ex)account@email.com" maxlength="20" required>
                      <input type="submit" class="btn btn-block book-btn" value="회원가입">
                  </form>

               <!--login menu-->
               <div class="other-menu">
                       <a href="signIn.jsp" class="btn-custom-outline">로그인</a>
                       <a href="userFind.jsp" class="btn-custom-outline">비밀번호 찾기</a>
                   </div>

               <!--social login menu-->
               <div class="social-menu">
                      <div class="foot-icons">
                          <h5 class="mb-2r">다른 소셜계정으로 로그인</h5>
                          <ul class="footer-social-links list-inline list-unstyled">
                              <li><a href="#" target="_blank" name="loginFacebook" class="foot-icon-bg-1"><i class="fa fa-facebook"></i></a></li>
                              <li><a href="#" target="_blank" name="loginGoogle" class="foot-icon-bg-2"><i class="fa fa-google"></i></a></li>
                              <li><a href="#" target="_blank" name="loginNaver" class="foot-icon-bg-3"><i class="fa fa-comment"></i></a></li>
                          </ul>
                      </div>
                  </div>

            </div>
         </div><!--/.container-->

      </section><!--/.member-page-->
      <!--member-page end -->
<script>
	function check() {
		var pwVal = $('#pw').val();
		var chkVal = $('#chkpw').val();

		if (chkVal != '') {

			if (pwVal != chkVal) {
				document.getElementById('check').style.color = 'red';
				$('#check').html('비밀번호가 일치하지 않습니다.');
				document.getElementById('chkbtn').disabled = 'true';
			} else if (pwVal == chkVal) {
				document.getElementById('check').style.color = 'blue';
				$('#check').html('비밀번호가 일치합니다.');
				document.getElementById('chkbtn').disabled = '';
			}
		} else {
			$('#check').html('');
		}
	}
</script>
<%@include file="../include/footer.jsp" %>