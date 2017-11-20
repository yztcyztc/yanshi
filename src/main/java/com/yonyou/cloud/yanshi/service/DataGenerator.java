package com.yonyou.cloud.yanshi.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Random;

import net.sf.json.JSONObject;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@EnableScheduling
public class DataGenerator {
	
	private Random rand = new Random();
	
	final private float[] base = {0.05f,1.5f,3,4,5,7,8,9};
//	final private int[][] basedata1 = {{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},//访问量0~50
//									   {9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9}};//900-1000
//	final private float[][] basedata2 = {{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},//响应时间0~50ms
//										 {9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9}};//900-1000
//	final private float[][] basedata3 = {{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},//流量0~50
//										 {9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9}};//900-1000

	private int count = 0,level=0,speed = 1;
	
	public int data1 = 0;
	public float data2 = 0;
	public float data3 = 0;
	
	public static int STABLE = 1;
	public static int UP = 2;

	public static int EXPAND = 4;
	public int state = STABLE;
	
	private void putData(float d, int a){
		data1 = (int)d + rand.nextInt(a);
		data3 = d + rand.nextFloat()*a;
		data2 = d + rand.nextFloat()*a;
	}
	@Scheduled(cron = "0/1 * * * * ?")
	public void generate(){		
	   float d = base[level]*500;
	   int a = 500;
        if(state==UP){
        	if(count++ >= speed){
        		a = 500;
	        	d += 150;
	        	count = 0;	        	
	        	if(level<base.length-1){
	        		level ++;
	        		if(level==5){
	        			System.out.println("alert!");
	        			//alert();
	        		}
	        	}      		
        	}
        	putData(d,a);
        }
        else if(state == EXPAND){
        	a= 500;
        	putData(d,a);
        	data2 = rand.nextFloat()*250;
        }
        else putData(d,230);
        	
//System.out.println(state +":" +data2);
	        
	}
	public void reset(){
		count = 0;
		level = 0;
		state = STABLE;
	}
	public void up(){
		state = UP;
	}
	public void expand(){
		state = EXPAND;
	}
	
	public int alert(){	
		int code = -1;
		JSONObject json = new JSONObject();
		json.element("from","molipubaccount.moli_pre.moli");
		json.element("content","{\"content\": \"嘿，老哥，你的应用负载过高了！建议进入应用管理进行扩容操作。\" }");
		json.element("extend", "hulianwangyanshi");
		JSONObject j= new JSONObject();
		try {
			URL url = new URL("https://im.yonyou.com/sysadmin/rest/pubaccount/remote/sendmessage/"
					+ "vague?token="+getToken());
			HttpURLConnection con = (HttpURLConnection) url.openConnection();			
			con.setRequestMethod("POST");
			con.setDoOutput(true);
			con.setDoInput(true);
			con.addRequestProperty("Content-Type", "application/json");
			con.connect();
			OutputStreamWriter osw = new OutputStreamWriter(con.getOutputStream());
			osw.write(json.toString());
			osw.flush();
			osw.close();
			InputStream ins = con.getInputStream();
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			byte[] buffer = new byte[1024];
			int len = 0;
			while ((len = ins.read(buffer)) != -1) {
				baos.write(buffer, 0, len);
			}
			j= JSONObject.fromObject(baos.toString());
			
			code = con.getResponseCode();
			System.out.println("alert code:"+code);
			con.disconnect();			
			//return code;
		} catch (IOException e) {			
			// TODO 自动生成的 catch 块
			System.out.println("result: "+j.toString());
			e.printStackTrace();
		}
		return code;
	}
	
	public String getToken(){
		String token = null;
		JSONObject json = new JSONObject();
		json.element("clientId","06fa63f9eac2de8329dfe146db143f22");
		json.element("clientSecret","874418578B81D56B8D78F4BC7248AE22");
		try {
			URL url = new URL("https://im.yonyou.com/sysadmin/rest/moli/moli_pre/token");
			HttpURLConnection con = (HttpURLConnection) url.openConnection();			
			con.setRequestMethod("POST");
			con.setDoOutput(true);
			con.setDoInput(true);
			con.addRequestProperty("Content-Type", "application/json");
			con.connect();
			OutputStreamWriter osw = new OutputStreamWriter(con.getOutputStream());
			osw.write(json.toString());
			osw.flush();
			osw.close();
			InputStream ins = con.getInputStream();
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			byte[] buffer = new byte[1024];
			int len = 0;
			while ((len = ins.read(buffer)) != -1) {
				baos.write(buffer, 0, len);
			}
			JSONObject j= JSONObject.fromObject(baos.toString());
			int code = con.getResponseCode();
			System.out.println("token code:"+code);
			con.disconnect();
			token = j.get("token").toString();
			System.out.println("token: "+token);
			//return code;
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return token;
	}
	/**
	 * 生成指定范围内的整型一维数组
	 * @param min
	 * @param max
	 * @param num
	 * @return
	 */ 
	public int[] getInteger(int min, int max, int num) {
		//Random random = new Random();
		int[] array = new int[num];
		for (int i = 0; i < num; i++) {
			array[i] = rand.nextInt(max) % (max - min + 1) + min;
		}
		return array;
	}
	
	/**
	 * 生成指定范围内的浮点型一维数组
	 * @param min
	 * @param max
	 * @param num
	 * @return
	 */
	public float[] getFloat(int min, int max, int num) {
		//Random random = new Random();
		float[] array = new float[num];
		for (int i = 0; i < num; i++) {
			array[i] = rand.nextFloat() * (max - min) + min;
		}
		return array;
	}
	
	public String getInteger1(int min, int max) {
		int num = 0;
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < 20; i++) {
			num = rand.nextInt(max) % (max - min + 1) + min;
			sb.append(String.valueOf(num)).append(", ");
		}
		return sb.toString();
	}
	public String getFloat1(int min, int max) {
		//Random random = new Random();
		float num = 0;
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < 20; i++) {
			num = rand.nextFloat() * (max - min) + min;
			sb.append(String.valueOf(num)).append(", ");
		}
		return sb.toString();
	}
	
	public int getData1() {
		return data1;
	}

	public void setData1(int data1) {
		this.data1 = data1;
	}

	public float getData2() {
		return data2;
	}

	public void setData2(float data2) {
		this.data2 = data2;
	}

	public float getData3() {
		return data3;
	}

	public void setData3(float data3) {
		this.data3 = data3;
	}
	public float getLevel() {
		return base[level];
	}
	public void setLevel(int level) {
		this.level = level;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	
}
