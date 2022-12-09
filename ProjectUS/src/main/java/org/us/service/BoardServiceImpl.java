package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.us.mapper.AttachMapper;
import org.us.mapper.BoardMapper;
import org.us.model.BoardVO;
import org.us.model.CriteriaVO;
import org.us.model.HeartVO;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper bm;

	@Autowired
	AttachMapper am;

	// 거래 게시판 목록 페이지 구현
	public ArrayList<BoardVO> list(CriteriaVO cri) {
		return bm.list(cri);
	}

	// deal 테이블 전체건수 구현
	public int total(CriteriaVO cri) {
		return bm.total(cri);
	}

	// 디테일 페이지 구현
	@Transactional
	public BoardVO detail(BoardVO bvo) {
		bm.cntup(bvo);
		return bm.detail(bvo);
	}

	// 자유게시판 글 작성 구현
	public void write(BoardVO bvo) {
		bm.write(bvo);
		if (bvo.getAttach() != null) {
			// 첨부파일 insert 구현
			bvo.getAttach().forEach(avo -> {
				avo.setBno(bvo.getBno());
				am.boardinsert(avo);
			});
		}
	}

	// 좋아요 추가 구현
	public void heartin(HeartVO hvo) {
		System.out.println("좋아요 추가 서비스 : " + hvo);
		bm.heartin(hvo);
	}

	// 좋아요 취소 구현
	public void heartout(HeartVO hvo) {
		System.out.println("좋아요 취소 서비스 : " + hvo);
		bm.heartout(hvo);
	}

	// 좋아요 갯수 구현
	public int heartcnt(HeartVO hvo) {
		System.out.println("좋아요 개수 : " + hvo);
		return bm.heartcnt(hvo);
	}

	// 특정 아이디 특정 게시물 좋아요 여부 설계
	public int heartid(HeartVO hvo) {
		System.out.println("좋아요 여부 서비스 : " + hvo);
		return bm.heartid(hvo);
	}

	// 게시글 별 좋아요 개수
	public ArrayList<BoardVO> heartlist(BoardVO bvo) {
		System.out.println("heartlist 좋아요 서비스 = " + bvo);
		return bm.heartlist(bvo);
	}

}
