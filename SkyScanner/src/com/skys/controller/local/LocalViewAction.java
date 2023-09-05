package com.skys.controller.local;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.skys.action.Action;
import com.skys.dao.HotelDAO;
import com.skys.dao.LocalDAO;
import com.skys.dto.HotelVO;
import com.skys.dto.LocalVO;

public class LocalViewAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url ="index.jsp";
		
		LocalDAO ldao = new LocalDAO();
		
		String areaCode = request.getParameter("areaCode");
		
		LocalVO lvo = new LocalVO();
		lvo.setCode(areaCode);
		List<LocalVO> sigungu = ldao.selectLocal(lvo);
		
		request.setAttribute("sigungu", sigungu);
		request.setAttribute("areaCode", areaCode);
		
		RequestDispatcher dis = request.getRequestDispatcher(url);
		dis.forward(request, response);
		
	}

}
