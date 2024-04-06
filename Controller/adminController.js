
const admin = require('../Model/adminModel');


// admin login
exports.adminLogin = async(req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    try {
        const existingUser = await admin.findOne({ email, password })
        if (existingUser) {
            res.status(200).json(existingUser);
        }
        else {
            res.status(401).json('Invalid Email or Password');
        }

    } catch (error) {
        res.status(401).json(error);
    }

}