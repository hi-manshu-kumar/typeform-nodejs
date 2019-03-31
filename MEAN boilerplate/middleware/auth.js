const {User} = require('../models/user');

let auth = (req, res, next) => {
    if(!req.cookies.w_auth){
        return res.status(300).json({
            isAuth:false,
            error: true,
            message: "No token found"
        });
    }
    let token = req.cookies.w_auth;
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({
            isAuth: false,
            error: true
        });

        req.token = token;
        req.user = user;
        next();
    });
}

module.exports = { auth }