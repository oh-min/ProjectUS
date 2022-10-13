package org.us.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.MemberMapper;
import org.us.model.MemberVO;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired
	MemberMapper mm;

	// 회원가입 구현
	public void signup(MemberVO mvo) {
		System.out.println("회원가입 serviceImpl 연결 완료");
		System.out.println(mvo);
		mm.signup(mvo);
	}

	// 로그인 구현
	public MemberVO signin(MemberVO mvo) {
		return mm.signin(mvo);
	}
	
	// 아이디 중복확인 구현
	public MemberVO idsamechk(MemberVO mvo) {
		System.out.println("아이디 중복확인 service 연결 완료");
		System.out.println(mvo);
		return mm.idsamechk(mvo);
	}
}
