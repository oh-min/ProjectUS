package org.us.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.ReplyVO;
import org.us.service.ReplyService;

@Controller
public class ReplyController {

	@Autowired
	ReplyService rs;

	/* 댓글 작성 */
	@RequestMapping(value = "/reply/write", method = RequestMethod.POST)
	public void replywrite(@RequestBody ReplyVO rvo) {
		System.out.println("댓글 작성 컨트롤러  : " + rvo);
		rs.replywrite(rvo);
	}

	/* 댓글 목록 */
	@RequestMapping(value = "/reply/list", method = RequestMethod.POST)
	public ResponseEntity<ArrayList<ReplyVO>> replylist(@RequestBody int bno) {
		System.out.println("댓글 목록 컨트롤러 : " + bno);
		return new ResponseEntity<>(rs.replylist(bno), HttpStatus.OK);
	}
}
