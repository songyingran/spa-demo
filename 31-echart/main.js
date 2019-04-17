$(function(){
  var xData = [],
      yData = [];

for(var p = 0;p<=1;p+=0.1){
  xData.push(roundFractional(p,1));
  yData.push(roundFractional(h(p),2));
}

function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
        
}

function h(p){
  return -1 * (plog(p) + plog(1 - p));
}


  var myChart = echarts.init(document.getElementById('main'));
  var option = {
    title: {
      text: '二进熵曲线'
    
    },
    tooltip: {},
    legend: {
      data:['信息量']
    
    },
    xAxis: {
      data: xData
    
    },
    yAxis: {},
    series: [{
      name: '信息量',
      type: 'line',
      smooth:'true',
      data: yData
                    
    }]

  };
  myChart.setOption(option);
  function plog(p) {
    return (p === 0)? 0 : p * Math.log2(p);
          
  }
});
