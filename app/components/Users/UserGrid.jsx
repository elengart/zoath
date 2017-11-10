let React = require("react");

let userGrid = React.createClass({

  render: function() {

    let userCards = this.props.list.map(function(u, idx){
      return (
        <div className="card col-sm-4 text-center" key={idx}>
          <h2>{u.name}</h2>
          <span>{u.age}</span>
          <span>{u.category}</span>
        </div>
      );
    });

    return (
      <div className="row">
        {userCards}
      </div>
    )
  }
});

module.exports = userGrid;
