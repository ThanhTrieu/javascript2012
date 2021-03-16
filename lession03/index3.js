// Promise
let diHocBai = new Promise((resolve, reject) => {
  setTimeout(() => {
    // se co cac logic xu ly de nhan biet thanh cong hay that bai
    if(1+1 == 2){
      resolve('hoc bai xong roi')
    } else {
      reject('no tron di choi ko hoc bai');
    }
  }, 0)
});

diHocBai.then( data => {
    // data chinh la du lieu tu resolve
    console.log(data)
    // xu ly cac tien trinh khac o day (dingu)
    // khong nen goi Promise o day
  }) // nhan ket qua tu resolve tra ve
  .catch(err => console.log(err)) // nhan ket qua tu reject