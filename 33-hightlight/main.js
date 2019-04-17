/*global hljs:true*/
$(function(){
  //var $code = $('div>pre');
  var $btnAddCode = $('input[type="button"]');

  $btnAddCode.click(function(){
    var $code = $('<div><pre class="javascript"></pre></div><input class="del" type = "button" value = "删除">');
    //console.log($('textarea').val);
    $code.find('pre').html($('.txt').val());
    $('div.main').append($code);
    hljs.highlightBlock($code.find('pre')[0]);

    var $del = $('.del');
    $del.click(function(){
      $code.remove();
    });
  });

  //hljs.highlightBlock($code[0]);
});
