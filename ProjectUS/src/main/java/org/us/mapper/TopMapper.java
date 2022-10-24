package org.us.mapper;

import java.util.ArrayList;

import org.us.model.CriteriaVO;
import org.us.model.NoticeVO;


public interface TopMapper {
	// 토글  DB설계
	public ArrayList<NoticeVO> top(CriteriaVO cri);
}
