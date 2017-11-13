let _ = require("lodash");
let AppDispatcher = require("../dispatcher/AppDispatcher.js");
let AppConstants = require("../constants/AppConstants.js");
let EventEmitter = require("events").EventEmitter;

const {sortSelectOptions} = require("../constants/UserSortOptions.js");

const {
  USER_ACTIONS,
  USER_SERVER_ACTIONS,
  LOGIN_ACTIONS,
  CHANGE_EVENT
} = AppConstants;

let users = [],
    usersDefault = [];

let userSortSelection = {
    selection:'FEATURED'
};

let userFilters = [],
    userSelectedFilter = -1,
    userFilterTitle;

const filterBy = 'category';

let store = {
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

  /**
  Get filters from user list
  */
  getFilters() {
    let cats = _.uniq(_.map(users, function(item){
        return item[filterBy];
    }));

    userFilterTitle = `PICK A ${filterBy.toUpperCase()}`;
    userFilters = [{ label: 'ALL', value: 'all', checked: true}];
    cats.forEach(function(cat){
      userFilters.push({
        value: cat,
        label: cat.toUpperCase()
      })
    });
  },

  /**
    Initilize store and return user grid data
  */
  setupUserStore: function() {
      users = usersDefault;
      this.getFilters();
  },

 /**
  Set State for the user grid
 */
  getAllUsers: function() {
    return {
      userList: users,
      userFilters: userFilters,
      userFilterTitle: userFilterTitle,
      userSortSelectOptions: sortSelectOptions,
      userSortSelection: userSortSelection
    };
  },


  /**
  Sort user list, save current sort selection
  */
  sortUsers: function(options) {
    let {selection, field, order} = options;

    userSortSelection = options;
    if (selection === 'FEATURED') {
        users = usersDefault;
        return;
    }
    users = _.orderBy(users,[field],[order]);
  },

  /**
    Filter user list, save current filter selection, keep current sort
  */
  filterUsers: function(filterValue) {
    userSelectedFilter = filterValue;

    if (filterValue === 'all') {
      users = usersDefault;
    } else {
      users = _.filter(usersDefault, function(user) {
        return user[filterBy] === filterValue;
      });
    }
    // restore sort
    if (userSortSelection.selection !== 'FEATURED') {
      this.sortUsers(userSortSelection);
    }
    // update state of the radio button group
    userFilters.forEach(function(f) {
      f.checked = (f.value === filterValue);
    })
  }
}


let AppStore = Object.assign({}, EventEmitter.prototype, store);

/* flux: dispatcher broadcasts actions */
AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
      case USER_SERVER_ACTIONS.GET_USERS:
        usersDefault = action.users;
        AppStore.setupUserStore();
        AppStore.emitChange();
        break;

      case USER_ACTIONS.SORT_USERS:
        AppStore.sortUsers(action.options);
        AppStore.emitChange();
        break;

      case USER_ACTIONS.FILTER_USERS:
        AppStore.filterUsers(action.options);
        AppStore.emitChange();
        break;

      default:
        // do nothing
    }

    return true;
  }
);

module.exports = AppStore;
