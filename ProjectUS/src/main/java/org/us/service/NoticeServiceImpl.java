package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.NoticeMapper;
import org.us.model.NoticeVO;

@Service
public class NoticeServiceImpl implements NoticeService {

	@Autowired
	NoticeMapper nm;

	// 공지 페이지로 이동 구현
	public ArrayList<NoticeVO> list() {
		return nm.list();
	}

	// 조회수 증가 구현
	public void cntup(NoticeVO nvo) {
		nm.cntup(nvo);
	}

	// 디테일 페이지 DB설계
	public NoticeVO detail(NoticeVO nvo) {
		return nm.detail(nvo);
	}
}
