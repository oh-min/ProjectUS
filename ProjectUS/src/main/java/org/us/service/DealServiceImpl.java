package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.DealMapper;
import org.us.model.DealVO;

@Service
public class DealServiceImpl implements DealService {

	@Autowired
	DealMapper dm;

	// 거래 게시판 목록 페이지 구현
	public ArrayList<DealVO> list(){
		return dm.list();
	}
}
