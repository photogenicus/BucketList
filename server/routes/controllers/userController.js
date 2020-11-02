// connect to database models
const models = require("../../../db/models");

async function createAct(req, res, next) {
  try {
    const activity = await models.User.create({
      bucket_list: req.body.bucket_list,
      bucket_desc: req.body.bucket_desc,
    });
    if (activity) {
      console.log(activity);
      res.locals.activity = activity;
      res.locals.redirect = true;
      return next();
    }
  } catch (err) {
    return next(err);
  }
  return null;
}
// create
async function create(req, res, next) {
  try {
    const user = await models.User.create({
      username: req.body.username,
      password: req.body.password,
      bucket_list: req.body.bucket_list,
    });
    if (user) {
      console.log(user);
      res.locals.user = user;
      res.locals.redirect = true;
      return next();
    }
  } catch (err) {
    return next(err);
  }
  return null;
}

async function validate(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await models.User.findOne({ where: { username } });
    console.log(user);
    if (!user) {
      res.redirect("/login");
    } else if (!(await user.validPassword(password))) {
      console.log("Fail");
    } else {
      console.log("Success");
      res.locals.redirect = true;
      // res.redirect("/user");
    }
  } catch (err) {
    return next(err);
  }
  return null;
}

module.exports = {
  create,
  validate,
  createAct,
};
