package org.us.service;

import java.util.ArrayList;

import org.us.model.CriteriaVO;
import org.us.model.NoticeVO;

public interface TopService {
	// 토글 설계
	public ArrayList<NoticeVO> top(CriteriaVO cri);
}
