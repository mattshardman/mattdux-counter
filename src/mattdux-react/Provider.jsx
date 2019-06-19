import React from 'react';
import { Context } from '.';

function Provider({ children, store }) { //eslint-disable-line
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
