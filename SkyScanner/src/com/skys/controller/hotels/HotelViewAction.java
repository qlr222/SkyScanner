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
import com.skys.util.Script;

public class HotelViewAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "hotel/hotelView.jsp";
		
		String areaCode = request.getParameter("areaCode");
		String sigunguCode = request.getParameter("sigunguCode");
		
		HotelVO hvo = new HotelVO();
		hvo.setAreacode(areaCode);
		hvo.setSigungucode(sigunguCode);
		
		HotelDAO hdao = new HotelDAO();
		List<HotelVO> hotel = hdao.selectHotel(hvo);
		System.out.println(hotel.size());
		if(hotel.size() != 0) {
			request.setAttribute("hotel", hotel);
			RequestDispatcher dis = request.getRequestDispatcher(url);
			dis.forward(request, response);
		} else {
			Script.moving(response, "검색결과가 없습니다.");
		}
	}

}
