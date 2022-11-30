package org.us.service;

import java.util.ArrayList;

import org.us.model.AttachFileVO;

public interface AttachService {
	// 첨부파일 목록 가져오는 설계
	public ArrayList<AttachFileVO> attachlist(int nno);
	public ArrayList<AttachFileVO> boardattachlist(int bno);
}
