/**
 * Copyright 2002-2007 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.nono.spring.delorean.bean;

import java.util.Date;

/**
 * Oct 27, 2012-11:56:32 AM
 */
public class MarcoDetailBean {
	
	private Date baseDate;
	private int subNum;
	private int tranType;
	private int postType;
	private int recNum;
	private int actBch;
	private int actNumSri;
	private int actSuf;
	private int drCr;
	private String prdCode;
	private int rCYAmt;
	private int lCYAmt;
	public Date getBaseDate() {
		return baseDate;
	}
	public void setBaseDate(Date baseDate) {
		this.baseDate = baseDate;
	}
	public int getSubNum() {
		return subNum;
	}
	public void setSubNum(int subNum) {
		this.subNum = subNum;
	}
	public int getTranType() {
		return tranType;
	}
	public void setTranType(int tranType) {
		this.tranType = tranType;
	}
	public int getPostType() {
		return postType;
	}
	public void setPostType(int postType) {
		this.postType = postType;
	}
	public int getRecNum() {
		return recNum;
	}
	public void setRecNum(int recNum) {
		this.recNum = recNum;
	}
	public int getActBch() {
		return actBch;
	}
	public void setActBch(int actBch) {
		this.actBch = actBch;
	}
	public int getActNumSri() {
		return actNumSri;
	}
	public void setActNumSri(int actNumSri) {
		this.actNumSri = actNumSri;
	}
	public int getActSuf() {
		return actSuf;
	}
	public void setActSuf(int actSuf) {
		this.actSuf = actSuf;
	}
	public int getDrCr() {
		return drCr;
	}
	public void setDrCr(int drCr) {
		this.drCr = drCr;
	}
	public String getPrdCode() {
		return prdCode;
	}
	public void setPrdCode(String prdCode) {
		this.prdCode = prdCode;
	}
	public int getrCYAmt() {
		return rCYAmt;
	}
	public void setrCYAmt(int rCYAmt) {
		this.rCYAmt = rCYAmt;
	}
	public int getlCYAmt() {
		return lCYAmt;
	}
	public void setlCYAmt(int lCYAmt) {
		this.lCYAmt = lCYAmt;
	}

}
