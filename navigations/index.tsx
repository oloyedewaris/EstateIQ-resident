import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthContainer from './AuthContainer';
import HomeContainer from './HomeContainer';
import { GlobalContext } from '../context/Provider';
import { Image, StatusBar, View } from 'react-native';
import { initializeApp } from '../context/actions/auth';
import { navigationRef } from './RootNavigation';

const NavContainer = () => {
  const { authState, authDispatch } = useContext<any>(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeApp()(authDispatch)
  }, [])

  useEffect(() => {
    if (authState.appLoaded) {
      setLoading(false)
    }
  }, [authState.appLoaded])

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
      primary: '#1037B5',
      text: '#3A3A3A',
    }
  }


  return (
    <>
      {loading ? (
        <View style={{ backgroundColor: '#1037B5', width: '100%', height: '100%' }}>
          <Image alt='logo' style={{ height: '100%', width: '100%' }} source={require('../assets/splash.png')} resizeMode='stretch' />
        </View>
      ) : (
        <NavigationContainer theme={MyTheme} ref={navigationRef}>
          <StatusBar
            backgroundColor='#fff'
            barStyle={'dark-content'}
            animated
          />
          {authState?.isAuthenticated ? <HomeContainer /> : <AuthContainer />}
        </NavigationContainer>
      )}
    </>
  )
}

export default NavContainer