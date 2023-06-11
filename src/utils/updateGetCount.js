const data =  require("../database/fakeData");

const updateGetCount = (user, newValue) => {
    if (user) {
      user.getCount = newValue;
    }
  }

module.exports = updateGetCount;
  