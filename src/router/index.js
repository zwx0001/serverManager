import React from "react";
import { Router, Switch, Route } from "dva/router";
import Home from "../page/home";

function RouterView({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default RouterView;
// <Route
//           exact
//           path="/"
//           render={() => {
//             return <Redirect to="/home/business" />;
//           }}
//         />
//         <Route path="/home" component={Home} />
