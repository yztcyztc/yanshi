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
	 
	 setInterval(function(){
	   	 $.ajax({ 
	          type: "GET", 
	          async: false, 
	          url: "/yanshi/view/which",
	          success: function(data) {
	           		if(data === 3) {
	           			return
	           		}else if(data === 2){
	           			window.location.href="/yanshi/view/2";
	           		}else if(data === 1){
	           			window.location.href="/yanshi/view/1";
	           		}
	           	}
	       }); 
	   },1000)

    var flag = false;
    var timer = setInterval(function(){
    		$.ajax({ 
            type: "GET", 
            async: false, 
            url: "/yanshi/view/scale",
            success: function(data) { 
            	flag = data ;
            	if(flag){
	            	clearInterval(timer);
	            	var elem = document.getElementsByClassName("third");
		   			elem[0].style.zIndex = "11";
		    		setTimeout(function(){
			    		var elem = document.getElementsByClassName("fourth");
			   		 	elem[0].style.zIndex = "12";
			    		setTimeout(function(){
					    	var elem = document.getElementsByClassName("fifth");
					    	elem[0].style.zIndex = "13";
					    	setTimeout(function(){
					    		var elem = document.getElementsByClassName("sixth");
							    		elem[0].style.zIndex = "14";
					    	},3000)
					    },3000)
				    },3000)
	            }
          	}
        }); 
    },2000)


   

})
    	
 
