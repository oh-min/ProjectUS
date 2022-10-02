package org.us.dbtest;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Test;

public class JDBCTest {
	String driver = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/us?serverTimezone=Asia/Seoul";
	String user = "root";
	String password = "1234";

	@Test
	public void testConnection() throws Exception {
		Class.forName(driver);
		try (Connection con = DriverManager.getConnection(url, user, password)) {
			System.out.println("DB연결성공");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
