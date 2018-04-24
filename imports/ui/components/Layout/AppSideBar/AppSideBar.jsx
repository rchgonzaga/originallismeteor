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
        style={{
          backgroundColor: "#4dbd74",
          paddingRight: "0px",
          paddingLeft: "0px",
          boxShadow: "#000 1px 0px 7px 0px"
        }}
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

const style = { backgroundColor: "#3c965b", padding: "15px" };

export default AppSideBar;
