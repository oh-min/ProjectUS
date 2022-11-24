package org.us.Handler;

import java.io.BufferedReader;
import java.net.URL;

import javax.swing.text.Document;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

public class RandomnickHandler {

	public static void main(String[] args) {
		BufferedReader br = null;
		try {
			String strurl = "https://krdict.korean.go.kr/api/search?certkey_no=4619&key=65651A7A42C519A376CA5638CE8D65C0&type_search=search&part=word&q=감&sort=dict";
			//URL url = new URL(strurl);
			
			DocumentBuilderFactory dbFactoty = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactoty.newDocumentBuilder();
//			Document doc = dBuilder.parse(strurl);
			
		}catch(Exception e){
			System.out.println(e.getMessage());
		}
	}

}
