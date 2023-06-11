const data =  require("../database/fakeData");

let nextId = data.length + 1;

module.exports = function(req, res){
  
    const { name, job } = req.body;
    
    const newUser = {
        id: nextId,
        name: name,
        job: job,
        isAdmin: false,
        getCount: 0,
      };

    data.push(newUser);
    
    res.send(newUser);

};