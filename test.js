function diHoc(cb) {
  setTimeout(function(){
    console.log('Di hoc');
    cb();
  },1000)
}

function diNgu() {
  console.log('di ngu');
}

function chkCall() {
  diNgu();
}
diHoc(chkCall);
//diNgu();