export default {
  add(context, payload) {
    context.commit('add', payload);
  },
  remove(context, payload) {
    context.commit('remove', payload);
  }
}