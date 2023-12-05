import axios from 'axios';
import { endPoint } from './baseUrl';
import { getData } from './storage';
import { ToastLong } from './toast';

export const axiosCalls = async (path, method, data = null) => {
  const userToken = await getData('user');
  const token = await getData('token');
  const parsedUser = JSON.parse(token);
  console.warn('userData', `Bearer ${parsedUser}`);

  try {
    console.warn('path>>>>>>>ttt', `${endPoint}${path}`);
    let res = await axios({
      method: method,
      url: `${endPoint}${path}`,
      data: data,
      headers: {
        Authorization: `Bearer ${parsedUser}`,

      },
    });
    if (res) {
      return res;
    }
  } catch (err) {
    if (err?.response) {
      if (err?.response.data) {
        return { er: err?.response.data };
      }
    } else {
      if (err.message) {
        console.warn('gbasss', err.message);
        ToastLong(`${err.message}`);
      }
      ToastLong(`${err}`);
      return { er: err };
    }
  }
};

export const axiosCallsNoAuth = async (path, method, data = null) => {
  try {
    let res = await axios({
      method: method,
      url: `${endPoint}${path}`,
      data: data,

    });
    if (res) {
      return res;
    }
  } catch (err) {
    if (err?.response) {
      return { er: err?.response.data };
    } else {
      if (err.Error == `Network Error`) {
        ToastLong('Network Error')
      }

      return { er: err };
    }
  }
};
export const axiosCallsNoAuthTest = async (path, method, data = null) => {
  try {
    let res = await axios({
      method: method,
      url: `${path}`,
      data: data,
    });
    if (res) {
      return res;
    }
  } catch (err) {
    if (err?.response) {
      return { er: err?.response.data };
    } else {
      return { er: err };
    }
  }
};

const getBalance = async () => {
  let res = await axiosCalls('/api/wallet/balance', 'GET');
  if (res) {
    if (res.er) {
      console.warn('error', res.er.message);
      ToastLong(`${res.er.message}`);
    } else {
      checkPendingTransactions(res.data.availableBalance);
    }
  }
};

const checkPendingTransactions = async balance => {
  let res = await axiosCalls(
    '/api/users/transactions/0/10?status=PENDING',
    'GET',
  );
  if (res) {
    if (res.er) {
      console.warn('error', res.er.message);
      ToastLong(`${res.er.message}`);
    } else {
    }
  }
};

const getTotalAmountPending = async type => {
  let res = await axiosCalls('/api/wallet/balance', 'GET');
  if (res) {
    if (res.er) {
      console.warn('error', res.er.message);
      ToastLong(`${res.er.message}`);
    } else {
      if (type == 'withdraw') {
      }

      // console.warn('success>>oooo', res.data.availableBalance);
    }
  }
};

export const firstLetterCapitalize = async value => {
  try {
    const str = value;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
  } catch (err) {
    return err;
  }
};
