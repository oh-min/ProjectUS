package org.us.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.TestVO;
import org.us.service.TestService;

@Controller
public class TestController {

	@Autowired
	TestService ts; // TestService로 연결

	/* 페이지 이동 */
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public void test() {
	}

	/* 게시물 작성 */
	@RequestMapping(value = "/test/write", method = RequestMethod.POST)
	public String write(TestVO tvo) {
		System.out.println("컨트롤러 : " + tvo);
		ts.write(tvo); // TestService의 write와 연결
		return "redirect:/"; // 메인 페이지(/)로 이동
	}
}
