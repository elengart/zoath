let AppConstants = require("../constants/AppConstants.js");
let AppDispatcher = require("../dispatcher/AppDispatcher.js");
let authenticate = require("../api/auth.js");

const {LOGIN_ACTIONS} = AppConstants;

// for demo purposes only
function saveSession(user) {
  if (user.authenticated) {
    localStorage.setItem("session", 123);
  } else {
    localStorage.removeItem("session");
  }
}

// todo: wrap in promises
let loginActions = {

 // todo wrap in promises
  authenticateUser: function(user) {
    let authUser = authenticate(user);
    saveSession(authUser);

    AppDispatcher.handleServerAction({
      actionType: LOGIN_ACTIONS.AUTHENTICATE_USER,
      user: authUser
    });
  },

 // for demo purposes only
  isAuth: function() {
    return localStorage.getItem("session");
  }

}

module.exports = loginActions;
