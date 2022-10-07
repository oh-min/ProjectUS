package org.us.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class NoticeController {
	// 공지 페이지로 이동
	@RequestMapping(value = "/notice/list", method = RequestMethod.GET)
	public void join() {
	}
}
