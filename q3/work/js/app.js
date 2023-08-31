$(function(){
  $(".drawer_button").on('click' , function(){
  // .drawer_buttonをクリックした際に
      $(this).toggleClass('active');
  //toggleClassはその要素をつけ外しできるメソッドでここでは.activeをつけ外しすることにより×の動きを出している
      $('.drawer_bg').fadeToggle();
  //fadeToggleで.drawer_bgの要素に動きを出している
      $('nav').toggleClass('open');
  //toggleClassはその要素をつけ外しできるメソッドでここでは.openをつけ外しすることによりnavの要素が出てくる
  });
});