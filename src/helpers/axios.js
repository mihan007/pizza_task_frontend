import axios from 'axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();
const instance = axios.create({
// .. where we make our configurations
  baseURL: env.REACT_APP_PIZZA_BACKEND_ENPOINT
});
export default instance;
