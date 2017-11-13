require('./UserGrid.css');

let React = require("react");

let userGrid = React.createClass({

  render: function() {

    let userCards = this.props.list.map(function(u, idx){
      let block = 'user-grid-card';
      let bem = `${block} ${block}--priority-${u.priority}`;
      let cardClassName=`${bem} card card-inverse text-center p-2 mt-md-4`;
      return (
        <div className="col-md-4" key={idx}>
          <div className={cardClassName}>
            <h2 className={`${block}__name`}>{u.name}</h2>
            <span className={`${block}__age`}>{u.age}</span>
            <span className={`${block}__category`}>{u.category}</span>
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
