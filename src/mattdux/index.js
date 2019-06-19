class Mattdux {
  constructor() {
    this.reducers = {};
    this.actions = [];
    this.store = {};
  }

  createStore = (reducers) => {
    const reducerArr = Object.entries(reducers);

    reducerArr.forEach(([reducerName, reducer]) => {
      this.reducers = { ...this.reducers, [reducerName]: reducer };

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
