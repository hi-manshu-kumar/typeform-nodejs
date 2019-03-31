const router = require('express').Router();

//models
const {User} = require('../../models/user');

const {auth} = require('../../middleware/auth');


// ============================================================
//                   USERS
// ============================================================

// @route   POST api/users/register
// @desc    Add new user
// @access  Public

router.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if(err) return res.json({
            success:false,
            err
        });
        res.status(200).json({
            success: true
        });
    })
});

// @route   POST api/users/login
// @desc    Login route for user
// @access  Public

router.post('/login', (req, res) => {
    let email = req.body.email;

    User.findOne({
        'email':email
    }, (err, user) => {
        if(!user) return res.json({
            loginSuccess : false,
            message      : "Auth fails, email not found"
        });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({
                loginSuccess: false,
                message     : 'Wrong password'
            });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);

                res.cookie('w_auth', user.token).status(200).json({
                    loginSuccess: true
                });
            });
        });
    })
});

// @route   GET api/users/logout
// @desc    Logout route for user
// @access  Private

router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        { _id: req.user._id },
        { token: '' },
        (err, doc) => {
            if(err) return res.json({success:false, err});

            return res.status(200).send({
                success:true
            })
        }
    )
});

// @route   PUT api/users/logout
// @desc    Update profile route for user
// @access  Private

router.put('/update_profile', auth, (req, res)=> {
    User.findOneAndUpdate(
        { _id: req.user._id},
        {
            "$set": req.body
        },
        { new: true },
        (err, doc)=> {
            if(err) return res.json({success:false, err});
            return res.status(200).send({
                success: true
            })
        }
    );
});

// @route   GET api/users/logout
// @desc    Check for token
// @access  Private


router.get('/auth', auth, (req, res) => {
    res.status(200).json({
        isAuth   : true,
        email    : req.user.email,
        name     : req.user.name,
        lastname : req.user.lastname
    })
});

module.exports = router;