$(document).ready(function() {  
	

	var myDate = new Date();
 	var year = myDate.getFullYear();
 	var month = myDate.getMonth();
 	var date = myDate.getDate();
 	var str1 = year + "-" + ("0" + (month + 1)).slice(-2) + "-" + date ;

 	var hour = ("0" + myDate.getHours()).slice(-2);
	var minute = ("0" + myDate.getMinutes()).slice(-2);
	var second = ("0" + myDate.getSeconds()).slice(-2);	 	
	var str2 = hour + ":" + minute + ":" + second;
	$("#time").html(str1 + ' ' + str2);	 	

	 setInterval(function () {	
	 	var myDate1 = new Date(); 	 
	 	var hour = ("0" + myDate1.getHours()).slice(-2);
	 	var minute = ("0" + myDate1.getMinutes()).slice(-2);
	 	var second = ("0" + myDate1.getSeconds()).slice(-2);	 	
	 	var str2 = hour + ":" + minute + ":" + second;
	 	$("#time").html(str1 + ' ' + str2);
 	},1000);
	  
	
 	setTimeout(function(){
	var elem = document.getElementsByClassName("instance");
	//elem[0].style.background = "url(img3.src.slice(3)) fixed center center no-repeat";
   // elem[0].style.backgroundSize = "100% 100%";
   elem[0].className = "abc"
	
	},5000)
 })