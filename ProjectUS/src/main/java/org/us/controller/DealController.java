package org.us.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.PageVO;
import org.us.service.DealService;

@Controller
public class DealController {
	
	@Autowired
	DealService ds;
	
	/* 거래게시판 리스트 페이지로 이동 */
	@RequestMapping(value = "/deal/list", method = RequestMethod.GET)
	public String list(Model model) {
		model.addAttribute("list", ds.list());
		return "/deal/list";
	}
}
