// const toolservice = require('./toolmarketplace.service');



function addTool(tool, done) {
    console.log('inside addtool controller');
  toolservice.AddToolinMarketplace(tool, done);
}


// function getTool() {
//   toolservice.getTool(done);
// }

// function deleteTool(toolid) {
//   toolservice.delTool(toolid, done);
// }

module.exports = {

  addTool:addTool
};
