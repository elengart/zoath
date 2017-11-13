// fake backend authentication
// normally it will be ajax request
let adminUser = {
  email: 'test@zola.com',
  password: 'zola#frontend'
}

module.exports = function (user) {
  user.authenticated = false;

  if (user.email === adminUser.email && user.password === adminUser.password) {
     user.authenticated = true;
  }
  return user;
}
