// generator function

function* idMaker() {
  let id = 1;
  while(id < 5) {
    yield id++;
  }
}
// ban chat ham nay luon tra ve 1 generator object
let id = idMaker();
console.log(id);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
//console.log(id.next().value);
console.log(id.next());