package org.us.model;

import java.util.ArrayList;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardVO {
	private String id; // 아이디
	private String nick; // 닉네임
	private int bno; // 게시판 글 번호
	private String title; // 제목
	private String content; // 내용
	private int category; // 카테고리( 1 : 거래, 2 : 질문, 3 : 기타)
	private Date regdate; // 작성일자
	private int cnt; // 조회수
	private String price; // 가격

	// AttachFileVO(첨부파일 관련)
	private ArrayList<AttachFileVO> attach;
}