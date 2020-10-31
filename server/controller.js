// connect to database models
const models = require("../db/models")


// create
async function create(req, res, next) {
    try{
        const user = await models.User.create({
            username: res.body.username,
            password: res.body.password,
            bucket_list: res.body.bucket_list
        })
        if (user) {
            console.log(user);
            res.locals.user = user;
            return next();
        }
    }
    catch(err) {
        return next(err);
    }
}

module.exports = create
