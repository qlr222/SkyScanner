package com.skys.dao;

import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.skys.dto.LocalVO;

import java.io.BufferedReader;
import java.io.IOException;

public class LocalDAO {
    public List<LocalVO> selectLocal(LocalVO lvo) throws IOException {
       JSONArray arr = null;
       List<LocalVO> local = null;
       String areaCode = lvo.getCode();//변경가능하도록 만들어놔야 된다
       System.out.println(lvo.getCode());
        String myAddr = "https://www.data.go.kr/pubr/use/pra/IrosPblonsipSvcReqst/downloadUrlXmlToJson.do?url=http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode&param=serviceKey=KndE3hXvsIKUcanfv7YMf0oCm0AD3qNFtMVNKyUfjg6d6%252F1l%252B%252B%252BEVUnbO7j%252BggVn2eAoKH8jcQEsG3kw9DxAzQ%253D%253D%26numOfRows=50%26pageSize=10%26pageNo=1%26startPage=1%26MobileOS=ETC%26MobileApp=AppTest%26areaCode="+areaCode+"&fileName=%EC%A7%80%EC%97%AD%EC%BD%94%EB%93%9C%EC%A1%B0%ED%9A%8C&oagUseAt=N";
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
      System.out.println(arr.get(0));
      
      Gson gson = new Gson();
      local = gson.fromJson(arr.toString(), new TypeToken<List<LocalVO>>(){}.getType());
      
      //System.out.println(local.get(13).getName());
      //System.out.println(local.get(13).getCode());
      
      return local;
    }
}