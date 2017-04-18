module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.devide = (a, b) => a / b;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    // console.log(names);
    user.firstName = names[0];
    user.lastName = names[1];

    // console.log(`User: ${JSON.stringify(user)}`);
    return user;
};
