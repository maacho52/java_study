class TestScore {
  constructor () {
    this.name = "";
    this.english = 0;
    this.math = 0;
    this.Japanese  = 0;
  }
}

/* クラスの定義とプロパティの設定
   class クラス名 {
     constructor(){
       this.プロパティ名 = 初期値;
     }
   }   */

function printScore(name, english, math, japanese) {
  let sum = english + math + japanese;
  let ave = sum / 3;
  console.log(name + ": " + sum + " : " + ave);
}

let taro = new TestScore();
taro.name = "たろう";
taro.english = 92;
taro.math = 87;
taro.japanese = 74;
printScore(taro.name, taro.english, taro.math, taro.japanese);

//オブジェクトを格納する変数 = new クラス名();

let hanako = new TestScore();
hanako.name = "はなこ";
hanako.english = 79;
hanako.math = 95;
hanako.japanese = 83;
printScore(hanako.name, hanako.english, hanako.math, hanako.japanese);
