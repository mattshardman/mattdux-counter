import React, { useEffect, useContext, useState } from 'react';
import { Context } from '.';

const connect = (mapStateToProps, actions) => (Component) => {
  function Connect(props) {
    const mattdux = useContext(Context);
    const [state, setState] = useState();
    const [actionFunctions, setActionFunctions] = useState();

    useEffect(() => {
      setState(mattdux.store);

      const actionsArr = Object.entries(actions);
      const funcs = actionsArr.reduce((acc, [actionName, actionFunc]) => {
        acc[actionName] = (input) => {
          const payload = actionFunc(input);
          const newState = mattdux.callReducers(payload);
          setState(newState);
        };
        return acc;
      }, {});

      setActionFunctions(funcs);
    }, []);

    return (
      <Component {...props} {...actionFunctions} {...state} />
    );
  }

  return Connect;
};

export default connect;
