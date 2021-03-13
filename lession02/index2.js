// lam viec voi chuoi
let str = 'dang hoc js';
let str2 = "dang hoc js";
let str3 = `dang hoc js`;
//console.log(typeof(str, str2, str3));
// + : toan tu ghep chuoi
let str4 = str + str2 + str3 + " moi buoi thu 2";
//console.log(str4);
let str5 = `${str} ${str2} ${str3} moi buoi thu 2`;
//console.log(str5);

let str6 = `chuan bi sang reactjs
            kien thuc se nhieu hon`;
//str6.length : kiem tra do dai
//console.log(str6, str.length);

let mySrt = 'dang hoc js dang hoc rjx';
let newStr = mySrt.toUpperCase();
let newStr2 = newStr.toLowerCase();
//console.log(mySrt, newStr, newStr2);
let pos = mySrt.indexOf('js');
//console.log(pos);
let pos2 = mySrt.lastIndexOf('js');
//console.log(pos2);

let newStr3 = mySrt.slice(5,8);
//console.log(newStr3);
let newStr4 = mySrt.substring(5,8);
//console.log(newStr4);
let newStr5 = mySrt.substr(7,8);
//console.log(newStr5);

let testSrt = 'dang hoc js, hoc trong khoang may buoi thi het js nay';
let newTestStr = testSrt.replace('js','reactjs');
//console.log(newTestStr);

///////// Symbol (es6) ////////////////////
// tao ra cac gia tri ko trung lap
let id1 = Symbol('id');
let id2 = Symbol('hello');
if(id1 == id2){
  console.log('A');
} else {
  console.log('B');
}
console.log(id1, id2);
console.log(id2.description);