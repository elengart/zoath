let React = require("react");

let login = React.createClass({
  handleSubmit: function() {
      this.preventDefault();
  },
  render: function() {
    return (
      <div className="row mt-4 justify-content-center">
        <form className="col-md-6 col-lg-4">
            <div clasName="form-group">
              <label>Email</label>
              <input className="form-control" type="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" required />
            </div>
            <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
});
module.exports=login;
