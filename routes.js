const { Router, request, response } = require("express");

const routes = Router();

const teste1 = require("./Testes/teste1");
const teste2 = require("./Testes/teste2");
const teste3 = require("./Testes/teste3");
const teste4 = require("./Testes/teste4");
const teste5 = require("./Testes/teste5");
const checkPermissions = require("./middleware/adminCheck");

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
  routes.put("/users", checkPermissions, teste4);
  routes.get("/users/access", checkPermissions, teste5);
  

  module.exports = routes;