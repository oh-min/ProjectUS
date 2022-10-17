package org.us.mapper;

import java.util.ArrayList;

import org.us.model.CriteriaVO;
import org.us.model.NoticeVO;

public interface NoticeMapper {
	// 공지 페이지로 DB설계
	public ArrayList<NoticeVO> list(CriteriaVO cri);

	// 조회수 증가 DB설계
	public void cntup(NoticeVO nvo);

	// 디테일 페이지 DB설계
	public NoticeVO detail(NoticeVO nvo);

	// 공지작성 DB설계
	public void write(NoticeVO nvo);

	// notice테이블 전체건수 DB설계
	public int total(CriteriaVO cri);

	// 이전글 DB설계
	public NoticeVO pre(NoticeVO nvo);

	// 다음글 DB설계
	public NoticeVO next(NoticeVO nvo);
}
