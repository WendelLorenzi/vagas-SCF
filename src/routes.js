const { Router } = require("express");

const routes = Router();

const teste1 = require("./UseCases/teste1");
const teste2 = require("./UseCases/teste2");
const teste3 = require("./UseCases/teste3");
const teste4 = require("./UseCases/teste4");
const teste5 = require("./UseCases/teste5");
const { checkPermissionsForId, checkPermissionsForName } = require("./middleware/adminCheck");

routes.get('/', function(req, res){
    res.send(`get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
    `);
  });
  
  routes.get("/user", teste1.getUser);
  routes.get("/users", teste1.getUsers);
  routes.post("/users", teste2);
  routes.delete("/users", teste3);
  routes.put("/users", checkPermissionsForId, teste4);
  routes.get("/users/access", checkPermissionsForName, teste5);
  

  module.exports = routes;