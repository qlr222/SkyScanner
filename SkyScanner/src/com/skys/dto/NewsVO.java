package com.skys.dto;

public class NewsVO {
	private int num;
	private String type;
	private String title;
	private String content;
	private String writeDate;
	private String editDate;
	private int usedYN;

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
	public String getWriteDate() {
		return writeDate;
	}
	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}
	public String getEditDate() {
		return editDate;
	}
	public void setEditDate(String editDate) {
		this.editDate = editDate;
	}
	public int getUsedYN() {
		return usedYN;
	}
	public void setUsedYN(int usedYN) {
		this.usedYN = usedYN;
	}

}
