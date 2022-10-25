package org.us.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.us.model.AttachFileVO;

@Controller
public class AttachController {

	/* 년/월/일 폴더 생성하는 메서드 선언 */
	private String getFolder() {
		Date date = new Date(); // 현재날짜 추출(Thu Aug 24 09:23:12 KST 2022)

		// 날짜 형식 변경 (2022-08-24)
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		// 현재날짜와 날짜형식을 연결
		String str = sdf.format(date); // 2022-08-24

		return str.replace("-", "\\"); // 2022-08-24 -> 2022\08\24로 변경
	}

	@RequestMapping(value = "/attach", method = RequestMethod.POST)
	public ResponseEntity<ArrayList<AttachFileVO>> attach(MultipartFile[] attachFile) {
		// 폴더 경로
		String attachFolder = "D:\\01-STUDY\\usproject\\attach";

		/* getFolder */
		// 서버 업로드 경로와 getFolder메서드의 날짜문자열을 이어서 하나의 폴더 생성
		File attachPath = new File(attachFolder, getFolder());
		// attachPath가 존재하지 않으면 -> 폴더 생성
		if (attachPath.exists() == false) {
			attachPath.mkdirs();
		}

		// for(배열명:변수명)
		for (MultipartFile multipartFile : attachFile) {

			System.out.println(multipartFile.getOriginalFilename());
			System.out.println(multipartFile.getSize());

			// 파일 저장
			UUID uuid = UUID.randomUUID();

			System.out.println("UUID=" + uuid.toString());
			// 어느폴더에(D:\\01-STUDY\\usproject\\attach\\경로),어떤 파일 이름으로(UUID_파일이름)
			File saveFile = new File(attachPath, uuid.toString()+"_"+multipartFile.getOriginalFilename());

			try { // D:\\01-STUDY\\usproject\\attach\\image에 파일을 전송(transferTo)
				multipartFile.transferTo(saveFile);
			} catch (Exception e) {// 예외를 처리하라.
				System.out.println(e.getMessage());
			}
		}
		return null;
	}

}
