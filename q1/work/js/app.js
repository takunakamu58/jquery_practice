$(function(){
  // IDを指定し.cssでcssのcolorを指定し色の変更をjQueryでかけているかけている
  $("#q1").css("color","black");
});

$(function(){
  $("#q2").on("click",function(){
      // IDを指定し.onでclickのイベントを発生させる
      $(this).css('background','green');
      // thisはイベントが発生した要素を指すメソッドでここではthisがclickを指す。.cssでcssのbackgroundを指定し色の変更をjQueryでかけているかけている

  });
});

$(function(){
  $("#q3").on("click",function(){
  // IDを指定し.onでclickのイベントを発生させる
  $(this).fadeOut(3000);
  // thisでイベントが発生した要素を指定してfadeOutと(秒数)で消える時間を指定。今回は3秒
  });
});

// // 1のパターン
// $(function(){
//     $("#q4").on("click",function(){
//     // IDを指定し.onでclickのイベントを発生させる
//     $(this)
//         .css('width','300px')
//         .css('padding','50px');
//      // thisでイベントが発生した要素を指定して.cssでwidthとpaddingのpx数を変更をかけている。
//     });
// });

// 2のパターン
$(function(){
  $("#q4").on("click",function(){
  // IDを指定し.onでclickのイベントを発生させる
  $(this).addClass('large');
   // thisでイベントが発生した要素を指定。addClassでは新しいclassを追加することができる。ここではclass="large"を追加することによりbtnの隣にlargeが追加されるそれによりcssの。.largeが適用され大きさが変わる。
  });
});
// 両方とも動きます。

$(function(){
  $("#q5").on("click" , function(){
  // IDを指定し.onでclickのイベントを発生させる
      $(this).before("DOMの前")
  // .beforeでは要素の直前（要素の外の直前）に追加することができる
      $(this).prepend("DOMの中の前")
  // .prependでは要素の先頭に（中の先頭）追加することができる
      $(this).append("DOMの中の後ろ")
  // .appendではに要素の最後（中の最後）追加することができる
      $(this).after("DOMの後ろ")
  // .afterでは要素の末尾（要素の外の末尾）に追加することができる

  });
});

$(function(){
  $("#q6").on("click" , function(){
  // IDを指定し.onでclickのイベントを発生させる
      $(this).animate({"margin-top":100,"margin-left":100},2000)
      // thisでイベントが発生した要素を指定。アニメーションをつける時は.animateを使う。.animateでどこまで動かしたいかをしてするためmargin-top、leftを使用している。.animateでは（）のみだけでなく({})で囲う
  });
});

$(function(){
  $("#q7").on("click" , function(){
  // IDを指定し.onでclickのイベントを発生させる
      console.log(this)
  // thisでイベントが発生した要素を指定。console.logでclickされたらコンソールに表示される
  });
});

$(function(){
  $("#q8").hover(function(){
  // IDを指定し.hoverのイベントを発生させる。
      $(this).addClass('large');
  },
  // addClassでcssのlargeのclassを追加。マウスが対象物に被さった時にlargeのclassが入り大きくなる
  function(){
      $(this).removeClass('large');
  // removeClassでcssのlargeのclassを削除。マウスが対象物から離れた時にlargeのclassが削除され小さくなる

  });
});

// // 文字色も変えられる
// $(function(){
//     $("#q8").hover(function(){
//         $(this).css('color' , 'red');
//     },
//     function(){
//         $(this).css('color' , '#fff');
//     });
// });

// // ボタンの背景も帰れる
// $(function(){
//     $("#q8").hover(function(){
//         $(this).css('background' , '#fff');
//     },
//     function(){
//         $(this).css('background' , '#ff3232');
//     });
// });

$(function(){
  $("#q9 li").on("click" , function(){
  // IDを指定し.hoverのイベントを発生させる。
      var l = $(this).index() ;
  //var l = $(this).index()を宣言しq9のliの中を１つ１つ要素を取り出す仕組みを作る。.index()では()がからの場合は兄弟要素の中で何番目になるかを返す様にしている
      alert(l);
  // alertで何番目を取り出しているかをalertしている。
  });
});


$(function(){
  $("#q10 li").on("click" , function(){
  // IDを指定し.hoverのイベントを発生させる。
      var i = $(this).index();
   //var l = $(this).index()を宣言しq10のliの中を１つ１つ要素を取り出す仕組みを作る。.index()では()がからの場合は兄弟要素の中で何番目になるかを返す様にしている。今回はiの中に代入。
      console.log($("#q11 li").eq(i))
  // 今回はq10をクリックした時にq11の値全てをコンソールで表示させる。.eq(i)では指定した要素を取得する様に行う。
      $("#q11 li").eq(i).addClass("large-text")
  // addClassで"large-text"を追加し文字をq10がクリックされた時に大きくする。(1つ1つにクラスをつけることができる)
  })
});

