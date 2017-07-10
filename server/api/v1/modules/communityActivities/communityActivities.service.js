const async = require('async');
const config = require('../common/config');
const cassandra = require('cassandra-driver');
const ACTIVITY_TABLE = 'activity';
const MESSAGE_TABLE = 'message';
const ACTION_TABLE = 'action';
const EMBEDS_TABLE = 'embeds';
const client = new cassandra.Client({
  contactPoints: [config.dbconfig.dburl],
  keyspace: 'activitydata',
});

function getActivity(data) {
  const query = `SELECT * FROM ${ACTIVITY_TABLE} where activityeventid = '5c84fb90-12c4-11d1-840e-7b25c5ee775a'`;

  return client.execute(query, (err, result) => {
    if (err) {
      return data(err);
    } return data(null, result.rows);
  });
}
function getActivityMessage(data) {
  const query = `SELECT * FROM ${MESSAGE_TABLE} where activityeventid = '6c84fb90-12c4-11e1-840d-7b25c5ee775a'`;

  return client.execute(query, (err, result) => {
    if (err) {
      return data(err);
    } return data(null, result.rows);
  });
}

function getActivityAction(data) {
  const query = `SELECT * FROM ${ACTION_TABLE} where activityeventid = '6c84fb90-12c4-11e1-840d-7b25c5ee775a'`;

  return client.execute(query, (err, result) => {
    if (err) {
      return data(err);
    } return data(null, result.rows);
  });
}

function getActivityEmbeds(data) {
  const query = `SELECT * FROM ${EMBEDS_TABLE} where activityeventid = '6c84fb90-12c4-11e1-840d-7b25c5ee775a'`;

  return client.execute(query, (err, result) => {
    if (err) {
      return data(err);
    } return data(null, result.rows);
  });
}

function getActivityData() {
  console.log('Program is starting now..!');

  async.parallel([
    getActivity,
    getActivityMessage,
    getActivityAction,
    getActivityEmbeds,
  ], (err, results) => {
    if (err) {
      return console.log('Error ', err);
    }
    console.log('Results', JSON.stringify(results));
  });
}

module.exports = {
  getActivity,
  getActivityMessage,
  getActivityAction,
  getActivityEmbeds,
  getActivityData,
};

