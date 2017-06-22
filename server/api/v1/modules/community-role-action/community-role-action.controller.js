const sample = [{ id: 1, role: 'Member', actions: ['add', 'post', 'reply'] },
{ id: 2, role: 'Admin', actions: ['post', 'add', 'remove', 'manage'] },
{ id: 3, role: 'Secretary', actions: ['post', 'add', 'remove', 'manage', 'reply'] }];
function retrieveAllUsers(req, res) {
  res.status(200).json(sample);
}
// function createNewUser(request, response) {
//   communityRoleService.createNewUser(request, response);
// }


// function deleteUser(request, response) {
//   communityRoleService.deleteUser(request, response);
// }

// function updateActions(request, response) {
  //   communityRoleService.updateActions(request, response);
// }
module.exports = {
  retrieveAllUsers,
  // createNewUser,
  // deleteUser,
  // updateActions
};
