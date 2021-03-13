//let checking = kiemTraChanLev2(9);
//console.log(checking);

// function expression
let kiemTraChanLe = function(number) {
  if(number % 2 === 0) {
    return true;
  }
  return false;
}
// function Declarations
function kiemTraChanLev2(number) {
  if(number % 2 === 0) {
    return true;
  }
  return false;
}

// arrow function
let kiemTraChanLev3 = (number) => {
  if(number % 2 === 0) {
    return true;
  }
  return false;
}
// tong 2 so
let sumNumber = (a,b) => a+b;
let result = sumNumber(1,2);
// console.log(result);

let kiemTraChanLev4 = n => n % 2 === 0;
let ck = kiemTraChanLev4(3);
//console.log(ck, typeof ck);

// viet ham sung dung loai ham arrow fn kiem tra 1 so bat ky co phai la so chinh phuong ko?
let kiemTraSoCP = m => {
  let val = Math.sqrt(m);
  if(Number.isInteger(val)){
    return true;
  }
  return false;
}
let ck2 = kiemTraSoCP(10);
//console.log(ck2, typeof ck2);

let numberTest = 'abc';
let t = parseInt(numberTest);
//console.log(parseInt(numberTest));
if(t !== t) {
  console.log('A');
} else {
  console.log('B');
}
// kiem tra xem thuc su tham so truyen vao ham co phai la so hay chuoi so hay ko?
let kiemTraChuoiSo = m => {
  if(!isNaN(m)){
    return true;
  }
  return false;
}
// m : 12323
// m : '2122' | '323dd' | 'ewe2323'
let a = '123';
//console.log(parseInt(a));
if(kiemTraChuoiSo('10baxx')){
  console.log('OK');
} else {
  console.log('FAIL');
}