
const request = require('superagent');
const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

const content = [
  {
    domain: 'ARB1',
    avatar: '/assets/images/try1.jpg',
    createdby: 'prakhar',
    createdon: '2017-06-22T03:32:11.413Z',
    description: 'this is the second community',
    name: 'Digital by wipro',
    owner: 'prakhar',
    purpose: 'medical',
    roles: ['Admin'],
    tags: [
      'first',
      'second',
      'Third',
      'Fourth',
      'Fifth',
      'Sixth',
      'Seventh',
    ],
    status: 'Active',
    template: 'surgeon',
    updatedby: 'prakhar',
    updatedon: '2017-06-22T03:32:11.413Z',
    visibility: 'Public',
    invitations: '5',
    members: '9',
    requests: '6',
    tools: '2',
  },
 {
       domain: 'smarty',
       avatar: '/assets/images/try1.jpg',
       createdby: 'prakhar',
       createdon: '2017-06-23T13:38:40.061Z',
       description: 'this is the second community',
       name: 'Digital by wipro',
       owner:' prakhar',
       purpose: 'medical',
       roles: ['Admin'],
       status: 'Active',
       tags: [
           'first',
          'second'
       ],
       template: 'surgeon',
       updatedby: 'prakhar',
       updatedon: '2017-06-23T13:38:40.061Z',
       visibility: 'Public',
       members: '9',
       requests: '6',
       tools: '2',
   },
   {
       domain: 'smallu',
       avatar: '/assets/images/try1.jpg',
       createdby: 'wdvsb',
       createdon: '2017-06-23T13:46:19.399Z',
       description: 'this is the second community',
       name: 'Digital by sdbsbdsb',
       owner:'wdvsb',
       purpose: 'medical',
       roles: ['moderator'],
       status: 'Active',
       tags: [
           'first',
           'second'
       ],
       template: 'surgeon',
       updatedby: 'wdvsb',
       updatedon: '2017-06-23T13:46:19.399Z',
       visibility: 'Public',
       members: '9',
       requests: '6',
       tools: '2',
   },
];

// function GetCommunity(done) {
//   // console.log('inside get community');
//   return done(null, content);
// }


//  function getSpecificCommunity(domain , done){

//   return content.forEach( (data) => {
//     if(data.domain === domain){
//       return done(null, data);
//     }
//    })    
//  }

// router.route('/:domain')
// .patch((req, res) => {
//     const newCommunity=req.body;
//     console.log(newCommunity);
//     db.forEach((userForm, index) => {
//     console.log("inside loop of put");
//     console.log(req.params.id);
//     console.log(movie.id);
//     console.log(movie.id==req.params.id);
//     if(movie.id == req.params.id ) {

//           console.log("match found");
//           db.splice(index, 1,newMovie);
//     }
//     });






function getSpecificCommunity(domain, done) {
   // Call communities service to get all the templates
 const url = `${BASE_COMMUNITY_SERVICE_URL}/communities/${domain}`;
 request
 .get(url)
 .query({ domain  } ) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}




module.exports = {
  // GetCommunity,
  getSpecificCommunity,
};

