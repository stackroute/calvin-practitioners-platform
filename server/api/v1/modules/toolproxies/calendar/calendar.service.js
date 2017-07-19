
const request = require('superagent');

// function getCalendarList(){


// }

function registerForPushNotification({token,username},done){
 const btoken='Bearer ya29.GluMBMkeVO045z0HXNlM4vOgb63W-dzshTANCpYnpm2mlVjjkVvZahKksdW3CoDzvWKh1tjLx0mSsLPlYW3_cDsIpfXT07TATcBgWl1hBM7XGIcs_lcoCI6aspWR';
 
 const url=`https://www.googleapis.com/calendar/v3/calendars/${username}/events/watch`;
   
    console.log('hi....',btoken);
   
    const body =
    {
  "id": "01234567-89ab-cdef-0123456789abbb",
  "type": "web_hook",
  "address": "https://calvin-pages.stackroute.in/"
}

 request
        .post(url)
        .send(body)
        .set('Authorization',btoken)
        .end((err, res) => {
            if (err) {
                console.log('hi got error in calendar',err);
                return done(err);
            }
  console.log('hi got  in calendar',res.body);
            return done(null, res.body);
        });

}

module.exports={
    registerForPushNotification
}