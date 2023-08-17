function printElement(currentValue, index, array) {
  console.log((index + 1) + "個目の値: " + currentValue);
}
/*
  第一引数currentValue:現在処理されている要素
  第二引数index:現在処理されている要素のインデックス
  第三引数array:配列そのもの
*/
let list = [2, 7, 66, 4, 9];
list.forEach(printElement);

/*
  自動でループしながら配列内の各要素に処理を加えることができる。
  この引数としてコールバックを関数を渡す。

  構文
  配列.forEach(callback)
      callback:配列を処理するための関数
*/
