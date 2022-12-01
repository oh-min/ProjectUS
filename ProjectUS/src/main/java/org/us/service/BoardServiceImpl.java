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

	// 자유게시판 글 작성 설계
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

	// 좋아요 추가 설계
	public void heartin(HeartVO hvo) {
		System.out.println("좋아요 추가 서비스 : " + hvo);
		bm.heartin(hvo);
	}
}
