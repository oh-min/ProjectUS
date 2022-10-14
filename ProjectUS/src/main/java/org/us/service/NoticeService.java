package org.us.service;

import java.util.ArrayList;

import org.us.model.NoticeVO;

public interface NoticeService {
	// 공지 페이지로 이동 설계
	public ArrayList<NoticeVO> list();

	// 조회수 증가 설계
	public void cntup(NoticeVO nvo);
}
