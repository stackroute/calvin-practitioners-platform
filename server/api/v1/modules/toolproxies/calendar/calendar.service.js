
const request = require('superagent');

function registerForPushNotification({token,username},bearerToken,done){
    const btoken='Bearer '.concat(bearerToken); 
    //  ya29.GluMBMkeVO045z0HXNlM4vOgb63W-dzshTANCpYnpm2mlVjjkVvZahKksdW3CoDzvWKh1tjLx0mSsLPlYW3_cDsIpfXT07TATcBgWl1hBM7XGIcs_lcoCI6aspWR';
    
    const url=`https://www.googleapis.com/calendar/v3/calendars/${username}/events/watch`;   
    const body =
    {
        "id": "01234567-89ab-cdef-0123456789abbb",
        "type": "web_hook",
        "address": `https://calvin-pages.stackroute.in/webhook/tools/${token}`
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