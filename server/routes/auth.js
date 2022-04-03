const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.get('/test', (req, res) => {
    res.send('Good test of the auth route')
})

//REGISTRATION -- ANYBODY can register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    try {
        const savedUser = await newUser.save()
        console.log(savedUser);
        res.status(201).json(`new user information sent in request ${savedUser}`)
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN -- ANYBODY can login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json(`No User with username: ${req.body.username}`);

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (userPassword !== req.body.password) {
            res.status(401).json('Incorrect Password');
            return
        }
            

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        },
            process.env.JWT_SEC,
            { expiresIn: '3d' }
        );

        const { password, ...others } = user._doc
        // console.log(`user: ${user}`)
        // console.log(`user._doc: ${user._doc}`)
        // console.log(`accessToken: ${accessToken}`)

        // console.log('prefunction')
        
        // function login(idToken) {
        //     console.log(`idtoken ${idToken}`)
        //     console.log(typeof(idToken))
        //     const token = {
        //         id_token: idToken
        //     }
        //     console.log(typeof(token))
        //     localStorage.setItem(token);
        //     console.log('here')
        //   }
          
        // login(accessToken);
        
        // console.log('postfunction')
        // localStorage.set('token', accessToken);

        res.status(200).json({...others, accessToken})

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router