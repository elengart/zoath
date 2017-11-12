require('./UserGrid.css');

let React = require("react");

let userGrid = React.createClass({

  render: function() {

    let userCards = this.props.list.map(function(u, idx){
      let bem = `user-grid__card user-grid__card--priority-${u.priority}`;
      let cardClassName=`${bem} card card-inverse text-center p-2 mt-md-4`;
      return (
        <div className="col-md-4" key={idx}>
          <div className={cardClassName}>
            <h2>{u.name}</h2>
            <span>{u.age}</span>
            <span>{u.category}</span>
          </div>
        </div>
      );
    });

    return (
      <div className="user-grid row bg-light pb-3">
        {userCards}
      </div>
    )
  }
});

module.exports = userGrid;
