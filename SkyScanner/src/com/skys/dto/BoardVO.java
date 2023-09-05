package com.skys.dto;

public class BoardVO {
	private int num;
	private String type;
	private String title;
	private String content;
	private String userId;
	private String userName;
	private String writeDate;
	private String answerDate;
	private String conState;
	private String adminAnswer;

	public String getAdminAnswer() {
		return adminAnswer;
	}
	public void setAdminAnswer(String adminAnswer) {
		this.adminAnswer = adminAnswer;
	}
	public String getConState() {
		return conState;
	}
	public void setConState(String conState) {
		this.conState = conState;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getWriteDate() {
		return writeDate;
	}
	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}
	public String getAnswerDate() {
		return answerDate;
	}
	public void setAnswerDate(String answerDate) {
		this.answerDate = answerDate;
	}

}
