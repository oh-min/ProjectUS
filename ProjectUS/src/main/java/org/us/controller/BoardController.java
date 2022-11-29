package org.us.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.BoardVO;
import org.us.model.CriteriaVO;
import org.us.model.NextPreVO;
import org.us.model.PageVO;
import org.us.service.BoardService;
import org.us.service.NextPreService;
import org.us.service.TopService;

@Controller
public class BoardController {

	@Autowired
	BoardService ds;

	@Autowired
	TopService ts;

	@Autowired
	NextPreService nps;

	/* 자유게시판 리스트 페이지로 이동 */
	@RequestMapping(value = "/board/list", method = RequestMethod.GET)
	public String list(Model model, CriteriaVO cri) {
		model.addAttribute("top", ts.top(cri));
		model.addAttribute("list", ds.list(cri));
		int total = ds.total(cri);
		model.addAttribute("paging", new PageVO(cri, total));
		return "/board/list";
	}

	/* 자유게시판 디테일 페이지로 이동 */
	@RequestMapping(value = "/board/detail", method = RequestMethod.GET)
	public void detail(BoardVO bvo, Model model, NextPreVO npvo) {
		model.addAttribute("detail", ds.detail(bvo));
		model.addAttribute("nextpre", nps.bnp(npvo));
	}

	/* 자유게시판 작성 페이지로 이동 */
	@RequestMapping(value = "/board/write", method = RequestMethod.GET)
	public void gowrite(BoardVO bvo) {
	}

	/* 자유게시판 게시물 작성하기 */


	
}
