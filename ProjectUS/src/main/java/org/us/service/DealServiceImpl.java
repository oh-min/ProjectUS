package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.us.mapper.DealMapper;
import org.us.model.CriteriaVO;
import org.us.model.DealVO;

@Service
public class DealServiceImpl implements DealService {

	@Autowired
	DealMapper dm;

	// 거래 게시판 목록 페이지 구현
	public ArrayList<DealVO> list(CriteriaVO cri) {
		return dm.list(cri);
	}

	// deal 테이블 전체건수 구현
	public int total(CriteriaVO cri) {
		return dm.total(cri);
	}

	// 디테일 페이지 구현
	@Transactional
	public DealVO detail(DealVO dvo) {
		dm.cntup(dvo);
		return dm.detail(dvo);
	}
}
