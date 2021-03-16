// callback
function diHocBai(cb) {
  setTimeout(() => {
    console.log('di hoc bai');
    cb(); // goi ham di ngu
  }, 0);
}

function myCallback() {
  diNguThoi();
}

function diNguThoi() {
  console.log('di ngu');
}
diHocBai(myCallback);
//diNguThoi();