package com.skys.controller.member;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.BoardDAO;
import com.skys.dto.BoardVO;
import com.skys.util.Script;

public class MemberBoardAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int num = Integer.parseInt(request.getParameter("num"));

		String url = "user/myBoard.jsp";

		HttpSession session = request.getSession();

		String id = (String)session.getAttribute("id");

		if (id == null) Script.moving(response, "로그인 후 이용하실 수 있습니다.", "user/signIn.jsp");

		// 문의글 불러오기
		BoardDAO dao = new BoardDAO();
		BoardVO board = dao.view(num);

		request.setAttribute("view", board);

		RequestDispatcher dis = request.getRequestDispatcher(url);
		dis.forward(request, response);
	}
}

