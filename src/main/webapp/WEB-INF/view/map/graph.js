$(document).ready(function() {  
    var chart1  = {
    type: 'spline',
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
                  url: "/yanshi/test/appData1",
                  success: function(data) { y = data}
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
      tickPixelInterval: 150
   };
   var yAxis1 = {
      title: {
         text: ''
      },
     labels: {
         formatter: function () {
            return this.value + ' 次';
         }
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
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
      name: 'Random data',
      marker:{enabled: false,},
      data: (function () {
         // generate an array of random data
         var data = [],time = (new Date()).getTime(),i;
         for (i = -19; i <= 0; i += 1) {
            data.push({
               x: time + i * 1000,
               y: parseInt(10*Math.random())
            });
         }
         return data;
      }())    
     // data: (function(){
     //  var data = [],time = (new Date()).getTime(),i;
     //   $.ajax({ 
     //              type: "GET", 
     //              async: false, 
     //              url: "/yanshi/test/appData1",
     //              success: function(data) { y = data}
     //           }); 
     // })
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
    type: 'spline',
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
                  url: "/yanshi/test/appData2",
                  success: function(data) { y = data}
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
         formatter: function () {
            return this.value + ' ms';
         }
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   };
 
   var series2= [{
      name: 'Random data',
      marker:{enabled: false,},
      data: (function () {
         // generate an array of random data
         var data = [],time = (new Date()).getTime(),i;
         for (i = -19; i <= 0; i += 1) {
            data.push({
               x: time + i * 1000,
               y: parseInt(10*Math.random())
            });
         }
         return data;
      }())    
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
    type: 'spline',
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
                  url: "/yanshi/test/appData3",
                  success: function(data) { y = data}
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
      name: 'Random data',
      marker:{enabled: false,},
      data: (function () {
         // generate an array of random data
         var data = [],time = (new Date()).getTime(),i;
         for (i = -19; i <= 0; i += 1) {
            data.push({
               x: time + i * 1000,
               y: Math.random()
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
  
});