export default (state = { num: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return { num: state.num + 1 };
    case 'SUB':
      if (state.num > 0) return { num: state.num - 1 };
      return state;
    default:
      return state;
  }
};
