function calcArraySum(list) {
  let sum = 0;
  for(let num of list) {
    sum += num;
  }
  return sum;
  //戻り値 return 値;
}

function calcAve(list) {
  let sum = calcArraySum(list);
  let length = list.length;
  return sum / length;
}

let list1 = [5, 6, 10, 55, 4, 9];
let list2 = [2, 7, 66, 4, 9];
let list3 = [8, 6, 13, 6, 9, 11, 5];

let sum1 = calcArraySum(list1);
let sum2 = calcArraySum(list2);
let sum3 = calcArraySum(list3);

let ave1 = calcAve(list1);
let ave2 = calcAve(list2);
let ave3 = calcAve(list3);

console.log("list1の合計: " + sum1);
console.log("list2の合計: " + sum2);
console.log("list3の合計: " + sum3);