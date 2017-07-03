

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
       avatar: 'abcdefghi.jpg',
       createdby: 'prakhar',
       createdon: '2017-06-23T13:38:40.061Z',
       description: 'this is the second community',
       name: 'Digital by wipro',
       owner:' prakhar',
       purpose: 'medical',
       roles: null,
       status: 'Active',
       tags: [
           'first',
          'second'
       ],
       template: 'surgeon',
       updatedby: 'prakhar',
       updatedon: '2017-06-23T13:38:40.061Z',
       visibility: null,
       members: '9',
       requests: '6',
       tools: '2',
   },
   {
       domain: 'smallu',
       avatar: '/abcdefghi.jpg',
       createdby: 'wdvsb',
       createdon: '2017-06-23T13:46:19.399Z',
       description: 'this is the second community',
       name: 'Digital by sdbsbdsb',
       owner:'wdvsb',
       purpose: 'medical',
       roles: null,
       status: 'Active',
       tags: [
           'first',
           'second'
       ],
       template: 'surgeon',
       updatedby: 'wdvsb',
       updatedon: '2017-06-23T13:46:19.399Z',
       visibility: null,
       members: '9',
       requests: '6',
       tools: '2',
   },
];

// function GetCommunity(done) {
//   // console.log('inside get community');
//   return done(null, content);
// }


 function GetSpecificCommunity(domain , done){

  return content.forEach( (data) => {
    if(data.domain === domain){
      return done(null, data);
    }
   })    
 }

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
module.exports = {
  // GetCommunity,
  GetSpecificCommunity,
};

