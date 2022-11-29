package org.us.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class NextPreVO {
	// 공지사항
	private int nno; // 글 번호
	private String title; // 글 제목
	
	// 자유게시판
	private int bno; // 글 번호
}
