//  function retrieveAllUsers(request, response) {
//  response.send(JSON.parse(data));
//  }

//  function createNewUser(request,response){
//  db.push(request.body);
//  fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
//  if (err) throw err;
//  response.send('Added to json');
//  });
//  }
//  function deleteUser(request,response){
  //  db.forEach((data, index) => {
//  if (data.id == request.params.id) {
//  db.splice(index, 1);
//  }
//  });
//  fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
//  if (err) throw err;
//  fs.readFile('db.json','utf-8',(err,data)=>{
//  if (err) throw err;
//  response.send(JSON.parse(data));
//  });
//  });
//  }
//  function updateActions(request,response){
  //  db.forEach((data, index) => {
//  if (data.id == request.params.id) {
//  db.splice(index, 1,request.body);
//  }
//  });
//  fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
//  if (err) throw err;
//  fs.readFile('db.json','utf-8',(err,data)=>{
//  if (err) throw err;
//  response.send(JSON.parse(data));
//  });
//  });
//  }
