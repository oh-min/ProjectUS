package org.us.service;

import java.util.ArrayList;

import org.us.model.CriteriaVO;
import org.us.model.DealVO;

public interface DealService {
	// 거래 게시판 목록 페이지 설계
	public ArrayList<DealVO> list(CriteriaVO cri);

	// deal 테이블 전체건수 설계
	public int total(CriteriaVO cri);

	// 디테일 페이지 설계
	public DealVO detail(DealVO dvo);
}
