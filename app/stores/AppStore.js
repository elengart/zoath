let _ = require("lodash");
let AppDispatcher = require("../dispatcher/AppDispatcher.js");
let AppConstants = require("../constants/AppConstants.js");
let EventEmitter = require("events").EventEmitter;
let userApi = require("../api/user.js");

let users = [],
    usersDefault = [];

let userSortSelection = {type:'FEATURED'};

let userFilters = [],
    userSelectedFilter = -1,
    userFilterTitle;

const filterBy = 'category';

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
  Get user data from backend (if not in the store yet),
  */
  getAllUsers: function() {
    if (!usersDefault.length) {
      usersDefault = userApi.getUsers();
      users = usersDefault;
      this.getFilters();
    }
    return {
      userList: users,
      userFilters: userFilters,
      userFilterTitle: userFilterTitle,
      userSortSelection: userSortSelection
    };
  },

  /**
  Sort user list, save current sort selection
  */
  sortUsers: function(options) {
    let {type, field, order} = options;

    userSortSelection = options;
    if (type === 'FEATURED') {
        users = usersDefault;
        return;
    }
    users = _.orderBy(users,[field],[order]);
  },

  /**
    Filter user list, save curren filter selection, keep current sort
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
    if (userSortSelection.type !== 'FEATURED') {
      this.sortUsers(userSortSelection);
    }
    // update state of the radio button group
    userFilters.forEach(function(f) {
      f.checked = (f.value === filterValue);
    })
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

      case AppConstants.FILTER_USERS:
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
