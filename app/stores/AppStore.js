let _ = require("lodash");
let AppDispatcher = require("../dispatcher/AppDispatcher.js");
let AppConstants = require("../constants/AppConstants.js");
let EventEmitter = require("events").EventEmitter;
let userApi = require("../api/user.js");

let users = [];
let usersUnsorted = [];

let store = {
  emitChange: function() {
    this.emit(AppConstants.CHANGE_EVENT);
  },
  listen: function(callback){
    this.on(AppConstants.CHANGE_EVENT, callback);
  },
  unlisten: function(callback){
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  },

  getAllUsers: function() {
    if (!users.length) {
      users = userApi.getUsers();
      usersUnsorted = users;
    }
    return users;
  },

  sortUsers: function(options) {
    let {type, field, order} = options;
    if (type === 'FEATURED') {
        users = usersUnsorted;
        return;
    }
    users = _.orderBy(users,[field],[order]);
  }
}


let AppStore = Object.assign({}, EventEmitter.prototype, store);

AppDispatcher.register(function(payload) {
    let action = payload.action;
    switch(action.actionType) {
      case AppConstants.GET_ALL_USERS:
        AppStore.getAllUsers();
        AppStore.emitChange();
        break;

      case AppConstants.SORT_USERS:
        AppStore.sortUsers(action.options);
        AppStore.emitChange();
        break;
      default:
        // do nothing
    }

    return true;
  }
);

module.exports = AppStore;
