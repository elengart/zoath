let React = require("react");
let {Link} = require("react-router");

let main = React.createClass({
  render: function() {
    return (
      <div>
          <header className="navbar navbar-light bg-faded">
            <nav className="nav nav-pills justify-content-center">
              <Link className="nav-link" to="login" activeClassName="active">
                Login
              </Link>
              <Link className="nav-link" to="users" activeClassName="active">
                Users
              </Link>
            </nav>
          </header>
          <div className="container-fluid">
            {this.props.children}
          </div>
      </div>
    );
  }
});

module.exports = main;
