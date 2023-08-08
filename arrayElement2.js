let namelist = ["松田", "田中", "中山" ,"山本", "本田"];

namelist[5] = "田村";

console.log("5人目は" + namelist[4]);
console.log("6人目は" + namelist[5]);

namelist[8] = "村田";

console.log("7人目は" + namelist[6]);
console.log("8人目は" + namelist[7]);
console.log("9人目は" + namelist[8]);

/*javascriptではインデックスを不連続にすると、とんだ間のインデクス要素については、
　未定義(undifined)の状態で枠だけ作成します。ただし枠は存在するため、配列全体の要素数には含めます。
　この場合namelistは要素数が9個ということになります。*/