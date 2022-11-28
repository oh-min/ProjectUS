package org.us.mapper;

import java.util.ArrayList;
import org.us.model.TestVO;

public interface TestMapper {
	// 게시물 작성 DB설계
	public void write(TestVO tvo);

	// 게시물 목록 DB설계
	public ArrayList<TestVO> list();
}
