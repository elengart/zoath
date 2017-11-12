// fake backend authentication
// normally it will be ajax request
let adminUser = {
  email: '',
  password: ''
}
module.exports = function (user) {
  user.authenticated = false;
  
  if (user.email === adminUser.email && user.password === adminUser.password) {
     user.autheticated = true;
  }
  return user;
}
