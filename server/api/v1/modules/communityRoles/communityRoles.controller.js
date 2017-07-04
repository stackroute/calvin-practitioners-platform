const sample = [{ domain: 'technology', role: 'Member', actions: { post: 'true', likes: 'true' }, toolid: 'quora' },
{ domain: 'technology', role: 'Admin', actions: { reply: 'true', likes: 'true' }, toolid: 'stackoverflow' },
{ domain: 'Medicine', role: 'Member', actions: { post: 'true', share: 'true' }, toolid: 'github' },
{ domain: 'Social', role: 'Secretary', actions: { add: 'true', likes: 'true' }, toolid: 'disqus' },
{ domain: 'Arts', role: 'Treasurer', actions: { post: 'true', comment: 'true' }, toolid: 'quora' }];

function retrieveAllUsers(domain) {
const a=[];
sample.forEach(function(val)
{
if(val.domain===domain){
  
  console.log(val.domain);
  console.log(domain);
  console.log(val);
  return a.push(val);
}
});
return a;
}


function update(data)
{
 
 return sample.push(data);  
  
}
module.exports = {
  retrieveAllUsers,
  update,
};
