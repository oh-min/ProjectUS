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
	
	// 중고거래
	private int dno; // 글 번호
	private String product; // 제품이름
}
