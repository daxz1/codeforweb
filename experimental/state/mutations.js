export default {
  add(state, payload) {
    state.items.push(payload);
    return state;
  },
  remove(state) {
    state.items.pop();
    return state;
  }
}