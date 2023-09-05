package com.skys.controller.admin;

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

public class AdminCustomerWriteProcAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int num = Integer.parseInt(request.getParameter("num"));

		String url = "admin?cmd=boardPage&num=" + num;

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (id == null && !(id.equals("admin"))) {

			Script.moving(response, "잘못된 접근 입니다.");

		} else if (id.equals("admin")) {

			BoardDAO dao = new BoardDAO();
			BoardVO vo = new BoardVO();

			vo.setNum(num);
			vo.setAdminAnswer(request.getParameter("adminAnswer"));

			int result = dao.writeAdmin(vo);

			if (result == 1) {

				RequestDispatcher dis = request.getRequestDispatcher(url);
				dis.forward(request, response);

			} else {

				Script.moving(response, "DB Error", "admin?cmd=adminCS");

			}

		}

	}

}
