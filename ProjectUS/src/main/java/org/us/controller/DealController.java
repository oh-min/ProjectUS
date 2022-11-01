package org.us.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class DealController {
	/* 거래게시판 리스트 페이지로 이동 */
	@RequestMapping(value = "/deal/list", method = RequestMethod.GET)
	public void list() {
	
	}
}
