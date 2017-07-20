
const request = require('superagent');

// function getCalendarList(){


// }

function registerForPushNotification({token,username},done){

    const url=`https://www.googleapis.com/calendar/v3/calendars/${username}/events/watch`;
 request
        .post(url)
        .send(body)
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            return done(null, res.body);
        });

}

module.exports{

    getCalendarList,
    registerForPushNotification
}