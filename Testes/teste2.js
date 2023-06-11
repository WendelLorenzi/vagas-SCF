const data =  require("../fakeData");

let nextId = data.length + 1;

module.exports = function(req, res){
  
    const { name, job } = req.body;
    
    const newUser = {
        id: nextId,
        name: name,
        job: job,
        isAdmin: false,
      };

    data.push(newUser);
    
    res.send(newUser);

};