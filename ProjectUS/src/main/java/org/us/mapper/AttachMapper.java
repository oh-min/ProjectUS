package org.us.mapper;

import java.util.ArrayList;

import org.us.model.AttachFileVO;

public interface AttachMapper {
	/* 첨부파일 insert DB 설계 */
	public void insert(AttachFileVO avo); // notice

	public void boardinsert(AttachFileVO avo); // board

	/* 첨부파일 목록 가져오는 DB 설계 - notice */
	public ArrayList<AttachFileVO> attachlist(int nno); // notice

	public ArrayList<AttachFileVO> boardattachlist(int bno); // board

	/* 공지사항 삭제시 첨부파일도 같이 삭제 - notice */
	public void attachdelete(int nno);
}
