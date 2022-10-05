package org.us.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MemberController {
	// 회원가입 페이지로 이동
	@RequestMapping(value = "/member/join", method = RequestMethod.GET)
	public void join() {
	}
	// 회원가입 버튼 클릭시 
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public String joinPost() {
		System.out.println("joinPost 연결");
		return "home";
	}

	// 로그인 페이지로 이동
	@RequestMapping(value = "/member/login", method = RequestMethod.GET)
	public void login() {
	}
}
