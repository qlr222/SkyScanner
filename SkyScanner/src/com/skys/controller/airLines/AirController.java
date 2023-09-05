package com.skys.controller.airLines;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skys.action.Action;
import com.skys.action.ActionFactory;

@WebServlet("/air")
public class AirController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static String naming = "AirController : ";
	
    public AirController() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		doProcess(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		doProcess(request, response);
	}
	
	protected void doProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		String cmd = request.getParameter("cmd");
		System.out.println(naming+cmd);
		ActionFactory af = ActionFactory.getInstance();
		Action action = af.getAction(cmd);
		if (action != null) action.execute(request, response);
		
	}
	
}
