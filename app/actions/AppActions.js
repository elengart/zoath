let AppConstants = require("../constants/AppConstants.js");
let AppDispatcher = require("../Dispatcher/Dispatcher.js");

let AppActions = {
  getAllUsers: function() {
    AppDispatcher.handleViewAction({
      actionType: GET_ALL_USERS
    });
  }
}

module.exports = AppActions;
