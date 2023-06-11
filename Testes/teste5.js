const data = require("../fakeData");

module.exports = function (req, res) {
  const name = req.query.name;

  const userReadCount = data.filter((user) => user.name === name).length;

  res.send("Usuário " + name + " foi lido " + userReadCount + " vezes.");
};