class TestScore {
  constructor () {
    this.name = "";
    this.english = 0;
    this.math = 0;
    this.Japanese  = 0;
  }
}

function printScore(student) {
  let sum = student.english + student.math + student.japanese;
  let ave = sum / 3;
  console.log(student.name + ": " + sum + " : " + ave);
}

let taro = new TestScore();
taro.name = "たろう";
taro.english = 92;
taro.math = 87;
taro.japanese = 74;
printScore(taro);

//オブジェクトを格納する変数 = new クラス名();

let hanako = new TestScore();
hanako.name = "はなこ";
hanako.english = 79;
hanako.math = 95;
hanako.japanese = 83;
printScore(hanako);
