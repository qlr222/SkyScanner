package com.skys.controller.board;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.util.Script;

public class BoardCustomerWriteAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "board/customerWrite.jsp";

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (id == null) {

			Script.moving(response, "로그인 후 이용하실 수 있습니다.", "user/signIn.jsp");

		} else if (id != null) {

			response.sendRedirect(url);

		}

	}

}
