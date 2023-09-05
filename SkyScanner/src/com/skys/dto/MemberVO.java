package com.skys.dto;

public class MemberVO {
	private String id;
	private String password;
	private String username;
	private String roadFullAddr;
	private String email;
	private String salt;
	private boolean emailcheck;
	private String useYN;
	private String signDate;

	public String getSignDate() {
		return signDate;
	}
	public void setSignDate(String signDate) {
		this.signDate = signDate;
	}
	public String getUseYN() {
		return useYN;
	}
	public void setUseYN(String useYN) {
		this.useYN = useYN;
	}
	public String getRoadFullAddr() {
		return roadFullAddr;
	}
	public void setRoadFullAddr(String roadFullAddr) {
		this.roadFullAddr = roadFullAddr;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSalt() {
		return salt;
	}
	public void setSalt(String salt) {
		this.salt = salt;
	}
	public boolean isEmailcheck() {
		return emailcheck;
	}
	public void setEmailcheck(boolean emailcheck) {
		this.emailcheck = emailcheck;
	}

}