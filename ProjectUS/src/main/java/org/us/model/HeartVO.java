package org.us.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class HeartVO {
	@JsonProperty("hno") // json 타입으로 변경하기위한 어노테이션
	private int hno; // 좋아요 번호

	@JsonProperty("id")
	private String id; // 아이디

	@JsonProperty("bno")
	private int bno; // 자유게시판 글 번호\
	@JsonProperty("count")
	private int count;

}
