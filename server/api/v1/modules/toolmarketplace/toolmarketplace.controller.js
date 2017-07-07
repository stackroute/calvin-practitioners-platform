const toolservice = require('./toolmarketplace.service');


 function addTool(tool, done) {
   console.log('inside addtool controller');
   toolservice.AddToolinMarketplace(tool, done);
 }


function getAllTools(done) {
  toolservice.getAllTools(done);
}

// function deleteTool(toolid) {
//   toolservice.delTool(toolid, done);
// }

 module.exports = {
   addTool,
   getAllTools
 };