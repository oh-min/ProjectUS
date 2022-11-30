package org.us.service;

import java.util.ArrayList;

import org.us.model.BoardVO;
import org.us.model.CriteriaVO;

public interface BoardService {
	// 자유 게시판 목록 페이지 설계
	public ArrayList<BoardVO> list(CriteriaVO cri);

	// board 테이블 전체건수 설계
	public int total(CriteriaVO cri);

	// 디테일 페이지 설계
	public BoardVO detail(BoardVO bvo);

	// 자유게시판 글 작성 설계
	public void write(BoardVO bvo);
}