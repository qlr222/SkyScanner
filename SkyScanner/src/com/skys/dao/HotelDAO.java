package com.skys.dao;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.skys.dto.HotelVO;

public class HotelDAO {
	private PreparedStatement pstmt;
	private ResultSet rs;

    public List<HotelVO> selectHotel(HotelVO hvo) throws IOException {
       JSONArray arr = null;
       List<HotelVO> hotel = null;

       String areaCode = hvo.getAreacode();//변수화 해야됨
       String sigunguCode = hvo.getSigungucode();//변수 해야됨
        String myAddr = "https://www.data.go.kr/pubr/use/pra/IrosPblonsipSvcReqst/downloadUrlXmlToJson.do?url=http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchStay&param=serviceKey=KndE3hXvsIKUcanfv7YMf0oCm0AD3qNFtMVNKyUfjg6d6%252F1l%252B%252B%252BEVUnbO7j%252BggVn2eAoKH8jcQEsG3kw9DxAzQ%253D%253D%26numOfRows=50%26pageSize=10%26pageNo=1%26startPage=1%26MobileOS=ETC%26MobileApp=AppTest%26arrange=A%26listYN=Y%26areaCode="+areaCode+"%26sigunguCode="+sigunguCode+"&fileName=%EC%88%99%EB%B0%95%EC%A0%95%EB%B3%B4%EC%A1%B0%ED%9A%8C&oagUseAt=N";
        URL url = new URL(myAddr);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        //conn.setRequestProperty("Content-type", "application/json");
        //System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd = null;
        if(conn.getResponseCode() == 200) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        System.out.println(sb.toString());

        JSONParser parser = new JSONParser();
        JSONObject obj = null;
      try {
         obj = (JSONObject)parser.parse(sb.toString());
      } catch (ParseException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }

      arr = (JSONArray)obj.get("records");


      Gson gson = new Gson();
      hotel = gson.fromJson(arr.toString(), new TypeToken<List<HotelVO>>(){}.getType());



      return hotel;
    }
}