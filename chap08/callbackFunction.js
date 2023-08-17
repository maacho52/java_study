function concatenateSpace(lastName, firstName) {
  return lastName + "" + firstName;
}

function useConcatenate(name, func) {
  let concatName = func(...name);
  console.log("結合結果: " + concatName);
}

let nameParam = ["中田" ,"雄二"];
useConcatenate(nameParam, concatenateSpace);

/* コールバック関数・・・変数化された関数を引数として渡されることを想定している。このような関数の使い方。
  コールバック関数が使われている関数を利用するには、その引数部分に関数名を渡します。
  関数名といっても文字列として渡すのではなく関数そのものを格納した配列を作成した場合と同様に
  ダブルクォーテーションなしで関数名を記述します。
*/