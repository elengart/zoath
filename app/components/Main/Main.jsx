let React = require("react");

let main = React.createClass({
  render: function() {
    return (
      <div>
          <nav className="nav nav-pills justify-content-center">
            <a className="nav-link" href="/#/login">Login</a>
            <a className="nav-link" href="/#/users">Users</a>
          </nav>
          <div className="container-fluid">
            {this.props.children}
          </div>
      </div>
    );
  }
});

module.exports = main;
