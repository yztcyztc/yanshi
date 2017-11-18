$(document).ready(function() {  
	var myDate = new Date();
 	var year = myDate.getFullYear();
 	var month = myDate.getMonth();
 	var date = myDate.getDate();
 	var str1 = year + "-" + ("0" + (month + 1)).slice(-2) + "-" + date;

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


//轮训跳转页面
setInterval(function(){
   	 $.ajax({ 
          type: "GET", 
          async: false, 
          url: "/yanshi/view/which",
          success: function(data) {
           		if(data === 2) {
           			return
           		}else if(data === 1){
           			window.location.href="/yanshi/view/1";
           		}else if(data === 3){
           			window.location.href="/yanshi/view/3"
           		}
           	}
       }); 
   },1000)
})
	