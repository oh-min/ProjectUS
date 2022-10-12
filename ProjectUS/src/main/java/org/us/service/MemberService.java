package org.us.service;

import org.us.model.MemberVO;

public interface MemberService {
	// 회원가입 설계
	public void signup(MemberVO mvo);
	// 로그인 설계
	public MemberVO signin(MemberVO mvo);
}
