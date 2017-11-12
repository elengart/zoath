let React = require("react");
let AppStore = require("../../stores/AppStore.js");
let AppActions = require("../../actions/AppActions.js");

let UserGrid = require("./UserGrid.jsx");
let UserGridSort = require("./UserGridSort.jsx");
let UserGridFilter = require("./UserGridFilter.jsx");

const {sortSelectOptions} = require("../../constants/UserSortOptions.js");

function getUsersFromStore() {
  return {
    users: AppStore.getAllUsers()
  }
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

  _handleSort: function(selected) {
    AppActions.sortUsers(selected.target.value);
  },

  render: function() {
    return (
      <div>
        <UserGridSort
            onSelectChange={this._handleSort}
            options={sortSelectOptions}
        />
        <div className="row">
          <div className="col-md-2">
            <UserGridFilter
                onSelectChange={this._handleSort}
                options={sortSelectOptions}
            />
          </div>
          <div className="col-md-9">
            <UserGrid list = {this.state.users} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = users;
