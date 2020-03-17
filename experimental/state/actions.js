export default {
  /**
   *
   * @param context
   * @param payload
   */
  add(context, payload) {
    context.commit('add', payload);
  },
  /**
   *
   * @param context
   * @param payload
   */
  remove(context, payload) {
    context.commit('remove', payload);
  }
}