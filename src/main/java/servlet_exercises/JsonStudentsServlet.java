package servlet_exercises;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import java.util.ArrayList;

@WebServlet("/jsonStudents")

public class JsonStudentsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ArrayList<Student> studentList = new ArrayList<Student>();
		
		studentList.add(new Student(50,"Judy","Smith","Majurinkatu 2", 02600,"Espoo"));
		studentList.add(new Student(60,"Sisu","Kokonen","Simonkatu 102", 05200,"Helsinki"));
		studentList.add(new Student(70,"Laura","Nguyen","Mankatu 13", 04500,"Vantaa"));
		
		Gson gson = new Gson();
		String json = gson.toJson(studentList);
		
		PrintWriter out = response.getWriter();
		
		out.println(json);
	}

}
