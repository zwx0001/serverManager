const initState = {
  step1: {},
  step2: {},
  current: 0
};
export default {
  namespace: "submitserver",
  state: initState,
  reducers: {
    step1(state = { ...initState }, action) {
      state.step1 = { ...action.payload };
      return state;
    },
    step2(state = { ...initState }, action) {
      state.step2 = { ...action.payload };
      return state;
    }
  }
};
