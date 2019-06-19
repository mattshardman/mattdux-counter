export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUBTRACT':
      return state + 2;
    default:
      return state;
  }
};
