package org.us.mapper;

import org.us.model.TestVO;

public interface TestMapper {
	public String getTime();
	
	// 게시물 작성 DB설계 
	public void write(TestVO tvo);
}
