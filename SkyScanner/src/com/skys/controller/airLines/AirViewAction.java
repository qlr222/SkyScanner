package com.skys.controller.airLines;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skys.action.Action;
import com.skys.dao.AirDAO;
import com.skys.dto.AirVO;
import com.skys.dto.TicketVO;
import com.skys.util.MyUtil;

public class AirViewAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url = "air/airList.jsp";
		boolean check = false;
		AirDAO adao = new AirDAO();

		// 파라미터값 받기
		String depairport = request.getParameter("depairport");
		String arrairport = request.getParameter("arrairport");
		String rep = request.getParameter("depdate");
		String depdate = rep.replaceAll("/", "");
		String people = request.getParameter("people");
		// 비행기 파라미터값
		System.out.println(depairport+arrairport+depdate);
		AirVO avo = new AirVO();
		avo.setAirlineNm("AAR");
		avo.setDepAirportNm(depairport);
		avo.setArrAirportNm(arrairport);
		avo.setDepPlandTime(depdate);
		// 항공사별 리스트 받아오기
		List<AirVO> air = adao.selectAir(avo);
		avo.setAirlineNm("ABL");
		List<AirVO> air2 = adao.selectAir(avo);
		avo.setAirlineNm("ESR");
		List<AirVO> air3 = adao.selectAir(avo);
		avo.setAirlineNm("JJA");
		List<AirVO> air4 = adao.selectAir(avo);
		avo.setAirlineNm("JNA");
		List<AirVO> air5 = adao.selectAir(avo);
		avo.setAirlineNm("KAL");
		List<AirVO> air6 = adao.selectAir(avo);
		avo.setAirlineNm("TWB");
		List<AirVO> air7 = adao.selectAir(avo);

//		List<TicketVO> ticketList = adao.getTicket();
		
		// 시간순으로 정렬
		//List<AirVO> list = adao.sort(air, air2, air3, air4, air5, air6, air7);
		
		List<AirVO> timeOrder = MyUtil.sort(air, air2, air3, air4, air5, air6, air7, "timed");
//		List<Integer> toSit = new ArrayList<Integer>();
//		for(int i = 0; i<timeOrder.size(); i++) {
//			for(int j = 0; j<ticketList.size(); j++) {
//				if(ticketList.get(j).getDepPlandTime().equals(timeOrder.get(i).getDepPlandTime()) && ticketList.get(j).getVihicleId().equals(timeOrder.get(i).getVihicleId())) {
//					toSit.add(ticketList.get(j).getSit());
//					check = true;
//				}
//			}
//			if(check == false) {
//				toSit.add(30);
//			}
//		}
//		for(int k = 0; k<toSit.size(); k++) {
//		System.out.println(toSit.get(k));
//		}
		List<AirVO> price = MyUtil.sort(air, air2, air3, air4, air5, air6, air7, "price");
		/*List<Integer> pSit = new ArrayList<Integer>();
		for(int i = 0; i<timeOrder.size(); i++) {
			pSit.add(adao.sit(price.get(i).getDepPlandTime(), price.get(i).getVihicleId()));
		}*/
		
		
		List<AirVO> line = MyUtil.sort(air, air2, air3, air4, air5, air6, air7, "line");
		/*List<Integer> lSit = new ArrayList<Integer>();
		for(int i = 0; i<timeOrder.size(); i++) {
			lSit.add(adao.sit(line.get(i).getDepPlandTime(), line.get(i).getVihicleId()));
		}*/ 
		
		List<String> search = new ArrayList<String>();
		search.add(MyUtil.port(request.getParameter("depairport")));
		search.add(MyUtil.port(request.getParameter("arrairport")));
		search.add(request.getParameter("depdate"));
		
		if (request.getParameter("depdate2") != null) {
			search.add(request.getParameter("depdate2"));
			
		}
		request.setAttribute("people", people);
		request.setAttribute("tripType", "On Way");
		request.setAttribute("timeOrder", timeOrder);
		request.setAttribute("price", price);
		request.setAttribute("line", line);
		request.setAttribute("search", search);
//		request.setAttribute("toSit", toSit); //가는날 시간순 정렬 좌석 수 
/*		request.setAttribute("pSit", pSit); //가는날 가격순 정렬 좌석 수
		request.setAttribute("lSit", lSit); //가는날 항공사순 정렬 좌석 수
*/
		System.out.println(search.get(0));
		System.out.println(search.get(1));
						
		
		System.out.println("1 : "+request.getParameter("depdate"));
		System.out.println("2 : " + request.getParameter("depdate2"));
		// 왕복편
		if (request.getParameter("depdate2") != null) {
			rep = request.getParameter("depdate2");
			depdate = rep.replaceAll("/", "");
			avo.setAirlineNm("AAR");
			avo.setDepAirportNm(arrairport);
			avo.setArrAirportNm(depairport);
			avo.setDepPlandTime(depdate);
			air = adao.selectAir(avo);
			avo.setAirlineNm("ABL");
			air2 = adao.selectAir(avo);
			avo.setAirlineNm("ESR");
			air3 = adao.selectAir(avo);
			avo.setAirlineNm("JJA");
			air4 = adao.selectAir(avo);
			avo.setAirlineNm("JNA");
			air5 = adao.selectAir(avo);
			avo.setAirlineNm("KAL");
			air6 = adao.selectAir(avo);
			avo.setAirlineNm("TWB");
			air7 = adao.selectAir(avo);
			timeOrder = MyUtil.sort(air, air2, air3, air4, air5, air6, air7, "timed");
			/*List<Integer> toSit2 = new ArrayList<Integer>();
			for(int i = 0; i<timeOrder.size(); i++) {
				toSit2.add(adao.sit(timeOrder.get(i).getDepPlandTime(), timeOrder.get(i).getVihicleId()));
			}*/
			
			price = MyUtil.sort(air, air2, air3, air4, air5, air6, air7, "price");
			/*List<Integer> pSit2 = new ArrayList<Integer>();
			for(int i = 0; i<timeOrder.size(); i++) {
				pSit2.add(adao.sit(price.get(i).getDepPlandTime(), price.get(i).getVihicleId()));
			}*/
			
			line = MyUtil.sort(air, air2, air3, air4, air5, air6, air7, "line");
			/*List<Integer> lSit2 = new ArrayList<Integer>();
			for(int i = 0; i<timeOrder.size(); i++) {
				lSit2.add(adao.sit(line.get(i).getDepPlandTime(), line.get(i).getVihicleId()));
			}*/
			
			request.setAttribute("tripType", "Round Trip");
			request.setAttribute("timeOrder2", timeOrder);
			request.setAttribute("price2", price);
			request.setAttribute("line2", line);
			/*request.setAttribute("toSit2", toSit2); //오는날 시간순 정렬 좌석 수
			request.setAttribute("pSit2", pSit2); //오는날 가격순 정렬 좌석 수
			request.setAttribute("lSit2", lSit2); //오는날 항공사순 정렬 좌석 수
*/		}

		RequestDispatcher dis = request.getRequestDispatcher(url);
		dis.forward(request, response);

	}
}
