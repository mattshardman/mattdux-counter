import React from 'react';
import styled from 'styled-components';

import { createStore } from './mattdux';

import { Provider } from './mattdux-react';

import Counter from './components/Counter';

const store = createStore();

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
