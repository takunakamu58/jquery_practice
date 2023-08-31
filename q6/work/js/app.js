$(function(){
  $(".select-box").on("change" , function(){
      var select = $(".select-box").val();

      if(select == "all") {
          $(".food-list li").show();
      // .select-boxの中「all」を選んだら全て表示
      } else {
          $(".food-list li").hide();
      //.select-box意外を選んだら非表示
          $(".food-list li").filter(function(){
      // .filterで.food-list li内の要素をふるいに掛ける
              return($(this).data("category-type") == select);
      //.dataで.food-list liの中のdata:category-type内とselectと同じ値を抽出をreturnで返していく
          }).show();
      // 上記の条件が合うものを表示。
      }
  });
});

// .filterは<li>の様に複数のものを簡単にふるいにかける様にする
// .dataは指定したデータを抽出する。今回では（category-type）を抽出。