package com.skys.controller.board;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.BoardDAO;
import com.skys.dto.BoardVO;
import com.skys.util.Script;

public class BoardCustomerWriteAdminProcAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "board?cmd=customerCenter";

		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");

		if (!(id.equals("admin"))) {

			Script.moving(response, "관리자 로그인 후 이용하실 수 있습니다.", "user/signIn.jsp");

		} else if (id.equals("admin")) {

			int num = Integer.parseInt(request.getParameter("num"));
			String con = request.getParameter("adminAnswer");

			BoardDAO dao = new BoardDAO();
			BoardVO vo = new BoardVO();

			vo.setNum(num);
			vo.setAdminAnswer(con);

			int result = dao.writeAdmin(vo);

			if (result == 1) {

				response.sendRedirect(url);

			} else {

				Script.moving(response, "DB Error", url);

			}

		}

	}

}
