package org.us.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class ChatVO {
	private int cno; // 채팅방 번호
	private int dno; // 거래글 번호
	private String writerid; // 거래글을 작성한 사람 아이디
	private String writernick; // 거래글을 작성한 사람 닉네임
	private String wantedid; // 거래를 원하는 사람 아이디
	private String wantednick; // 거래를 원하는 사람 닉네임
	private String message; // 메세지 내용
}
