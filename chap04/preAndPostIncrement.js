let num1 = 10;
let num2= 10;


let ans1 = ++num1; //num1をインクリメント⇒代入
let ans2 = num2++; //num2をans2に代入⇒インクリメント

console.log("num1とans1: " + num1 + "と" + ans1);
console.log("num2とans2: " + num2 + "と" + ans2);
//ミスを誘発するため、このような使い方は避けるべき。incrementAndDecrement.jsの使い方◎