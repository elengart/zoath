let AppConstants = require("../constants/AppConstants.js");
let AppDispatcher = require("../dispatcher/AppDispatcher.js");
let userApi = require("../api/user.js");

const {sortOptions} = require("../constants/UserSortOptions.js");
const {USER_ACTIONS, USER_SERVER_ACTIONS} = AppConstants;

let AppActions = {
  /**
    fake getting user list from backend
  */
  getUsers: function() {
    // todo - this should return promise
    users = userApi.getUsers();
    AppDispatcher.handleServerAction({
      actionType: USER_SERVER_ACTIONS.GET_USERS,
      users: users
    });
  },

  /**
    Currently implmenented as a front-end function in the store
  */
  sortUsers: function(selectedValue) {
    AppDispatcher.handleViewAction({
      actionType: USER_ACTIONS.SORT_USERS,
      options: Object.assign({}, {type:selectedValue}, sortOptions[selectedValue])
    })
  },

  /**
    Currently implmenented as a front-end function in the store
  */
  filterUsers: function(selectedValue) {
    AppDispatcher.handleViewAction({
      actionType: USER_ACTIONS.FILTER_USERS,
      options: selectedValue
    })
  }
}

module.exports = AppActions;
