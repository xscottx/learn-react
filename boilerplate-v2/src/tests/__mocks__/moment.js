// need to use a different style of import -> require
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
}