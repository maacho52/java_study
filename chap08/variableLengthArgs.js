function concatenate(...name) {
  //function 関数名(...引数) .を3個引数名の前につけると引数の個数を予め決めない方法になる。この記述方法を「可変長引数」
  let concatenatedName = "";
  for(let i = 0; i < name.length; i++) {
    concatenatedName += name[i];
    if(i != name.length - 1) {
      concatenatedName += ".";   
    }
  }
  return concatenatedName;
}

let lName = "中田";
let fName = "雄二";
let name1 = concatenate(fName, lName,);
console.log("結合結果: " + name1);
let picasso = concatenate("パプロ", "ディエゴ", "ホセ", "フランシスコ", "デ", "パウラ", "ファン", "ネポムセーノ", "マリア", "デ", "ロス", "レメディオス", "シプリアノ", "デ", "ラ", "サンティシマ", "トリニダード", "ルイス", "ピカソ");
console.log("ピカソの本名 :" + picasso);