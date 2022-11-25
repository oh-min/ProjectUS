package org.us.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.TestMapper;
import org.us.model.TestVO;

@Service
public class TestServiceImpl implements TestService {

	@Autowired
	TestMapper tm;
	
	// 게시물 작성 구현
	public void write(TestVO tvo) {
		System.out.println("서비스 : "+tvo);
		tm.write(tvo);
	}
}
