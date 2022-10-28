package org.us.controller;

import org.us.model.CriteriaVO;
import org.us.model.PageVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.NoticeVO;
import org.us.service.NoticeService;
import org.us.service.TopService;

@Controller
public class NoticeController {

	@Autowired
	NoticeService ns;
	
	@Autowired
	TopService ts;

	/* 공지 리스트 페이지로 이동 */
	@RequestMapping(value = "/notice/list", method = RequestMethod.GET)
	public String list(Model model, CriteriaVO cri) {
		model.addAttribute("top", ts.top(cri));
		model.addAttribute("list", ns.list(cri));
		int total = ns.total(cri);
		model.addAttribute("paging", new PageVO(cri, total));
		return "/notice/list";
	}

	/* 공지 디테일 페이지로 이동 */
	@RequestMapping(value = "/notice/detail", method = RequestMethod.GET)
	public void detail(NoticeVO nvo, Model model) {
		model.addAttribute("detail", ns.detail(nvo));
		model.addAttribute("pre", ns.pre(nvo));
		model.addAttribute("next", ns.next(nvo));
	}

	/* 공지 작성 페이지로 이동 */
	@RequestMapping(value = "/notice/write", method = RequestMethod.GET)
	public void gowrite(NoticeVO nvo) {
	}

	/* 공지 작성 */
	@RequestMapping(value = "/notice/write", method = RequestMethod.POST)
	public String write(NoticeVO nvo) {
		ns.write(nvo);
		return "redirect:/notice/list";
	}

	
}
