package com.skys.controller.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.util.Script;

public class MemberLogoutAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String url = "index.jsp";
		if (session.getAttribute("id") != null) {
			session.removeAttribute("id");
			Script.moving(response, "로그아웃 되었습니다.", url);
		} else {
			Script.moving(response, "잘못된 접근입니다.");

		}
	}

	}

