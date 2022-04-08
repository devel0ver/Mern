const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

    
//use mongoose to create a table (aka collection, aka model). Below are just the instructions for creating a table 
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minlength: [2, "First name must be at least 2 characters long!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
        minlength: [2, "Last name must be at least 2 characters"]
    },
    userType: {
        type: String,
        default: "basic"
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test (val), //tests the value from form with this regular expression pattern to validate if the pattern is in an email format
            message: 'Please enter a valid email'
        }
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minlength: [8, "Password must have at least 8 characters!"]
    }
    },
    {timestamps:true}
)


//create a virtual field called "confirm" that is used just to validate the password matches confirm--> the getter and setter above are just creating temporary fields for _confirm
UserSchema.virtual('confirm')
    .get( () => this._confirm )
    .set( value => this._confirm = value );



//before (pre) running the other validations on the model the user to the db, validate the user objects password matches. If they don't match, this.invalidate() will create a validation error message
UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirm', 'Password must match confirm password');
    }
    next(); //after the above process is done, go to the next usual step
    });


//before (pre)n saving the user to the db, (this means we have passed the validations), hash the users password (encrypt it)
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
})


//register the table instructions above to be use as a table in mongodb
const User = mongoose.model('User', UserSchema);

module.exports = User;