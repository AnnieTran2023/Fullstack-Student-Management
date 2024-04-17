package servlet_exercises;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import data_access.StudentDAO;

@WebServlet("/students")
public class StudentListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		StudentDAO students = new StudentDAO();
		List<Student> studentList = students.getAllStudents();
		
		System.out.println(studentList);
		
		Gson gson = new Gson();
		String json = gson.toJson(studentList);
		
		PrintWriter out = response.getWriter();
		out.println(json);
	}

}
