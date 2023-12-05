import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_USER,
  LOGOUT_USER,
  AUTHENTICATE_USER,
  INITIALIZE_APP,
  SET_ESTATE,
} from '../actions/types';
import { getUserEstates } from '../../api/estates';

const auth = (state, action) => {
  let app;
  switch (action.type) {
    case LOGIN_USER:
      app = {
        ...state,
        accessToken: action?.payload?.access_token,
        user: action?.payload?.user
      }
      AsyncStorage.setItem('app', JSON.stringify(app))
      return app
    case AUTHENTICATE_USER:
      app = {
        ...state,
        isAuthenticated: true,
      }
      AsyncStorage.setItem('app', JSON.stringify(app))
      return app
    case LOGOUT_USER:
      app = {
        ...state,
        accessToken: null,
        isAuthenticated: false,
        user: null
      }
      AsyncStorage.setItem('app', JSON.stringify(app))
      return app
    case INITIALIZE_APP:
      app = {
        ...state,
        ...action.payload,
        appLoaded: true,
        active: false
      }
      AsyncStorage.setItem('app', JSON.stringify(app))
      return app
    case SET_ESTATE:
      app = {
        ...state,
        estateData: action.payload,
        isAuthenticated: true,
      }
      AsyncStorage.setItem('app', JSON.stringify(app))
      return app
    default:
      return state
  }
}

export default auth;