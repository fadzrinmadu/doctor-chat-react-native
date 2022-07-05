import React from 'react';
import { useSelector, Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';

import Router from './router';
import store from './stores';
import { Loading } from './components';
import { LogBox } from 'react-native';

function MainApp() {
  const stateGlobal: any = useSelector((state) => state);
  LogBox.ignoreAllLogs();

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading.value && <Loading />}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
