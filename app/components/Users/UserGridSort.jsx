let React = require("react");

let UserGridSort = React.createClass({

   renderOptions: function(options) {
     return options.map(function(o, idx) {
       return (
         <option key={idx} label={o.label} value={o.value} />
       );
     });
   },

   render: function(){
      let {onSelectChange, options} = this.props;
      return (
        <div className="user-grid-sort row p-2 bg-zola justify-content-center">
          <div className="form-inline">
            <label className="mr-2">SORT BY</label>
            <select className="form-control" onChange={onSelectChange}>
              {this.renderOptions(options)}
            </select>
          </div>
        </div>
      )}
});

module.exports=UserGridSort;
