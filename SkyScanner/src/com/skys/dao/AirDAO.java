package com.skys.dao;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException; 



import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.skys.dto.AirVO;
import com.skys.dto.TicketVO;
import com.skys.util.DBManager;

public class AirDAO {
	private PreparedStatement pstmt;
	private ResultSet rs;

	public List<AirVO> selectAir(AirVO avo) throws IOException {
		List<AirVO> list = null;
		JSONArray arr = null;

		String depairnm = avo.getDepAirportNm();
		String arrairnm = avo.getArrAirportNm();
		String depdate = avo.getDepPlandTime();
		String airline = avo.getAirlineNm();

		/*
		 * StringBuilder urlBuilder = new StringBuilder(
		 * "http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList"
		 * ); URL urlBuilder.append("?" + URLEncoder.encode("ServiceKey", "UTF-8") +
		 * "=dIVOe6RHE9lDw%2BrRNqpWR1KY7uObCMOZflVA9KGs%2FlIOJoHX%2F1V0em7Eb3rmYRC7zz7IFPhPL9%2BhCrLk%2BpBjBw%3D%3D"
		 * ); Service Key urlBuilder.append("&" + URLEncoder.encode("numOfRows",
		 * "UTF-8") + "=" + URLEncoder.encode("10", "UTF-8")); 한 페이지 결과 수
		 * urlBuilder.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" +
		 * URLEncoder.encode("1", "UTF-8")); 페이지 번호 urlBuilder.append("&" +
		 * URLEncoder.encode("depAirportId", "UTF-8") + "=" +
		 * URLEncoder.encode(avo.getDepAirportNm(), "UTF-8")); 출발공항ID
		 * urlBuilder.append("&" + URLEncoder.encode("arrAirportId", "UTF-8") + "=" +
		 * URLEncoder.encode(avo.getArrAirportNm(), "UTF-8")); 도착공항ID
		 * urlBuilder.append("&" + URLEncoder.encode("depPlandTime", "UTF-8") + "=" +
		 * URLEncoder.encode(avo.getDepPlandTime(), "UTF-8")); 출발일 urlBuilder.append("&"
		 * + URLEncoder.encode("airlineId", "UTF-8") + "=" +
		 * URLEncoder.encode(avo.getAirlineNm(), "UTF-8")); 항공사ID urlBuilder.append("&"
		 * + URLEncoder.encode("_type", "UTF-8") + "=" + URLEncoder.encode("json",
		 * "UTF-8")); json
		 */
		/* String myAddr =
		 "https://www.data.go.kr/pubr/use/pra/IrosPblonsipSvcReqst/downloadUrlXmlToJson.do?url=http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList&param=serviceKey=dIVOe6RHE9lDw%252BrRNqpWR1KY7uObCMOZflVA9KGs%252FlIOJoHX%252F1V0em7Eb3rmYRC7zz7IFPhPL9%252BhCrLk%252BpBjBw%253D%253D%26numOfRows=30%26pageSize=30%26pageNo=1%26startPage=1%26depAirportId="+depairnm+"%26arrAirportId="+arrairnm+"%26depPlandTime="+depdate+"%26airlineId="+airline+"&fileName=%ED%95%AD%EA%B3%B5%EC%9A%B4%ED%96%89%EC%A0%95%EB%B3%B4%EB%AA%A9%EB%A1%9D%20%EC%A1%B0%ED%9A%8C&oagUseAt=N";*/
		// 윤영이
		// String myAddr =
		// "https://www.data.go.kr/pubr/use/pra/IrosPblonsipSvcReqst/downloadUrlXmlToJson.do?url=http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList&param=serviceKey=7ahkjyCSOevQPGtZTEL8o5UUVeSvYWcQuv9sG4DRoR88ZckSUYFLLqZlSHgeVt2BmyoCaY%252Fck%252BRdtwTotF%252Fnww%253D%253D%26numOfRows=10%26pageSize=10%26pageNo=1%26startPage=1%26depAirportId="+depairnm+"%26arrAirportId="+arrairnm+"%26depPlandTime="+depdate+"%26airlineId="+airline+"&fileName=%ED%95%AD%EA%B3%B5%EC%9A%B4%ED%96%89%EC%A0%95%EB%B3%B4%EB%AA%A9%EB%A1%9D%20%EC%A1%B0%ED%9A%8C&oagUseAt=N";

		// 치곤
		/*String myAddr = "https://www.data.go.kr/pubr/use/pra/IrosPblonsipSvcReqst/downloadUrlXmlToJson.do?url=http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList&param=serviceKey=BXLJvlNBVc7Fq8Ix5xoKydCGSAgSErQPQOu7Q%252Bf6aclHotPDubRxC5J4dOHfZe3XxIny2P7hyR0HE845Gujhpg%253D%253D%26numOfRows=10%26pageSize=10%26pageNo=1%26startPage=1%26depAirportId="
				+ depairnm + "%26arrAirportId=" + arrairnm + "%26depPlandTime=" + depdate + "%26airlineId=" + airline
				+ "&fileName=%ED%95%AD%EA%B3%B5%EC%9A%B4%ED%96%89%EC%A0%95%EB%B3%B4%EB%AA%A9%EB%A1%9D%20%EC%A1%B0%ED%9A%8C&oagUseAt=N";*/
		 //장미누나
		 String myAddr =
		 "https://www.data.go.kr/pubr/use/pra/IrosPblonsipSvcReqst/downloadUrlXmlToJson.do?url=http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList&param=serviceKey=tw7iF5emag%2FD%2FdEjlgPB3adN%2F9yhRWDx5uaYkXJ6zS6iIqmC42ZqXA6xyReyIivilHvZNywdRTalQMWHpa2orw%3D%3D%26numOfRows=10%26pageSize=10%26pageNo=1%26startPage=1%26depAirportId="+depairnm+"%26arrAirportId="+arrairnm+"%26depPlandTime="+depdate+"%26airlineId="+airline+"&fileName=%ED%95%AD%EA%B3%B5%EC%9A%B4%ED%96%89%EC%A0%95%EB%B3%B4%EB%AA%A9%EB%A1%9D%20%EC%A1%B0%ED%9A%8C&oagUseAt=N";

		URL url = new URL(myAddr);
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		// conn.setRequestProperty("Content-type", "application/json");
		// System.out.println("Response code: " + conn.getResponseCode());
		BufferedReader rd = null;
		if (conn.getResponseCode() == 200) {
			rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		}
		StringBuilder sb = new StringBuilder();
		String line;
		while ((line = rd.readLine()) != null) {
			sb.append(line);
		}
		rd.close();
		conn.disconnect();
		// System.out.println(sb.toString());

		JSONParser parser = new JSONParser();
		JSONObject obj = null;
		try {
			obj = (JSONObject) parser.parse(sb.toString());
		} catch (ParseException e) {
			e.printStackTrace();
		}

		System.out.println(obj.toString());
		// 비행기표 유무 체크 // *빈 JSONArray 체크
		JSONArray check = new JSONArray();
		if (!(obj.get("records").equals(check))) {
			arr = (JSONArray) obj.get("records");
			check = (JSONArray) obj.get("fields");
			
			if(check.size() == 6) {
				arr = null;
			}
			
		}
		
		// System.out.println(arr);
		Gson gson = new Gson();

		/* System.out.println(arr.toString()); */

		try {

			if (arr != null) {
				list = gson.fromJson(arr.toString(), new TypeToken<List<AirVO>>() {}.getType());
				
			}
			return list;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public int sit(String depdate, String vihicleld) {
		String SQL = "SELECT sit FROM airplane WHERE sit = (SELECT min(sit) FROM airplane a WHERE depplandtime = ? AND vihicleId = ?)";
		Connection conn = DBManager.getConnection();
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, depdate);
			pstmt.setString(2, vihicleld);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				return rs.getInt("sit");
			} else {
				return 30;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt, rs);
		}
		return -2;
	}
	public int reserve(int people, String id) {
		String SQL = "SELECT num FROM reserve WHERE num = (SELECT max(num) FROM reserve a)";
		String SQL2 = "INSERT INTO reserve values(?, ?, ?)";
		int num = 1;
		Connection conn = DBManager.getConnection();
		try {
			pstmt = conn.prepareStatement(SQL);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				num = rs.getInt("num")+1;
			} 
			pstmt = conn.prepareStatement(SQL2);
			pstmt.setInt(1, num);
			pstmt.setString(2, id);
			pstmt.setInt(3, people);
			pstmt.executeUpdate();
			return num;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt);
		}
		return -1;
	}
	
	public List<Integer> getReserveNum(String id) {
		List<Integer> rNum = new ArrayList<Integer>();
		String SQL = "SELECT * FROM reserve where uid = ?";
		Connection conn = DBManager.getConnection();
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				rNum.add(rs.getInt("num"));
			}
			return rNum;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return rNum;
		
	}
	
	public int getPeople(int rNum) {
		String SQL = "SELECT * FROM reserve where num = ?";
		Connection conn = DBManager.getConnection();
		int people = 0;
		
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, rNum);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				people = rs.getInt("people");
			}
			return people;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt, rs);
		}
		return 0;
	}
	
	public TicketVO getTicket(int rNum) {
		TicketVO tvo = new TicketVO();
		String SQL = "SELECT * FROM airplane where num = ?";
		Connection conn = DBManager.getConnection();
		int charge = 0;
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, rNum);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				charge = charge+Integer.parseInt(rs.getString("economyCharge"));
			}
			
			pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, rNum);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				tvo.setAirlineNm(rs.getString("airlineNm"));
				tvo.setArrAirportNm(rs.getString("arrAirportNm"));
				tvo.setArrPlandTime(rs.getString("arrPlandTime"));
				tvo.setDepAirportNm(rs.getString("depAirportNm"));
				tvo.setDepPlandTime(rs.getString("depPlandTime"));
				tvo.setEconomyCharge("");
				tvo.setEconomyCharge(charge+"");
				tvo.setNum(rs.getInt("num"));
				tvo.setPrestigeCharge(rs.getString("prestigeCharge"));
				tvo.setReserveNum(rs.getString("reserveNum"));
				tvo.setSit(rs.getInt("sit"));
				tvo.setUid(rs.getString("uid"));
				tvo.setVihicleId(rs.getString("vihicleId"));
			}
			return tvo;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return tvo;
	}
	
	public int ticket(TicketVO tvo) {
		String SQL = "INSERT INTO airplane values(?, ?, ?, ?, ?, ?, '0', ?, ? , 'admin', ?, now(6))";
		Connection conn = DBManager.getConnection();
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, tvo.getNum());
			pstmt.setString(2, tvo.getArrAirportNm());
			pstmt.setString(3, tvo.getArrPlandTime());
			pstmt.setString(4, tvo.getDepAirportNm());
			pstmt.setString(5, tvo.getDepPlandTime());
			pstmt.setString(6, tvo.getEconomyCharge());
			pstmt.setString(7, tvo.getAirlineNm());
			pstmt.setString(8, tvo.getVihicleId());
			if(tvo.getSit() != -1 ) {
				pstmt.setInt(9, tvo.getSit()-1);
			} else {
				pstmt.setInt(9, 29);
			}

			pstmt.executeUpdate();
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt);
		}
		return -1;
	}
}
