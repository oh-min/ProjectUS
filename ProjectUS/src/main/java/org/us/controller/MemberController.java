package org.us.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;

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
		return "redirect:/member/login";
	}

	/* 아이디, 닉네임 중복 체크 */
	@RequestMapping(value = "/member/samechk", method = RequestMethod.POST)
	public ResponseEntity<String> samechk(@RequestBody MemberVO mvo) {
		System.out.println("중복체크");
		return ms.samechk(mvo) == null ? new ResponseEntity<>("canUse", HttpStatus.OK)
				: new ResponseEntity<>("cannotUse", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	/* 로그인 페이지로 이동 */
	@RequestMapping(value = "/member/login", method = RequestMethod.GET)
	public void login() {
		// session.invalidate(); == 로그인 무효화
	}

	/* 로그인 */ /* 네이버 로그인 */
	@RequestMapping(value = "/member/login", method = RequestMethod.POST)
	public String signin(MemberVO mvo, HttpSession session, HttpServletResponse response) {
		// service로 넘긴 id, pw를 이용하여 select되어 넘어온 값을 session에 저장
		session.setAttribute("user", ms.signin(mvo));

		System.out.println("로그인 정보 : " + ms.signin(mvo));
		// id, pw 일치 -> MemberVO에 저장된 값을 반환
		// id, pw 불일치 -> null

		if (session.getAttribute("user") != null) { // id, pw 가 일치하는 경우
			return "redirect:/"; // 메인페이지로 redirect
		} else { // id, pw가 불일치하는 경우 -> alert 띄우고 이전페이지로 이동

			/* alert 띄우기 */
			try {
				response.setContentType("text/html; charset=utf-8"); // utf-8 문자코드를 사용
				PrintWriter w = response.getWriter(); // getWriter메소드를 호출하여 스트림에 텍스트를 기록
				w.write("<script>alert('아이디 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요.');location.href='/member/login';</script>");
				// 알림창 작성
				w.flush(); // 모든 요소의 스트림 삭제
				w.close(); // 스트림 닫기
				return "/member/login"; // 이전페이지로 이동
			} catch (Exception e) {
				e.printStackTrace();
			}

			return "/member/login";// 이전페이지로 이동
		}
	}

	/* 네이버 로그인 이동 */
	@RequestMapping(value = "/member/navercallback", method = RequestMethod.GET)
	public void navercallback(MemberVO mvo, HttpSession session) {
	}

	/* 네이버 회원가입 후 로그인 */
	@RequestMapping(value = "/member/naverjoin", method = RequestMethod.POST)
	public String naversignup(MemberVO mvo, HttpSession session) {
		System.out.println("네이버 회원가입 정보 : " + mvo);
		ms.signup(mvo);
		System.out.println("네이버 로그인 정보 : " + ms.signin(mvo));
		session.setAttribute("user", ms.signin(mvo));
		return "redirect:/";
	}

	/* 카카오 로그인 이동 */
	@RequestMapping(value = "/member/kakaocallback", method = RequestMethod.GET)
	public void kakaocallback(MemberVO mvo, HttpSession session) {
		System.out.println("카카오콜백이동");
	}

	/* 로그아웃 */
	@RequestMapping(value = "/member/logout", method = RequestMethod.GET)
	public String logoutget(HttpSession session) {
		session.invalidate(); // 로그인 무효화
		return "redirect:/";
	}

	/* 마이페이지로 이동 */
	@RequestMapping(value = "/member/mypage", method = RequestMethod.GET)
	public void mypage() {
	}

	/* 닉네임 자동생성 */
	@RequestMapping(value = "/member/randomnick", produces = "application/text; charset=UTF-8", method = RequestMethod.GET)
	public ResponseEntity<String> randomnick(HttpServletResponse response) {
		System.out.println("닉네임 자동 생성 컨트롤러");
		final String HTTP_REQUEST = "https://nickname.hwanmoo.kr/?format=json&count=1"; // 수정이 불가능한 final 필드
		try {
			System.out.println("hello? it's try");

			String info = "";
			URL url = new URL(HTTP_REQUEST);
			BufferedReader bf = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
			String line;
			while ((line = bf.readLine()) != null) {
				info += line;
				System.out.println(info);

				return new ResponseEntity<>(info, HttpStatus.OK);
			}
		} catch (Exception e) {
			System.out.println("hello? it's catch" + e);
			e.printStackTrace();
		}
		System.out.println("hello? it's nothing");
		return null;
	}
}
