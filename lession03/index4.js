const api = require('./api.js');

function showDataFromApi(){
  api.getDataApi()
      .then(data => data.json())
      .then(dt => {
        // xu cong viec tiep theo khi co data o day
        
      });
}
showDataFromApi();