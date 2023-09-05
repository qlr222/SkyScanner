package com.skys.controller.airLines;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.skys.action.Action;
import com.skys.dao.AirDAO;

import com.skys.dto.TicketVO;

public class AirInsertAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String url = "member?cmd=memberPage";
		String id = (String)session.getAttribute("id");
		AirDAO adao = new AirDAO();
		TicketVO tvo = (TicketVO)session.getAttribute("Ticket");
		TicketVO tvo2 = null;
		if(session.getAttribute("Ticket2") != null) {
			tvo2 = (TicketVO)session.getAttribute("Ticket2");
		}
		// 편도
		int people = (int)session.getAttribute("people");
		
		tvo.setNum(adao.reserve(people,id));
		
		for(int i = 0; i<people; i++) {
			int sit = adao.sit(tvo.getDepPlandTime(), tvo.getVihicleId());
			System.out.println(tvo.getDepPlandTime());
			tvo.setSit(sit);
			adao.ticket(tvo);
		}
		
		
		// 왕복
		if (tvo2 != null) {
			tvo2.setNum(tvo.getNum());
			for(int i = 0; i<people; i++) {
				int sit = adao.sit(tvo2.getDepPlandTime(), tvo2.getVihicleId());
				tvo2.setSit(sit);
				adao.ticket(tvo2);
			}
			
		}
		session.removeAttribute("Ticket");
		session.removeAttribute("Ticket2");
		session.removeAttribute("people");
		response.sendRedirect(url);
	}
}