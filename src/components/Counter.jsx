import React from 'react';
import styled from 'styled-components';
import { connect } from '../mattdux-react';

import { add, sub } from '../actions';

const Container = styled.section`
  box-sizing: border-box;
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #dadce0;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const Screen = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dadce0;
  border-radius: 4px;
  background: rgb(232, 240, 254);
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    width: 80px;
    height: 30px;
    background: #1a73e8;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

function Counter(props) {
  const { add, sub } = props;
  console.log(props);
  return (
    <Container>
      <Screen><h1>counter!!</h1></Screen>
      <Buttons>
        <button type="button" onClick={add}>+</button>
        <button type="button" onClick={sub}>-</button>
      </Buttons>
    </Container>
  );
}

export default connect(null, { add, sub })(Counter);
