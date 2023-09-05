package com.skys.controller.board;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skys.action.Action;
import com.skys.dao.BoardDAO;
import com.skys.dto.NewsVO;
import com.skys.util.Script;

public class BoardNewsViewAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int num = Integer.parseInt(request.getParameter("num"));

		String url = "board/newsView.jsp";

		BoardDAO dao = new BoardDAO();

		NewsVO content = dao.newView(num);

		if (content != null) {

			request.setAttribute("view", content);

			RequestDispatcher dis = request.getRequestDispatcher(url);
			dis.forward(request, response);

		} else if (content == null) {

			Script.moving(response, "DB Error", "board?cmd=news");

		}

	}

}
