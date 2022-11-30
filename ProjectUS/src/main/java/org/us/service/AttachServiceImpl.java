package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.AttachMapper;
import org.us.model.AttachFileVO;
@Service
public class AttachServiceImpl implements AttachService {
	
	@Autowired
	AttachMapper am;
	
	// 첨부파일 목록 가져오는 구현
	public ArrayList<AttachFileVO> attachlist(int nno){
		return am.attachlist(nno);
	}
	// 첨부파일 목록 가져오는 구현
	public ArrayList<AttachFileVO> boardattachlist(int bno){
		return am.boardattachlist(bno);
	}
}
