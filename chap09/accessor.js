class AccessorProp {
  //コンストラクタ。氏名を受け取りプロパティに格納。
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
  
  //nameプロパティのゲッタ。
  get name() {
    return this.lastName + this.firstName;
  }
  
  //extNameプロパティセッタ。
  set extName(value) {
    this.lastName = value;
    this.firstName = value;
  }
}

//「中田太郎」という指名でAccessorPropオブジェクトを生成。
let taro = new AccessorProp("中田", "太郎");
//各プロパティを表示。
console.log("lastName: " + "taro.lastName");
console.log("firstName: " + "taro.firstName");
//nameプロパティを表示。
console.log("name: " + "taro.name");

//extNameプロパティに「山口次郎」を代入。
taro.extName = "山口次郎";
//各プロパティを表示。
console.log("lastName: " + "taro.lastName");
console.log("firstName: " + "taro.firstName");

//extNameプロパティを表示。
console.log("extName: " + taro.extName);

//nameプロパティに「篠原三郎」を代入したうえで同プロパティを表示。
taro.name = "篠原三郎";
console.log("name: " + taro.name);

//ゲッタとセッタ
/*
・ゲッタ
get プロパティ名() {
  このプロパティで値を取得しようした際に値を生成、返却する処理。
}

・セッタ
set プロパティ名(引数) {
  このプロパティに値が代入された際に行う処理。
}

*/