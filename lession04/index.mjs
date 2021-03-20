import apiSearch from './services/api.mjs';

const getData = async (key) => {
  const data = await apiSearch(key);
  return data;
}
const dt = getData('batman').then( data => console.log(data));
//console.log(dt);