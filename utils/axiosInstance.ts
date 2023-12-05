import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { navigate } from '../navigations/RootNavigation';
import { ToastLong } from '../helper/toast';

const BACKEND_URL: string = 'https://api.estateiq.ng/api/v1';

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: { 'Content-Type': 'application/json', 'EstateIQ-Sk-Header': '22-wchvhshcjbdnvjb-2244-vsjdjbd' },
  timeout: 10 * 60 * 1000
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    let app: any = await AsyncStorage.getItem('app');
    app = JSON.parse(app)
    if (app?.accessToken)
      config.headers['Authorization'] = `Bearer ${app.accessToken}`

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (!error?.response)
      return Promise.reject(error);

    if (error?.response?.status === 401) {
      ToastLong('Your session has expired, login again')
      navigate('logout', { tokenExpired: true })
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;