package org.us.model;

import java.util.Date;

public class NoticeVO {

	private String id; // 아이디
	private int nno; // 공지번호
	private String title; // 제목
	private String content; // 내용
	private int category; // 카테고리
	private Date regdate; // 작성일자
	private int cnt; // 조회수

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getNno() {
		return nno;
	}

	public void setNno(int nno) {
		this.nno = nno;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
	}

	public Date getRegdate() {
		return regdate;
	}

	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}

	public int getCnt() {
		return cnt;
	}

	public void setCnt(int cnt) {
		this.cnt = cnt;
	}

	@Override
	public String toString() {
		return "NoticeVO [id=" + id + ", nno=" + nno + ", title=" + title + ", content=" + content + ", category=" + category + ", regdate=" + regdate
				+ ", cnt=" + cnt + "]";
	}

}
