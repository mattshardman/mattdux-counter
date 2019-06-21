import React from 'react';
import styled from 'styled-components';

// import { createStore } from './mattdux';
import { createStore } from 'redux';
// import { Provider } from './mattdux-react';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import Counter from './components/Counter';

const store = createStore(rootReducer);

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

function App() {
  return (
    <Provider store={store}>
      <Main>
        <Counter />
      </Main>
    </Provider>
  );
}

export default App;
