
window.onload = function () { 
    var R = Raphael("map", 600, 500); //map是显示图形的div的id,也可以直接写成一个坐标如10，20
    //调用绘制地图方法 
    paintMap(R); 
     
    var textAttr = { 
        "fill": "#000", 
        "font-size": "12px", 
        "cursor": "pointer" 
    };       
            
    for (var state in china) { 
        china[state]['path'].color = Raphael.getColor(0.9); 
                 
        (function (st, state) { 
             
            //获取当前图形的中心坐标 
            var xx = st.getBBox().x + (st.getBBox().width / 2); 
            var yy = st.getBBox().y + (st.getBBox().height / 2); 
             
              switch (china[state]['name']) { 
                case "江苏": 
                    xx += 5; 
                    yy -= 10; 
                    break; 
                case "河北": 
                    xx -= 10; 
                    yy += 20; 
                    break; 
                case "天津": 
                    xx += 10; 
                    yy += 10; 
                    break; 
                case "上海": 
                    xx += 10; 
                    break; 
                case "广东": 
                    yy -= 30; 
                    break; 
                case "澳门": 
                    yy += 10; 
                    break; 
                case "香港": 
                    xx += 20; 
                    yy += 5; 
                    break; 
                case "甘肃": 
                    xx -= 40; 
                    yy -= 30; 
                    break; 
                case "陕西": 
                    xx += 5; 
                    yy += 10; 
                    break; 
                case "内蒙古": 
                    xx -= 15; 
                    yy += 65; 
                    break; 
                default: 
            }
            //写入文字 
            china[state]['text'] = R.text(xx, yy, china[state]['name']).attr(textAttr); 
             
            st[0].onmouseover = function () {//鼠标滑向 
                st.animate({fill: st.color, stroke: "#eee"}, 500); 
                china[state]['text'].toFront(); 
                R.safari(); 
            }; 
            st[0].onmouseout = function () {//鼠标离开 
                st.animate({fill: "#97d6f5", stroke: "#eee"}, 500); 
                china[state]['text'].toFront(); 
                R.safari(); 
            }; 
                     
         })(china[state]['path'], state);      
      }


    var myData = new Array([1997, 7.80], [1998, 4.80], [1999, 6.50], [2000, 6.10], [2001, 4.40], [2002, 5.80], [2003, 4.00], [2004, 8.50], [2005, 8.90], [2006, 9.20]);
    var myChart = new JSChart('graph', 'line');
    myChart.setDataArray(myData);
    myChart.setTitle('India GDP');
    myChart.setTitleColor('#8E8E8E');
    myChart.setTitleFontSize(11);
    myChart.setAxisNameX('');
    myChart.setAxisNameY('');
    myChart.setAxisColor('#8420CA');
    myChart.setAxisValuesColor('#949494');
    myChart.setAxisPaddingLeft(100);
    myChart.setAxisPaddingRight(120);
    myChart.setAxisPaddingTop(50);
    myChart.setAxisPaddingBottom(40);
    myChart.setAxisValuesDecimals(3);
    myChart.setAxisValuesNumberX(10);
    myChart.setShowXValues(false);
    myChart.setGridColor('#C5A2DE');
    myChart.setLineColor('#BBBBBB');
    myChart.setLineWidth(2);
    myChart.setFlagColor('#9D12FD');
    myChart.setFlagRadius(4);
    myChart.setTooltip([1997, 'GDP 7.80']);
    myChart.setTooltip([1998, 'GDP 4.80']);
    myChart.setTooltip([1999, 'GDP 6.50']);
    myChart.setTooltip([2000, 'GDP 6.10']);
    myChart.setTooltip([2001, 'GDP 4.40']);
    myChart.setTooltip([2002, 'GDP 5.80']);
    myChart.setTooltip([2003, 'GDP 4.00']);
    myChart.setTooltip([2004, 'GDP 8.50']);
    myChart.setTooltip([2005, 'GDP 8.90']);
    myChart.setTooltip([2006, 'GDP 9.20']);
    myChart.setLabelX([1997, '1997']);
    myChart.setLabelX([1998, '1998']);
    myChart.setLabelX([1999, '1999']);
    myChart.setLabelX([2000, '2000']);
    myChart.setLabelX([2001, '2001']);
    myChart.setLabelX([2002, '2002']);
    myChart.setLabelX([2003, '2003']);
    myChart.setLabelX([2004, '2004']);
    myChart.setLabelX([2005, '2005']);
    myChart.setLabelX([2006, '2006']);
    myChart.setSize(616, 321);
    myChart.setBackgroundImage('chart_bg.jpg');
    myChart.draw();
  }
