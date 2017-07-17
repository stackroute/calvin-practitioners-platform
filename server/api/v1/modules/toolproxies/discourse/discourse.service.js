const registerGroup = require('./newgroup');
const registerWebhook = require('./registerWebhook');

function generateGroup ({domainName, toolId, username}, done){
    //register Group for the community
    
    const postDetails = {"name": domainName };
    console.log('domain', domainName)
    registerGroup.createGroup(postDetails, (err, res)=>{
        if (err) {
            return done(err);
        }
        console.log("Group is created with - ",domainName ," and res",res.body)
        done(null, res.body);
    }); 
}

function generateWebhook ({domainName, toolId, username}, res,  done){
    console.log("inside webhook");
    // register webhook for the community
     postDetails =  {
            "payload_url": "http://dummy.com",
            "secret": "secure_taken_id",
            "wildcard_web_hook": true,
            "web_hook_event_type_ids": [ ],
            "group_ids": [43]
        }

	registerWebhook.generateWebhook(postDetails, (err, result)=>{
        if (err) {
            return done(err);
        }
        done(null, result);
    });
}


module.exports = {
    generateGroup,
    generateWebhook
}