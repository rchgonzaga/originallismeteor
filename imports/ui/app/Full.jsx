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
  Dropdown
} from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";

import GuestRoute from "../components/Routes/GuestRoute";
import UserRoute from "../components/Routes/UserRoute";

const Dashboard = () => <h2>Dashboard</h2>;

const Login = () => <h2>Login</h2>;

class Full extends Component {
  state = { visible: false };
  constructor(props) {
    super(props);
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  componentDidMount() {
    this.props.actions.appLoading();
  }

  render() {
    const { appReady } = this.props.appGlobalState;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {appReady === true ? (
          <div style={{ width: "100%", height: "100%" }}>
            <Menu
              inverted
              fluid
              style={{ marginBottom: "0px", borderRadius: "0px" }}
            >
              <Container fluid>
                <Menu.Item as="a" header>
                  <Image
                    size="mini"
                    src="/logo.png"
                    style={{ marginRight: "1.5em" }}
                  />
                  Project Name
                </Menu.Item>
                <Menu.Item as="a">Home</Menu.Item>

                <Dropdown item simple text="Dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className="dropdown icon" />
                      <span className="text">Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Container>
            </Menu>
            <Sidebar.Pushable>
              <Sidebar
                as={Menu}
                vertical
                inverted
                visible={this.state.visible}
                animation={"push"}
              >
                <Menu.Item name="Departments">
                  Departments
                  <Icon name={"home"} />
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher fluid as={Container}>
                <Button onClick={this.toggleVisibility}>
                  Toggle Visibility
                </Button>

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
