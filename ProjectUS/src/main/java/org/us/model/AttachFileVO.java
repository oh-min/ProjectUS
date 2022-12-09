package org.us.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class AttachFileVO {
	private String attachPath; // 파일이 저장되어 있는 경로
	private String fileName; // 업로드된 파일명
	private String uuid; // uuid 정보
	private boolean image; // 업로드된 파일이 이미지파일인지 아닌지 구분
	private int nno; // 공지사항 글 번호
	private int bno; // 자유게시판 글 번호
	private int heart; // 좋아요
}
