const toolservice = require('./toolmarketplace.service');

function addTool(tool, done) {
   // console.log('inside addtool controller');
  toolservice.AddToolinMarketplace(tool, done);
}

function getTool(toolid, done) {
  // console.log('inside get tool', toolid);
  // toolservice.getSingleTool(toolid,done);
  // toolservice.getSingleTool(toolid,done);

  toolservice.getSingleTool(toolid, done);
  // toolservice.testing(toolid,done);
}

function getAllTools(done) {
  toolservice.getAllTools(done);
}

function getToolAction(done) {
  toolservice.getToolAction(done);
}

function getToolEvent(done) {
  toolservice.getToolEvent(done);
} 
// function deleteTool(toolid) {
//   toolservice.delTool(toolid, done);
// }
module.exports = {
  addTool,
  getTool,
  getAllTools,
  getToolAction,
};

