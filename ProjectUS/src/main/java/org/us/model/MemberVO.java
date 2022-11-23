package org.us.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MemberVO {

	private String id; // 아이디
	private String pw; // 비밀번호
	private String name; // 이름
	private String nick; // 닉네임
	private String gender; // 성별
	private String birthY; // 년도
	private String birthM; // 월
	private String birthD; // 일
	private String email; // 이메일
	private String phone; // 휴대폰번호
	private String signdate; // 가입일
	private int admin; // 관리자 

}
