package org.us.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.NoticeVO;
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
	public void detail(NoticeVO nvo, Model model) {
		model.addAttribute("detail", ns.detail(nvo));
	}

	/* 공지 작성 페이지로 이동 */
	@RequestMapping(value = "/notice/write", method = RequestMethod.GET)
	public void gowrite(NoticeVO nvo) {
		System.out.println("공지작성 controller 연결 완료");
	}

	/* 공지 작성 */
	@RequestMapping(value = "/notice/write", method = RequestMethod.POST)
	public String wirte(NoticeVO nvo) {
		System.out.println("공지작성 post 연결 완료");
		System.out.println(nvo);
		return null;
	}
}
