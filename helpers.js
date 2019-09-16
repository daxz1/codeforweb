/* eslint-disable camelcase */
module.exports = {
  friendlyDate(a) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const day = days[a.getDay()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time_friendly = this.getTime(a);
    const time = {
      day,
      date,
      month,
      year,
      hour,
      min,
      sec,
      time_friendly,
    };
    return time;
  },
  getTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes}${ampm}`;
    return strTime;
  },
};
