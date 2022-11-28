package org.us.service;

import java.util.ArrayList;

import org.us.model.TestVO;

public interface TestService {
	// 게시물 작성 설계
	public void write(TestVO tvo);
	
	// 게시물 목록 설계
	public ArrayList<TestVO> list();
}
