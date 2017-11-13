let React = require("react");
let AppStore = require("../../stores/AppStore.js");
let AppActions = require("../../actions/AppActions.js");

let UserGrid = require("./UserGrid.jsx");
let UserGridSort = require("./UserGridSort.jsx");
let UserGridFilter = require("./UserGridFilter.jsx");

function getUsersFromStore() {
  return AppStore.getAllUsers();
}

let users = React.createClass({

  getInitialState: function() {
    return getUsersFromStore();
  },

  componentDidMount: function() {
    AppStore.listen(this.listChanged);
    AppActions.getUsers();
  },

  componentWillUnmount: function() {
    AppStore.unlisten(this.listChanged);
  },

  listChanged: function(userList) {
    this.setState(getUsersFromStore());
  },

  _handleSort: function(e) {
    AppActions.sortUsers(e.target.value);
  },

  _handleFilter: function(e) {
    AppActions.filterUsers(e.target.value);
  },

  render: function() {
    let {userList, userSortSelectOptions, userFilters, userFilterTitle} = this.state;
    return (
      <div className="users">
        <UserGridSort
            onSelectChange={this._handleSort}
            options={userSortSelectOptions}
        />
        <div className="row">
          <div className="col-md-2">
            <UserGridFilter
                onFilterChange={this._handleFilter}
                options={userFilters}
                title={userFilterTitle}
            />
          </div>
          <div className="col-md-9">
            <UserGrid list = {userList} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = users;
