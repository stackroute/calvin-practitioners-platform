const expect = require('chai').expect;
const communitytoolService = require('./communitytools.service');

// Set of test scenarios or test cases around a specific story
describe('Tool integration workflow services ', function() {

	// Test case
	it('Call on integrating tool with community, check the flows ', function(testDone) {
		let domainName = "wipro.digital";
		let toolId = "discourse";
		let username = "nitin.joshi";

		// this.timeout(3000);

		communitytoolService
		.integrateNewTool({domainName, toolId, username}, function(err, results){
				// expect(err).to.be.undefined;
				expect(results).to.not.be.undefined;

				// console.log("Test Result of tool integration ", results);

				testDone();
		});
	})
})
