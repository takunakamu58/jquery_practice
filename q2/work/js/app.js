$(function(){
  $(".modal_open_button").click(function(){
  // 「OPEN」ボタンが押されたら
      $(".modal_win").fadeIn();
  // display:noen;で消えていたウィンドウが出てくる
  });
  $(".modal_close_button").click(function(){
  // 「×」ボタンを押した時に
      $(".modal_win").fadeOut();
  // ウィンドウが閉じる
  });
});