

const content = [
  {
    domain: 'illuminati',
    avatar: '/abcdefghi.jpg',
    createdby: 'prakhar',
    createdon: '2017-06-22T03:32:11.413Z',
    description: 'this is the second community',
    name: 'Digital by wipro',
    owner: 'prakhar',
    purpose: 'medical',
    roles: ['Admin', ' moderator'],
    tags: [
      'first',
      'second',
    ],
    status: 'Active',
    template: 'surgeon',
    updatedby: 'prakhar',
    updatedon: '2017-06-22T03:32:11.413Z',
    visibility: 'Public',
  },
];

function GetCommunity(done) {
  // console.log('inside get community');
  return done(null, content);
}
module.exports = {
  GetCommunity,
};
