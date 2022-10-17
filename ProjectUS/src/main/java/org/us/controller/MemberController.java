package org.us.controller;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
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
		System.out.println("회원가입");
	}

	/* 회원가입 */
	@RequestMapping(value = "/member/join", method = RequestMethod.POST)
	public String signup(MemberVO mvo) {
		System.out.println("회원가입 controller 연결 성공");
		System.out.println(mvo);
		ms.signup(mvo);
		return "redirect:/";
	}

	/* 아이디, 닉네임 중복 체크 */
	@RequestMapping(value = "/member/samechk", method = RequestMethod.POST)
	public ResponseEntity<String> samechk(@RequestBody MemberVO mvo) {
		System.out.println("아이디 중복확인 간다" +mvo);
		System.out.println("아이디 중복확인 돌아옴" + ms.samechk(mvo));

		return ms.samechk(mvo) == null ? new ResponseEntity<>("canUse", HttpStatus.OK) : new ResponseEntity<>("cannotUse",HttpStatus.INTERNAL_SERVER_ERROR);
	}

	/* 로그인 페이지로 이동 */
	@RequestMapping(value = "/member/login", method = RequestMethod.GET)
	public void login() {
		// session.invalidate(); == 로그인 무효화
	}

	/* 로그인 */
	@RequestMapping(value = "/member/login", method = RequestMethod.POST)
	public String signin(MemberVO mvo, HttpSession session, HttpServletResponse response) {
		// service로 넘긴 id, pw를 이용하여 select되어 넘어온 값
		session.setAttribute("user", ms.signin(mvo)); // id,pw 불일치 -> null

		if (session.getAttribute("user") != null) {
			return "redirect:/";
		} else { // 불일치 -> alert 띄우고 이전페이지로 이동
			try {
				response.setContentType("text/html; charset=utf-8");
				PrintWriter w = response.getWriter();
				w.write("<script>alert('아이디 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요.');location.href='/member/login';</script>");
				w.flush();
				w.close();
				return "/member/login";
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "/member/login";
		}
	}

	/* 로그아웃 */
	@RequestMapping(value = "/member/logout", method = RequestMethod.GET)
	public String logoutget(HttpSession session) {
		session.invalidate(); // 로그인 무효화
		return "redirect:/";
	}

}
