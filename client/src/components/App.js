import React, { Fragment, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Register from "./Register";
import Login from "./Login";
import store from "../store";
import Alert from "./Alert";
//import "../assets/css/app.css";
// Redux
import { Provider } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <BrowserRouter>
              <Fragment>
                <Header />
                <Route exact path='/' component={Landing} />
                <Route exact={true} path='/post' component={Landing} />
                <Alert />
                <Switch>
                  <Route exact path='/register' component={Register} />
                  <Route exact={true} path='/login' component={Login} />
                </Switch>
              </Fragment>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
