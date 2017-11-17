package com.yonyou.cloud.yanshi.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wordnik.swagger.annotations.ApiOperation;
import com.yonyou.cloud.yanshi.service.DataGenerator;

@Controller
@RequestMapping("/view")
public class ViewController {
	
	Logger logger = LoggerFactory.getLogger(getClass());
	int page = 1;
	
	
	@Autowired
	DataGenerator data;
	
	@RequestMapping("/a")
	public String test(){
		String sb = "showMessage";
		return sb;
	}
	
	//@ResponseBody
	@RequestMapping("/qqq")
	public  Object test1(Model model){
		//String ss = "masdkhfk";
		int[] sb = {5,4,3};
		String sbb = sb.toString();
		System.out.println(sbb);
		model.addAttribute("user", "use1r");
		model.addAttribute("sb", data.getInteger1(50, 100));
		return "2";
	}
	
	@ApiOperation(value = "访问应用监控页面", notes = "携带生成的图表初始值")
	@RequestMapping("/1")
	public String page1(Model model){	
		int level = (int)data.getLevel()*100;
		int a = 100;
		if(data.getState() == DataGenerator.STABLE){
			a = 50;
		}
			System.out.println("level:"+level);
		model.addAttribute("pre1", data.getInteger1(level,level+a));
		model.addAttribute("pre2", data.getFloat1(level,level+a));
		model.addAttribute("pre3", data.getFloat1(level,level+a));
		logger.info("open appMoni");
		return "appMoni";
	}
	
	@ApiOperation(value = "访问全链路监控页面", notes = "")
	@RequestMapping("/2")
	public String page2(){
		String name = "linkMoni1";
		if(data.getState() == DataGenerator.EXPAND)
			name =  "linkMoni2";		
		logger.info("open linkMoni");		
		return name;
	}
	
	@ApiOperation(value = "访问应用管理页面", notes = "")
	@RequestMapping("/3")
	public String page3(){
		logger.info("open autoScale");
		return "autoScale";
	}
	
	@ApiOperation(value = "查询当前页面号", notes = "")
	@RequestMapping("/which")
	@ResponseBody public Object which(){		
		return page;
	}
	
	@ApiOperation(value = "扩容成功轮询", notes = "")
	@RequestMapping("/scale")
	@ResponseBody public Object kuosuo(){
		boolean kuosuo = false;

		if(data.getState() == DataGenerator.EXPAND)
			kuosuo = true;
		System.out.println("scale:"+kuosuo);
		return kuosuo;
	}
	
	@ApiOperation(value = "查询当前页面号", notes = "")
	@RequestMapping("/change")
	@ResponseBody public Object change(@RequestParam("page")int page){	
		this.page = page;
		return page;
	}
	
	@ApiOperation(value = "重置数据基数", notes = "")
	@RequestMapping("/reset")
	@ResponseBody public Object datareset(){
		data.reset();
		return "ok";
	}

	@ApiOperation(value = "模拟负载升高", notes = "")
	@RequestMapping("/up")
	@ResponseBody public Object up(){
		data.up();
		return "ok";
	}
	
	@ApiOperation(value = "模拟扩容成功", notes = "")
	@RequestMapping("/expand")
	@ResponseBody public Object expand(){
		data.expand();
		return "ok";
	}
	
	@ApiOperation(value = "模拟负载下降", notes = "")
	@RequestMapping("/down")
	@ResponseBody public Object down(){
		data.down();
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