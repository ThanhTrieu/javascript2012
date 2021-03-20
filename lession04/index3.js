// class js
class Student {
  // khai bao thuoc tinh
  name = 'Teo';
  age = 20;
  email = 'teo@gmail.com';

  // khai bao phuong thuc
  diHoc(time = '7am') {
    return  `Toi di hoc luc ${time}`;
  }

  tanHoc(time = '12h10') {
    return  `Toi tan hoc luc ${time}`;
  }

  getName() {
    console.log(this);
    return this.name;
  }

  getAge = () => {
    console.log(this);
    return this.age;
  }
}
// khoi tao object thuoc class
let stIT = new Student;
let stElectric = new Student;
// truy cap vao thuoc tinh hay phuong thuc ben trong class
let nameIT = stIT.name;
let nameEl = stElectric.name;
console.log(nameIT, nameEl);

console.log(stIT.diHoc('12h30'));

let age = stElectric.getAge();
console.log(age);

console.log(stIT.getName());