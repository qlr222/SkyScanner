package com.skys.controller.admin;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.AdminDAO;
import com.skys.dto.MemberVO;
import com.skys.util.Script;

public class AdminUserAccountAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "admin?cmd=userPage";

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (!(id.equals("admin")) || id == null) {

			Script.moving(response, "잘못된 접근 입니다.");

		} else if (id.equals("admin")) {
			AdminDAO admDAO = new AdminDAO();
			String email = null, acnt = null;
			MemberVO mvo = null;

			if (request.getParameter("email") != null && request.getParameter("acnt") != null) {
				mvo = new MemberVO();

				email = request.getParameter("email");
				mvo.setEmail(email);

				acnt = request.getParameter("acnt");
				if(acnt.equals("dormant")) {
					mvo.setUseYN("false");
				} else if (acnt.equals("normal")) {
					mvo.setUseYN("true");
				}
			}


			int result = admDAO.updateAccount(mvo);

			if (result == 1) {

				RequestDispatcher dis = request.getRequestDispatcher(url);
				dis.forward(request, response);

			} else if (result == -1) {

				Script.moving(response, "DB Error");

			}

		}

	}

}
