package com.yonyou.cloud.yanshi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wordnik.swagger.annotations.ApiOperation;
import com.yonyou.cloud.yanshi.service.DataGenerator;

@Controller
@RequestMapping("/test")
public class MyController {
	
	final float[] base = {1,2,4,5,6,8,9};
	
	Logger logger = LoggerFactory.getLogger(getClass());
	
	int i=0,j=0,k=0,count = 0;;
	public Random random = new Random();

	@Autowired
	DataGenerator data;
	
	@RequestMapping("/a")
	public String test(){
		String sb = "showMessage";
		random.nextFloat();
		return sb;
	}
	//@Entity
	public class User{
		public int name = 44;

		public int getName() {
			return name;
		}

		public void setName(int name) {
			this.name = name;
		}

		
	}
	
	//@ResponseBody
	@RequestMapping("/qqq")
	public  Object test1(Model model){
		//String ss = "masdkhfk";
		User user = new User();
		int[] sb = {5,4,3};
		model.addAttribute("nima", user);
		model.addAttribute("user", "use1r");
		model.addAttribute("sb", sb);
		return "2";
	}
	@RequestMapping("/1")
	public String page1(Model model){
		model.addAttribute("pre1", data.getBasedata1()[0]);
		model.addAttribute("pre2", data.getBasedata2()[0]);
		model.addAttribute("pre3", data.getBasedata3()[0]);
		logger.info("open appMoni");
		return "appMoni";
	}
	@RequestMapping("/2")
	public String page2(){
		logger.info("open linkMoni");
		return "linkMoni";
	}
	@RequestMapping("/3")
	public String page3(){
		logger.info("open autoScale");
		return "autoScale";
	}
	
	@ApiOperation(value = "重置数据基数", notes = "")
	@RequestMapping("/reset")
	@ResponseBody public Object datareset(){
		data.reset();
		return "ok";
	}

	@ApiOperation(value = "用户访问量", notes = "返回用户访问量数据")
	@RequestMapping("/appData1")
	@ResponseBody public  Object appData1(){
        data.generate();
        int d = data.getData1();
      //  System.out.println("i"+d);
		return d;
	}

	@ApiOperation(value = "响应时间", notes = "返回响应时间数据")
	@RequestMapping("/appData2")
	@ResponseBody public  Object appData2(){

		float d = data.getData2();
       // System.out.println("j"+j);
		return d;
	}
	
	@ApiOperation(value = "网站流量", notes = "返回网站流量数据")
	@RequestMapping("/appData3")
	@ResponseBody public  Object appData3(){
		float d = data.getData3();
      //  System.out.println("k"+k);
		return d;
	}
}
