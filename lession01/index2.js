let n = 10;
if( n > 12) {
  console.log('hi you');
} else if( n > 13) {
  console.log('good bye');
} else if ( n > 8) {
  console.log('hello ');
  //break;
} else if ( n => 7) {
  console.log('het dich chua ???');
} else {
  console.log('off ');
}

let a = 10;
console.log(a);

let m = 10;
switch (m) {
  case 1: 
    // 
    break;
  case 2:
    //
    break;
  default:
    ///
    break;
}

// vong lap
// 1 - for
for(let i = 1; i < 10; i++) {
  console.log(i);
}
// 2 - while
let j = 10;
while( j < 100) {
  console.log(j);
  j++
}
// 3 - do ... while
let k = 1;
do {
  console.log(k);
  k++;
} while( k < 20);

let n1 = 10;
let n2 = '10b';
let n3 = n1 - n2;
console.log(n3 , typeof n3);
// 20;
// error
// 1010
// + : toan tu ghep chuoi(noi chuoi) dung trong string
// `sasas`
let m1 = 100;
let q = m1 / 0;
console.log(q, typeof q);

let myName = '';
// '' : false : 0
// true : 1
if(myName === false){
  console.log('Yes');
} else {
  console.log('No');
}
// let a1 = '1000';
// let a2 = '100';
// console.log( a1 > a2);
let u = 9;
let v = 10;
let t = (++u) - (++v) + (u--) + (--v) - (--u);
//  t =   10  -   11  +   10 +    10  - 8
console.log(t);
// 9
// 11

