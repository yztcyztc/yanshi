$(document).ready(function() {  
//获取初始数据三组
    var arr1 = $("#preValue1").html().split(',');
    var arr2 = $("#preValue2").html().split(',');
    var arr3 = $("#preValue3").html().split(',');
//三个曲线图
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
   var title1 = {
      text: '用户访问量（UV）曲线'  ,
      style: {fontWeight:"bold"}
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
   json1.title = title1;     
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

   var title2 = {
      text: '响应时间(RT）曲线' ,
       style: {fontWeight:"bold"}  
   }; 
  
   var yAxis2 = {
      title: {
         text: '',
         style:{
            color:"#ff0000"
          }
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
          value: 3000,
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
          value: 3000,
          color: 'rgba(124, 181, 236, 0.75)',
         }, {
          value:10000,
          color: 'red'
         }]    
   }];               
      
   json2.chart = chart2; 
   json2.title = title2;     
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
    animation: Highcharts.svg, 
    marginRight: 10,
    events: {
         load: function () {
            var series = this.series[0];
            setInterval(function () {
               var x = (new Date()).getTime();
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

     var title3 = {
      text: '网站流量曲线',
       style: {fontWeight:"bold"}   
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
         var data = [],time = (new Date()).getTime(),i;
         for (i = -19; i <= 0; i += 1) {
            data.push({
               x: time + i * 1000,            
               y: Number(arr3[i+19])
            });
         }
         return data;
      }())    
   }];     
   json3.chart = chart3; 
   json3.title = title3;     
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

//中国地图
    require.config({
            paths: {
                echarts: './map'
            }
        });
     var arr = [],data=[0,1,500];        
     setInterval(function () { 
               $.ajax({ 
                  type: "GET", 
                  async: false, 
                  url: "/yanshi/view/appData",
                  success: function(data) { 
                      arr = [];                 
                      arr.push({name: '北京',value:Math.ceil(0.05*data[2])});
                      arr.push({name: '天津',value:Math.floor(0.05*data[2])});
                      arr.push({name: '上海',value:Math.floor(0.1*data[2])});
                      arr.push({name: '重庆',value:0});
                      arr.push({name: '河北',value:Math.floor(0.3*data[2])});
                      arr.push({name: '河南',value:0});
                      arr.push({name: '云南',value:0});
                      arr.push({name: '辽宁',value:0});
                      arr.push({name: '黑龙江',value:Math.floor(0.05*data[2])});
                      arr.push({name: '湖南',value:0});
                      arr.push({name: '安徽',value:0});
                      arr.push({name: '山东',value:Math.floor(0.05*data[2])});
                      arr.push({name: '新疆',value:0});
                      arr.push({name: '江苏',value:Math.floor(0.05*data[2])});
                      arr.push({name: '浙江',value:Math.floor(0.2*data[2])});
                      arr.push({name: '江西',value:0});
                      arr.push({name: '湖北',value:0});
                      arr.push({name: '广西',value:0});
                      arr.push({name: '甘肃',value:0});
                      arr.push({name: '山西',value:0});
                      arr.push({name: '内蒙古',value:0});
                      arr.push({name: '陕西',value:Math.floor(0.05*data[2])});
                      arr.push({name: '吉林',value:Math.floor(0.05*data[2])});
                      arr.push({name: '福建',value:0});
                      arr.push({name: '贵州',value:0});
                      arr.push({name: '广东',value:Math.floor(0.05*data[2])});
                      arr.push({name: '青海',value:0});
                      arr.push({name: '西藏',value:0});
                      arr.push({name: '四川',value:0});
                      arr.push({name: '宁夏',value:0});
                      arr.push({name: '海南',value:0});
                      arr.push({name: '台湾',value:0});
                      arr.push({name: '香港',value:0});
                      arr.push({name: '澳门',value:0});   
                    }
                  })

            require(
                    [
                        'echarts',
                        'echarts/chart/bar',
                        'echarts/chart/line',
                        'echarts/chart/map'
                    ],
            function (ec) {           
                var myChart = ec.init(document.getElementById('map'));
                var option = {
                    title : {
                        text: '全国地区访问量',
                        subtext: '',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    // legend: {
                    //     orient: 'vertical',
                    //     x:'left',
                    //     data:['0','<50','50-100','100-500','500-1000']
                    // },
                    // dataRange: {
                    //     min: 0,
                    //     max: 1000,
                    //     x: 'left',
                    //     y: 'bottom',
                    //     text:['高','低'],           // 文本，默认为数值文本
                    //     calculable : true
                    // }, 
                    dataRange: {
                    x: 'left',
                    y: 'bottom',
                    splitList: [
                        {start: 801},
                        {start: 601, end: 800},
                        {start: 401, end: 600},
                        {start: 201, end: 400},                      
                        {start: 1, end: 200},
                        {start: 0, end: 0}
                    ],
                    color: ['#00CCA3','#00EEBE','#11FFCF','#33FFD6','#AAFFEE','#E6E6E6']                   
                },    
                    series : [
                        {
                            name: '访问量',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:arr,
                            // [
                            //     {name: '北京',value: Math.round(Math.random()*1000)},
                            //     {name: '天津',value: Math.round(Math.random()*1000)},
                            //     {name: '上海',value: Math.round(Math.random()*1000)},
                            //     {name: '重庆',value: Math.round(Math.random()*1000)},
                            //     {name: '河北',value: Math.round(Math.random()*1000)},
                            //     {name: '河南',value: Math.round(Math.random()*1000)},
                            //     {name: '云南',value: Math.round(Math.random()*1000)},
                            //     {name: '辽宁',value: Math.round(Math.random()*1000)},
                            //     {name: '黑龙江',value: Math.round(Math.random()*1000)},
                            //     {name: '湖南',value: Math.round(Math.random()*1000)},
                            //     {name: '安徽',value: Math.round(Math.random()*1000)},
                            //     {name: '山东',value: Math.round(Math.random()*1000)},
                            //     {name: '新疆',value: Math.round(Math.random()*1000)},
                            //     {name: '江苏',value: Math.round(Math.random()*1000)},
                            //     {name: '浙江',value: Math.round(Math.random()*1000)},
                            //     {name: '江西',value: Math.round(Math.random()*1000)},
                            //     {name: '湖北',value: Math.round(Math.random()*1000)},
                            //     {name: '广西',value: Math.round(Math.random()*1000)},
                            //     {name: '甘肃',value: Math.round(Math.random()*1000)},
                            //     {name: '山西',value: Math.round(Math.random()*1000)},
                            //     {name: '内蒙古',value: Math.round(Math.random()*1000)},
                            //     {name: '陕西',value: Math.round(Math.random()*1000)},
                            //     {name: '吉林',value: Math.round(Math.random()*1000)},
                            //     {name: '福建',value: Math.round(Math.random()*1000)},
                            //     {name: '贵州',value: Math.round(Math.random()*1000)},
                            //     {name: '广东',value: Math.round(Math.random()*1000)},
                            //     {name: '青海',value: Math.round(Math.random()*1000)},
                            //     {name: '西藏',value: Math.round(Math.random()*1000)},
                            //     {name: '四川',value: Math.round(Math.random()*1000)},
                            //     {name: '宁夏',value: Math.round(Math.random()*1000)},
                            //     {name: '海南',value: Math.round(Math.random()*1000)},
                            //     {name: '台湾',value: Math.round(Math.random()*1000)},
                            //     {name: '香港',value: Math.round(Math.random()*1000)},
                            //     {name: '澳门',value: Math.round(Math.random()*1000)}
                            // ]
                        }, 
                    ]
                };
          myChart.setOption(option);
        }

      );},1000);


//页面跳转
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