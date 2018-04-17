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
  Form
} from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";

import GuestRoute from "../components/Routes/GuestRoute";
import UserRoute from "../components/Routes/UserRoute";

import Dashboard from "../views/Dashboard/Dashboard";
import TopMenu from "../components/Layout/TopMenu/TopMenu";

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
            <Sidebar.Pushable>
              <Sidebar
                as={Menu}
                vertical
                inverted
                visible={this.props.appGlobalState.appMenuOpened}
                style={{ backgroundColor: "#4b8ecb" }}
                animation={"push"}
              >
                <div style={{ backgroundColor: "#1e5484", padding: "15px" }}>
                  <Header as="h2" icon textAlign="center">
                    <Icon name="users" circular style={{ color: "#FFF" }} />
                    <Header.Content>User Name</Header.Content>
                  </Header>
                </div>
                <Menu.Item name="Departments">
                  Departments
                  <Icon name="home" />
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher fluid as={Container}>
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
          <div>
            <div className="field">
              <label className="label">Label</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
              <p className="help">This is a help text</p>
            </div>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
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
