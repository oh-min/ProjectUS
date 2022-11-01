package org.us.mapper;

import java.util.ArrayList;

import org.us.model.NextPreVO;

public interface NextPreMapper {
	// 이전글 다음글 정보를 가져오는 DB 설계
	public ArrayList<NextPreVO> NP(NextPreVO npvo);
}
