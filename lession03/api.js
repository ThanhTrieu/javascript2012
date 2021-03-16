const fetch = require('node-fetch');
const url = `https://api.covid19api.com/summary`;

module.exports.getDataApi = () => {
  const data = fetch(url);
  return data;
  // return ve 1 promise
} 