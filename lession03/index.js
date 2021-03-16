// tiep tuc kien thuc ve array
// cac phuong thuc lam viec voi mang
let numbers = [1,2,3,4,5,6,7,8,9];
// them gia tri vao cuoi mang
numbers.push(100);
//console.log(numbers);

// xoa di pha tu cuoi cung cua mang va tra ve no
let lastEl = numbers.pop();
//console.log(lastEl, numbers);

// them phan vao vi tri dau tien cua mang
numbers.unshift(lastEl);
//console.log(numbers);

// xoa phan tu dau tien cua mang va tra ve no
let firstEl = numbers.shift();
//console.log(firstEl, numbers);

// tim kiem phan tu nam trong mang
let numbers2 = [1,2,3,4,5,6,7,8,9];
let pos = numbers2.indexOf(4);
//console.log(pos);

let pos2 = numbers2.lastIndexOf(4);
//console.log(pos2);

// tach mang
let newArr = numbers2.slice(1,4);
//console.log(newArr, numbers2);

//thay the phan tu trong mang
numbers2.splice(4,3,50,60,70);
//console.log(numbers2);

// chuyen mang ve chuoi
let fruits = ['tao','cam','oi','mit'];
let str = fruits.join('*');
//console.log(str);
let str2 = fruits.toString();
//console.log(str2);

// kiem tra co phai mang hay ko?
if(Array.isArray(fruits)){
  console.log('OK');
} else {
  console.log('ERR');
}

let numbers3 = [10,22,34,4,56,6,17,8,9,98];
// sap xep mang
// numbers3.sort((a,b) => b - a);
//console.log(numbers3);

// let val = numbers3.find(function(e) {
//   if(e % 3 === 0) {
//     return e;
//   }
// });
// console.log(val);
/*
let myFind = (arr, n) => {
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] % n == 0){
      return arr[i];
    }
  }
  return null;
}
console.log(myFind(numbers3, 3));
*/
let numbers4 = [10,22,34,4,56,6,17,8,9,98];
let res = numbers4.filter(e => e % 3 === 0);
//console.log(res);

function myFilter(arr, n) {
  let data = [];
  for(let i =0; i< arr.length; i++) {
    if(arr[i] % n == 0){
      data.push(arr[i]);
    }
  }
  return data;
}
//console.log(myFilter(numbers4, 3));
let cb = e => e * e ;
let kq = numbers4.map( cb );
//console.log(kq);

let t = [10,22,34,4,56,6,17,8,9,98,15,30];
// chaning
let v = t.filter( e => e % 5 === 0)
        .reduce( (ac, val) => ac + val);
//console.log(v);

/////////// OBJECT JS /////////////////////
let students = {} ; // object rong
let cats = {
  name: 'Tom',
  age: 2,
  color: [
    {color_name: 'black', opacity: 1},
    {color_name: 'white', opacity: 0.8}
  ],
  weight: 2,
  eat: function(food = 'fish') {
    return food;
  },
  sleep: function(time = '02h00') {
    return time;
  }
}
// truy cap vao thuoc tinh - phuong thuc trong object
let nameCat = cats.name; // cats['name'];
console.log(nameCat);
console.log(cats.eat());
console.log(cats.color[1].color_name);
//////////////////////////////////////
const sateData = {name: 'A', age: 2};
sateData.phone = '21324242';
console.log(sateData);

// destructing object
const {a,c} = {a: 10,c: 20};
console.log(a,c);
// destructing array
const [x,y,z] = [10,20,30];
console.log(x,y,z);

function countLength([...arr]) {
  console.log(arr.length);
  console.log(arr);
}
countLength([1,2,3,4,5,6]);

function countLengthV2(...n) {
  console.log(n);
}
countLengthV2(1,2,3,5);
let a1 = [1,2,3,999,100];
let b1 = [4];
let c1 = [...a1,...b1, 7,8,9];
console.log(c1);

let persons = [
  {
    name: 'teo',
    age: 20,
    email: 'teo@gmail.com',
    address: 'Ha Noi',
    msv: 1
  },
  {
    name: 'ty',
    age: 21,
    email: 'ty@gmail.com',
    address: 'Ha Nam',
    msv: 2
  }
];
/*
for(let i in persons) {
  console.log(i);
  console.log(persons[i]);
}
*/
let html = `
  <table width="100%" border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      ${persons.map((item,index) => {
        return (`
          <tr key=${index}>
            <td>${item.msv}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.age}</td>
            <td>${item.address}</td>
          </tr>
        `)} )}
    </tbody>
  </table>
`;
console.log(html);