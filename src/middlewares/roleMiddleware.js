const { Unauthorized } = require('../utility/errors');
const { SUPER_ADMIN,ADMIN,DOCTOR,PATIENTS} = require('../config/constant');

module.exports = (roles) => (req, res, next) => {
  if (!roles.includes(req.role) && !roles.includes(SUPER_ADMIN))
    throw new Unauthorized('You dont have permissions for this action');
  next();
};
