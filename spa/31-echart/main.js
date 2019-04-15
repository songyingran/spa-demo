$(function(){
  var xData = [],
      yData = [];

for(var p = 0;p<=1;p+=0.1){
  xData.push(p);
  yData.push(h(p));
}
function h(p){
  return -1 * p * Math.log2(p) * Math.log2(1-p);
}


  var myChart = echarts.init(document.getElementById('main'));
  var option = {
    title: {
      text: '二进熵曲线'
    
    },
    tooltip: {},
    legend: {
      data:['销量']
    
    },
    xAxis: {
      data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
    
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
                    
    }]

  };
  myChart.setOption(option);
});
