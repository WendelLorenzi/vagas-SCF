const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');

const app = express();

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use(routes);

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});