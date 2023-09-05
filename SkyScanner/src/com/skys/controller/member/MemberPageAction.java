package com.skys.controller.member;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.AirDAO;
import com.skys.dao.MemberDAO;
import com.skys.dto.BoardVO;
import com.skys.dto.MemberVO;
import com.skys.dto.TicketVO;
import com.skys.util.Script;

public class MemberPageAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "user/myPage.jsp";

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (id == null) {
			Script.moving(response, "로그인 후 이용하실 수 있습니다.", "user/signIn.jsp");
		} else if (id != null) {

			// 예약내역 불러오기
			List<TicketVO> tvo = new ArrayList<TicketVO>();
			AirDAO adao = new AirDAO();

			List<Integer> rNum = adao.getReserveNum(id);

			for (int i = 0; i<rNum.size(); i++) {
				tvo.add(adao.getTicket(rNum.get(i)));
			}

			MemberDAO mdao = new MemberDAO();
			MemberVO mvo = mdao.getMember((String)session.getAttribute("id"));

			List<Integer> people = new ArrayList<Integer>();

			for (int i = 0; i<rNum.size(); i++) {
				people.add(adao.getPeople(rNum.get(i)));
			}

			request.setAttribute("Ticket", tvo);
			request.setAttribute("member", mvo);
			request.setAttribute("people", people);


			// 문의글 불러오기
			List<BoardVO> userBoard = mdao.getBoard(id);

			request.setAttribute("board", userBoard);

			RequestDispatcher dis = request.getRequestDispatcher(url);
			dis.forward(request, response);
		}
	}
}

