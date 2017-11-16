$(document).ready(function() {  
	var myDate = new Date();
 	var year = myDate.getFullYear();
 	var month = myDate.getMonth();
 	var date = myDate.getDate();
 	var str1 = year + "年" + ("0" + (month + 1)).slice(-2) + "月" + date + "日";

 	var hour = ("0" + myDate.getHours()).slice(-2);
	var minute = ("0" + myDate.getMinutes()).slice(-2);
	var second = ("0" + myDate.getSeconds()).slice(-2);	 	
	var str2 = hour + ":" + minute + ":" + second;
	$("#time").html(str2);	 	
 	$("#date").html(str1);
	 setInterval(function () {	
	 	var myDate1 = new Date(); 	 
	 	var hour = ("0" + myDate1.getHours()).slice(-2);
	 	var minute = ("0" + myDate1.getMinutes()).slice(-2);
	 	var second = ("0" + myDate1.getSeconds()).slice(-2);	 	
	 	var str2 = hour + ":" + minute + ":" + second;
	 	$("#time").html(str2);
 	},1000);	

	
})
	