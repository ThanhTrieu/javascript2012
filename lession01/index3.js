// xu ly ham - function
function sumNumber(n1, n2 = 10) {
  return n1 + n2;
}
// goi ham ra su dung - thuc thi
let result = sumNumber(1,2);
console.log(result);
// viet ham kiem tra 1 so co phai so nguyen to ko?
function kiemTraSoNguyenTo(n) {
  if ( n <= 1) {
    return false;
  }
  if(n == 2) {
    return true;
  }
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i == 0){
      return false;
    }
  }
  return true;
}
let ck = kiemTraSoNguyenTo(9);
if(ck){
  console.log('OK');
} else {
  console.log('ERR');
}