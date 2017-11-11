let React = require("react");

let login = React.createClass({

  onFormSubmit: function(e) {
      let f = this.refs.loginForm;
      if (f.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      f.classList.add('was-validated');
  },

  // don't show validation messages on change
  onInputChange: function() {
      let f = this.refs.loginForm;
      f.classList.remove('was-validated');
  },

  render: function() {
    return (
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
                required
              />
              <div className="invalid-feedback">
                invalid password (please enter at least 10 characters including at least one non-alphanumeric, for example: !, $, #, or %)
              </div>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports=login;
