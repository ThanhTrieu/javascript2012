/// mang trong js
// kieu du lieu: object
let fruits = new Array('cam','mit',1,2,4);
let fruitsv2 = ['cam','mit',1,2,4];
let fruitsv3 = [[1,2,3], 'a', 'b', 'c', [1,20]];
let fruitsv4 = new Array(Array(1,2,3), 'a', 'b', 'c', Array(1,2));
// truy cap vao cac phan tu trong mang
// nameArray[index];
console.log(fruits[1]);
console.log(fruitsv3[4][1]);
// kiem tra so luong phan tu trong mang
let count = fruitsv3.length;
console.log(count);
// duyet mang
let numbers = [1,2,3,4,5,6,7,8,9];
// 1- for
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
// 2-forEach
numbers.forEach((item, index, array) => {
  console.log(`val: ${item} - key : ${index}`);
})
// 3 - for ...of
for(let j of numbers) {
  console.log(j);
}

let numbers1 = [10,29,3,42,51,6,7,78,99];
// viet ham tim max - min trong mang
let timSoLonNhat = (arr) => {
  let max = arr[0];
  for(let i = 0; i<arr.length;i++) {
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}
console.log(timSoLonNhat(numbers1));

let timBCNN = (arr,a,b) => {

}