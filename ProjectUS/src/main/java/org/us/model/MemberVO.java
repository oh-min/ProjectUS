package org.us.model;

public class MemberVO {

	private String id; // 아이디
	private String pw; // 비밀번호
	private String name; // 이름
	private String nick; // 닉네임
	private String gender; // 성별
	private String birthY; // 년도
	private String birthM; // 월
	private String birthD; // 일
	private String email; // 이메일
	private String phone; // 휴대폰번호
	private String signdate; // 가입일

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getBirthY() {
		return birthY;
	}

	public void setBirthY(String birthY) {
		this.birthY = birthY;
	}

	public String getBirthM() {
		return birthM;
	}

	public void setBirthM(String birthM) {
		this.birthM = birthM;
	}

	public String getBirthD() {
		return birthD;
	}

	public void setBirthD(String birthD) {
		this.birthD = birthD;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSigndate() {
		return signdate;
	}

	public void setSigndate(String signdate) {
		this.signdate = signdate;
	}

	@Override
	public String toString() {
		return "MemberVO [id=" + id + ", pw=" + pw + ", name=" + name + ", nick=" + nick + ", gender=" + gender
				+ ", birthY=" + birthY + ", birthM=" + birthM + ", birthD=" + birthD + ", email=" + email + ", phone="
				+ phone + ", signdate=" + signdate + "]";
	}

}
