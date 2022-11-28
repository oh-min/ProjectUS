package org.us.service;

import java.util.ArrayList;

import org.us.model.CriteriaVO;
import org.us.model.NoticeVO;

public interface NoticeService {
	// 공지 페이지로 이동 설계
	public ArrayList<NoticeVO> list(CriteriaVO cri);

	// 디테일 페이지 설계
	public NoticeVO detail(NoticeVO nvo);

	// 공지작성 설계 (+upload, +attach)
	public void write(NoticeVO nvo);

	// notice테이블 전체건수 설계
	public int total(CriteriaVO cri);
	
	// 공지 수정 설계
	public void edit(NoticeVO nvo);
	
	// 공지 삭제 설계
	public void delete(int nno);
}
