package org.us.mapper;

import java.util.ArrayList;

import org.us.model.NoticeVO;

public interface NoticeMapper {
	// 공지 페이지로 DB설계
	public ArrayList<NoticeVO> list();
	
	// 조회수 증가 DB설계
	public void cntup(NoticeVO nvo);
	
	// 디테일 페이지 DB설계
	public NoticeVO detail(NoticeVO nvo);
	
}
