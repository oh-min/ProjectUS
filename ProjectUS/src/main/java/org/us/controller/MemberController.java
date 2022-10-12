package org.us.controller;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.MemberVO;
import org.us.service.MemberService;

@Controller
public class MemberController {

	@Autowired
	MemberService ms;

	/* 회원가입 페이지로 이동 */
	@RequestMapping(value = "/member/join", method = RequestMethod.GET)
	public void join() {
	}

	/* 회원가입 버튼 클릭시 */
	@RequestMapping(value = "/member/join", method = RequestMethod.POST)
	public String signup(MemberVO mvo) {
		System.out.println("회원가입 controller 연결 성공");
		System.out.println(mvo);
		ms.signup(mvo);
		return "redirect:/";
	}

	/* 로그인 페이지로 이동 */
	@RequestMapping(value = "/member/login", method = RequestMethod.GET)
	public void login() {
	}

	/* 로그인 버튼 클릭시 */
	@RequestMapping(value = "/member/login", method = RequestMethod.POST)
	public String signin(MemberVO mvo, HttpSession session, HttpServletResponse response) {
		// service로 넘긴 id, pw를 이용하여 select되어 넘어온 값(id,pw 불일치 -> null)
		session.setAttribute("user", ms.signin(mvo));

		if (session.getAttribute("user") != null) { // id, pw가 일치 -> home으로 이동
			return "redirect:/";
		} else { // 불일치 -> alert 띄우고 이전페이지로 이동
			try {
				response.setContentType("text/html; charset=utf-8");
				PrintWriter w = response.getWriter();
				w.write("<script>alert('아이디 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요.');history.go(-1);</script>");
				w.flush();
				w.close();
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		}
	}

}
