const sample = [{ domain: 'technology', role: 'Member', actions: { post: 'true', likes: 'like_self' }, toolid: 'quora' },
{ domain: 'Education', role: 'Admin', actions: { reply: 'true', likes: 'like_self' }, toolid: 'stackoverflow' },
{ domain: 'Medicine', role: 'Member', actions: { post: 'false', share: 'like_self' }, toolid: 'github' },
{ domain: 'Social', role: 'Secretary', actions: { add: 'true', likes: 'like_self' }, toolid: 'disqus' },
{ domain: 'Arts', role: 'Treasurer', actions: { post: 'false', comment: 'like_self' }, toolid: 'quora' }];

function retrieveAllUsers() {
  return sample;
}
module.exports = {
  retrieveAllUsers,
};
