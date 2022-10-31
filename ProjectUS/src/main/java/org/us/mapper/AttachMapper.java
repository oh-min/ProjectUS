package org.us.mapper;

import java.util.ArrayList;

import org.us.model.AttachFileVO;

public interface AttachMapper {
	// 첨부파일 insert DB 설계
	public void insert(AttachFileVO avo);
	// 첨부파일 목록 가져오는 DB 설계
	public ArrayList<AttachFileVO> attachlist(int nno);
}
