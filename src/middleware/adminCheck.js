const data =  require("../database/fakeData");

function _getUserId(req) {
  const { id } =  req.query;
  if (id && id != undefined) {
    return data.find((user) => user.id == id);
  }
}

function _getUserName(req) {
  const { name } =  req.query;
  if (name && name != undefined) {
    return data.find((user) => user.name == name);
  }
}

const checkPermissionsForId = (req, res, next) => {
  const user = _getUserId(req);
  if (!user || !user.isAdmin) {
    return res.status(403).send('Permissão negada. Você não tem permissão para executar esta ação.');
  }

  next();
};

const checkPermissionsForName = (req, res, next) => {
  const user = _getUserName(req);
  if (!user || !user.isAdmin) {
    return res.status(403).send('Permissão negada. Você não tem permissão para executar esta ação.');
  }

  next();
};

module.exports = { checkPermissionsForId, checkPermissionsForName };