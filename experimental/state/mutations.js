export default {
  /**
   *
   * @param state
   * @param payload
   * @returns {*}
   */
  add(state, payload) {
    state.items.push(payload);
    return state;
  },
  /**
   *
   * @param state
   * @returns {*}
   */
  remove(state) {
    state.items.pop();
    return state;
  }
}