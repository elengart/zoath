let AppConstants = require("../constants/AppConstants.js");
let AppDispatcher = require("../dispatcher/AppDispatcher.js");
const {sortOptions} = require("../constants/UserSortOptions.js")

let AppActions = {
  getAllUsers: function() {
    AppDispatcher.handleViewAction({
      actionType: GET_ALL_USERS
    });
  },
  
  sortUsers: function(selectedValue) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SORT_USERS,
      options: Object.assign({}, {type:selectedValue}, sortOptions[selectedValue])
    })
  },

  filterUsers: function(selectedValue) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.FILTER_USERS,
      options: selectedValue
    })
  }
}

module.exports = AppActions;
