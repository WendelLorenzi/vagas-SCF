const data =  require("../database/fakeData");

module.exports = function (req, res) {
  const name = req.query.name;

  const user = data.find((user) => user.name === name);

  res.send("Usuário " + name + " foi lido " + user.getCount + " vezes.");
};