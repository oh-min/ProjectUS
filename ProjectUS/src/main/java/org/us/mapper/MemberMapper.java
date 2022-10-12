package org.us.mapper;

import org.us.model.MemberVO;

public interface MemberMapper {
	// 회원가입 DB설계
	public void signup(MemberVO mvo);

	// 로그인 DB설계
	public MemberVO signin(MemberVO mvo);
}
