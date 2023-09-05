package com.skys.controller.airLines;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skys.action.Action;
import com.skys.action.ActionFactory;
import com.skys.dao.AirDAO;

@WebServlet("/airSit")
public class AirSitController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static String naming = "AirSitController : ";
	
    public AirSitController() {
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
		String depdate = request.getParameter("depdate");
		String vihicleId = request.getParameter("vihicleId");
		System.out.println(naming+cmd);
		AirDAO ado = new AirDAO();
		int sit = ado.sit(depdate, vihicleId);
		System.out.println(depdate+vihicleId);
		System.out.println(sit);
		PrintWriter out = response.getWriter();
		out.println(sit);
		
	}
	
}
