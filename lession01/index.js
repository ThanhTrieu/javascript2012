//console.log("Hello word");
// khai bao bien 
/*
comment tren nhieu dong
*/
let myName = 'Van Teo';
var myAge = 20;
let checking = true;
var myPhone;
let myAddress = null; // object

// kiem tra kieu du lieu
console.log(typeof myName);
console.log(typeof(myAge, checking));
console.log(typeof(myPhone));
console.log(typeof(checking, myAddress));

var myMoney = 10;
var myMoney = 30;
// tu khoa let khong cho phep dinh nghia lai bien da ton tai
console.log(myMoney);

let n = 10;
if(n > 9){
  let n = 12;
  if(n > 11){
    let n = 13;
    console.log(n);
  }
  console.log(n);
}
console.log(n);
// tu khoa var ton tai con tro this tro vao chinh bien do - tu khoa let thi ko
// tu khoa var su dung trong ham thi co nhuoc diem - co kha nang xuat hien hien tuong hoisting - tu khoa let thi ko

// hang so
const PI = 3.14;
//PI = 3.15; // sai
console.log(PI, typeof PI);
