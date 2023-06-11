function _getUser(req) {
  const { name, id } =  req.query;
  let user;
  if (id && id != undefined) {
    user = data.find((user) => user.id == id);
  } else if (name != undefined) {
    user = data.find((user) => user.name == name);
  }
  return user;
}

const checkPermissions = (req, res, next) => {
  const user = _getUser(req);
  if (!user || !user.isAdmin) {
    return res.status(403).send('Permissão negada. Você não tem permissão para executar esta ação.');
  }

  next();
};

module.exports = checkPermissions;