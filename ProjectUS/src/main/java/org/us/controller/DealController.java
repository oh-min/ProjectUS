package org.us.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.CriteriaVO;
import org.us.model.DealVO;
import org.us.model.NextPreVO;
import org.us.model.PageVO;
import org.us.service.DealService;
import org.us.service.NextPreService;
import org.us.service.TopService;

@Controller
public class DealController {

	@Autowired
	DealService ds;

	@Autowired
	TopService ts;

	@Autowired
	NextPreService nps;

	/* 거래게시판 리스트 페이지로 이동 */
	@RequestMapping(value = "/deal/list", method = RequestMethod.GET)
	public String list(Model model, CriteriaVO cri) {
		model.addAttribute("top", ts.top(cri));
		model.addAttribute("list", ds.list(cri));
		int total = ds.total(cri);
		model.addAttribute("paging", new PageVO(cri, total));
		return "/deal/list";
	}

	/* 거래게시판 디테일 페이지로 이동 */
	@RequestMapping(value = "/deal/detail", method = RequestMethod.GET)
	public void detail(DealVO dvo, Model model, NextPreVO npvo) {
		model.addAttribute("detail", ds.detail(dvo));
		model.addAttribute("nextpre", nps.dnp(npvo));
	}

	/* 거래게시판 작성 페이지로 이동 */
	@RequestMapping(value = "/deal/write", method = RequestMethod.GET)
	public void gowrite(DealVO dvo) {
	}

	/* 거래게시판 게시물 작성하기 */

	/* 채팅 페이지로 이동 */
	@RequestMapping(value = "/deal/chat", method = RequestMethod.GET)
	public void gochat(DealVO dvo, Model model) {
		model.addAttribute("detail", ds.detail(dvo));
	}
	
}
