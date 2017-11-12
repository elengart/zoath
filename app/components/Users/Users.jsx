let React = require("react");
let AppStore = require("../../stores/AppStore.js");
let AppActions = require("../../actions/AppActions.js");

let UserGrid = require("./UserGrid.jsx");
let UserGridSort = require("./UserGridSort.jsx");
let UserGridFilter = require("./UserGridFilter.jsx");

const {sortSelectOptions} = require("../../constants/UserSortOptions.js");

function getUsersFromStore() {
  return AppStore.getAllUsers();
}

let users = React.createClass({

  getInitialState: function() {
    return getUsersFromStore();
  },

  componentDidMount: function() {
    AppStore.listen(this.listChanged);
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
    console.log(this.state);
    return (
      <div className="users">
        <UserGridSort
            onSelectChange={this._handleSort}
            options={sortSelectOptions}
        />
        <div className="row">
          <div className="col-md-2">
            <UserGridFilter
                onFilterChange={this._handleFilter}
                options={this.state.userFilters}
                title={this.state.userFilterTitle}
            />
          </div>
          <div className="col-md-9">
            <UserGrid list = {this.state.userList} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = users;
