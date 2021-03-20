// tiep class js
class Person {
  name = 'Ty';
  age = 20;

  constructor(email = 'ty@gmail.com', address = 'Ha Noi') {
    // magic method
    console.log('constructor cua class Person da chay');
    console.log(email , address);
  }

  getName() {
    return this.name + ' of class person';
  }
} 
class Doctor extends Person {
  constructor(email = 'hoi@gmail.com', address = 'Hai Duong'){
    super();
    console.log(email , address);
  }

  getName() {
    return this.name + ' of class Doctor';
  }

  showName() {
    // class person
    return super.getName();
  }

}
let doctor = new Doctor();
//console.log(doctor.getName());
console.log(doctor.showName());
