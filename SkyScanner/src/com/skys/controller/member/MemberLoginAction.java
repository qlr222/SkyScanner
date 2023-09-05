package com.skys.controller.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.MemberDAO;
import com.skys.dto.MemberVO;
import com.skys.util.Script;

public class MemberLoginAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "index.jsp";
		MemberDAO dao = new MemberDAO();
		MemberVO member = new MemberVO();

		String id = null;
		String password = null;

		if(request.getParameter("id") !=null) {
			id = request.getParameter("id");
		}
		System.out.println(id);
		if(request.getParameter("password") !=null) {
			password = request.getParameter("password");
		}

		member.setId(id);
		System.out.println(id);
		member.setPassword(password);

		int result = dao.login(member);

		if(result ==1 || result == 2) {
			HttpSession session = request.getSession();
			session.setAttribute("id", member.getId());
			if(session.getAttribute("Ticket") == null) {
				Script.moving(response, "로그인되었습니다.",url);
			} else {
				Script.moving(response, "로그인되었습니다.","air?cmd=airInsert");
			}
			
		}
//		else if(result ==2) {
//			HttpSession session = request.getSession();
//			session.setAttribute("id", member.getId());
//			Script.moving(response, "이메일 인증이 되지 않았습니다.");
//		}
		else {
			Script.moving(response, "sql error입니다.");
		}

	}
}
