package org.us.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CriteriaVO {
	private int pageNum; // 페이지번호
	private int amount; // 한 페이지당 게시물 갯수
	private String keyword; // 키워드를 통해 검색
	private String type; // 키워드 기준

	public CriteriaVO() {
		this(1, 10);
	}

	public CriteriaVO(int pageNum, int amount) {
		this.pageNum = pageNum;
		this.amount = amount;
	}

}
