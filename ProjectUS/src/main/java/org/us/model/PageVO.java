package org.us.model;

public class PageVO {

	private int startPage; // 시작번호
	private int endPage; // 끝번호
	private boolean prev; // 이전버튼
	private boolean next; // 다음버튼
	private CriteriaVO cri; // CritertaVO를 포함
	private int total; // board테이블의 전체건수를 저장

	public PageVO(CriteriaVO cri, int total) {
		this.cri = cri;
		this.total = total;

		// 시작번호, 끝번호, 이전버튼, 다음버튼 계산
		this.endPage = (int) (Math.ceil(cri.getPageNum() / 10.0)) * 10; // 끝번호
		this.startPage = this.endPage - 9; // 시작번호
		int realEnd = (int) (Math.ceil((total * 1.0) / cri.getAmount())); // 마지막 페이지 번호

		// 마지막 페이지 번호 < 끝번호 인 경우
		if (realEnd < this.endPage) {
			this.endPage = realEnd;
		}
		this.prev = this.startPage > 1; // startPage가 1보다 크면 이전버튼 활성화
		this.next = this.endPage < realEnd; // endPage가 realEnd 보다 작으면
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public boolean isPrev() {
		return prev;
	}

	public void setPrev(boolean prev) {
		this.prev = prev;
	}

	public boolean isNext() {
		return next;
	}

	public void setNext(boolean next) {
		this.next = next;
	}

	public CriteriaVO getCri() {
		return cri;
	}

	public void setCri(CriteriaVO cri) {
		this.cri = cri;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "PageVO [startPage=" + startPage + ", endPage=" + endPage + ", prev=" + prev + ", next=" + next + ", cri=" + cri + ", total=" + total
				+ "]";
	}

}
