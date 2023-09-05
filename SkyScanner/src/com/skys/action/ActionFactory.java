package com.skys.action;

import com.skys.controller.admin.AdminCustomerAction;
import com.skys.controller.admin.AdminCustomerChangeAction;
import com.skys.controller.admin.AdminCustomerPageAction;
import com.skys.controller.admin.AdminCustomerWriteAction;
import com.skys.controller.admin.AdminCustomerWriteProcAction;
import com.skys.controller.admin.AdminPageAction;
import com.skys.controller.admin.AdminUserAccountAction;
import com.skys.controller.admin.AdminUserPageAction;
import com.skys.controller.admin.AdminUsersAction;
import com.skys.controller.airLines.AirCartAction;
import com.skys.controller.airLines.AirInsertAction;
import com.skys.controller.airLines.AirViewAction;
import com.skys.controller.board.BoardCustomerAction;
import com.skys.controller.board.BoardCustomerViewAction;
import com.skys.controller.board.BoardCustomerWriteAction;
import com.skys.controller.board.BoardCustomerWriteAdmin;
import com.skys.controller.board.BoardCustomerWriteAdminProcAction;
import com.skys.controller.board.BoardCustomerWriteProcAction;
import com.skys.controller.board.BoardNewsAction;
import com.skys.controller.board.BoardNewsDeleteAction;
import com.skys.controller.board.BoardNewsEditAction;
import com.skys.controller.board.BoardNewsEditProcAction;
import com.skys.controller.board.BoardNewsViewAction;
import com.skys.controller.board.BoardNewsWriteAction;
import com.skys.controller.board.BoardNewsWriteProcAction;
import com.skys.controller.hotels.HotelDetailViewAction;
import com.skys.controller.hotels.HotelViewAction;
import com.skys.controller.member.MemberBoardAction;
import com.skys.controller.member.MemberJoinAction;
import com.skys.controller.member.MemberJoinFormAction;
import com.skys.controller.member.MemberLoginAction;
import com.skys.controller.member.MemberLoginFormAction;
import com.skys.controller.member.MemberLogoutAction;
import com.skys.controller.member.MemberPageAction;
import com.skys.controller.member.MemberReserveAction;

public class ActionFactory {
	private static String naming = "A ― ActionFactory : ";

	// 프로그램 시작시 heap에 등재시킨다.
	private static ActionFactory instance = new ActionFactory();

	// 객체 권한 제한을 위해 private로 생성
	private ActionFactory() {

	}

	public static ActionFactory getInstance() {
		return instance;
	}

	// parameter에 cmd값을 받아 객체 생성을 분기시킨다.
	public Action getAction(String cmd) {

		// 기능 입력

		// 각 페이지명 적어주세요.
		if(cmd.equals("airView")) {
			return new AirViewAction();
		}

		// 각 페이지명 적어주세요.
		else if(cmd.equals("airCart")) {
			return new AirCartAction();
		}

		// 각 페이지명 적어주세요.
		else if(cmd.equals("airInsert")) {
			return new AirInsertAction();
		}

		// 회원 : 회원가입
		else if (cmd.equals("memberJoin")) {
			return new MemberJoinAction();
		}

		// 회원 : 회원가입 폼
		else if (cmd.equals("memberJoinForm")) {
			return new MemberJoinFormAction();
		}

		// 회원 : 로그인 폼
		else if (cmd.equals("memberLoginForm")) {
			return new MemberLoginFormAction();
		}

		// 회원 : 로그인
		else if (cmd.equals("memberLogin")) {
			return new MemberLoginAction();
		}

		// 회원 : 로그아웃
		else if (cmd.equals("memberLogout")) {
			return new MemberLogoutAction();
		}

		// 회원 : 마이페이지
		else if (cmd.equals("memberPage")) {
			return new MemberPageAction();
		}

		// 회원 : 마이페이지 - 예약내역 상세
		else if (cmd.equals("memberReserve")) {
			return new MemberReserveAction();
		}

		// 호텔 : 리스트
		else if(cmd.equals("hotelView")) {
			System.out.println(cmd);
			return new HotelViewAction();
		}

		// 호텔 : 상세보기
		else if(cmd.equals("hotelDetailView")) {
			System.out.println(cmd);
			return new HotelDetailViewAction();
		}

		// 관리자 : 대쉬보드
		else if(cmd.equals("adminPage")) {
			return new AdminPageAction();
		}

		// 관리자 : 회원관리
		else if(cmd.equals("adminUsers")) {
			return new AdminUsersAction();
		}

		// 관리자 : 회원관리 상세
		else if(cmd.equals("userPage")) {
			return new AdminUserPageAction();
		}

		// 관리자 : 문의관리
		else if(cmd.equals("adminCS")) {
			return new AdminCustomerAction();
		}

		// 관리자 : 회원관리 - 계정전환
		else if(cmd.equals("userAccount")) {
			return new AdminUserAccountAction();
		}

		// 게시판 : 고객센터
		else if(cmd.equals("customerCenter")) {
			return new BoardCustomerAction();
		}

		// 게시판 : 문의폼(회원)
		else if(cmd.equals("customerWrite")) {
			return new BoardCustomerWriteAction();
		}

		// 게시판 : 문의등록(회원)
		else if(cmd.equals("customerWriteProc")) {
			return new BoardCustomerWriteProcAction();
		}

		// 게시판 : 문의상세
		else if(cmd.equals("customerView")) {
			return new BoardCustomerViewAction();
		}

		// 게시판 : 문의 답변 폼(관리자)
		else if(cmd.equals("customerWriteAdmin")) {
			return new BoardCustomerWriteAdmin();
		}

		// 게시판 : 문의 답변 폼(관리자)
		else if(cmd.equals("customerWriteAdminProc")) {
			return new BoardCustomerWriteAdminProcAction();
		}

		// 회원 : 마이페이지 - 문의내역 상세
		else if (cmd.equals("memberBoard")) {
			return new MemberBoardAction();
		}

		// 관리자 : 문의관리 상세
		else if(cmd.equals("boardPage")) {
			return new AdminCustomerPageAction();
		}

		// 관리자 : 문의관리 - 답변 숨기기 used = 0
		else if(cmd.equals("boardUsedChange")) {
			return new AdminCustomerChangeAction();
		}

		// 관리자 : 문의관리 - 관리자 페이지에서 답변 작성폼
		else if(cmd.equals("boardWrite")) {
			return new AdminCustomerWriteAction();
		}

		// 관리자 : 문의관리 - 관리자 페이지에서 답변 작성하기
		else if(cmd.equals("boardWriteProc")) {
			return new AdminCustomerWriteProcAction();
		}

		// 뉴스 목록
		else if(cmd.equals("news")) {
			return new BoardNewsAction();
		}

		// 뉴스 등록 폼
		else if(cmd.equals("newsWrite")) {
			return new BoardNewsWriteAction();
		}

		// 뉴스 등록
		else if(cmd.equals("newsWriteProc")) {
			return new BoardNewsWriteProcAction();
		}

		// 해당 뉴스
		else if(cmd.equals("newsView")) {
			return new BoardNewsViewAction();
		}

		// 해당 뉴스 수정 폼
		else if(cmd.equals("newsEdit")) {
			return new BoardNewsEditAction();
		}

		// 해당 뉴스 수정
		else if(cmd.equals("newsEditProc")) {
			return new BoardNewsEditProcAction();
		}

		// 해당 뉴스 used = 0
		else if(cmd.equals("newsDelete")) {
			return new BoardNewsDeleteAction();
		}

		return null;
	}
}
