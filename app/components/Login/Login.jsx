let React = require("react");
let LoginActions = require("../../actions/LoginActions.js")
let LoginStore = require("../../stores/LoginStore.js")

let login = React.createClass({

  getInitialState: function() {
    return {auth: 'default'};
  },

  componentDidMount: function() {
    LoginStore.listen(this.authChanged);
  },

  componentWillUnmount: function() {
    LoginStore.listen(this.authChanged);
  },

  authChanged: function() {
    if (LoginStore.isAuth()) {
      let f = this.refs.loginForm;
      f.action = "#users";
      f.submit();
    } else {
      console.log('denied');
      this.setState({
        auth: 'denied'
      })
    }
  },

  onFormSubmit: function(e) {
    event.preventDefault();
    event.stopPropagation();

    let f = this.refs.loginForm;
    let valid = f.checkValidity();
    f.classList.add('was-validated');

    //if authenticated the form will be submitted (see authChanged)
    if (valid) {
      LoginActions.authenticateUser({
        email: this.refs.email.value,
        password: this.refs.password.value
      });
    }
    return false;
  },

  // don't show validation messages on change
  onInputChange: function() {
      let f = this.refs.loginForm;
      f.classList.remove('was-validated');
  },


  render: function() {

    let DeniedAlert;

    if (this.state.auth === 'denied') {
      console.log('denied');
      DeniedAlert=(
        <div className="container">
          <div className="alert alert-danger text-center">
            <strong>Access Denied!</strong>
          </div>
         </div>);
    }
    return (
      <div>
        {DeniedAlert}
        <div className="row mt-4 justify-content-center">
          <form ref="loginForm"
            className="col-md-6 col-lg-4"
            onSubmit={this.onFormSubmit}
            noValidate
          >
              <div clasName="form-group mt-1">
                <label>Email</label>
                <input className="form-control"
                type="email"
                placeholder="email address"
                onChange={this.onInputChange}
                ref="email"
                required/>
                <div className="invalid-feedback">
                  invalid email address
                </div>
              </div>
              <div className="form-group mt-2">
                <label>Password</label>
                <input className="form-control"
                  ref="passwordInput"
                  type="password"
                  onChange={this.onInputChange}
                  pattern="(?=.*\W).{10,}"
                  ref="password"
                  placeholder="***"
                  required
                />
                <div className="invalid-feedback">
                  invalid password (please enter at least 10 characters including at least one non-alphanumeric, for example: !, $, #, or %)
                </div>
              </div>
              <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports=login;
