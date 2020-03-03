export default {
  add(state, payload) {
    state.items.push(payload);
    return state;
  }
}