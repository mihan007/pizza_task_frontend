// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
  //baseURL: 'http://pizza-api.lcl/api/v1'
});
export default instance;
