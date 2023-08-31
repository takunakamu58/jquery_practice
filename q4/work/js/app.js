$(function(){
  $(".nav li").on("click" , function(){
      let i = $(this).index();
  // var l = $(this).index()を宣言してnavのliの中を１つ１つ要素を取り出す仕組みを作る。.index()では()が空の場合は兄弟要素の中で何番目になるかを返す様にしている。今回はiの中に代入。

      $(".description li").addClass("is-hidden");
      $(".description li").eq(i).removeClass("is-hidden")
  //クリックされた際に.description liにcssのis-hiddenが追加かつ.removeClass is-hiddenでcssを消すが、.eq(i)で指定した要素を取得する様に行う(1つ1つにかけられる様になる)
  });
});