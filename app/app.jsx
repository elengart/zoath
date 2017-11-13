let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let LoginActions = require('./actions/LoginActions.js')

let Main = require('Main');
let Login = require ('Login');
let Users = require ('Users');

function requireAuth(nextState, replaceState) {
  if (!LoginActions.isAuth()) {
    replaceState({ nextPathname: nextState.location.pathname },
    '/login')
  }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/users" component={Users} onEnter={requireAuth}/>
        </Route>

    </Router>,
    document.getElementById("app")
);
