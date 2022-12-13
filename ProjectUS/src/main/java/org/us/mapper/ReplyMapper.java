package org.us.mapper;

import java.util.ArrayList;

import org.us.model.ReplyVO;

public interface ReplyMapper {
	// 댓글 작성 DB설계
	public void replywrite(ReplyVO rvo);

	// 댓글 목록 DB설계
	public ArrayList<ReplyVO> replylist(int bno);
}
