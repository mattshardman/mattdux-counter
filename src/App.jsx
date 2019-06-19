import React from 'react';
import styled from 'styled-components';

import Counter from './components/Counter';

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
    <Main>
      <Counter />
    </Main>
  );
}

export default App;
