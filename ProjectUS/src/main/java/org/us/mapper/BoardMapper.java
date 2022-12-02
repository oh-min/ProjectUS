package org.us.mapper;

import java.util.ArrayList;

import org.us.model.BoardVO;
import org.us.model.CriteriaVO;
import org.us.model.HeartVO;

public interface BoardMapper {
	// 거래 게시판 목록 페이지 DB설계
	public ArrayList<BoardVO> list(CriteriaVO cri);

	// deal 테이블 전체건수 DB설계
	public int total(CriteriaVO cri);

	// 조회수 증가 DB설계
	public void cntup(BoardVO bvo);

	// 디테일 페이지 DB설계
	public BoardVO detail(BoardVO bvo);

	// 자유게시판 글 작성 DB설계
	public void write(BoardVO bvo);

	// 좋아요 추가 DB설계
	public void heartin(HeartVO hvo);
	
	// 좋아요 취소 DB설계
	public void heartout(HeartVO hvo);
	
	// 좋아요 갯수 DB설계
	public int heartcnt(HeartVO hvo);
	
	// 특정 아이디 특정 게시물 좋아요 여부 DB설계
	public int heartid(HeartVO hvo);
	
}
