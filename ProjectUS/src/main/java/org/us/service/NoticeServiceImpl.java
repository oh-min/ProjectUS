package org.us.service;

import java.util.ArrayList;

import org.us.model.CriteriaVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.us.mapper.AttachMapper;
import org.us.mapper.NoticeMapper;
import org.us.model.NoticeVO;

@Service
public class NoticeServiceImpl implements NoticeService {

	@Autowired
	NoticeMapper nm;

	@Autowired
	AttachMapper am;

	// 공지 페이지로 이동 구현
	public ArrayList<NoticeVO> list(CriteriaVO cri) {
		return nm.list(cri);
	}

	// 디테일 페이지 구현
	@Transactional
	public NoticeVO detail(NoticeVO nvo) {
		System.out.println("디테일 서비스 : " + nvo);
		// nm.cntup(nvo);
		return nm.detail(nvo);
	}

	// 공지작성 구현
	public void write(NoticeVO nvo) {
		System.out.println("공지작성 서비스 : " + nvo);
		nm.write(nvo);
		if (nvo.getAttach() != null) {
			// 첨부파일 insert 구현
			nvo.getAttach().forEach(avo -> {
				avo.setNno(nvo.getNno());
				am.insert(avo);
			});
		}

	}

	// notice테이블 전체건수 구현
	public int total(CriteriaVO cri) {

		return nm.total(cri);
	}

	// 공지 수정 구현
	public void edit(NoticeVO nvo) {
		System.out.println("공지 수정 서비스 : " + nvo);
		if (nvo.getAttach() != null) {
			// 첨부파일 insert 구현
			nvo.getAttach().forEach(avo -> {
				avo.setNno(nvo.getNno());
				am.insert(avo);
			});
			System.out.println(nvo.getAttach());
		}
		nm.edit(nvo);
	}

	// 공지 삭제 구현
	public void delete(int nno) {
		System.out.println("공지 삭제 서비스 : "+nno);
		nm.delete(nno);
		am.attachdelete(nno);
	}
}
