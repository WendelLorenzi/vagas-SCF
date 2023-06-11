const data =  require("../database/fakeData");
const updateGetCount = require('../utils/updateGetCount');

const getUser = ( req, res ) => {
    
    const name = req.query.name;
    const user = data.find(user => user.name === name);
    if (user && user !== undefined) {
        updateGetCount(user, (user.getCount + 1));
        res.status(200).json({ id: user.id , name: user.name, job: user.job }).send();
    } else {
        res.status(404).send(undefined);
    }
};

const getUsers = ( req, res ) => {

    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};