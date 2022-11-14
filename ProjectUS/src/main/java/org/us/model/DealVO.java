package org.us.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class DealVO {
	private int dno; // 거래글 번호
	private String way; // 거래방법
	private String product; // 물품명
	private String info; // 물품정보
	private int price; // 가격
	private String nick; // 판매자(닉네임)
	private String id; // 판매자(아이디)
	private int state; // 거래상황
	private Date regdate; // 작성일자
	private int cnt; // 조회수
	private int bookmark; // 즐겨찾기
}
