import React, { useEffect, useContext, useState } from 'react';
import { Context } from '.';

const connect = (mapStateToProps, actions) => (Component) => {
  function Connect(props) {
    const mattdux = useContext(Context);
    const [state, setState] = useState();
    const [actionFunctions, setActionFunctions] = useState();

    const actionsArr = Object.entries(actions);

    useEffect(() => {
      if (mapStateToProps) {
        const stateSlice = mapStateToProps(mattdux.store);
        setState(stateSlice);
      } else {
        setState(mattdux.store);
      }

      const funcs = actionsArr.reduce((acc, [actionName, actionFunc]) => {
        acc[actionName] = (input) => {
          const action = actionFunc(input);
          const newState = mattdux.callReducers(action);
          if (mapStateToProps) {
            const stateSlice = mapStateToProps(newState);
            setState(stateSlice);
          } else {
            setState(mattdux.store);
          }
        };
        return acc;
      }, {});

      return setActionFunctions(funcs);
    }, []);

    if (!state) return null;

    return (
      <Component {...props} {...actionFunctions} {...state} />
    );
  }

  return Connect;
};

export default connect;
