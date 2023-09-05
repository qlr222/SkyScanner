package com.skys.controller.admin;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.AdminDAO;
import com.skys.dto.MemberVO;
import com.skys.util.Script;

public class AdminUsersAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "admin/usersTable.jsp";

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (!(id.equals("admin")) || id == null) {

			Script.moving(response, "잘못된 접근 입니다.");

		} else if (id.equals("admin")) {

			AdminDAO admDAO = new AdminDAO();

			// 모든 회원정보 불러오기
			List<MemberVO> users = admDAO.getUsers();

			// 회원 수 불러오기
			int userCount = admDAO.getUserCount();

			if (userCount == -1) Script.moving(response, "DB Error");

			request.setAttribute("users", users);
			request.setAttribute("userCount", userCount);

			RequestDispatcher dis = request.getRequestDispatcher(url);
			dis.forward(request, response);

		}

	}

}
