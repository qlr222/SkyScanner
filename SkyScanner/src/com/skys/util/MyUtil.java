package com.skys.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.skys.dto.AirVO;

public class MyUtil {
	public static List<AirVO> sort(List<AirVO> air, List<AirVO> air2, List<AirVO> air3, List<AirVO> air4, List<AirVO> air5,
			List<AirVO> air6, List<AirVO> air7, String type) {

		List<AirVO> list = new ArrayList<AirVO>();

		if (air != null) {
			
			list.addAll(air);
		}
		if (air2 != null) {
			
			list.addAll(air2);
		}
		if (air3 != null) {
			
			list.addAll(air3);
		}
		if (air4 != null) {
			
			list.addAll(air4);
		}
		if (air5 != null) {
			
			list.addAll(air5);
		}
		if (air6 != null) {
			
			list.addAll(air6);
		}
		if (air7 != null) {
			
			list.addAll(air7);
		}
		if(type.equals("timed")) {
			Collections.sort(list, new timed());
		} else if(type.equals("price")) {
			Collections.sort(list, new price());
		} else if(type.equals("line")) {
			Collections.sort(list, new line());
		}

		
		return list;
	}

	static class timed implements Comparator<AirVO> {
		@Override
		public int compare(AirVO o1, AirVO o2) {
			
			return o1.getArrPlandTime().compareTo(o2.getArrPlandTime());
		}
	}
	
	static class price implements Comparator<AirVO> {
		@Override
		public int compare(AirVO o1, AirVO o2) {
			
			return o1.getEconomyCharge().compareTo(o2.getEconomyCharge());
		}
	}
	
	static class line implements Comparator<AirVO> {
		@Override
		public int compare(AirVO o1, AirVO o2) {
			
			return o1.getAirlineNm().compareTo(o2.getAirlineNm());
		}
	}

	public static String port(String airport) {
		if (airport.equals("NAARKJB")) {
			airport = "무안";
		} else if (airport.equals("NAARKJJ")) {
			airport = "광주";
		} else if (airport.equals("NAARKJK")) {
			airport = "군산";
		} else if (airport.equals("NAARKJY")) {
			airport = "여수";
		} else if (airport.equals("NAARKNW")) {
			airport = "원주";
		} else if (airport.equals("NAARKNY")) {
			airport = "양양";
		} else if (airport.equals("NAARKPC")) {
			airport = "제주";
		} else if (airport.equals("NAARKPK")) {
			airport = "김해";
		} else if (airport.equals("NAARKPS")) {
			airport = "사천";
		} else if (airport.equals("NAARKPU")) {
			airport = "울산";
		} else if (airport.equals("NAARKSI")) {
			airport = "인천";
		} else if (airport.equals("NAARKSS")) {
			airport = "김포";
		} else if (airport.equals("NAARKTH")) {
			airport = "포항";
		} else if (airport.equals("NAARKTN")) {
			airport = "대구";
		} else {
			airport = "청주";
		}
		return airport;
	}
}
