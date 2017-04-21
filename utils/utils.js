const Mailgun = require('mailgun').Mailgun;

module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 100);
};

module.exports.sendMail = (bodyText, callback) => {
  var mg = new Mailgun('key-9379c4aa11ce3ea8e13a3371b34fa770');
  mg.sendText('PictShare <noreply@androidappfactory.nl>', ['drummer0417@gmail.com'],
    'I: Test mailtje',
    `Dit is een testmeeltje verzonden door mailgun.\nEn dit is de inhoud\n${bodyText}`,
    'noreply@androidappfactory.nl', {}, (err) => {
      if (err) {
        callback(`Oops Error: ${err}`);
      } else {
        callback('Mail sent successful');
      }
    });
}

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

module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
}
