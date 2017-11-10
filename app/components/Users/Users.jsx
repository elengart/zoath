let React = require("react");
let AppStore = require("../../stores/AppStore.js");
let UserGrid = require("./UserGrid.jsx");

function getUsersFromStore() {
  return {
    users: AppStore.getAllUsers()
  }
}

let users = React.createClass({

  getInitialState: function() {
    return getUsersFromStore();
  },

  render: function() {

    return (
      <UserGrid list = {this.state.users} />
    )
  }
});

module.exports = users;
