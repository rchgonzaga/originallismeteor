import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Divider,
  Container,
  List,
  Grid,
  Dropdown,
  Form,
  Loader
} from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";

import GuestRoute from "../components/Routes/GuestRoute";
import UserRoute from "../components/Routes/UserRoute";

import TopMenu from "../components/Layout/TopMenu/TopMenu";
import AppSideBar from "../components/Layout/AppSideBar/AppSideBar";

import Dashboard from "../views/Dashboard/Dashboard";
import Projects from "../views/Projects/Projects";

const Login = () => <h2>Login</h2>;

class Full extends Component {
  constructor(props) {
    super(props);
  }

  toggleVisibility = () => {
    this.props.actions.openMenu(!this.props.appGlobalState.appMenuOpened);
  };

  componentDidMount() {
    this.props.actions.appLoading();
  }

  render() {
    const { appReady } = this.props.appGlobalState;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {appReady === true ? (
          <div style={{ width: "100%", height: "100%" }}>
            <Sidebar.Pushable
              style={{ paddingRight: "0px", paddingLeft: "0px" }}
            >
              <AppSideBar
                visible={this.props.appGlobalState.appMenuOpened}
                style={{ paddingRight: "0px", paddingLeft: "0px" }}
              />
              <Sidebar.Pusher
                fluid
                as={Container}
                style={{ paddingRight: "0px", paddingLeft: "0px" }}
              >
                <TopMenu toggleVisibility={this.toggleVisibility} />
                <div style={{ padding: "8px" }}>
                  <Switch>
                    <GuestRoute
                      exact
                      path="/dashboard"
                      name="Dashboard"
                      component={Dashboard}
                    />
                    <GuestRoute
                      exact
                      path="/projects"
                      name="Projects"
                      component={Projects}
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
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        ) : (
          <div style={{ width: "100%", height: "100%", margin: "50% auto" }}>
            <Loader active inline="centered" />
          </div>
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
