import React, { useContext } from 'react';
import { Context } from '.';

const connect = (mapStateToProps, actions) => (Component) => {
  function Connect(props) {
    const mattdux = useContext(Context);
    console.log(actions);
    return (
      <Component {...props} />
    );
  }

  return Connect;
};

export default connect;
