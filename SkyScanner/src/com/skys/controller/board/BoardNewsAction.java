package com.skys.controller.board;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skys.action.Action;
import com.skys.dao.BoardDAO;
import com.skys.dto.NewsVO;
import com.skys.util.Script;

public class BoardNewsAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "board/news.jsp";

		BoardDAO dao = new BoardDAO();
		List<NewsVO> newsList = dao.getNews();

		if (newsList == null) Script.moving(response, "DB Error");

		request.setAttribute("newsList", newsList);

		RequestDispatcher dis = request.getRequestDispatcher(url);
		dis.forward(request, response);
	}

}
