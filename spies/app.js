var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check if email exist
    // console.log("checked for email.exists.....");

    /// save user
    db.saveUser({
        email,
        password
    });
    // do other usefull stuff like sending welcome email
    // console.log('sending welcome email');
}
