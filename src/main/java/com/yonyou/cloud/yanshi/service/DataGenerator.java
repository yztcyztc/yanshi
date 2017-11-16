package com.yonyou.cloud.yanshi.service;

import java.util.Random;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.annotation.Schedules;
import org.springframework.stereotype.Service;

@Service
@EnableScheduling
public class DataGenerator {
	
	private Random rand = new Random();
	
	final private float[] base = {0,1.5f,3,4,5,7,8,9};
	final private int[][] basedata1 = {{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},//访问量0~50
									   {9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9}};//900-1000
	final private float[][] basedata2 = {{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},//响应时间0~50ms
										 {9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9}};//900-1000
	final private float[][] basedata3 = {{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},//流量0~50
										 {9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9}};//900-1000
	
	private int count = 0,level=0;
	
	public int data1 = 0;
	public float data2 = 0;
	public float data3 = 0;
	public boolean isup = false;
	
	//@Scheduled(cron = "0/1 * * * * ?")
	public void generate(){		
	   float d = base[level]*100;
        if(isup && count++>=5){
        	if(level<base.length-1)
        		level ++;
        	count = 0;
        }
        data1 = (int)d + rand.nextInt(100);
       //` System.out.println("i"+d);
        data3 = data2 = d + rand.nextFloat()*100;
	        
	}
	public void reset(){
		count = 0;
		level = 0;
	}
	
	/**
	 * 生成指定范围内的整型一维数组
	 * @param min
	 * @param max
	 * @param num
	 * @return
	 */
	public static int[] getInteger(int min, int max, int num) {
		Random random = new Random();
		int[] array = new int[num];
		for (int i = 0; i < num; i++) {
			array[i] = random.nextInt(max) % (max - min + 1) + min;
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
	public static float[] getFloat(int min, int max, int num) {
		Random random = new Random();
		float[] array = new float[num];
		for (int i = 0; i < num; i++) {
			array[i] = random.nextFloat() * (max - min) + min;
		}
		return array;
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
	
	public int[][] getBasedata1() {
		return basedata1;
	}
	public float[][] getBasedata2() {
		return basedata2;
	}
	public float[][] getBasedata3() {
		return basedata3;
	}
	public boolean isIsup() {
		return isup;
	}
	public void setIsup(boolean isup) {
		this.isup = isup;
	}
	
}
