package com.skys.controller.admin;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.AdminDAO;
import com.skys.util.Script;

public class AdminPageAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "admin/adminPage.jsp";

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (id == null && !(id.equals("admin"))) {

			Script.moving(response, "잘못된 접근 입니다.");

		} else if (id.equals("admin")) {

			AdminDAO admDAO = new AdminDAO();

			// 회원 수 불러오기
			int userCount = admDAO.getUserCount();

			if (userCount == -1) Script.moving(response, "DB Error");

			request.setAttribute("userCount", userCount);

			RequestDispatcher dis = request.getRequestDispatcher(url);
			dis.forward(request, response);

		}

	}

}
