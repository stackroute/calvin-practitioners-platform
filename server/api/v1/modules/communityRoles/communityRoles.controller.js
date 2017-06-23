const sample = [{ domain: 'technology', role: 'Member', actions: { post: 'true', likes: 'true' }, toolid: 'quora' },
{ domain: 'Education', role: 'Admin', actions: { reply: 'true', likes: 'true' }, toolid: 'stackoverflow' },
{ domain: 'Medicine', role: 'Member', actions: { post: 'true', share: 'true' }, toolid: 'github' },
{ domain: 'Social', role: 'Secretary', actions: { add: 'true', likes: 'true' }, toolid: 'disqus' },
{ domain: 'Arts', role: 'Treasurer', actions: { post: 'true', comment: 'true' }, toolid: 'quora' }];

function retrieveAllUsers() {
  return sample;
}
module.exports = {
  retrieveAllUsers,
};
