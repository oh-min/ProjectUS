package org.us.service;

import java.util.ArrayList;

import org.us.model.DealVO;

public interface DealService {
	// 거래 게시판 목록 페이지 설계
	public ArrayList<DealVO> list();
}
