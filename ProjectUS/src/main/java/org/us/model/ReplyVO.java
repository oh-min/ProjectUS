package org.us.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReplyVO {
	private String id; // 아이디
	private int bno; // 게시판 글 번호
	private int rno; // 댓글 번호
	private String reply; // 댓글내용
}
