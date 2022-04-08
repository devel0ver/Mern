const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret =  process.env.SECRET_KEY


class UserController {
    
    findAllUsers = (req, res)=>{
        User.find()
            .then(allUsers=>{
                res.json({results: allUsers})
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }

    register = (req, res) => {
        User.find({email:req.body.email})
            .then(usersEmail=>{
                console.log("response of an email -->", usersEmail)
                if(usersEmail.length === 0){    //this means the email is not yet taken and we can use it
                    User.create(req.body)
                        .then(user => {
                            //when the .then() happens that means that user from the form was created successfully and is stored in that variable "user" which has info about the user that was just put into the db, including the field _id
                            const userTokenJWT = jwt.sign({
                                id: user._id,
                                firstName: user.firstName
                            }, secret);
            
                        //respond with a cookie called "JWT" which contains the JWT from above called userTokenJWT AND also responds with json with info about the user who just got created.
                        res
                            .cookie("usertoken", userTokenJWT, secret, {
                                httpOnly: true
                            })
                            .json({ msg: "success!", user: user });
                    })
                    .catch(err => res.json(err));
                }else{//email is already taken
                    res.json({errors: {email: {message: "Email is taken!"}}})
                }
            })
            .catch(err=>{
                console.log("err -->", err)
            })
    }

    login = async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
        
        if(user === null) {
            // email not found in users collection
            return res.json({error: "User not found!"});
        }
        
        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        
        if(!correctPassword) {
            // password wasn't a match!
            return res.json({error: "Password is incorrect"});
        }
        
        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, secret);
        
        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, secret, {
            httpOnly: true
            })
            .json({ msg: "success!", userType: user.userType});
    }
    
    logout = (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }

    getLoggedInUser = (req, res)=>{
        //use the info stored in the cookie to get the id of the logged in user and query the db to find a user with that id, and return with info about the logged in user.
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true})
        // decodedJWT.payload.id
        User.findOne({ _id: decodedJWT.payload.id })
            .then(foundUser =>{
                res.json({ results: {firstName: foundUser.firstName, lastName: foundUser.lastName, email: foundUser.email, userType: foundUser.userType }})
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
    
    updateOneUser = (req, res)=>{
        User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedUser=>{
                res.json({ results: updatedUser })
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
    
    deleteOneUser = (req, res)=>{
        User.deleteOne({ _id: req.params.id })
            .then(deletedUser=>{
                res.json({ results: deletedUser })
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }

}


module.exports = new UserController();