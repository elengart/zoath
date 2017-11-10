let Dispatcher = require("flux").Dispatcher;

let viewAction = {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
}

module.exports = Object.assign(new Dispatcher(), viewAction);
