package org.us.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.us.model.AttachFileVO;

import net.coobird.thumbnailator.Thumbnailator;

@Controller
public class AttachController {
	/* 년/월/일 폴더 생성하는 메서드 선언 */
	private String getFolder() {
		Date date = new Date(); // 현재 날짜 추출
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); // 날짜 형식
		String str = sdf.format(date); // 현재 날짜를 format 적용
		return str.replace("-", "\\"); // 2022-08-24 -> 2022\08\24로 변경
	}

	/* 첨부된 파일이 이미지인지 아닌지 생성하는 메서드 선언 */
	private boolean checkImageType(File file) {
		// probeContentType(파일경로) : 파일경로에 있는 파일타입을 알아내는 메서드
		String contentType;
		try {
			contentType = Files.probeContentType(file.toPath());
			// 파일타입이 image 이면 true, 그 이외에는 false
			return contentType.startsWith("image");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return false;
	}

	/* 첨부파일 post */
	@RequestMapping(value = "/attach", method = RequestMethod.POST)
	public ResponseEntity<ArrayList<AttachFileVO>> attach(MultipartFile[] attachFile) {
		// AttachFileVO클래스 포함
		ArrayList<AttachFileVO> list = new ArrayList<>();

		// 폴더 경로
		String attachFolder = "D:\\01-STUDY\\upload";

		// 서버 업로드 경로와 getFolder메서드의 날짜문자열을 이어서 하나의 폴더 생성
		File attachPath = new File(attachFolder, getFolder());

		// 폴더 생성
		if (attachPath.exists() == false) { // uploadPath가 존재하지 않으면,
			attachPath.mkdirs();
		}

		// for(배열명:변수명)
		for (MultipartFile multipartFile : attachFile) {

			// AttachFileVO클래스의 새로운 주소를 반복적으로 생성하여 ArrayList에 저장
			AttachFileVO avo = new AttachFileVO();

			// 파일 저장
			UUID uuid = UUID.randomUUID(); // uuid 적용

			// AttachFileVO의 변수에 저장
			avo.setAttachPath(getFolder());
			avo.setFileName(multipartFile.getOriginalFilename());
			avo.setUuid(uuid.toString());

			// 어느폴더에 어떤 파일 이름으로
			File saveFile = new File(attachPath, uuid.toString() + "_" + multipartFile.getOriginalFilename());

			try { // 파일 전송
				multipartFile.transferTo(saveFile); // 서버로 원본파일 전송

				// 내가 서버에 올리고자 하는 파일이 이미지인 경우
				// 내가 서버에 올리고자 하는 파일이 이미지이면,
				if (checkImageType(saveFile)) {

					// AttachFileVO의 image 변수에 저장()
					avo.setImage(true);
					// 파일 생성
					FileOutputStream thumnail = new FileOutputStream(
							new File(attachPath, "s_" + uuid.toString() + "_" + multipartFile.getOriginalFilename()));
					// 썸네일형식의 파일생성
					Thumbnailator.createThumbnail(multipartFile.getInputStream(), thumnail, 400, 400);

					thumnail.close();
				}
				// AttachFileVO에 저장된 데이터를 배열의 추가
				list.add(avo);

			} catch (Exception e) {// 예외르 처리하라.
				System.out.println(e.getMessage());
			}
		} // for END
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	/* 이미지 주소 생성 */
	@RequestMapping(value = "/notice/display", method = RequestMethod.GET)
	public ResponseEntity<byte[]> getFile(String fileName) {

		File file = new File("D:\\01-STUDY\\upload\\" + fileName);
		ResponseEntity<byte[]> result = null;

		HttpHeaders headers = new HttpHeaders();

		try {

			headers.add("Content-Type", Files.probeContentType(file.toPath()));
			result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), headers, HttpStatus.OK);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return result;
	}
	@RequestMapping(value = "/board/display", method = RequestMethod.GET)
	public ResponseEntity<byte[]> boardgetFile(String fileName) {
		
		File file = new File("D:\\01-STUDY\\upload\\" + fileName);
		ResponseEntity<byte[]> result = null;
		
		HttpHeaders headers = new HttpHeaders();
		
		try {
			
			headers.add("Content-Type", Files.probeContentType(file.toPath()));
			result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), headers, HttpStatus.OK);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}

	/* 다운로드 주소 생성 */
	@RequestMapping(value = "/notice/download", method = RequestMethod.GET)
	public ResponseEntity<Resource> downloadFile(String fileName) {

		Resource resource = new FileSystemResource("D:\\01-STUDY\\upload\\" + fileName);
		// 다운로드시 파일의 이름을 처리
		String resourceName = resource.getFilename();

		HttpHeaders headers = new HttpHeaders();

		try {
			// 다운로드 파일이름이 한글일 때, 깨지지 않게 하기 위한 설정
			headers.add("Content-Disposition",
					"attachment;filename=" + new String(resourceName.getBytes("utf-8"), "ISO-8859-1"));
		} catch (Exception e) {
			e.printStackTrace();
		}

		return new ResponseEntity<>(resource, headers, HttpStatus.OK);
	}

	/* 첨부된 파일 삭제하기 */
	@RequestMapping(value = "/attach/delete", method = RequestMethod.POST)
	public void delete(AttachFileVO avo) {
		System.out.println("첨부된 파일 삭제 컨트롤러 : " + avo);
	}
}
