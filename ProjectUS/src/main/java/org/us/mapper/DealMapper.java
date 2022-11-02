package org.us.mapper;

import java.util.ArrayList;

import org.us.model.DealVO;

public interface DealMapper {
	// 거래 게시판 목록 페이지 DB설계
	public ArrayList<DealVO> list();
}
