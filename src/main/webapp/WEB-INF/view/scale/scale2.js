$(document).ready(function() {  

	var myDate = new Date();
 	var year = myDate.getFullYear();
 	var month = myDate.getMonth();
 	var date = myDate.getDate();
 	var str1 = year + "-" + ("0" + (month + 1)).slice(-2) + "-" + ("0" + date).slice(-2);

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
 $("." + id).css("visibility","visible");
 $("." + id).css("background-color","rgba(202, 190, 198, 0.5)")
 
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
        duration: 9000, ////////////////
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

          var percent = Math.ceil(progress);
          if(percent == 20){
             $(".pic2,.pic3,.pic31,.pic32").css("background-color","rgba(0,0,0,0)");
             $("#instancenum").attr("value","  5");
          }
           if(percent == 40){
             $(".pic16,.pic17,.pic8,.pic9").css("background-color","rgba(0,0,0,0)");
             $("#instancenum").attr("value","  9");
          }
          if(percent == 60){
             $(".pic10,.pic11,.pic12,.pic13,.pic4,.pic5,.pic6,.pic7,.pic18,.pic19,.pic20").css("background-color","rgba(0,0,0,0)");
             $("#instancenum").attr("value","  20");
          }
          if(percent == 80){
             $(".pic21,.pic22,.pic33,.pic34,.pic35,.pic36,.pic37,.pic28,.pic29,.pic30").css("background-color","rgba(0,0,0,0)");
             $("#instancenum").attr("value","  30");
           }
          
          if(percent == 100){
             $(".pic15,.pic14,.pic41,.pic42,.pic23,.pic24,.pic25,.pic26,.pic27,.pic38,.pic39,.pic40").css("background-color","rgba(0,0,0,0)");
             $("#instancenum").attr("value","  42");
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
         // $("#instancenum").attr("value","  42");
          $("#health").text(" 健康");
          $("#health").css("color","#74d04c");
          $(".pic2,.pic3").css("background-color","rgba(0,0,0,0)")

          $.ajax({ 
              type: "get", 
              async: false, 
              url: "/yanshi/view/finish",
           }); 

        });
      }, 9000);///////////////
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