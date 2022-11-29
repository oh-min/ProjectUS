package org.us.service;

import java.util.ArrayList;

import org.us.model.NextPreVO;

public interface NextPreService {
	// 이전글 다음글 정보를 가져오는 설계
	// 공지사항
	public ArrayList<NextPreVO> nnp(NextPreVO npvo);

	// 자유게시판
	public ArrayList<NextPreVO> bnp(NextPreVO npvo);

}
