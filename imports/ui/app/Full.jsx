import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";

import GuestRoute from "../components/Routes/GuestRoute";
import UserRoute from "../components/Routes/UserRoute";

const Dashboard = () => <h2>Dashboard</h2>;

const Login = () => <h2>Login</h2>;

class Full extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.appLoading();
  }

  render() {
    const { appReady } = this.props.appGlobalState;
    return (
      <div style={{ borderColor: "blue", borderStyle: "solid", margin: "1px" }}>
        {appReady === true ? (
          <div
            className="app"
            style={{
              borderColor: "orange",
              borderStyle: "solid",
              margin: "1px"
            }}
          >
            <div
              style={{
                borderColor: "red",
                borderStyle: "solid",
                margin: "1px"
              }}
            >
              HEADER
            </div>

            <div
              style={{
                borderColor: "black",
                borderStyle: "solid",
                margin: "1px"
              }}
            >
              BODY
              <div
                style={{
                  borderColor: "purple",
                  borderStyle: "solid",
                  margin: "1px"
                }}
              >
                SIDEBAR
              </div>
              <div
                style={{
                  borderColor: "silver",
                  borderStyle: "solid",
                  margin: "1px"
                }}
              >
                BREADCRUMB
              </div>
              <div
                style={{
                  borderColor: "olive",
                  borderStyle: "solid",
                  margin: "1px"
                }}
              >
                MAIN CONTAINER
                <Switch>
                  <GuestRoute
                    exact
                    path="/dashboard"
                    name="Dashboard"
                    component={Dashboard}
                  />

                  <GuestRoute
                    exact
                    path="/login"
                    name="Login"
                    component={Login}
                  />

                  <Redirect exact from="/" to="/dashboard" />
                </Switch>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { appGlobalState: state.appGlobalState };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Full);
