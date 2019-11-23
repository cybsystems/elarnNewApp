import React from 'react';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import StartPoint from './navigation/StartPoint';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StartPoint />
      </Provider>
    </>
  );
};
export default App;
