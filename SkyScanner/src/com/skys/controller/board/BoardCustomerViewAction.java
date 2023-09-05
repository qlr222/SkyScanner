package com.skys.controller.board;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skys.action.Action;
import com.skys.dao.BoardDAO;
import com.skys.dto.BoardVO;
import com.skys.util.Script;

public class BoardCustomerViewAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int num = Integer.parseInt(request.getParameter("num"));

		String url = "board/customerView.jsp";

		BoardDAO dao = new BoardDAO();

		BoardVO content = dao.view(num);

		if (content != null) {

			request.setAttribute("view", content);

			RequestDispatcher dis = request.getRequestDispatcher(url);
			dis.forward(request, response);

		} else if (content == null) {

			Script.moving(response, "DB Error", "board?cmd=customerCenter");

		}

	}

}
