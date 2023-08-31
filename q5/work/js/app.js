$(function(){
  $(".dropdwn li").hover(function(){
  //.dropdwn liをhoverした時に動作する指定
      $(this).children(".dropdwn_menu").stop().slideToggle();
  //「.children」では要素の小要素を取得する様に指示。ここでは「.dropdwn_menu」の小要素。「.dropdwn_menu li」取得
  //.stopはアニメーションの制御。.stopをつけないとマウスホバーした回数分、アニメーションを繰り返してしまう
  //.slideToggleは.slideUPと.slideDownを繰り返し行うメソッド
  });
});

