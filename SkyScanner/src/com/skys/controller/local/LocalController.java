package com.skys.controller.local;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/local")
public class LocalController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static String naming = "LocalController : ";
   
    public LocalController() {
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
		request.setCharacterEncoding("UTF-8");
		String cmd = request.getParameter("cmd");
		System.out.println(naming+cmd);
		com.skys.action.ActionFactory af = com.skys.action.ActionFactory .getInstance();
		com.skys.action.Action action = af.getAction(cmd);
		if(action != null) action.execute(request, response);
	}
}
