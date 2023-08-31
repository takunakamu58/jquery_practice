$(function() {
  $(".btn__submit").on("click" , function(){
      const n = $("#family__name").val();
      console.log("名字");
      console.log(n);

      const a = $("#given__name").val();
      console.log("名前");
      console.log(a);

      // 上記２つはinputの中のidを選択肢コンソールに出力

      console.log("生年月日");
      console.log($(".year").val()+"年",$(".month").val() +"月",$(".day").val() +"日");

      // selectの中のclass。.year,.month,.dayを選択し出力

      const g = $("input:checked").val();
      console.log("性別");
      console.log(g);

      // input:checkedでは性別のラジオボタンにチェックが入ったものに対しコンソールで出力する様にしている

      const j =$(".occupation").val();
      console.log("職業");
      console.log(j);

      const account = $("#account__name").val();
      console.log("アカウント名");
      console.log(account);

      const mail = $("#email").val();
      console.log("メールアドレス");
      console.log(mail);


      const pass = $("#password").val();
      console.log("パスワード");
      console.log(pass);

      const duplication = $("#duplication__password").val();
      console.log("確認用パスワード");
      console.log(duplication);

      const add = $("#address").val();
      console.log("住所");
      console.log(add);

      const tell = $("#tel").val();
      console.log("電話番号");
      console.log(tell);

      console.log("購買情報")
      $("input:checked").each(function(){
      // input:checked.eachではチェック項目が複数あるため.eachを使いループさせていく。その中でチェックが入ったものに対しコンソールに出力する
          const melmaga = $(this).val();

          console.log(melmaga);
      });
  });
});