let React = require("react");
let {Link} = require("react-router");

let main = React.createClass({
  render: function() {
    return (
      <div className="main">
          <header className="navbar navbar-light bg-light justify-content-center">
            <nav className="nav">
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
