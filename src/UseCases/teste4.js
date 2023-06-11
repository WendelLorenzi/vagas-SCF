const data =  require("../database/fakeData");

module.exports = function (req, res) {
  const id = req.query.id;
  const { name, job } = req.body;

  const user = data.find((user) => user.id == id);

  if (user) {
    user.name = name;
    user.job = job;
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
};