const sample = [{ domain: 'technology', role: 'Member', actions: ["post","share","like"], toolid: 'quora' },
{ domain: 'Education', role: 'Admin', actions: ["reply","post"], toolid: 'stackoverflow' },
{ domain: 'Medicine', role: 'Member', actions: ["add","likes"], toolid: 'github' },
{ domain: 'Social', role: 'Secretary', actions: ["post","share"], toolid: 'disqus' },
{ domain: 'Arts', role: 'Treasurer', actions: ["add","share","comment"], toolid: 'quora' }];

function retrieveAllUsers(domain) {
const a=[];
  const b=[];
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
 console.log(data[0].action,"sdfsf");
 b=sample[0].actions.push(data[0].action);
//  b=sample.push(data);
 console.log(b,"vdsv");

 return b;    
}
console.log(sample);
module.exports = {  
  retrieveAllUsers,
  update,
};
