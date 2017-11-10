let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let Main = require('Main');
let Login = require ('Login');
let Users = require ('Users');

let auth = true;
let RenderComponent = Login;
if (auth) {
  RenderComponent = Users;
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={RenderComponent} />
            <Route path="/login" component={Login} />
            <Route path="/users" component={RenderComponent} />
        </Route>

    </Router>,
    document.getElementById("app")
);
