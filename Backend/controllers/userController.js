const User = require('../models/User')
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateToken')

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Enter all the details"
            });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: true,
                message: "User Already Exist"
            })
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPass
        })

        console.log("New Created User : ", newUser)

        if (newUser) {
            generateToken(res, newUser._id);
            res.status(201).json({
                success: true,
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                message: "User Registered Successfully"
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Invalid User Data",
                user
            })
        }



    } catch (err) {
        res.status(500).json({
            success: false,
            err: err.message,
            message: "Error while registering the user",
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: "Email and Password Required"
            })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(200).json({
                success: false,
                message: "User Not Found"
            })
        }
        if (user && (await bcrypt.compare(password, user.password))) {
            generateToken(res, user._id);
            return res.status(200).json({
                success: true,
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                message: "Successfully Signed In"
            })
        }
        else {
            res.json({
                success: false,
                message: "Invalid Email or Password",
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while Logging In User",
            err: error,
        })
    }
}

exports.logoutUser = async (req, res) => {
    try {
        res.clearCookie('jwt', { path: '/', domain: 'localhost' });
        return res.status(200).json({
            success: true,
            message: "User Logged Out Successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error while Logging out user"
        })
    }
}