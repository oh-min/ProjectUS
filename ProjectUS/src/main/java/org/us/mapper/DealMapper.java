package org.us.mapper;

import java.util.ArrayList;

import org.us.model.CriteriaVO;
import org.us.model.DealVO;

public interface DealMapper {
	// 거래 게시판 목록 페이지 DB설계
	public ArrayList<DealVO> list(CriteriaVO cri);

	// deal 테이블 전체건수 DB설계
	public int total(CriteriaVO cri);

	// 조회수 증가 DB설계
	public void cntup(DealVO dvo);

	// 디테일 페이지 DB설계
	public DealVO detail(DealVO dvo);
}
