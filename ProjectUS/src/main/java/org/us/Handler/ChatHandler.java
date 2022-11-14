package org.us.Handler;

import org.springframework.stereotype.Controller;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Controller
public class ChatHandler extends TextWebSocketHandler {
	/* websocket 연결 성공 */
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("연결성공");
		System.out.println("1" + session);

	}

	/* websocket 연결 종료 */
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

	}

	/* websocket 메세지 수신 및 송신 */
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		System.out.println("메세지 수신 성공");
		System.out.println("2" + session);
		System.out.println("3" + message);
		System.out.println("컨트롤러" + message.getPayload()); // 입력된 값

	}
}
