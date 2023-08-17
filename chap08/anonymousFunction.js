let list = [2, 7, 66, 9, 4];
list.forEach(
  function(currentValue, index, array) {
    console.log((index + 1) + "個目の値: " + currentValue);
  }
);

/*
forEachCallback.jsの時、事前に関数名を定義したが、この場合forEachの引数に直接関数定義をしている。
functionに続けてすぐに引数部分が記述されている。このように引数や変数に直接関数定義を記述する場合、
関数名が不要である。このような関数のことを無名関数あるいは匿名関数という。*/