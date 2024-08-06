import {BASE_URL,API_KEY} from '@env';
import axios from 'axios';
const apiCall = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default apiCall;


