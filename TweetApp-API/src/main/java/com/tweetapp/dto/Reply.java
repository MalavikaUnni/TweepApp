package com.tweetapp.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


public class Reply {
	
	private String comment;
	
	public Reply() {
		super();
	}

	public Reply(String comment) {
		super();
		this.comment = comment;
	}



	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	
}
