console.log("whileループ開始");
let i = 1;
while(i < 0) {
  console.log("iの値: " + i);
}
console.log("whileループ終了");

console.log("do-whileループ開始");
let j = i;
do {
  console.log("jの値:" + j);
} while(j < 0);
console.log("do-whileループ終了");