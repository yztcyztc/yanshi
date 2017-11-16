package com.yonyou.cloud.yanshi.service;

import java.util.Arrays;
import java.util.Random;

public class Datadd {
		public static void main(String[] args) {
			
			int[] a = getInteger(0, 50, 20);
			int[][] b = {getInteger(0, 50, 20), getInteger(900, 1000, 20)};
			
			float[] c = getFloat(0, 50, 20);
			float[][] d = {getFloat(0, 50, 20), getFloat(900, 1000, 20)};
			
			System.out.println(Arrays.toString(getInteger(0, 50, 20)));
			System.out.println(Arrays.toString(getInteger(900, 1000, 20)));
			
			System.out.println(Arrays.toString(getFloat(0, 50, 20)));
			System.out.println(Arrays.toString(getFloat(900, 1000, 20)));
			
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
}
