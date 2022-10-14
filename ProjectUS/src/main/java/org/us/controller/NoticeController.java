package org.us.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.service.NoticeService;

@Controller
public class NoticeController {

	@Autowired
	NoticeService ns;

	/* 공지 리스트 페이지로 이동 */
	@RequestMapping(value = "/notice/list", method = RequestMethod.GET)
	public String list(Model model) {
		model.addAttribute("list", ns.list());
		return "/notice/list";
	}

	/* 공지 디테일 페이지로 이동 */
	@RequestMapping(value = "/notice/detail", method = RequestMethod.GET)
	public void detail() {
		System.out.println("공지디테일 페이지로 이동 성공");
	}
}
