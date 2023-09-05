package com.skys.controller.admin;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.BoardDAO;
import com.skys.util.Script;

public class AdminCustomerChangeAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "admin?cmd=adminCS";

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (id == null && !(id.equals("admin"))) {

			Script.moving(response, "잘못된 접근 입니다.");

		} else if (id.equals("admin")) {

			// 해당 문의글 불러오기
			int num = Integer.parseInt(request.getParameter("num"));

			BoardDAO dao = new BoardDAO();

			int result = dao.usedChange(num);

			if (result == 1) {

				Script.moving(response, "수정되었습니다.", url);

			} else {

				Script.moving(response, "DB Error", url);

			}


		}

	}

}
