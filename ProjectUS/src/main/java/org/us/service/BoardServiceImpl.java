package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.us.mapper.AttachMapper;
import org.us.mapper.BoardMapper;
import org.us.model.BoardVO;
import org.us.model.CriteriaVO;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper dm;

	@Autowired
	AttachMapper am;

	// 거래 게시판 목록 페이지 구현
	public ArrayList<BoardVO> list(CriteriaVO cri) {
		return dm.list(cri);
	}

	// deal 테이블 전체건수 구현
	public int total(CriteriaVO cri) {
		return dm.total(cri);
	}

	// 디테일 페이지 구현
	@Transactional
	public BoardVO detail(BoardVO bvo) {
		dm.cntup(bvo);
		return dm.detail(bvo);
	}

	// 자유게시판 글 작성 설계
	public void write(BoardVO bvo) {
		System.out.println("글 작성 서비스" + bvo);
		dm.write(bvo);
		if (bvo.getAttach() != null) {
			// 첨부파일 insert 구현
			bvo.getAttach().forEach(avo -> {
				avo.setBno(bvo.getBno());
				am.boardinsert(avo);
			});
		}
	}
}
