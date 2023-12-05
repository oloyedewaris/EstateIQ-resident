import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_USER, INITIALIZE_APP, LOGOUT_USER, AUTHENTICATE_USER, ACTIVE, SET_ESTATE } from './types';

export const loginUser = data => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: data
  })
}

export const authenticateUser = data => dispatch => {
  dispatch({
    type: AUTHENTICATE_USER,
    payload: data
  })
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_USER })
}

export const initializeApp = () => async (dispatch) => {
  let app = await AsyncStorage.getItem('app');
  app = JSON.parse(app)
  return dispatch({
    type: INITIALIZE_APP,
    payload: app
  })
}

export const setEstate = (data) => async (dispatch) => {
  await AsyncStorage.setItem('estateId', data?.estate?.estate_id)
  return dispatch({
    type: SET_ESTATE,
    payload: data
  })
}
