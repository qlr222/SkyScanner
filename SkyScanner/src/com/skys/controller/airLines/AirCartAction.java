package com.skys.controller.airLines;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.AirDAO;
import com.skys.dto.TicketVO;
import com.skys.util.Script;

public class AirCartAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "air/airCartPage.jsp";
		HttpSession session = request.getSession();
		AirDAO adao = new AirDAO();
		TicketVO tvo = new TicketVO();
		TicketVO tvo2 = new TicketVO();
		//편도
		String airlineNm = request.getParameter("airlineNm");
		String depAirportNm = request.getParameter("depAirportNm");
		String arrAirportNm = request.getParameter("arrAirportNm");
		String depPlandTime = request.getParameter("depPlandTime");
		String arrPlandTime = request.getParameter("arrPlandTime");
		String economyCharge = request.getParameter("economyCharge");
		String vihicleId = request.getParameter("vihicleId");
		int people = Integer.parseInt(request.getParameter("people"));
		int sit = adao.sit(depPlandTime, vihicleId);
		
		tvo.setAirlineNm(airlineNm);
		tvo.setDepAirportNm(depAirportNm);
		tvo.setArrAirportNm(arrAirportNm);
		tvo.setDepPlandTime(depPlandTime);
		tvo.setArrPlandTime(arrPlandTime);
		tvo.setEconomyCharge(economyCharge);
		tvo.setVihicleId(vihicleId);
		tvo.setSit(sit);
		/*request.setAttribute("Ticket", tvo);
		request.setAttribute("people", people);*/
		
		//왕복
		if(request.getParameter("airlineNm2") != null) {
			String airlineNm2 = request.getParameter("airlineNm2");
			String depAirportNm2 = request.getParameter("depAirportNm2");
			String arrAirportNm2 = request.getParameter("arrAirportNm2");
			String depPlandTime2 = request.getParameter("depPlandTime2");
			String arrPlandTime2 = request.getParameter("arrPlandTime2");
			String economyCharge2 = request.getParameter("economyCharge2");
			String vihicleId2 = request.getParameter("vihicleId2");
			sit = adao.sit(depPlandTime2, vihicleId2);
			
			tvo2.setAirlineNm(airlineNm2);
			tvo2.setDepAirportNm(depAirportNm2);
			tvo2.setArrAirportNm(arrAirportNm2);
			tvo2.setDepPlandTime(depPlandTime2);
			tvo2.setArrPlandTime(arrPlandTime2);
			tvo2.setEconomyCharge(economyCharge2);
			tvo2.setVihicleId(vihicleId2);
			tvo2.setSit(sit);
			request.setAttribute("Ticket2", tvo2);
			
		}
		session.setAttribute("Ticket", tvo);
		session.setAttribute("people", people);
		if(request.getParameter("airlineNm2") != null) {
			session.setAttribute("Ticket2", tvo2);
		}
		if(session.getAttribute("id") == null) {
			Script.moving(response, "먼저 로그인을 해주세요", "user/signIn.jsp");
		}
		else {
			response.sendRedirect("air?cmd=airInsert");
		}
		

	}
}
