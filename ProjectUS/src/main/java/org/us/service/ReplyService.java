package org.us.service;

import java.util.ArrayList;

import org.us.model.ReplyVO;

public interface ReplyService {
	// 댓글 작성 설계
	public void replywrite(ReplyVO rvo);

	// 댓글 목록 설계
	public ArrayList<ReplyVO> replylist(int bno);
}
