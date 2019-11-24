import React from 'react';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import StartPoint from './navigation/StartPoint';
import FlashMessage from 'react-native-flash-message';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StartPoint />
        <FlashMessage position="top" />
      </Provider>
    </>
  );
};
export default App;
