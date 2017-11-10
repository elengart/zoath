let AppDispatcher = require("../dispatcher/AppDispatcher.js");
let AppConstants = require("../constants/AppConstants.js");
let EventEmitter = require("events").EventEmitter;
let userApi = require("../api/user.js");

let users = [];

let store = {
  emitChange: function() {
    this.emit(AppConstants.CHANGE_EVENT);
  },

  getAllUsers: function() {
    if (!users.length) {
      users = userApi.getUsers();
    }
    return users;
  }
}


let AppStore = Object.assign({}, EventEmitter.prototype, store);
AppDispatcher.register(function(payload) {

    let action = payload.acton;

    switch(action.actionType) {
      case AppConstants.GET_ALL_USERS:
        AppStore.getAllUsers();
        AppStore.emitChange();
        break;
        default:
        // do nothing

    }

    return true;
  }
);

module.exports = AppStore;
