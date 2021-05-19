const { admin, db } = require('../utils/admin');
const config = require('../../config');
const firebase = require('firebase');
const { validateLoginData, validateSignUpData } = require('../utils/validators');

firebase.initializeApp(config);

exports.loginUser = (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password
  };

  const { valid, errors } = validateLoginData(user);
  
  if (!valid) {
    return response.status(400).json(errors);
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return response.json({ token });
    })
    .catch(error => {
      console.error(error);

      return response.status(403).json({
        general: 'wrong credentials, please try again'
      });
    })
}