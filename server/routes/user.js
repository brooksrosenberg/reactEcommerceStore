const router = require('express').Router();
const User = require('../models/User');
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require('../utils/token-verification');

router.put('/:id', verifyTokenAndAuth, async (req, res) =>{
    if(req.body.password) {
        req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedUser);
    } catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req,res)=> {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted...')
    } catch(err) {
        res.status(500).json(err)
    }
})

//Get user by id
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others); 
    } catch {
        res.status(500).json(err)
    }
})

//Get All Users
router.get('/find', verifyTokenAndAdmin, async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users); 
    } catch {
        res.status(500).json(err)
    }
})

module.exports = router