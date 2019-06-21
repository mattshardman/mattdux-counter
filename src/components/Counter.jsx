import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { connect } from '../mattdux-react';
import { connect } from 'react-redux';

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

  h1 {
    font-size: 60px;
  }
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
  const { add: adder, sub: subber, num } = props;

  return (
    <Container>
      <Screen><h1>{num}</h1></Screen>
      <Buttons>
        <button type="button" onClick={adder}>+</button>
        <button type="button" onClick={subber}>-</button>
      </Buttons>
    </Container>
  );
}

Counter.propTypes = {
  add: PropTypes.func.isRequired,
  sub: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
};

const mapStateToProps = state => state.counter;

export default connect(mapStateToProps, { add, sub })(Counter);
