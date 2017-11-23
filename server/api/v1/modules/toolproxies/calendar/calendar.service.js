const request = require('superagent');
const uuidv4 = require('uuid/v4');

function registerForPushNotification({token, domainName, toolId, username}, bearerToken, done){
    console.log("Proceeding to register the push notification for google calander ", bearerToken);
    const btoken=`Bearer ${bearerToken}`; 
    //  ya29.GluMBMkeVO045z0HXNlM4vOgb63W-dzshTANCpYnpm2mlVjjkVvZahKksdW3CoDzvWKh1tjLx0mSsLPlYW3_cDsIpfXT07TATcBgWl1hBM7XGIcs_lcoCI6aspWR';
    
    const url=`https://www.googleapis.com/calendar/v3/calendars/tools/${username}/events/watch`;   

    let id=uuidv4(); 
    console.log('new channel id for google calander is ',id);
    const body =
    {
        "id": id,
        "type": "web_hook",
        "address": `https://calvin-pages.stackroute.in/webhook/tools/${domainName}/${toolId}/${token}`
    }

    console.log("Bearer token for google calander ", btoken);
    
    request
    .post(url)
    .set('Authorization',btoken)
    .send(body)    
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