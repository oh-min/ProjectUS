package org.us.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.AttachFileVO;
import org.us.model.CriteriaVO;
import org.us.model.NextPreVO;
import org.us.model.NoticeVO;
import org.us.model.PageVO;
import org.us.service.AttachService;
import org.us.service.NoticeService;
import org.us.service.NextPreService;
import org.us.service.TopService;

@Controller
public class NoticeController {

	@Autowired
	NoticeService ns;

	@Autowired
	TopService ts;

	@Autowired
	AttachService as;

	@Autowired
	NextPreService nps;

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
	public void detail(NoticeVO nvo, Model model, NextPreVO npvo) {
		model.addAttribute("nextpre", nps.NP(npvo));
		model.addAttribute("detail", ns.detail(nvo));
	}

	/* 공지 작성 페이지로 이동 */
	@RequestMapping(value = "/notice/write", method = RequestMethod.GET)
	public void gowrite(NoticeVO nvo) {
	}

	/* 공지 작성 */
	@RequestMapping(value = "/notice/write", method = RequestMethod.POST)
	public String write(NoticeVO nvo) {
		System.out.println("공지작성 컨트롤러"+nvo);
		ns.write(nvo);
		return "redirect:/notice/list";
	}

	/* 해당게시물의 첨부파일의 데이터를 ajax로 전송 */
	@RequestMapping(value = "/notice/attachlist", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<AttachFileVO>> uploadAjaxPost(int nno) {
		return new ResponseEntity<>(as.attachlist(nno), HttpStatus.OK);
	}

}
