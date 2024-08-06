import {API_KEY} from '@env';
import apiCall from './axios_config';
import {AxiosError} from 'axios';

export interface ApiService {
  getRequestWithoutHeader(endpoint: string, params: any): Promise<any>;
}

async function getRequestWithoutHeader(
  endpoint: string,
  params: any,
): Promise<any> {
  return await new Promise((respone, reject) => {
    apiCall
      .get(endpoint + API_KEY)
      .then(jsonResponse => {
        if (jsonResponse.data.status == 'ok') {
          respone(jsonResponse.data);
        } else {
          reject(jsonResponse.statusText);
        }
      })
      .catch((err: AxiosError) => {
        if (err.response) console.log(JSON.stringify(err.response?.data));
        reject(err.message);
      });
  });
}

const api_service: ApiService = {
  getRequestWithoutHeader,
};
export default api_service;
