console.log("這是外部的JS");

// 變數variable(會變的數值)
// 儲存網站內的資料，例如:顏色、字體大小、元素、使用者資訊

// 變數語法
// let變數名稱;

// 變數名稱命名習慣(守則)
// 1.不會使用中文命名
// 2.不使用數字開頭
// 3.不使用全形符號@
// 4.空格 test 1
// 5.保留字(有作用的關鍵字) if、let

// 建議命名方式:(駝峰式命名)
// 1.多個單字構成
// 2.開頭使用小寫
// 3.單字相連字首用大寫
// 4.用有意義的名稱命名

let test = 7;
let fontColor = "#f63";

// 取得變數get
console.log(test);
console.log(fontColor);

// 設定變數set
test = 9;
console.log(test);

let varNumber = 1.5;   //數值
let varString = "字串"; //字串
let varBool = true; //布林值

console.log(varNumber);
console.log(varString);
console.log(varBool);

// typeof獲得資料類型
console.log(typeof varNumber);
console.log(typeof varString);
console.log(typeof varBool);

// 運算子
// 加減乘除餘次方
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);


// 指定運算子(指定符號=)
// 1+2+3 數學內的等號，左右兩邊一定相等，由左至右執行
//  = 指定，左右兩邊不一定相等，由右至左執行
let numberTest = 99 + 1;
console.log(numberTest);
numberTest++;
console.log(numberTest);
numberTest--;
console.log(numberTest);
numberTest += 10;     //適用於+-*/%**
console.log(numberTest);
numberTest -= 10;
console.log(numberTest);

console.log("%c比較運算子", "color:gold");

// > < >= <= === !==(執行執行結果就是布林值)
console.log(100 > 1);
console.log(100 < 1);
console.log(100 === 1);  //等於F
console.log(100 !== 1); //不等於T

let varNumber10 = 10;
let varString10 = "10";

console.log(varNumber10 == varNumber10);
console.log(varString10 === varString10); //嚴格比較，資料類型不同，結果為false

console.log("%c判斷式", "color:gold");
if (false) {
    console.log("這裡是判斷式");
}

let score = 0;

if (score >= 60) {
    console.log("你及格了");
}
else if (score >= 50) {
    console.log("來補考");
}
else {
    console.log("你被當了");
}

let hp = 70;

if (hp <= 0) {
    console.log("死亡");
}
else if (hp <= 60) {
    console.log("警告");
}
else {
    console.log("安全");
}

console.log("%c迴圈", "color:gold");

// for迴圈
// for語法:
// (初始值; 條件;迭代器;){程式區塊}
for (let index = 0; index < 10; index++) {
    console.log("迴圈", index);
}


let letCount = 1;
letCount = 2;
letCount = 3;

const constCount = 1;
// constCount = 2; 產生錯誤，常數不可變
const PI = 3.14;
const WEB_FONT_SIZE = 24;

var varCount = 1;
varCount = 123;
var varCount = 3;
console.log(varCount);
{
    let letTest = 1;
    const constTest = 1;
    var varTest = 1;
    console.log("let:", letTest);
    console.log("var:", varTest);
    console.log("conat:", letTest);
}
console.log("var:", varTest);

function logLine() {
    console.log("%---我是分隔線---", "color:gold");

}

logLine();
logLine();
logLine();
logLine();
logLine();

// 對照組(比較不適合的寫法)
function logLineRed(){
    console.log("%c----我是分隔線----","color:red");
}

function logLineGreen(){
    console.log("%c----我是分隔線----","color:green");
}

logLineRed();
logLineGreen();

// 程式要注意的事情:思考未來的維護性、擴充性、可能性

// 比較適合的寫法
// function 函數名稱(參數){ }
function logLineWithColor(color){
    console.log("%c----我是分隔線----",`color:${color}`);
}

logLineWithColor("black");
logLineWithColor("blue");
// 參數預設值
function logLoneLineWithColor(color="gold"){
    console.log("%c--------我是分隔線--------",`color:${color}`);
}
logLoneLineWithColor("red");
// 不給參數會直接使用預設值
logLoneLineWithColor();

console.log("%c表達式函式","color:gold");

// 表時式函式語法:
// const 變數 = 函式(參數) {}
const print = function(color = "red"){
    console.log("%c測試",`color:${color}`);
}

// 變數名稱(參數)
print("green");
print("gray");

// 多個參數
const printMessage = function(color = "red", message = "這是預設文字"){
    console.log(`%c${message}`,`color:${color}`);
}

printMessage();
printMessage("gold");
printMessage("gold","訊息");
// 想要使用預設顏色，文字要使用"訊息"
 printMessage("訊息"); //錯誤
printMessage(undefined,"訊息");   //正確結果

console.log("%c函式傳回值","color:gold");

// 有傳回值的函式，必須使用一個 return 關鍵字將值傳回
function double(number){
    return number * 2;
}

// 使用方式 1:用變數將值回傳儲存
const result = double(10);
console.log(result);
// 使用方式2:直接將傳回值函式當作數值使用
console.log(double(7));


// 表達式傳回函式
// 平方函式
const square = function (number) {
    return number * number;
}
console.log(square(9));
console.log(square(321));


// 練習題
const BMI = function(height,weight){
    return weight / (height * height);
}

console.log(BMI(1.76,120));
