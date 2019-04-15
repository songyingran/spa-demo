
//<input type="button" value='同意（6s）' disabled/>
$(function(){
  var n = 6;
  var $container = $('.main');
  var DOM = '<input type="button" value="同意（6s）" disabled/>';
  $container.html(DOM);
  var $btnAgree = $('input[type="button"]');
  var timer = window.setInterval(() => {
    n--;
    if(n === 0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');

    }else{
      $btnAgree.val('同意（' + n + 's）');

    }

  },1000);

  $btnAgree.click(()=>{
    alert('SPA!');

  });

});
