let AppDispatcher = require("../dispatcher/AppDispatcher.js");
let AppConstants = require("../constants/AppConstants.js");
let EventEmitter = require("events").EventEmitter;

const {
  LOGIN_ACTIONS,
  CHANGE_EVENT
} = AppConstants;

let user;

let store = {
  isAuth: function() {
    return user&&user.authenticated;
  },
  /* flux functions - components can subscribe to listen to store changes */
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  listen: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  unlisten: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
}


let LoginStore = Object.assign({}, EventEmitter.prototype, store);

/* flux: dispatcher broadcasts actions */
AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
      case LOGIN_ACTIONS.AUTHENTICATE_USER:
        user = action.user;
        LoginStore.emitChange();
        break;

      default:
        // do nothing
    }

    return true;
  }
);

module.exports = LoginStore;
