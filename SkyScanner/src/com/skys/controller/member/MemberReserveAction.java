package com.skys.controller.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skys.action.Action;

public class MemberReserveAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "user/myReserv.jsp";
		int num = Integer.parseInt(request.getParameter("num"));
		
		
		response.sendRedirect(url);
	}
}
