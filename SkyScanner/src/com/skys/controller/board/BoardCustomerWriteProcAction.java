package com.skys.controller.board;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.BoardDAO;
import com.skys.dao.MemberDAO;
import com.skys.dto.BoardVO;
import com.skys.dto.MemberVO;
import com.skys.util.Script;

public class BoardCustomerWriteProcAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "board?cmd=customerCenter";

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (id == null) {

			Script.moving(response, "로그인 후 이용하실 수 있습니다.", "user/signIn.jsp");

		} else if (id != null) {

			String conType = request.getParameter("contentType");
			String title = request.getParameter("title");
			String con = request.getParameter("contentText");

			if (conType != null && title != null && con != null) {

				MemberDAO mdao = new MemberDAO();
				MemberVO mvo = new MemberVO();

				mvo = mdao.getMember(id);

				String username = mvo.getUsername();

				BoardDAO dao = new BoardDAO();
				BoardVO vo = new BoardVO();

				vo.setUserId(id);
				vo.setUserName(username);
				vo.setType(conType);
				vo.setTitle(title);
				vo.setContent(con);

				int result = dao.write(vo);

				if (result == 1) {

					RequestDispatcher dis = request.getRequestDispatcher(url);
					dis.forward(request, response);

				} else if (result == -1) {

					Script.moving(response, "DB Error");

				}

			} else {
				Script.moving(response, "입력되지 않은 항목이 있습니다.", "history.back();");
			}

		}

	}

}
