package org.us.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.us.mapper.TestMapper;
import org.us.model.TestVO;

@Service // 서비스로 사용한다는 어노테이션
public class TestServiceImpl implements TestService { // TestService를 상속

	@Autowired // 의존성 주입 어노테이션
	TestMapper tm; // TestMapper로 연결
	
	// 게시물 작성 구현
	public void write(TestVO tvo) {
		System.out.println("서비스 : "+tvo);
		tm.write(tvo); // TestMapper의 wrtie와 연결
	}
	
	// 게시물 목록 구현
	public ArrayList<TestVO> list(){
		return tm.list();
	}
}
