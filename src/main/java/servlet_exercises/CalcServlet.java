package servlet_exercises;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calculator")

public class CalcServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		PrintWriter out = response.getWriter();
		
		int x = Integer.parseInt(request.getParameter("x"));
		int y = Integer.parseInt(request.getParameter("y"));
		String operation = request.getParameter("operation");
		
		String operationDisplay = "";
		
		int result = 0;
		
		if (operation.equalsIgnoreCase("subtract")) {
			result = x - y;
			operationDisplay = "-";
		} else if (operation.equalsIgnoreCase("multiply")) {
			result = x * y;
			operationDisplay = "*";
		} else if (operation.equalsIgnoreCase("add")) {
			result = x + y;
			operationDisplay = "+";
		}
		
		out.println(x + " " + operationDisplay + " " + y + " = " + result);

	}

}
