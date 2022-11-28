package org.us.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TestVO {
	private int bno; // 글 번호
	private String id; // 아이디
	private String title; // 제목
	private String content; // 내용
	private Date regdate; // 작성일자
	private int cnt; // 조회수
}
