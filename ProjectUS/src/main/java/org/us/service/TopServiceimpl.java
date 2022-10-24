package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.TopMapper;
import org.us.model.CriteriaVO;
import org.us.model.NoticeVO;

@Service
public class TopServiceimpl implements TopService {

	@Autowired
	TopMapper tm;

	// 토글 구현
	public ArrayList<NoticeVO> top(CriteriaVO cri){
		System.out.println("top service="+cri);
		return tm.top(cri);
	}
}
