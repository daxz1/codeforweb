export default class PubSub {
  constructor() {
    // Holds named events
    this.events = {};
  }

  /**
   *
   * @param event
   * @param callback
   * @returns {Promise<boolean> | void | any | number}
   */
  subscribe(event, callback) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }
    return self.events[event].push(callback);
  }

  /**
   *
   * @param event
   * @param data
   * @returns {*[]|*}
   */
  publish(event, data) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      return [];
    }
    return self.events[event].map(callback => callback(data));
  }
}