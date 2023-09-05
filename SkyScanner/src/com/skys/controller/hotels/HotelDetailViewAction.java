package com.skys.controller.hotels;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skys.action.Action;
import com.skys.dao.HotelDAO;
import com.skys.dto.HotelVO;

public class HotelDetailViewAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "hotel/hotelDetailView.jsp";
		
		String image = request.getParameter("image");
		String id = request.getParameter("id");
		String title = request.getParameter("title");
		String readcount = request.getParameter("readcount");
		String addr1 = request.getParameter("addr1");
		String tel = request.getParameter("tel");
		String mapx = request.getParameter("mapx");
		String mapy = request.getParameter("mapy");
		
		HotelVO hvo = new HotelVO();
		hvo.setFirstimage(image);
		hvo.setContentid(id);
		hvo.setTitle(title);
		hvo.setReadcount(readcount);
		hvo.setAddr1(addr1);
		hvo.setTel(tel);
		hvo.setMapx(mapx);
		hvo.setMapy(mapy);
		
		request.setAttribute("hotel", hvo);
		
		RequestDispatcher dis = request.getRequestDispatcher(url);
		dis.forward(request, response);
	}

}
