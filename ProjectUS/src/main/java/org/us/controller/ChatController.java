package org.us.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ChatController {
	/* 채팅룸 페이지로 이동 */
	@RequestMapping(value = "/chat/chatroom", method = RequestMethod.GET)
	public void chatroom() {
	}

}
