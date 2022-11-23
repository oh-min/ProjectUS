package org.us.model;

import java.util.ArrayList;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class NoticeVO {

	private String id; // 아이디
	private String nick; // 닉네임
	private int nno; // 공지번호
	private String title; // 제목
	private String content; // 내용
	private int category; // 카테고리
	private Date regdate; // 작성일자
	private int cnt; // 조회수
	private int top; // 공지 설정
	
	// AttachFileVO(첨부파일 관련)
	private ArrayList<AttachFileVO> attach;
}
