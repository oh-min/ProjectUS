package org.us.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.us.model.AttachFileVO;
import org.us.model.BoardVO;
import org.us.model.CriteriaVO;
import org.us.model.HeartVO;
import org.us.model.NextPreVO;
import org.us.model.PageVO;
import org.us.service.AttachService;
import org.us.service.BoardService;
import org.us.service.NextPreService;
import org.us.service.TopService;

import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class BoardController {

	@Autowired
	BoardService bs;

	@Autowired
	TopService ts;

	@Autowired
	NextPreService nps;

	@Autowired
	AttachService as;

	/* 자유게시판 리스트 페이지로 이동 */
	@RequestMapping(value = "/board/list", method = RequestMethod.GET)
	public String list(Model model, CriteriaVO cri, BoardVO bvo) {
		model.addAttribute("top", ts.top(cri));
		model.addAttribute("list", bs.list(cri));
		model.addAttribute("heartlist", bs.heartlist(bvo));
		int total = bs.total(cri);
		model.addAttribute("paging", new PageVO(cri, total));
		return "/board/list";
	}

	/* 자유게시판 디테일 페이지로 이동 */
	@RequestMapping(value = "/board/detail", method = RequestMethod.GET)
	public void detail(BoardVO bvo, Model model, NextPreVO npvo, HeartVO hvo) {
		model.addAttribute("detail", bs.detail(bvo)); // 디테일
		model.addAttribute("nextpre", nps.bnp(npvo)); // 이전글 다음글
		model.addAttribute("heartcnt", bs.heartcnt(hvo)); // 특정 게시판 좋아요 개수
	}

	/* 자유게시판 작성 페이지로 이동 */
	@RequestMapping(value = "/board/write", method = RequestMethod.GET)
	public void gowrite(BoardVO bvo) {
	}

	/* 자유게시판 게시물 작성하기 */
	@RequestMapping(value = "/board/write", method = RequestMethod.POST)
	public String write(BoardVO bvo) {
		System.out.println("자유게시판 컨트롤러 : " + bvo);
		bs.write(bvo);
		return "redirect:/board/list";
	}

	/* 해당게시물의 첨부파일의 데이터를 ajax로 전송 */
	@RequestMapping(value = "/board/attachlist", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<AttachFileVO>> uploadAjaxPost(int bno) {
		return new ResponseEntity<>(as.boardattachlist(bno), HttpStatus.OK);
	}

	/* 좋아요 추가 */
	@RequestMapping(value = "/board/heartin", method = RequestMethod.POST)
	public void heartin(@RequestBody HeartVO hvo) {
		System.out.println("좋아요 추가 컨트롤러  : " + hvo);
		bs.heartin(hvo);
	}

	/* 좋아요 취소 */
	@RequestMapping(value = "/board/heartout", method = RequestMethod.POST)
	public void heartout(@RequestBody HeartVO hvo) {
		System.out.println("좋아요 취소 컨트롤러  : " + hvo);
		bs.heartout(hvo);
	}

	/* 특정 아이디, 특정 개시판 좋아요 여부 */
	@RequestMapping(value = "/board/heartid", method = RequestMethod.POST)
	public ResponseEntity<String> heartid(@RequestBody HeartVO hvo) {
		System.out.println("좋아요 여부 컨트롤러 : " + hvo);
		return bs.heartid(hvo) == 1 ? new ResponseEntity<>("canUse", HttpStatus.OK)
				: new ResponseEntity<>("cannotUse", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	/* bno별 좋아요 개수 */
	/*@RequestMapping(value = "/board/heartlist", method = RequestMethod.POST)
	public ResponseEntity<String> heartlist(HttpServletResponse response, HeartVO hvo) {
		System.out.println("좋아요 목록 컨트롤러");
		try {
			System.out.println("try");
			
			// json 타입으로 변경
//			ObjectMapper mapper = new ObjectMapper(); 
//			String data = mapper.writeValueAsString(bs.heartlist(hvo));
//			System.out.println("json = "+data);
//			
//			return new ResponseEntity<>(data, HttpStatus.OK);

		} catch (Exception e) {
			System.out.println("catch" + e);
			e.printStackTrace();
		}
		return null;
	}*/

}
