import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Sidebar, Header, Menu, Icon } from "semantic-ui-react";

class AppSideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Sidebar
        as={Menu}
        vertical
        inverted
        visible={this.props.visible}
        style={{ backgroundColor: "#4b8ecb" }}
        animation={"push"}
      >
        <div style={style}>
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
    );
  }
}

const style = { backgroundColor: "#1e5484", padding: "15px" };

export default AppSideBar;
