package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.NextPreMapper;
import org.us.model.NextPreVO;

@Service
public class NextPreServiceImpl implements NextPreService {
	@Autowired
	NextPreMapper npm;

	// 이전글 다음글 정보를 가져오는 구현
	// 공지사항
	public ArrayList<NextPreVO> nnp(NextPreVO npvo) {
		return npm.nnp(npvo);
	}

	// 자유게시판
	public ArrayList<NextPreVO> bnp(NextPreVO npvo) {
		return npm.bnp(npvo);
	}
}
