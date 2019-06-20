class Mattdux {
  constructor() {
    this.reducers = [];
    this.store = {};
  }

  callReducers = (action) => {
    const newStore = this.reducers.reduce((acc, each) => {
      const result = each.reducer(this.store[each.reducerName], action);
      acc[each.reducerName] = result;
      return acc;
    }, {});

    this.store = newStore;
    return newStore;
  }

  createStore = (reducers) => {
    const reducerArr = Object.entries(reducers);

    reducerArr.forEach(([reducerName, reducer]) => {
      this.reducers.push({ reducerName, reducer });

      const initialState = reducer(undefined, { type: 'INIT' });
      this.store = { ...this.store, [reducerName]: initialState };
    });
  }
}

export function createStore(reducers) {
  const mattdux = new Mattdux();
  mattdux.createStore(reducers);
  return mattdux;
}
