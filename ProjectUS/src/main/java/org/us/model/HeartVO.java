package org.us.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class HeartVO {
	private int hno; // 좋아요 번호
	private String id; // 아이디
	private int bno; // 자유게시판 글 번호
}
