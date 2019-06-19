class Mattdux {
  constructor() {
    this.reducers = {};
    this.actions = [];
    this.store = {};
  }
}

export function createStore() {
  const mattdux = new Mattdux();
  return mattdux;
}
