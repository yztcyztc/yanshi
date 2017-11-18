$(document).ready(function() {  

    var arr1 = $("#preValue1").html().split(',');
    var arr2 = $("#preValue2").html().split(',');
    var arr3 = $("#preValue3").html().split(',');

//    var arr = [];
//    var chart1={},chart2={},chart3={};   
    
//    setInterval(function(){
//    	$.ajax({ 
//            type: "GET", 
//            async: false, 
//            url: "/yanshi/view/appData",
//            success: function(data) { arr = data}
//    	});
//    	
//    	var x1 = (new Date()).getTime();// current time
//    	
//    	chart1  = {
//    			    type: 'areaspline',
//    			    animation: Highcharts.svg, // don't animate in IE < IE 10.
//    			    marginRight: 10,
//    			    events: {
//    			         load: function () {
//    			               var series = this.series[0];
//    			               var x = x1;
//    			               var y = arr[0];    			       
//    			               series.addPoint([x, y], true, true);
//    			           
//    			         }
//    			      }
//    			   };
//    	 chart2  = {
// 			    type: 'areaspline',
// 			    animation: Highcharts.svg, // don't animate in IE < IE 10.
// 			    marginRight: 10,
// 			    events: {
// 			         load: function () {
// 			            var series = this.series[0];
// 			           var x = x1;
// 			               var y = arr[1];    			       
// 			               series.addPoint([x, y], true, true);
// 			           
// 			         }
// 			      }
// 			   };
//    	 chart3  = {
// 			    type: 'areaspline',
// 			    animation: Highcharts.svg, // don't animate in IE < IE 10.
// 			    marginRight: 10,
// 			    events: {
// 			         load: function () {
// 			            var series = this.series[0];
// 			           var x = x1;
// 			               var y = arr[2];    			       
// 			               series.addPoint([x, y], true, true);
// 			            
// 			         }
// 			      }
// 			   };   	            	    	 	
//    },1000)
//     
    var chart1  = {
    type: 'areaspline',
    animation: Highcharts.svg, // don't animate in IE < IE 10.
    marginRight: 10,
    events: {
         load: function () {
            var series = this.series[0];
            setInterval(function () {
               var x = (new Date()).getTime();// current time
               var y = 0;              
               $.ajax({ 
                  type: "GET", 
                  async: false, 
                  url: "/yanshi/view/appData",
                  success: function(data) { y = data[0]}
               }); 
               series.addPoint([x, y], true, true);
            }, 1000);
         }
      }
   };
   var title = {
      text: ''   
   };   
   var xAxis = {
      type: 'datetime',
      tickPixelInterval: 150,
      labels: {
    	rotation: -30,
        y: 20, //x轴刻度往下移动20px
        style: {
          color: '#000',//颜色
          fontSize:'15px'  //字体
        }
      },
     
   };
   var yAxis1 = {
      title: {
         text: '',
      },
     labels: {     
        y: 20, //x轴刻度往下移动20px
        style: {
          color: '#000',//颜色
          fontSize:'18px'  //字体
        },
      formatter: function () {
            return this.value + ' 次';
         }
      },
   };
   var tooltip = {
      formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
         Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
         Highcharts.numberFormat(this.y, 2);
      }
   };
   var plotOptions = {
      area: {
         pointStart: 1940,
         marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
               hover: {
                 enabled: true
               }
            }
         }
      }
   };
   var legend = {
      enabled: false
   };
   var exporting = {
      enabled: false
   };
   var series1= [{
      name: '',
      marker:{enabled: false,},
      data: (function () {
         // generate an array of random data
         var data = [],time = (new Date()).getTime(),i;
         for (i = -19; i <= 0; i += 1) {
            data.push({
               x: time + i * 1000,
              // y: parseInt(10*Math.random())
              y: Number(arr1[i+19])
            });
         }
         return data;
      }())    
   
   }];     
      
   var json1 = {}, json2 = {}, json3= {};   
   json1.chart = chart1; 
   json1.title = title;     
   json1.tooltip = tooltip;
   json1.xAxis = xAxis;
   json1.yAxis = yAxis1; 
   json1.legend = legend;  
   json1.exporting = exporting;   
   json1.series = series1;
   json1.plotOptions = plotOptions;
   json1.credits= {enabled: false};
  
var chart2  = {
    type: 'areaspline',
    animation: Highcharts.svg, // don't animate in IE < IE 10.
    marginRight: 10,
    events: {
         load: function () {
            var series = this.series[0];
            setInterval(function () {
               var x = (new Date()).getTime(); // current time
                var y = 0;              
                $.ajax({ 
                  type: "GET", 
                  async: false, 
                  url: "/yanshi/view/appData",
                  success: function(data) { y = data[1]}
               }); 
               series.addPoint([x, y], true, true);
            }, 1000);
         }
      }
   };
  
   var yAxis2 = {
      title: {
         text: ''
      },
     labels: {
        y: 20, //x轴刻度往下移动20px
        style: {
          color: '#000',//颜色
          fontSize:'18px'  //字体
        },
         formatter: function () {
            return this.value + ' ms';
         }
      },
      plotLines: [{
          value: 700,
          width: 2,
          color: 'red',
          dashStyle :'Dot'
       }]
   };
 
   var series2= [{
      name: '',
      marker:{enabled: false,},
      data: (function () {
         // generate an array of random data
         var data = [],time = (new Date()).getTime(),i;
         for (i = -19; i <= 0; i += 1) {
            data.push({
               x: time + i * 1000,
              // y: parseInt(10*Math.random())
               y: Number(arr2[i+19])
            });
         }
         return data;
      }()),
       zones: [{
          value: 700,
          color: 'rgba(124, 181, 236, 0.75)',
         }, {
          value:10000,
          color: 'red'
         }]    
   }];               
      
   json2.chart = chart2; 
   json2.title = title;     
   json2.tooltip = tooltip;
   json2.xAxis = xAxis;
   json2.yAxis = yAxis2; 
   json2.legend = legend;  
   json2.exporting = exporting;   
   json2.series = series2;
   json2.plotOptions = plotOptions;
   json2.credits= {enabled: false};
  
   

var chart3  = {
    type: 'areaspline',
    plotBackgroundImage:'../images/chart_bg1.jpg',
    animation: Highcharts.svg, // don't animate in IE < IE 10.
    marginRight: 10,
    events: {
         load: function () {
            var series = this.series[0];
            setInterval(function () {
               var x = (new Date()).getTime();// current time
               var y = 0;              
               $.ajax({ 
                  type: "GET", 
                  async: false, 
                  url: "/yanshi/view/appData",
                  success: function(data) { y = data[2]}
               }); 
               series.addPoint([x, y], true, true);
            }, 1000);
         }
      }
   };
  
   var yAxis3 = {
      title: {
         text: ''
      },
     labels: {
    	
        y: 20, //x轴刻度往下移动20px
        style: {
          color: '#000',//颜色
          fontSize:'18px'  //字体
        },
         formatter: function () {
            return this.value + ' KB';
         }
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   };
 
   var series3= [{
      name: '',
      marker:{enabled: false,},
      data: (function () {
         // generate an array of random data
         var data = [],time = (new Date()).getTime(),i;
         for (i = -19; i <= 0; i += 1) {
            data.push({
               x: time + i * 1000,
              // y: Math.random()
               y: Number(arr3[i+19])
            });
         }
         return data;
      }())    
   }];     
   json3.chart = chart3; 
   json3.title = title;     
   json3.tooltip = tooltip;
   json3.xAxis = xAxis;
   json3.yAxis = yAxis3; 
   json3.legend = legend;  
   json3.exporting = exporting;   
   json3.series = series3;
   json3.plotOptions = plotOptions;
   json3.credits= {enabled: false};
  
   Highcharts.setOptions({
      global: {
         useUTC: false
      }
   });
   $('#container1').highcharts(json1);
   $('#container2').highcharts(json2);
   $('#container3').highcharts(json3);

   setInterval(function(){
	   $.ajax({ 
	          type: "GET", 
	          async: false, 
	          url: "/yanshi/view/which",
	          success: function(data) {
	           		if(data === 1) {
	           			return
	           		}else if(data === 2){
	           			window.location.href="/yanshi/view/2";
	           		}else if(data === 3){
	           			window.location.href="/yanshi/view/3";
	           		}
	           	},
	       }) 
   },1000)
  
});