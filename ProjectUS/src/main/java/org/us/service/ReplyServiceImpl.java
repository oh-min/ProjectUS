package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.ReplyMapper;
import org.us.model.ReplyVO;

@Service
public class ReplyServiceImpl implements ReplyService {

	@Autowired
	ReplyMapper rm;

	// 댓글 작성 구현
	public void replywrite(ReplyVO rvo) {
		rm.replywrite(rvo);
	}

	// 댓글 목록 구현
	public ArrayList<ReplyVO> replylist(int bno){
		System.out.println("댓글 목록 서비스 : "+bno);
		return rm.replylist(bno);
	}
}
