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


var i = 2; 
var timer1 = setInterval(function(){
var id = "pic" + i;
 $("." + id).css("visibility","visible")
 if(i < 120){
 	 i++;
 	}else{

 		clearInterval(timer1) 
 	}
},50);

//进度条	
(function( $ ){
  $.fn.animateProgress = function(progress, callback) {    
    return this.each(function() {
      $(this).animate({
        width: progress+'%'
      }, {
        duration: 2000, 
        easing: 'swing',
        step: function( progress ){
          var labelEl = $('.ui-label', this),
              valueEl = $('.value', labelEl);
          if (Math.ceil(progress) < 20 && $('.ui-label', this).is(":visible")) {
            labelEl.hide();
          }else{
            if (labelEl.is(":hidden")) {
              labelEl.fadeIn();
            };
          }
          
          if (Math.ceil(progress) == 100) {
            labelEl.text('');
            setTimeout(function() {
              labelEl.fadeOut();
            }, 1000);
          }else{
            valueEl.text(Math.ceil(progress) + '%');
          }
        },
        complete: function(scope, i, elem) {
          if (callback) {
            callback.call(this, i, elem );
          };
        }
      });
    });
  };
})( jQuery );

$(function() {
  // Hide the label at start
  $('#progress_bar .ui-progress .ui-label').hide();
  // Set initial value
  $('#progress_bar .ui-progress').css('width', '1%');

  // Simulate some progress
  $('#progress_bar .ui-progress').animateProgress(10, function() {
    $(this).animateProgress(60, function() {
      setTimeout(function() {
        $('#progress_bar .ui-progress').animateProgress(100, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
          $("#instancenum").attr("value","  42");
          $("#health").text(" 健康");
          $("#health").css("color","#74d04c");
          $.ajax({ 
              type: "get", 
              async: false, 
              url: "/yanshi/view/finish",
           }); 

        });
      }, 2000);
    });
  }); 
});

//跳转页面
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

////接收扩容命令
//    var flag = false;
//    var timer = setInterval(function(){
//        $.ajax({ 
//            type: "GET", 
//            async: false, 
//            url: "/yanshi/view/scale",
//            success: function(data) { 
//              flag = data ;
//              if(flag){
//               clearInterval(timer);
//               window.location.href="/yanshi/view/4"
//              }
//            }
//        }); 
//    },1000)
 })