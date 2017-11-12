let React = require("react");

let UserGridFilter= React.createClass({

renderRadioButtons: function(options, onFilterChange) {
  return options.map(function(o, idx) {
    return (
      <div className="radio" key={idx}>
        <label>
          {o.label}
          <input className="ml-2"
            type="radio"
            value={o.value}
            checked={o.checked}
            onChange={onFilterChange}
          />
        </label>
      </div>);
  });
},

render: function(){
    let {onFilterChange, options, title} = this.props;
    return (
      <aside className="user-grid-filter">
        <div className="mt-3 mb-2">{title}</div>
        <form>
          {this.renderRadioButtons(options, onFilterChange)}
       </form>
      </aside>
    )}
});

module.exports=UserGridFilter;
