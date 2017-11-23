const expect = require('chai').expect;
const discourseController = require('./discourse.controller');

// Set of test scenarios
describe('Added Discouse tool in the community', () => {
    // Test Cases for add New group in discourse tool
    it('New Group created in the community', (testDone) => {
        let domainName = "wave07";
        postDetails = {
            "name": domainName
        }

        discourseController.initializeOnIntegration(postDetails, (err, res)=>{
            //console.log("Inside test case", res);
            expect(err).to.equal(null);
            expect(res).to.not.be.undefined;
            testDone();
        });
    });

    // Test Cases for add New Web hook for above created community
    it('New Group created in the community', (testDone) => {

        postDetails =  {
            "payload_url": "http://dummy.com",
            "secret": "secure_taken_id",
            "wildcard_web_hook": true,
            "web_hook_event_type_ids": [ ],
            "group_ids": [43]
        }

        discourseController.intializeWebhook(postDetails, (err, res)=>{
            // console.log(err,"Inside test case", res);
            expect(err).to.equal(null);
            expect(res).to.not.be.undefined;
            testDone();
        });
    
    })
});
